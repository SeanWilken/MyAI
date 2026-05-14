# Runtime and Build Server Model

## Objective

Support code execution and validation in containerized environments without forcing a costly always-on container per workspace.

## Environment Types

- Personal Workbench (optional): long-lived user container with broader SDK coverage.
- Ephemeral Job Runner (default): clean container per run/build/test command.
- Pinned Workspace Runtime (opt-in): project-specific long-lived runtime.
- Raw Base Runtime: minimal image with only infrastructure requirements.

## Cost and Scale Strategy

- Default to on-demand ephemeral containers.
- Auto-stop idle long-lived containers.
- Separate source volumes from container lifecycle.
- Reuse dependency cache volumes to reduce cold-start overhead.
- Enforce per-user/per-org quotas and concurrency limits.

## Data and Persistence

- Workspace source mounted at a stable path (`/workspace`).
- Build logs, status, and artifacts persisted in server-managed storage.
- Job history retained for traceability and review.
- Snapshot and restore remains available as recovery fallback.

## Initial Server Capabilities to Add

- Environment provisioning API.
- Job submission API (command, workspace, runtime target).
- Job status and log streaming API.
- Container reset/recreate API.
- Terminal session API (interactive shell attach).

## Example First Use Case

Run an F# script from AIDE:

- Create ephemeral .NET runtime.
- Execute `dotnet fsi <script>.fsx` in `/workspace`.
- Return exit code + stdout/stderr + timings.

This validates the runtime contract and establishes the base for broader build workflows.
