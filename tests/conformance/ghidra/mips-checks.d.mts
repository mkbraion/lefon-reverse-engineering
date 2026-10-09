import type { MipsElfMetadata } from "../../../src/domain/binaryTargetTypes.js";

export interface MipsReadelfFacts {
  mips: MipsElfMetadata;
  symbols: Record<
    | "lefon_mips_entry"
    | "lefon_mips_leaf"
    | "lefon_mips_probe"
    | "lefon_mips_global"
    | "lefon_mips_marker",
    string
  >;
}
export function parseMipsReadelf(
  text: string,
  byteOrder: string,
): MipsReadelfFacts;
export function inspectMipsReadelf(
  path: string,
  byteOrder: string,
): Promise<
  MipsReadelfFacts & { command: string; version: string; raw: string }
>;
export function assertMipsLoadedImage(
  observations: unknown,
  byteOrder: string,
  sha256: string,
): void;
export function assertMipsProbe(
  move: unknown,
  branch: unknown,
  byteOrder: string,
  address: string,
): void;
export function assertMipsGlobal(bytes: string, byteOrder: string): void;
