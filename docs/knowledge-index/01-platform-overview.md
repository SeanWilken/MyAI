# Platform Overview

## Summary

MyAI is a modular AI workspace suite built around one shared platform core.

Core provides the API backbone for identity, context, orchestration, tools, policy, application contracts, tasks, and federated knowledge. Studio gives organizations a control plane for configuring users, teams, personas, access grants, and governance policy templates. From there, specialized applications attach to the same foundation: Council for collaborative work, AIDE for AI-assisted development, KnowLedger for brainstorming and structured knowledge, IBA for visual storytelling, and Illuminate-powered workflows for guided execution and skill-building.

Each app is focused. Each app can be installed separately. Every app shares the same foundation.

## Why It Matters

Most AI products force teams into isolated experiences: one chatbot for conversations, another tool for coding, another for documents, another for admin controls, and another for knowledge management.

MyAI takes a different approach.

The platform centralizes identity, context, personas, tools, permissions, governance, tasks, and reusable knowledge in Core, then lets teams install focused applications for the work they actually need. A business can start with Studio and Council, add AIDE for developers, introduce KnowLedger for knowledge work, and later enable guided execution or creative AI experiences without rewriting the foundation.

## Platform Principles

- One shared core, many focused apps.
- Centralized identity, policy, and context.
- Consistent UX across specialized frontends.
- Reusable artifacts and cross-app knowledge flow.
- Modular adoption without re-platforming.

## Suite Pattern

- Core is the runtime and contract layer.
- Studio is the administrative, governance, and app-access control layer.
- Specialized applications attach to the same shared platform services.
- UX Craft keeps the suite visually and behaviorally coherent.
- KnowLedger created in one experience should be reusable in another.
- Council should be able to turn discussion, notes, and uploaded sections into durable knowledge for other apps.

## Shared Foundation Responsibilities

- authentication and identity
- context and workspace switching
- org-scoped context switching for access-sensitive operations
- application registration
- application access grants per org/app
- orchestration and runtime execution
- prompt, model, and provider configuration
- tools and auditability
- policy enforcement and governance
- artifact persistence and reuse
- task and meeting collaboration primitives
- federated knowledge, reusable notes, and cross-app document context
