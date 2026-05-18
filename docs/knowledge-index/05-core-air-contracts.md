# Core AIR Contracts (Draft v0.1)

Last updated: 2026-05-16

This draft defines the minimum shared contracts for AIR interoperability across suite apps, starting with MyAIDE.

## Contract Goals

- Enable governed agent/tool interop across apps.
- Preserve Core authority over policy and identity semantics.
- Keep operational runtime implementation app-local where appropriate.
- Provide stable, versioned payloads for auditability and UX.

## 1) Context Snapshot Contract

Endpoint (current Core): `GET /v1/context/identity`

```json
{
  "subject": {
    "user_id": "usr_123",
    "org_id": "org_abc",
    "team_ids": ["team_eng"],
    "role_ids": ["role_dev_lead"]
  },
  "app": {
    "app_id": "myaide",
    "granted": true,
    "capabilities": ["runtime.execute", "diff.propose", "diff.approve"]
  },
  "issued_at": "2026-05-16T18:20:00Z",
  "expires_at": "2026-05-16T18:35:00Z",
  "version": "1.0"
}
```

## 2) Policy Decision Contract

Endpoint (current Core): `POST /v1/policy/decision`

```json
{
  "subject": { "user_id": "usr_123", "org_id": "org_abc", "team_ids": ["team_eng"] },
  "resource": { "type": "workspace.file", "id": "ws_default:/src/App.fs", "labels": ["repo:MyAIDE"] },
  "action": "write",
  "context": {
    "app_id": "myaide",
    "workspace_id": "default",
    "request_id": "req_789",
    "justification": "apply approved diff"
  }
}
```

Response:

```json
{
  "allow": true,
  "reason_code": "POLICY_ALLOW",
  "decision_basis": "app capability grant",
  "obligations": [],
  "expires_at": "2026-05-16T18:25:00Z",
  "version": "1.0"
}
```

## 3) AIR Event Ingest Contract

Endpoint (current Core): `POST /v1/events/ingest`

Query endpoint (current Core): `GET /v1/events`

```json
{
  "events": [
    {
      "event_id": "evt_001",
      "event_type": "tool.executed",
      "timestamp": "2026-05-16T18:21:10Z",
      "org_id": "org_abc",
      "team_ids": ["team_eng"],
      "app_id": "myaide",
      "workspace_id": "default",
      "actor": { "type": "user", "id": "usr_123" },
      "subject": { "type": "tool", "id": "command.run" },
      "correlation_id": "corr_456",
      "payload": { "status": "succeeded", "duration_ms": 912 }
    }
  ],
  "schema_version": "1.0"
}
```

## 4) Approval Contract (Diff + General Requests)

Create request endpoint (draft): `POST /v1/approvals/requests`

```json
{
  "request_type": "code.diff",
  "org_id": "org_abc",
  "app_id": "myaide",
  "workspace_id": "default",
  "proposed_by": { "type": "agent", "id": "agent_frontend_dev" },
  "resource": { "type": "workspace.file", "id": "ws_default:/src/App.fs" },
  "artifacts": [
    { "type": "unified_diff", "uri": "myaide://diffs/diff_123" }
  ],
  "metadata": {
    "risk_level": "medium",
    "summary": "Refactor terminal pane layout"
  }
}
```

Decision endpoint (draft): `POST /v1/approvals/requests/{requestId}/decisions`

```json
{
  "decision": "approved",
  "decided_by": { "type": "user", "id": "usr_admin" },
  "comment": "Safe to apply",
  "timestamp": "2026-05-16T18:24:00Z"
}
```

## 5) Extensibility Fields

Every contract should reserve:

- `schema_version`
- `metadata` object for app-specific additions
- `correlation_id` for traceability
- `source_system` for provenance

## 6) Enum Sets To Freeze Early

### Policy reason codes

- `POLICY_APP_ID_REQUIRED`
- `POLICY_APP_ACCESS_DENIED`
- `POLICY_APP_BASE_ACCESS_REQUIRED`
- `POLICY_CAPABILITY_DENIED`
- `POLICY_ALLOW`

### Context selection reason codes

- `semantic_match`
- `graph_proximity`
- `policy_filtered`
- `budget_trimmed`
- `freshness_preferred`

### AIR event types (minimum)

- `agent.spawned`
- `agent.task.assigned`
- `tool.requested`
- `tool.executed`
- `code.diff.proposed`
- `code.diff.approved`
- `code.diff.rejected`
- `runtime.command.started`
- `runtime.command.completed`
- `policy.decision.evaluated`

## 7) Compatibility Policy (recommended)

- minor versions can add optional fields
- major versions can remove/rename fields with migration notice
- clients should ignore unknown fields and rely on declared `schema_version`
