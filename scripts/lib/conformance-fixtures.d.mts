export const LARGE_FIXTURE_COUNT: number;
export const HOPPER_C_ORACLE: Readonly<{
  mainProcedure: "main";
  entryProcedure: "lefon_entry";
  branchProcedure: "lefon_branch";
  leafProcedure: "lefon_leaf";
  entryString: "LEFON_C_ENTRY";
  leafString: "LEFON_C_LEAF";
  globalName: "lefon_c_global";
}>;
export function sha256(value: string | Uint8Array): string;
export function generateLargeFixture(): string;
export function sourceDigest(
  sources: readonly { readonly path: string; readonly content: string }[],
): string;
