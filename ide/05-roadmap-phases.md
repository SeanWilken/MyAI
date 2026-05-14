# Roadmap Phases

## Phase 1: Runtime MVP

- Add server job model and persistence.
- Support ephemeral run commands in container.
- Validate `.fsx` execution end-to-end.
- Provide job status + logs API.

## Phase 2: Environment Management

- Add preset and raw environment definitions.
- Add optional user workbench lifecycle (start/stop/reset).
- Add cache volume strategy for common package ecosystems.

## Phase 3: Context Intelligence

- Back context cards with real server context data.
- Add dependency extraction and reverse reference graph.
- Add risk indicators and cross-cutting concern detection.

## Phase 4: Operations Automation

- Add periodic/nightly test jobs.
- Add nightly agent review job generation.
- Add morning briefing and futurelog promotion flows.

## Phase 5: Hosted Scale Readiness

- Add worker scheduling and quotas.
- Add stronger multi-tenant controls and policy enforcement.
- Add cost controls (idle hibernation, pool sizing, concurrency tuning).

## Phase 6: Experience Expansion

- Integrate deeper with suite apps (Core/Studio/Council/KnowLedger).
- Add native-client-friendly backend contracts.
- Add production promotion pipelines from validated runtime outputs.
