# POC Release Notes and Deployment Recommendations

## Goal

Capture immediate recommendations for a first public POC release of the Core + Studio + Council slice, plus a practical container strategy that works with Core-first installs.

## POC Priorities

### Must-Haves

- reliable auth/session recovery with clear sign-in recovery UX
- consistent empty/error states across key pages
- lightweight platform health/status visibility
- deny-by-default access posture with explicit org context
- basic recent activity/audit visibility for trust

### Low-Hanging, High-Impact Enhancements

- first-run checklist for "login -> org -> room -> chat -> document"
- admin demo/seeding action for sample room/persona/doc setup
- copyable diagnostics panel (tenant/org/request IDs/errors)
- realtime connection and subscription status badge
- success/failure toasts on key operations

### UX and Trust Improvements

- inline validation and guardrails on create/config forms
- quick cross-links between threads, rooms, personas, and documents
- explicit document processing status and timestamps
- unsaved-change warning before org context switches
- visible app version/commit indicator in UI

## Initial POC Release Cut (Suggested)

1. First-run checklist + status panel
2. Error and empty-state polish on top pages
3. Realtime connection/subscription indicators
4. Knowledge upload/status UX refinement
5. Lightweight recent activity panel
6. Public caveats + roadmap page linked in-app

## Container and Deployment Discussion

## Desired Outcome

- Core install can optionally pull and run Studio/Council containers.
- Apps can also be installed later (post-Core install), similar to current MyAIDE behavior.
- Networking remains predictable for both same-host and multi-host setups.

## Recommended Packaging Pattern

### 1) Publish app images independently

- publish `kairos-studio` and `kairos-council` images to your registry
- version tags: `vX.Y.Z` and immutable sha tags
- include OCI labels for commit/version/build timestamp

Example tags:

- `ghcr.io/<org>/kairos-studio:v0.1.0`
- `ghcr.io/<org>/kairos-council:v0.1.0`
- `ghcr.io/<org>/kairos-studio:sha-<commit>`

### 2) Core-first install supports optional app enablement

In Core install flow, add optional app choices:

- enable Studio now
- enable Council now
- skip and install later

If enabled, installer writes app services into compose stack (or includes app override file).

### 3) Post-install app attachment script (like MyAIDE model)

Provide a separate script/compose entrypoint for late install:

- create/attach external shared network if needed
- pull selected app image
- run app service with required env vars

This matches your current MyAIDE pattern and keeps Core base install minimal.

## Network Topology Recommendation

Use one shared external network across Core and optional apps.

- network name example: `kairos_shared`
- Core exposes API service alias on that network (example: `core-api`)
- apps target `http://core-api:8000` internally

Benefits:

- same URL strategy for compose-based local clusters
- apps can be started/stopped independently
- avoids brittle host/port coupling between stacks

## Runtime Configuration Contract for App Containers

Minimum env vars for Studio/Council images:

- `VITE_KAIROS_CORE_API_BASE_URL` (example: `http://core-api:8000`)
- `VITE_KAIROS_TENANT_ID`
- `VITE_KAIROS_ORG_ID` (default/fallback)

Optional:

- explicit websocket URL override if needed by environment
- frontend public URL and reverse proxy headers if behind ingress

## Compose Layout Recommendation

Use layered compose files:

- `compose.core.yml` (Core + data services)
- `compose.apps.yml` (Studio/Council optional services)
- `compose.aide.yml` (existing MyAIDE optional service)

Install patterns:

- base only: `compose.core.yml`
- base + selected apps: `compose.core.yml + compose.apps.yml`
- add later: run app-specific script that references shared external network

## Operational Caveats for POC

- auth/session defaults are POC-oriented and should be hardened later
- API contracts may shift while governance/realtime surfaces stabilize
- observability is still lightweight and should be expanded before production

## Near-Term Deployment Roadmap

### Phase 1

- publish Studio and Council images
- add optional app selection to Core installer
- add post-install attach script for each app

### Phase 2

- add health checks and startup dependency checks between app and Core
- add version compatibility matrix (Core vs app versions)
- add basic rollback docs for app image versions

### Phase 3

- formalize production ingress/TLS guidance
- add centralized logs/metrics/traces
- publish stable deployment guide for external users

## Decision Points to Finalize

- container registry target and image naming standard
- whether app services are bundled by default or opt-in only
- single installer UX for all apps vs modular per-app scripts
- compatibility policy (strict version pinning vs supported ranges)
