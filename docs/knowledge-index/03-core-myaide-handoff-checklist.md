# Core <-> MyAIDE Handoff Checklist

Last updated: 2026-05-13

This checklist tracks cross-repo responsibilities for the federated knowledge contract rollout.

## Core Responsibilities (kairos-core)

- [x] Add canonical tables for federated entities/relationships (`knowledge_entities`, `knowledge_relationships`).
- [x] Add migration script `0024_federated_knowledge_contract.sql` and include it in migration runner.
- [x] Add canonical endpoints:
  - `POST /v1/knowledge/entities/upsert`
  - `POST /v1/knowledge/relationships/upsert`
  - `POST /v1/graph/ingest-delta`
  - `POST /v1/context/resolve`
  - `POST /v1/context/explain`
- [x] Enforce required ingest fields for trust/temporal/source metadata.
- [x] Enforce non-debug explain minimum fields with bounded `primary_path`.
- [x] Run migration runner to apply current scripts up through `0024`.
- [ ] Add contract tests for enum validation and required field rejection paths.
- [ ] Add traversal tests for edge-aware ACL pruning and deny precedence.
- [ ] Add latency/SLO instrumentation split for resolve vs explain.

## MyAIDE Responsibilities (MyAIDE)

- [ ] Implement adapter publish flow from local SQLite/workspace metadata to Core upsert endpoints.
- [ ] Emit pointer-style `content_refs` (repo path/artifact refs/snippets) instead of full blobs by default.
- [ ] Include required trust/temporal/source fields in adapter payloads.
- [ ] Add dual-read mode behind feature flag (`local` + `core resolver`).
- [ ] Add context inspector non-debug view (reason code, score, path).
- [ ] Add debug inspector mode (full explain endpoint with exclusions/policy details).

## Shared Responsibilities

- [ ] Freeze enum sets:
  - `selection_reason_code`
  - `exclusion_reason_code`
- [ ] Freeze vocabulary extension namespace rules.
- [ ] Define and publish baseline SLO targets for resolve/explain.
- [ ] Create shared golden fixtures for ACL/conflict/staleness/budget tests.

## Notes

- This file is intentionally human-readable and mirrors the knowledge handoff model we are implementing in Core.
- Use it as the current cross-repo coordination artifact until the knowledge resolver/inspector flow is the default.
