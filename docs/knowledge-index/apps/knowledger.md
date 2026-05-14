# MyAI KnowLedger

## One-Line Definition

A visual knowledge codex for federated, AI-readable knowledge.

## Positioning

KnowLedger is a visual knowledge codex that helps users capture raw ideas, organize connected knowledge nodes, refine loose structure over time, and expose a browsable map of what information exists without requiring every consumer to see the raw underlying data.

## Product Concept

Users create knowledge nodes that represent different types of information and connect those nodes into an evolving graph.

Each node can be:

- tagged
- categorized
- connected to other nodes
- explored visually
- placed into one or more knowledge bins

The system should support loose organization first, then refinement into more structured relationships.

## Knowledge Nodes

Example node types include:

- Personas
- Teams
- Tasks
- Documents
- PDFs
- Notes
- Projects
- Services
- Clients
- Shared resources
- Servers
- Repositories
- APIs
- AI tools
- Knowledge bins
- Councils or agent groups
- Domains
- Requirements
- Questions
- Decisions

## Knowledge Bins

A knowledge bin is a general organizational grouping that helps users cluster nodes before or alongside more formal graph relationships.

A node may belong to one or more knowledge bins.

Example bins include:

- MyAI
- MyAI Studio
- MyAI.DE
- MyAI Council
- Root
- Server
- Client
- Shared
- Tasks
- Personas
- Teams
- Documents

## UX Intent

The UI should feel like:

- a clean visual knowledge map
- a focused internal AI knowledge browser
- a federated knowledge-base explorer
- a structured brainstorming canvas
- a meta-index for documents, tasks, personas, teams, and AI-accessible data

It should not feel like:

- a generic kanban board
- a normal document manager
- a messy whiteboard
- a heavy analytics dashboard
- a toy mind map

The visual style should be minimalist, slightly technical, and organized.

## User Capabilities

The app should make it obvious that the user can:

- create nodes
- group nodes into bins
- connect related nodes
- inspect node metadata
- view only the relevant subgraph for a selected node
- browse the knowledge base like a catalog
- use the map as a high-level index for AI agents
- track access rules, relationships, and source metadata

## Application Modes

The app shell should support these top-level modes:

### 1. Knowledge Map

The main visual canvas.

Shows the federated knowledge base as connected nodes and bins.

### 2. Brainstorm

A rapid capture mode where users can quickly throw raw notes into the system before organizing them.

### 3. Focus View

A selected-node view showing only the relevant subgraph and access path for a specific node.

This corresponds to the access-of-information view from the sketch.

### 4. Codex / Library

A structured catalog view of nodes, bins, tags, and relationships.

### 5. Rubber Duck

A focused reasoning mode where the user explains a problem and the app extracts assumptions, blockers, questions, and next steps.

For the first boilerplate, these modes can use mock data and placeholder panels, but the routing and layout structure should be ready for expansion.

## Focus View

Focus View should show a selected node and its access path.

Example reduced subgraph when `MyAI` is selected:

- MyAI
- Notes and Documents
- PDF Knowledge Source
- MyAI.DE
- Tasks
- Team
- Root / Server / Client / Shared when related

Focus View should visually emphasize:

- relevant path
- connected nodes
- safe access path
- related bins
- excluded or hidden nodes

It should include an `Access Context` side panel with:

- selected node
- why this node matters
- related knowledge bins
- safe sources
- restricted sources
- suggested next nodes to inspect

## Brainstorm View

Brainstorm mode is a simple rapid-capture surface for loose thinking before structure is imposed.

It should include:

- quick capture area
- raw idea inbox
- suggested clusters
- backburner
- convert idea to node action
- mock idea chips

Example brainstorm ideas:

- "Knowledge bins should hold loose notes"
- "Some nodes can relate without belonging to the same bin"
- "Need safe summaries for AI agents"
- "Focus view should trim unrelated noise"
- "Meta explorer should show source shape, not raw data"
- "Relationship labels should guide AI retrieval"

## Codex / Library View

Codex / Library is the structured catalog view of the graph.

It should include filters for:

- node type
- bin
- tag
- sensitivity
- AI relevance
- status

Each row or card should show:

- label
- type
- bins
- tags
- relationship count
- sensitivity
- status

This view should feel like a catalog for browsing the same data shown in the visual map.

## Rubber Duck View

Rubber Duck is a focused reasoning mode for unpacking a problem into usable structure.

It should include:

- problem explanation input
- conversation-like panel
- extracted structure panel

Mock project example:

User problem:

"I'm trying to figure out how to let people organize federated knowledge visually so an AI agent can understand what data exists without receiving all of the data directly."

Assistant guiding questions:

- "What does the AI need to know before searching deeper?"
- "Which nodes describe data shape versus actual data?"
- "Where should access rules live?"
- "Which relationships imply dependency?"
- "What should be visible in a safe summary?"

Extracted structure:

- current problem
- assumptions
- open questions
- next step

## Responsibilities

- capture early-stage thought without forcing structure too early
- support synthesis into durable knowledge artifacts
- expose structured references without requiring access to all raw notes
- model the shape of federated knowledge for both humans and AI
- preserve access context, source metadata, and relationship meaning

## Features

- Knowledge Map mode for graph-based navigation
- Brainstorm mode for rapid raw capture
- Focus View for selected-node subgraph inspection
- Codex / Library for structured catalog browsing
- Rubber Duck mode for problem articulation and extraction
- knowledge nodes with types, tags, metadata, and relationships
- knowledge bins for loose organizational grouping
- AI-readable indexes without exposing all raw data
- source attachments and contextual notes
- exportable briefs, docs, and knowledge items
- pipeline from mess to structured understanding

## Strategic Role

KnowLedger turns exploration into institutional memory, gives AI agents a safe high-level index of available knowledge, and helps teams refine loose information into durable structure over time.
