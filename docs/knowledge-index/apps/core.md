# MyAI Core

## One-Line Definition

The API backbone for every MyAI application.

## Positioning

Core installs the platform runtime that powers authentication, context, app contracts, orchestration, tools, prompts, provider configuration, and policy enforcement.

## Responsibilities

- provide the shared runtime for all suite applications
- enforce platform-level policy and permissions
- register apps, contracts, and feature capabilities
- manage model, prompt, and provider configuration
- support tool execution, records, and auditability

## Features

- API-first installation layer
- environment and database setup
- initial admin bootstrap
- auth, tokens, and context switching
- app registration and feature flags
- prompt, model, and provider registries
- tool runtime and execution records
- policy enforcement and audit events

## Strategic Role

Core is the non-optional foundation that makes the suite modular without making it fragmented.

Core is also the canonical governance authority for AIR-style execution (identity, policy, and shared contract vocabularies), while operational runtime state is handled by app-specific layers such as MyAIDE.
