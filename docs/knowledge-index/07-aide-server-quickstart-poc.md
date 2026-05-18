# AIDE Server Quickstart (POC)

Last updated: 2026-05-17

## Purpose

This guide helps evaluators run the current MyAIDE POC on a local machine.

Important framing:

- MyAIDE server is the primary runtime for IDE, workspace, terminal/build, and source operations.
- Core is a companion governance/AI server used for policy/context/contracts when available.
- Core integration is optional for local bring-up, but recommended for governed AIR flows.

## Deployment Modes

## Mode A: AIDE-only (fastest local boot)

- Run MyAIDE API + Web only.
- Use local/degraded behavior for policy/gov checks.
- Best for first install and UI/runtime exploration.

## Mode B: AIDE + Core companion (recommended for AIR/governance)

- Run MyAIDE API + Web.
- Run Core alongside it.
- Enable policy/context/event delegation to Core for governed behavior.

## Prerequisites

- Git
- Docker Desktop (recommended)
- Bun/Node for frontend dev workflows
- .NET SDK for local builds

## Minimal Environment (AIDE)

- `AIDE_WORKSPACES_ROOT`
- `AIDE_STATE_ROOT`
- `MYAIDE_RUNTIME_EXECUTOR=host|container`
- `MYAIDE_RUNTIME_DOTNET_IMAGE` (for container executor)

## Optional Core Companion Environment

- `CORE_BASE_URL`
- `CORE_API_KEY` (if Core is key-protected)
- `MYAIDE_CORE_POLICY_MODE=degraded|strict`

Guidance:

- Start with `degraded` while wiring local infrastructure.
- Move to `strict` once Core availability is stable.

## Bring-up Steps

1. Start MyAIDE API and Web.
2. Verify workspace load, file operations, and terminal/build execution.
3. (Optional) Start Core and set `CORE_BASE_URL`.
4. Verify policy-gated actions and event ingest delegation.

## Quick Smoke Test

1. Execute one runtime command in Terminal.
2. Save or move a file in workspace.
3. Create and restore a snapshot.
4. If Core is connected, verify policy reasons and event visibility.

## Current Caveats

- some contract surfaces are still converging across products
- policy-deny UX and admin diagnostics continue to improve
- AIR approval lifecycle is partially implemented and expanding
- realtime streams are improving across suite apps as WS contracts stabilize

## Small Roadmap (POC)

### 0-30 days

- complete policy gating coverage for all sensitive AIDE operations
- expand AIR activity stream and reason-code visibility
- improve one-command bootstrap scripts/documentation

### 30-60 days

- complete initial diff approval workflow integration
- strengthen cross-app event/correlation diagnostics
- publish app-level compatibility matrix for evaluators

### 60-90 days

- expand AIR multi-agent orchestration baselines
- increase contract/integration test depth
- harden cloud deployment playbooks and operator runbooks
