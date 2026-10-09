import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { expect, it } from "vitest";

import {
  clientRegistrationEntry,
  effectiveClientServer,
  parseClientConfiguration,
  serializeClientConfiguration,
} from "../../../src/application/ClientConfigurationDocument.js";
import {
  clientConfigurationAligned,
  configureClientConfiguration,
  inspectClientConfiguration,
} from "../../../src/application/SetupClientConfiguration.js";
import { createTestTempDirectory } from "../../fixtures/temporaryDirectory.js";
import { readClientRegistrationStatuses } from "../../../src/application/ClientRegistrationStatus.js";

it.each([
  ["cursor", "json", "mcpServers", "env"],
  ["codex", "toml", "mcp_servers", "env"],
  ["opencode", "opencode", "mcp", "environment"],
  ["hermes", "hermes", "mcp_servers", "env"],
] as const)(
  "preserves %s server environment through command and provider updates",
  async (name, format, serversKey, environmentKey) => {
    const root = await createTestTempDirectory("lefon-setup-environment-");
    const configPath = join(root, "config");
    const client = { name, format, configPath };
    const custom = {
      LEFON_MCP_INPUT_SCHEMA_PROFILE: "compact",
      LEFON_MCP_MAX_RESPONSE_BYTES: "33554432",
      LEFON_BROWSER_EXECUTABLE: join(root, "custom-browser"),
      GHIDRA_INSTALL_DIR: join(root, "old-ghidra"),
    };
    const original = serializeClientConfiguration(
      {
        [serversKey]: {
          lefon: clientRegistrationEntry(format, ["lefon-old", "mcp"], custom),
          other: clientRegistrationEntry(format, ["other"], { OTHER: "keep" }),
        },
      },
      format,
    );
    await writeFile(configPath, original);
    const providers = { GHIDRA_INSTALL_DIR: join(root, "new-ghidra") };
    const command = ["lefon", "mcp"];
    expect(
      await inspectClientConfiguration(client, providers, command),
    ).toMatchObject({ status: "update" });
    expect(
      await configureClientConfiguration(client, providers, command),
    ).toMatchObject({ status: "configured" });
    const configured = await readFile(configPath, "utf8");
    const parsed = parseClientConfiguration(configured, format);
    expect(effectiveClientServer(parsed, "lefon")).toMatchObject({
      [environmentKey]: { ...custom, ...providers },
    });
    expect(effectiveClientServer(parsed, "other")).toEqual(
      effectiveClientServer(
        parseClientConfiguration(original, format),
        "other",
      ),
    );
    expect(await readFile(`${configPath}.lefon.backup`, "utf8")).toBe(original);
    expect(await clientConfigurationAligned(client, providers, command)).toBe(
      true,
    );
    expect(
      await inspectClientConfiguration(client, providers, command),
    ).toEqual({ status: "already_current" });
    expect(
      await configureClientConfiguration(client, providers, command),
    ).toEqual({ status: "unchanged" });
    expect(await readFile(configPath, "utf8")).toBe(configured);
  },
);

it("retains legacy OpenCode environment when migrating into a native server table", async () => {
  const root = await createTestTempDirectory("lefon-opencode-environment-");
  const configPath = join(root, "opencode.json");
  const client = { name: "opencode", format: "opencode", configPath } as const;
  const custom = { LEFON_MCP_INPUT_SCHEMA_PROFILE: "compact" };
  await writeFile(
    configPath,
    JSON.stringify({
      mcp: {
        lefon: clientRegistrationEntry("opencode", ["old", "mcp"], custom),
        servers: {
          other: clientRegistrationEntry("opencode_v2", ["other"], {}),
        },
      },
    }),
  );
  expect(
    await configureClientConfiguration(client, {}, ["lefon", "mcp"]),
  ).toMatchObject({ status: "configured" });
  const parsed = parseClientConfiguration(
    await readFile(configPath, "utf8"),
    "opencode",
  );
  expect(parsed.legacyServers).toEqual({});
  expect(parsed.servers.lefon).toEqual(
    clientRegistrationEntry("opencode_v2", ["lefon", "mcp"], custom),
  );
  expect(
    await configureClientConfiguration(client, {}, ["lefon", "mcp"]),
  ).toEqual({ status: "unchanged" });
});

it.each([
  [
    "non-string member",
    { LEFON_MCP_INPUT_SCHEMA_PROFILE: "compact", PORT: 8080 },
    "env.PORT",
  ],
  [
    "boolean member",
    { LEFON_MCP_INPUT_SCHEMA_PROFILE: "compact", FLAG: true },
    "env.FLAG",
  ],
  [
    "null member",
    { LEFON_MCP_INPUT_SCHEMA_PROFILE: "compact", VALUE: null },
    "env.VALUE",
  ],
  ["array", [], "env"],
  ["string", "not-a-map", "env"],
  ["null map", null, "env"],
  [
    "empty profile",
    { LEFON_MCP_INPUT_SCHEMA_PROFILE: "" },
    "LEFON_MCP_INPUT_SCHEMA_PROFILE",
  ],
  [
    "invalid profile",
    { LEFON_MCP_INPUT_SCHEMA_PROFILE: "bogus" },
    "LEFON_MCP_INPUT_SCHEMA_PROFILE",
  ],
  [
    "invalid response budget",
    { LEFON_MCP_MAX_RESPONSE_BYTES: "1" },
    "LEFON_MCP_MAX_RESPONSE_BYTES",
  ],
] as const)(
  "refuses %s before changing the configuration",
  async (_name, env, setting) => {
    const home = await createTestTempDirectory("lefon-invalid-environment-");
    const directory = join(home, ".cursor");
    const configPath = join(directory, "mcp.json");
    await mkdir(directory);
    const original = JSON.stringify({
      mcpServers: { lefon: { command: "lefon", args: ["mcp"], env } },
    });
    await writeFile(configPath, original);
    const client = { name: "cursor", format: "json", configPath } as const;
    expect(
      await inspectClientConfiguration(client, {}, ["lefon", "mcp"]),
    ).toMatchObject({
      status: "invalid",
      remediation: expect.stringContaining(setting),
    });
    expect(
      await configureClientConfiguration(client, {}, ["lefon", "mcp"]),
    ).toEqual({ status: "failed", reason: "readback" });
    expect(await clientConfigurationAligned(client, {}, ["lefon", "mcp"])).toBe(
      false,
    );
    const statuses = await readClientRegistrationStatuses(home, "lefon", {
      environment: {},
    });
    expect(statuses.find(({ client }) => client === "cursor")).toMatchObject({
      state: "invalid",
      remediation: expect.stringContaining(setting),
    });
    expect(await readFile(configPath, "utf8")).toBe(original);
    await expect(access(`${configPath}.lefon.backup`)).rejects.toMatchObject({
      code: "ENOENT",
    });
  },
);
