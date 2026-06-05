# Council Usage Guide (POC)

## Purpose

This guide is a tester-facing walkthrough for validating the current Council collaboration experience in early POC releases.

## Who This Is For

- internal evaluators
- pilot users testing Core + Council bundles
- operators preparing demo or trial environments

## Start Here

Before using Council:

- confirm Core is reachable
- confirm Council is pointing to the correct Core API base URL
- sign in with a user that has org access and room permissions

## Core Tester Flows

### 1) Sign In and Confirm Org Context

- log in from Council
- verify user/org context appears in the top-level navigation area
- if multiple orgs exist, switch org and confirm data refreshes

Expected result:

- no auth-context loops
- no persistent "organization context missing" errors after valid login

### 2) Create or Open a Thread

- open Threads
- select an existing room or create a new room from the New Room panel
- confirm the room opens in the right-side content pane

Expected result:

- left-side thread list remains available
- right-side room content updates without route errors

### 3) Send Messages by Room Type

- confirm websocket is connected for the active room
- in a direct/user room, send a test message
- in a persona/council room, send a test message

Expected result:

- primary send uses websocket `chat.send` and room events update the thread
- if websocket is unavailable, direct message send falls back through `/messages`
- if websocket is unavailable, persona/council send falls back through `/chat`

If failures occur, capture:

- request URL
- status code
- response payload
- room/channel type used

### 4) Validate Task Workflow

- create a task from room/task panel
- verify task appears in task list for that context
- verify status/assignment fields are rendered correctly

### 5) Validate Documents and Knowledge Flow

- open Documents
- create an "Upload Section" node
- confirm new knowledge-backed item appears in list

### 6) Validate Meetings

- open Meetings
- confirm meeting list loads from Core data
- verify empty states are understandable when no meetings exist

## Suggested Test Script for POC Demos

Use this sequence for consistent demos:

1. login + org switch
2. open Threads and create room
3. send direct message
4. send persona/council message
5. create linked task
6. add document section
7. open Meetings and review schedule state

## Known POC Caveats

- endpoint contracts may still shift while Core and frontend convergence continues
- persona/council chat path validation should be repeated after API regenerations
- workspace interactions may be list-first until create/open workflows are expanded

## Feedback Template

When reporting issues, include:

- environment (local, image, hosted POC)
- Council version/commit if available
- Core version/commit if available
- exact page and route
- network request details (URL, method, status)
- expected vs actual behavior

## Next Documentation Targets

- operator runbook for org onboarding and role setup
- troubleshooting matrix for auth, context, routing, and chat endpoints
- quickstart for bundled installer/image variants
