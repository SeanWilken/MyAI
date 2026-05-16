# AIR Runtime Alignment (Core + MyAIDE)

Last updated: 2026-05-16

## Summary

AIR (Agent Interop Runtime) is the execution and orchestration model for governed collaboration among agents, humans, and tools.

In the MyAI suite, AIR is implemented primarily in MyAIDE as the operational runtime layer, while Core remains the canonical governance and shared contract authority.

## Strategic Framing

AIR should be positioned as:

- a governed intelligence runtime for software systems
- an interop-first model, not autonomous unchecked mutation
- an observable execution fabric with human arbitration

## Responsibility Split

### Core Responsibilities

- identity and principal model
- policy vocabulary and enforcement contracts
- canonical context/knowledge governance contracts
- cross-app orchestration standards

### MyAIDE Responsibilities

- workspace/runtime/source operational state
- terminal/build execution runtime
- tool mediation for software workflows
- runtime activity stream and diff approval UX

## AIR Capability Set (Planned)

1. runtime node registry (code, agent, tool, workflow, knowledge)
2. tool contract registry with schema-based invocation
3. typed event bus and real-time activity stream
4. diff proposal/approval/apply lifecycle
5. permission checks per tool call
6. multi-agent collaboration with scoped memory

## Rollout Phases

### Phase 1 - Foundation

- node registry
- tool wrappers around existing operations
- event schema and stream
- initial diff proposal persistence

### Phase 2 - Control + Visibility

- diff review UI
- activity stream filtering
- terminal to AIR console transition
- baseline RBAC policy checks

### Phase 3 - Collaboration

- multi-agent focus groups
- memory scopes (`none`, `session`, `persistent`)
- provenance-rich summaries/transcripts

### Phase 4 - Advanced Runtime

- code-as-graph orchestration
- controlled live patching
- advanced chained workflows

## Risks and Mitigation

- complexity growth -> strict phased delivery and contract freezes
- reliability drift -> schema-first tools and approval gates
- observability sprawl -> typed events and stable versioning

## Website/Static-Site Messaging Hooks

- "From AI coding assistant to governed software intelligence runtime"
- "Every action is observable, policy-checked, and reviewable"
- "Agents collaborate through contracts, not hidden side effects"
