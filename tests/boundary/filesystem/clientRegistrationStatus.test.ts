import { mkdir, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { createTestTempDirectory } from "../../fixtures/temporaryDirectory.js";
import { clearClientLocationEnvironment } from "../../fixtures/clientEnvironment.js";

import { readClientRegistrationStatuses } from "../../../src/application/ClientRegistrationStatus.js";
import { PRODUCT_IDENTITY } from "../../../src/identity.js";

beforeEach(clearClientLocationEnvironment);
afterEach(() => {
  vi.unstubAllEnvs();
});

describe("client registration status", () => {
  it("discovers Claude Code from its config file without a marker directory", async () => {
    const home = await createTestTempDirectory("lefon-claude-config-only-");
    await writeFile(
      join(home, ".claude.json"),
      JSON.stringify({
        mcpServers: {
          lefon: {
            command: "npx",
            args: ["-y", PRODUCT_IDENTITY.registrationPackageSpecifier, "mcp"],
          },
        },
      }),
    );

    const statuses = await readClientRegistrationStatuses(home, "/current/lefon");

    expect(statuses).toEqual([
      expect.objectContaining({
        client: "claude_code",
        config_path: join(home, ".claude.json"),
        state: "aligned",
        remediation: null,
      }),
    ]);
  });

  it("distinguishes aligned, stale, missing, and invalid registrations", async () => {
    const home = await createTestTempDirectory("lefon-registrations-");
    await Promise.all([
      mkdir(join(home, ".codex")),
      mkdir(join(home, ".cursor")),
      mkdir(join(home, ".gemini")),
      mkdir(join(home, ".claude")),
    ]);
    await writeFile(
      join(home, ".codex/config.toml"),
      `[mcp_servers.lefon]\ncommand = "npx"\nargs = ["-y", "${PRODUCT_IDENTITY.registrationPackageSpecifier}", "mcp"]\nstartup_timeout_sec = 30\n`,
    );
    await writeFile(
      join(home, ".cursor/mcp.json"),
      JSON.stringify({
        mcpServers: {
          lefon: { command: "/old/lefon", args: ["mcp"], env: { SECRET: "x" } },
        },
      }),
    );
    await writeFile(join(home, ".gemini/settings.json"), "not-json");

    const statuses = await readClientRegistrationStatuses(home, "/current/lefon");
    expect(statuses).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          client: "codex",
          state: "aligned",
          remediation: null,
        }),
        expect.objectContaining({
          client: "cursor",
          state: "stale",
          command: ["/old/lefon", "mcp"],
          remediation: expect.any(String),
        }),
        expect.objectContaining({
          client: "gemini_cli",
          state: "invalid",
          command: [],
          remediation: expect.any(String),
        }),
        expect.objectContaining({
          client: "claude_code",
          state: "missing",
          command: [],
          remediation: expect.any(String),
        }),
      ]),
    );
    expect(JSON.stringify(statuses)).not.toContain("SECRET");
  });

  it.each([null, [], "invalid"])(
    "reports a malformed server table %j as invalid",
    async (servers) => {
      const home = await createTestTempDirectory("lefon-registration-shape-");
      await mkdir(join(home, ".cursor"));
      await writeFile(
        join(home, ".cursor/mcp.json"),
        JSON.stringify({ mcpServers: servers }),
      );
      expect(await readClientRegistrationStatuses(home)).toEqual([
        expect.objectContaining({
          client: "cursor",
          state: "invalid",
          command: [],
        }),
      ]);
    },
  );

  it("reports an unversioned npx registration as stale", async () => {
    const home = await createTestTempDirectory("lefon-registrations-");
    await mkdir(join(home, ".codex"));
    await writeFile(
      join(home, ".codex/config.toml"),
      '[mcp_servers.lefon]\ncommand = "npx"\nargs = ["-y", "lefon-reverse-engineering", "mcp"]\n',
    );

    const statuses = await readClientRegistrationStatuses(home);

    expect(statuses).toEqual([
      expect.objectContaining({
        client: "codex",
        command: ["npx", "-y", "lefon-reverse-engineering", "mcp"],
        state: "stale",
      }),
    ]);
  });
});

