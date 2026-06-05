# Council Configuration (POC)

## Purpose

This guide defines the minimum configuration required to run Council against a local Core instance for evaluator testing and early image-based distribution.

## Scope

- frontend runtime configuration for Council
- API forwarding expectations to Core
- session and org context requirements
- POC packaging notes for downloadable image releases

## Required Runtime Environment

Council must be configured to call Core APIs directly (or through a reverse proxy) instead of relying on a dev-server default path.

- `VITE_KAIROS_CORE_API_BASE_URL`: full Core base URL, for example `http://localhost:8000`
- `VITE_KAIROS_TENANT_ID`: optional tenant fallback for pages that need scoped queries
- `VITE_KAIROS_ORG_ID`: optional org fallback until context is switched from authenticated profile

Recommended local POC baseline:

- Core API: `http://localhost:8000`
- Council UI dev server: `http://localhost:5173`
- Council API calls: `http://localhost:8000/v1/...` (not `:5173/api/v1/...` unless explicit proxying is configured)

## API Forwarding Contract

Use one of these two modes:

1. Direct base URL mode (preferred for local POC)
   - Set `VITE_KAIROS_CORE_API_BASE_URL=http://localhost:8000`
   - Council clients call Core directly using that base URL.

2. Frontend proxy mode
   - Keep relative API paths in the app and configure the frontend server/proxy to forward `/api` or `/v1` to `http://localhost:8000`.
   - Document proxy behavior in repo-specific setup docs before release.

If chat requests appear on `:5173` and return `404`, validate base URL and proxy settings first.

## Auth and Context Requirements

Council expects Core auth/context endpoints:

- `POST /v1/auth/login`
- `GET /v1/auth/me`
- `POST /v1/auth/context/switch`
- `POST /v1/auth/refresh`

Operator expectations:

- user must have at least one org option or a valid org claim fallback
- context switch should invalidate and refetch org-scoped data
- expired access tokens should refresh once and then force re-auth on failure

## Channel and Chat Expectations

Current send behavior should be realtime-first:

- primary path: websocket `chat.send` over `/v1/realtime/ws`
- fallback path when WS is unavailable: HTTP endpoints by channel type

- direct/user-only channels: `POST /v1/studio/channels/{channel_id}/messages`
- persona/council channels: `POST /v1/studio/channels/{channel_id}/chat`

For POC validation, verify WS connect + send first, then confirm HTTP fallback only appears when websocket is unavailable.

## POC Image Packaging Notes

For an initial downloadable Core + Council option:

- publish an image/profile that includes Core and Council runtime variables pre-wired
- default Council API base to the co-packaged Core service URL
- include a startup banner or README note with explicit exposed ports
- keep secrets externalized (env file, injected runtime vars, or orchestrator secret store)

Recommended container pattern:

- Council image serves static frontend with nginx.
- nginx proxies `/api` to Core using runtime upstream env (for example `KAIROS_CORE_UPSTREAM=http://kairos-core-api:8000`).
- Council container joins the external Docker network created by Core installation (for example `kairos-stack_default`) and may also attach to a local bridge network (for example `myaide-internal`) for app-local dependencies.

This keeps browser requests same-origin while still allowing install-order flexibility (Core first, frontends later).

## Release Checklist (Configuration)

- confirm Council resolves Core base URL to port `8000` in local/default profile
- verify login, `/auth/me`, and context switch flows
- verify direct and persona chat send endpoints
- verify meetings/tasks/documents pages load with valid org context
- document known caveats in release notes

## Where to Update

- app definition updates: `docs/knowledge-index/apps/council.md`
- cross-repo handoff notes: `docs/knowledge-index/03-core-myaide-handoff-checklist.md`
- usage walkthroughs for testers: `docs/knowledge-index/09-council-usage-poc.md`
