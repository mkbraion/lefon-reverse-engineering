import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";
import { PRODUCT_IDENTITY } from "../../src/identity.js";

const translatedReadmes = [
  "LEFONDME_zh.md",
  "LEFONDME_zh-TW.md",
  "LEFONDME_ja.md",
  "LEFONDME_ko.md",
  "LEFONDME_tr.md",
  "LEFONDME_ru.md",
  "LEFONDME_vi.md",
  "LEFONDME_th.md",
  "LEFONDME_de.md",
  "LEFONDME_es.md",
  "LEFONDME_fr.md",
  "LEFONDME_uk.md",
  "LEFONDME_pl.md",
  "LEFONDME_pt-BR.md",
  "LEFONDME_ar.md",
  "LEFONDME_fa.md",
  "LEFONDME_id.md",
] as const;

const jsonExamples = (content: string): unknown[] =>
  [...content.matchAll(/```json\s*([\s\S]*?)```/gu)].map((match): unknown =>
    JSON.parse(match[1] ?? ""),
  );

const shellExamples = (content: string): string[] =>
  [...content.matchAll(/```bash\s*([\s\S]*?)```/gu)].map((match) =>
    (match[1] ?? "").trim(),
  );

describe("onboarding documentation product facts", () => {
  it("keeps the installation MCP example aligned with the package registration command", async () => {
    const content = await readFile(resolve("docs/installation.md"), "utf8");
    expect(jsonExamples(content)).toContainEqual(
      expect.objectContaining({
        mcpServers: expect.objectContaining({
          lefon: expect.objectContaining({
            command: "npx",
            args: ["-y", PRODUCT_IDENTITY.registrationPackageSpecifier, "mcp"],
          }),
        }),
      }),
    );
  });

  it("keeps translated onboarding commands aligned with the English examples", async () => {
    const english = shellExamples(await readFile(resolve("LEFONDME.md"), "utf8"));
    for (const path of translatedReadmes)
      expect(
        shellExamples(await readFile(resolve(path), "utf8")),
        path,
      ).toEqual(english);
  });
});
