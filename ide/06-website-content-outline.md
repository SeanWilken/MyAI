# Website Content Outline

## Purpose

Translate the MyAI IDE strategy docs into a clear website structure for product storytelling, feature communication, and roadmap transparency.

## Primary Audience Paths

- Individual builders evaluating local-first productivity.
- Engineering teams evaluating hosted collaboration and governance.
- Technical leaders evaluating platform fit, cost model, and scale strategy.

## Site Structure

## 1) Landing Page (MyAI AIDE)

### Goal

Explain what AIDE is, why it matters, and how it fits into the MyAI suite.

### Sections

- Hero: AI-native developer environment.
- One-line value proposition and core outcomes.
- Key capabilities snapshot (Context, Build Runtime, Graph, AI Workflows).
- Deployment modes (local, hosted, future native clients).
- CTA blocks (Try locally, Request hosted access, View architecture).

### Sources

- `01-vision-and-positioning.md`
- `02-feature-goals.md`

## 2) Features Page

### Goal

Describe capabilities in practical terms with examples.

### Sections

- Workspace and editor experience.
- Context and Knowledge panel model.
- Graph and dependency awareness.
- AI Suggestions and Futurelog workflow.
- Review and approval flow primitives.

### Sources

- `02-feature-goals.md`
- `04-operations-and-agent-routines.md`

## 3) Runtime and Build Server Page

### Goal

Explain container strategy, reproducibility, and cost-conscious scaling.

### Sections

- Environment types: workbench, ephemeral jobs, pinned runtimes, raw base.
- Preset images and custom golden image workflow.
- Reset/recovery model.
- Local vs hosted behavior.
- Cost controls and quotas.

### Sources

- `03-runtime-and-build-server.md`

## 4) Automation and Operations Page

### Goal

Show how AIDE supports continuous engineering readiness.

### Sections

- Periodic test execution.
- Nightly AI code reviews.
- Morning briefing generation.
- Futurelog capture and sprint-adjacent planning.
- Governance and auditability.

### Sources

- `04-operations-and-agent-routines.md`

## 5) Roadmap Page

### Goal

Provide transparent phased evolution from MVP to scale.

### Sections

- Phase 1: Runtime MVP (`.fsx` execution).
- Phase 2: Environment management.
- Phase 3: Context intelligence.
- Phase 4: Operations automation.
- Phase 5: Hosted scale readiness.
- Phase 6: Experience expansion.

### Sources

- `05-roadmap-phases.md`

## 6) Suite Integration Page

### Goal

Place AIDE inside the broader MyAI platform story.

### Sections

- Shared Core and Studio responsibilities.
- Cross-app artifact flow.
- How AIDE interacts with Council and KnowLedger.
- Why modular apps over monolithic AI tooling.

### Sources

- `../docs/knowledge-index/01-platform-overview.md`
- `../docs/knowledge-index/02-product-map.md`
- `../docs/knowledge-index/apps/aide.md`

## Reusable Content Blocks

- Glossary block: context scope, futurelog, workbench, ephemeral job.
- Architecture diagram block: control plane, runtime plane, storage plane.
- Cost model block: on-demand vs always-on tradeoffs.
- Security block: secrets handling, non-root exec, audit logs.
- Recovery block: snapshots, reset container, reclone strategy.

## Visual / Interaction Notes

- Mirror the in-product panel language for consistency:
  - Active Context
  - Current Context Scope
  - Architecture Pattern
  - Critical Dependencies
  - Cross-Cutting Concerns
  - AI Suggestion
- Use scenario cards to show real workflows (auth service change, dependency impact review, nightly briefing handoff).

## Implementation Mapping

- Keep this outline as the source for page sections and CMS/component schema.
- Tie each page section to strategy doc references to avoid drift.
- Update this file when roadmap phases or feature priorities change.