describe("commandcode registration status", () => {
  const writeCommandcodeRegistration = async (
    home: string,
    registration: Record<string, unknown>,
  ): Promise<void> => {
    await mkdir(join(home, ".commandcode"));
    await writeFile(
      join(home, ".commandcode/mcp.json"),
      JSON.stringify({ mcpServers: { lefon: registration } }),
    );
  };

  const ownedArgs = (): readonly string[] => [
    "-y",
    PRODUCT_IDENTITY.registrationPackageSpecifier,
    "mcp",
  ];

  it.each([undefined, "sse"])(
    "reports transport %j as invalid",
    async (transport) => {
      const home = await createTestTempDirectory("lefon-commandcode-transport-");
      await writeCommandcodeRegistration(home, {
        ...(transport === undefined ? {} : { transport }),
        command: "npx",
        args: [...ownedArgs()],
      });

      expect(await readClientRegistrationStatuses(home)).toEqual([
        expect.objectContaining({
          client: "commandcode",
          state: "invalid",
          command: [],
        }),
      ]);
    },
  );

  it("reports a disabled registration as stale", async () => {
    const home = await createTestTempDirectory("lefon-commandcode-disabled-");
    await writeCommandcodeRegistration(home, {
      transport: "stdio",
      enabled: false,
      command: "npx",
      args: [...ownedArgs()],
    });

    expect(await readClientRegistrationStatuses(home)).toEqual([
      expect.objectContaining({
        client: "commandcode",
        state: "stale",
      }),
    ]);
  });
});

describe("Node-wrapped registration policy", () => {
  it.each([1, 30])(
    "checks Codex startup timeout %d independently of launcher",
    async (timeout) => {
      const home = await createTestTempDirectory("lefon-node-registration-");
      await mkdir(join(home, ".codex"));
      const entry = resolve("scripts/lefon.mjs");
      await writeFile(
        join(home, ".codex/config.toml"),
        `[mcp_servers.lefon]\ncommand = ${JSON.stringify(process.execPath)}\nargs = [${JSON.stringify(entry)}, "mcp"]\nstartup_timeout_sec = ${String(timeout)}\n`,
      );
      const statuses = await readClientRegistrationStatuses(home, entry, {
        environment: {},
      });
      expect(statuses).toEqual([
        expect.objectContaining({
          client: "codex",
          state: timeout === 30 ? "aligned" : "stale",
        }),
      ]);
    },
  );

  it.each([1, 30])(
    "checks Grok Build startup timeout %d independently of launcher",
    async (timeout) => {
      const home = await createTestTempDirectory("lefon-grok-registration-");
      await mkdir(join(home, ".grok"));
      const entry = resolve("scripts/lefon.mjs");
      await writeFile(
        join(home, ".grok/config.toml"),
        `[mcp_servers.lefon]\ncommand = ${JSON.stringify(process.execPath)}\nargs = [${JSON.stringify(entry)}, "mcp"]\nstartup_timeout_sec = ${String(timeout)}\n`,
      );
      const statuses = await readClientRegistrationStatuses(home, entry, {
        environment: {},
      });
      expect(statuses).toEqual([
        expect.objectContaining({
          client: "grok_build",
          state: timeout === 30 ? "aligned" : "stale",
        }),
      ]);
    },
  );

  it("reports Grok Build stale when lefon is listed in disabled_mcp_servers", async () => {
    const home = await createTestTempDirectory("lefon-grok-disabled-status-");
    await mkdir(join(home, ".grok"));
    const entry = resolve("scripts/lefon.mjs");
    await writeFile(
      join(home, ".grok/config.toml"),
      `disabled_mcp_servers = ["lefon"]\n[mcp_servers.lefon]\ncommand = ${JSON.stringify(process.execPath)}\nargs = [${JSON.stringify(entry)}, "mcp"]\nstartup_timeout_sec = 30\n`,
    );
    expect(
      await readClientRegistrationStatuses(home, entry, { environment: {} }),
    ).toEqual([
      expect.objectContaining({ client: "grok_build", state: "stale" }),
    ]);
  });

  it("checks a direct-launcher Codex startup timeout without Node wrapping", async () => {
    const home = await createTestTempDirectory("lefon-direct-registration-");
    await mkdir(join(home, ".codex"));
    await writeFile(
      join(home, ".codex/config.toml"),
      '[mcp_servers.lefon]\ncommand = "/current/lefon"\nargs = ["mcp"]\nstartup_timeout_sec = 1\n',
    );
    const statuses = await readClientRegistrationStatuses(
      home,
      "/current/lefon",
      {
        environment: {},
      },
    );
    expect(statuses).toEqual([
      expect.objectContaining({ client: "codex", state: "stale" }),
    ]);
  });

  it.each([{ tools: ["binary_session"] }, { tools: ["*"] }])(
    "checks Copilot tool selection $tools independently of launcher",
    async ({ tools }) => {
      const home = await createTestTempDirectory("lefon-node-copilot-");
      await mkdir(join(home, ".copilot"));
      const entry = resolve("scripts/lefon.mjs");
      await writeFile(
        join(home, ".copilot/mcp-config.json"),
        JSON.stringify({
          mcpServers: {
            lefon: {
              type: "stdio",
              command: process.execPath,
              args: [entry, "mcp"],
              tools,
            },
          },
        }),
      );
      const statuses = await readClientRegistrationStatuses(home, entry, {
        environment: {},
      });
      expect(statuses).toEqual([
        expect.objectContaining({
          client: "copilot_cli",
          state: tools.includes("*") ? "aligned" : "stale",
        }),
      ]);
    },
  );
});
