import type { AnalysisOperation } from "./AnalysisProvider.js";
import {
  createAnalysisProfile,
  type AnalysisProfileCommitment,
} from "../domain/analysisProfile.js";

/** Provider identity for deterministic composed analysis workflows. */
export const LEFON_WORKFLOW_PROVIDER = {
  id: "lefon-workflow",
  name: "LEFON composed investigation workflow",
  version: "1",
} as const;

/** Commit a workflow result to its upstream profile and applicable semantic revision. */
export const workflowAnalysisProfile = (
  upstream: AnalysisProfileCommitment,
  operation?: AnalysisOperation,
): AnalysisProfileCommitment =>
  createAnalysisProfile(LEFON_WORKFLOW_PROVIDER, {
    upstream_analysis_profile: upstream,
    ...(operation === "binary_overview" || operation === "batch_decompile"
      ? { workflow_revision: 2 }
      : {}),
  });

/** Provider identity for deterministic artifact inventories. */
export const ARTIFACT_GRAPH_PROVIDER = Object.freeze({
  id: "lefon-artifact-graph",
  name: "LEFON safe artifact graph provider",
  version: "1",
} as const);

/** Provider identity for execution-free managed PE/CLI analysis. */
export const MANAGED_STATIC_PROVIDER = Object.freeze({
  id: "lefon-dotnet-static",
  name: "LEFON managed static analysis provider",
  version: "1",
} as const);

/** Provider identity for portable, execution-free PE resource decoding. */
export const PE_RESOURCES_PROVIDER = Object.freeze({
  id: "lefon-pe-resources",
  name: "LEFON PE resource parser",
  version: "1",
} as const);

/** Provider identity for deterministic managed-code comparison workflows. */
export const MANAGED_WORKFLOW_PROVIDER = {
  id: "lefon-dotnet-workflows",
  name: "LEFON managed-code workflows",
  version: "1",
} as const;

/** Provider identity for deterministic Apple application projections. */
export const APPLE_APPLICATION_PROVIDER = {
  id: "lefon-apple-application",
  name: "LEFON Apple application workflows",
  version: "1",
} as const;

/** Provider identity for deterministic Android application projections. */
export const ANDROID_APPLICATION_PROVIDER = {
  id: "lefon-android-application",
  name: "LEFON Android application workflows",
  version: "1",
} as const;

/** Provider identity for verified publication of retained website scripts. */
export const WEB_SCRIPT_EXPORT_PROVIDER = {
  id: "lefon-web-script-export",
  name: "LEFON captured script export",
  version: "1",
} as const;

/** Provider identity for deterministic static JavaScript application analysis. */
export const JAVASCRIPT_APPLICATION_PROVIDER = {
  id: "lefon-javascript-application",
  name: "LEFON JavaScript application analyzer",
  version: "1",
} as const;

/** Provider identity for static/passive-runtime JavaScript reconciliation. */
export const JAVASCRIPT_RUNTIME_RECONCILIATION_PROVIDER = {
  id: "lefon-javascript-runtime-reconciliation",
  name: "LEFON JavaScript runtime reconciliation",
  version: "1",
} as const;

/** Provider identity for selected views of retained analysis Evidence. */
export const ANALYSIS_VIEW_PROVIDER = {
  id: "lefon-analysis-view",
  name: "LEFON analysis view projection",
  version: "1",
} as const;

/** Provider identity for graph-native feature tracing and version comparison. */
export const JAVASCRIPT_APPLICATION_WORKFLOW_PROVIDER = {
  id: "lefon-javascript-application-workflows",
  name: "LEFON JavaScript application workflows",
  version: "1",
} as const;

/** Provider identity for deterministic cross-artifact comparisons. */
export const ARTIFACT_COMPARISON_PROVIDER = {
  id: "lefon-artifact-comparison",
  name: "LEFON artifact comparison",
  version: "1",
} as const;

/** Provider identity for deterministic cross-function comparisons. */
export const FUNCTION_COMPARISON_PROVIDER = {
  id: "lefon-function-comparison",
  name: "LEFON function comparison",
  version: "1",
} as const;

/** Provider identity for deterministic Evidence bundle comparisons. */
export const BUNDLE_COMPARISON_PROVIDER = {
  id: "lefon-bundle-comparison",
  name: "LEFON Evidence bundle comparison",
  version: "1",
} as const;

/** Provider identity for comparison-Evidence behavior aggregation. */
export const CHANGED_BEHAVIOR_PROVIDER = {
  id: "lefon-changed-behavior",
  name: "LEFON changed behavior investigation",
  version: "1",
} as const;

/** Provider identity for Evidence-backed call-path reconstruction. */
export const CALL_PATH_PROVIDER = {
  id: "lefon-call-path",
  name: "LEFON call path reconstruction",
  version: "1",
} as const;

/** Provider identity for explicit static/runtime hypothesis correlation. */
export const STATIC_RUNTIME_PROVIDER = {
  id: "lefon-static-runtime-correlation",
  name: "LEFON static/runtime correlation",
  version: "1",
} as const;

/** Provider identity for finite reconstruction specification verification. */
export const RECONSTRUCTION_PROVIDER = {
  id: "lefon-reconstruction-verifier",
  name: "LEFON reconstruction verifier",
  version: "1",
} as const;
