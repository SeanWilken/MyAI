# Operations and Agent Routines

## Goal

Turn AIDE from a reactive coding surface into an operational assistant that continuously improves project readiness.

## Scheduled Test Routines

- Nightly or periodic test jobs per workspace/project.
- Configurable command sets (`dotnet test`, `bun test`, linters, format checks).
- Captured outcomes: pass/fail, regressions, unstable tests, duration drift.

## Nightly AI Review Routine

- Inputs: changed files, diffs, dependency context, test results.
- Outputs:
  - risk summary
  - architecture notes
  - dependency impact warnings
  - suggested next actions

## Morning Briefing

- Generated before next session start.
- Includes:
  - what changed
  - what failed/passed overnight
  - top risks to address first
  - recommended first 3 tasks

## Futurelog Workflow

- AI suggestions can be tagged as `futurelog`.
- Futurelog items represent sprint-adjacent opportunities and incentives.
- Futurelog should remain visible but separate from current sprint commitments.

## Governance Notes

- Scheduled automation must be opt-in per workspace/org.
- Run records should be auditable and attributable.
- Sensitive repositories can enforce approval before agent-authored task creation.
