# myAI Platform

A modular, open-source AI application suite built around one shared platform core. Every app shares a common foundation for identity, context, governance, and knowledge — so you install once and extend incrementally, without re-platforming.

> Free and open-source. Self-hosted. Your data, your infrastructure, your AI keys.

---

## What is myAI?

Most AI products force teams into isolated experiences — one chatbot for conversations, a separate tool for coding, another for documents, another for admin controls. Context is lost every time you switch.

myAI takes a different approach. The **Core** platform centralizes identity, context, personas, tools, permissions, governance, tasks, and reusable knowledge. Focused applications attach to that foundation and share it natively. A team can start with Council for collaboration, add AIDE for development, introduce KnowLedger for knowledge work, and extend further — without changing the underlying platform.

**Platform principles:**
- One shared core, many focused apps
- Centralized identity, policy, and context
- Consistent UX across all experiences
- Reusable artifacts and cross-app knowledge flow
- Modular adoption — install only what you need
- Observable, governed agent interop by default

---

## The Suite

### Foundation

| Product | Description | Repo |
|---|---|---|
| **Core** | The API backbone — identity, context, orchestration, tools, policy, app contracts, and federated knowledge. Every other product depends on Core. | [myAI-tech/core](https://github.com/myAI-tech/core) |
| **Studio** | The admin and governance control plane — manage users, teams, orgs, personas, RBAC, access grants, and policy templates. | [myAI-tech/studio](https://github.com/myAI-tech/studio) |
| **UX Craft** | The shared design system and experience layer that keeps the suite visually and behaviorally coherent across all frontends. | [myAI-tech/ux-craft](https://github.com/myAI-tech/ux-craft) |

### Collaboration

| Product | Description | Repo |
|---|---|---|
| **Council** | Shared workspaces where humans and AI personas think, plan, and work together. Persistent rooms, multi-persona discussions, tasks, documents, meetings, and federated knowledge handoff. | [myAI-tech/council](https://github.com/myAI-tech/council) |

### Development

| Product | Description | Repo |
|---|---|---|
| **AIDE** | An AI-native developer environment for planning, building, validating, and evolving software across local and hosted runtimes. Four work modes (Code, Code Assist, Pair Program, AIDE), live context panel, reproducible execution containers, and file-level governance. | [myAI-tech/aide](https://github.com/myAI-tech/aide) |
| **AIR Runtime** | Agent Interop Runtime — the governed orchestration model for agents, tools, and workflows. Contracts are explicit, execution emits structured events, mutations are approval-gated, and humans remain the final authority. Delivered first through AIDE. | Integrated in AIDE |

### Knowledge

| Product | Description | Repo |
|---|---|---|
| **KnowLedger** | A visual knowledge graph for capturing, structuring, and connecting ideas. Turns notes, concepts, and relationships into durable, AI-readable knowledge shared across the suite. | [myAI-tech/knowledger](https://github.com/myAI-tech/knowledger) |

### Guided Execution

| Product | Description | Repo |
|---|---|---|
| **Illuminate** | Guided workflows and SOPs — turn completed work into reusable, interactive walkthroughs. Authoring, progress tracking, branching flows, and export. | [myAI-tech/illuminate](https://github.com/myAI-tech/illuminate) |

### Creative Experiences

| Product | Description | Repo |
|---|---|---|
| **Image Based Adventures (IBA)** | AI-powered interactive story adventures — branching narratives, character persistence, and image generation integrated into every scene. | [myAI-tech/iba](https://github.com/myAI-tech/iba) |
| **Conjure** | AI image and video generation — brand-consistent generation, batch workflows, and domain grounding. *(Coming soon)* | [myAI-tech/conjure](https://github.com/myAI-tech/conjure) |
| **Instructscription** | Audio transcription and synthesis — convert audio to text or text to narrated audio. Podcast generation, meeting transcription, and persona voice tuning. *(Coming soon)* | [myAI-tech/instructscription](https://github.com/myAI-tech/instructscription) |

---

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                     myAI Core                        │
│  identity · context · policy · tools · knowledge     │
│  app contracts · orchestration · audit events        │
└──────────────┬──────────────────────────────────────┘
               │  shared foundation
   ┌───────────┼───────────────────────┐
   │           │           │           │
Studio      Council      AIDE      KnowLedger  ···
(admin)   (collab)    (dev env)   (knowledge)
```

**Core** is not optional — it is the contract and governance layer every other product depends on. **Studio** is the admin surface for configuring Core. All other applications are optional and attach to Core independently.

Apps are installed as separate frontend images, selected and pulled through Core's setup wizard. You do not clone a monorepo — each product lives in its own repository.

---

## Getting Started

**Requirements:** Bun 1.x · Docker Desktop 4.x · .NET SDK 8.0 (for AIDE)

### 1. Run Core

```bash
git clone https://github.com/myAI-tech/core.git
cd core
bun install
cp .env.example .env   # configure MYAI_HOST, MYAI_PORT, MYAI_SECRET, DATABASE_URL
bun run dev
```

Core starts at `http://localhost:8000`. On first run, the **setup wizard** launches automatically.

### 2. Complete the setup wizard

The wizard walks you through:
- Creating your organization and admin account
- Configuring your AI provider and API keys (OpenAI, Anthropic, Ollama, or any OpenAI-compatible API)
- Selecting which apps to enable — Core pulls the frontend images automatically
- Setting governance defaults, persona access, and RBAC

### 3. Install AIDE standalone *(optional)*

AIDE can run without Core for local-only development:

```bash
git clone https://github.com/myAI-tech/aide.git
cd aide
bun install
cp .env.example .env   # set AIDE_WORKSPACES_ROOT, AIDE_STATE_ROOT, MYAIDE_RUNTIME_EXECUTOR
bun run dev
```

Opens at `http://localhost:4000`. Connect to Core later by adding `CORE_BASE_URL` to the AIDE `.env`.

---

## Repository Directory

```
myAI/
├── myai/                   # Website — product landing pages, docs hub, get started
│   └── src/
│       ├── pages/          # All page components (Home, apps/*, platform/*, docs/*)
│       ├── components/     # Shared UI components (LaunchPad, AppScreenshot, previews)
│       ├── layouts/        # RootLayout (header, footer, nav)
│       └── router.tsx      # All client-side routes
│
├── docs/
│   └── knowledge-index/    # Platform documentation and POC guides
│       ├── 01-platform-overview.md
│       ├── 02-product-map.md
│       ├── 03-core-myaide-handoff-checklist.md
│       ├── 04-air-runtime-alignment.md
│       ├── 05-core-air-contracts.md
│       ├── 06-core-studio-configuration-and-usage.md
│       ├── 07-aide-server-quickstart-poc.md
│       ├── 08-council-configuration-poc.md
│       ├── 09-council-usage-poc.md
│       └── apps/           # Per-app reference docs
│
└── ide/                    # AIDE strategy and product documents
    ├── 01-vision-and-positioning.md
    ├── 02-feature-goals.md
    ├── 03-runtime-and-build-server.md
    ├── 04-operations-and-agent-routines.md
    ├── 05-roadmap-phases.md
    └── 06-website-content-outline.md
```

---

## Documentation

| Resource | Description |
|---|---|
| [Website docs hub](https://myai.tech/docs) | Product documentation, API reference, and app guides |
| [API & Platform Integration](https://myai.tech/docs/api) | REST API reference, WebSocket, authentication, SDKs |
| [Using the Apps](https://myai.tech/docs/apps) | Walkthroughs, FAQs, and setup guides per application |
| [AIDE user manual](https://myai.tech/docs/apps/aide) | Getting started, work modes, env vars, smoke test |
| [Council user manual](https://myai.tech/docs/apps/council) | Configuration, demo sequence, FAQ, routing reference |
| [Get Started](https://myai.tech/get-started) | Step-by-step install guide for all deployment modes |
| [Platform overview](docs/knowledge-index/01-platform-overview.md) | Architecture, principles, and AIR runtime direction |
| [Product map](docs/knowledge-index/02-product-map.md) | Full product category map and governance model |

---

## Packages & Organizations

| Platform | Scope / Handle |
|---|---|
| GitHub | [`myAI-tech`](https://github.com/myAI-tech) |
| Docker Hub | [`myai-tech`](https://hub.docker.com/u/myai-tech) |
| npm | [`@myai-tech`](https://www.npmjs.com/org/myai-tech) |
| NuGet | [`myai-tech`](https://www.nuget.org/profiles/myai-tech) |

---

## License

MIT — free to use, self-host, fork, and extend.
