import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import { motion } from "motion/react";
import {
  Users, ChevronRight, GitBranch, BookMarked, ArrowRight,
  MessageSquare, Info, ExternalLink, Check,
} from "lucide-react";

type Section = "getting-started" | "walkthroughs" | "faq" | "source";

const NAV: { id: Section; label: string }[] = [
  { id: "getting-started", label: "Getting Started" },
  { id: "walkthroughs", label: "Walkthroughs" },
  { id: "faq", label: "FAQ" },
  { id: "source", label: "Source & API" },
];

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-foreground/5 border border-border/50 rounded-xl p-4 text-xs font-mono overflow-x-auto text-foreground/90 leading-relaxed mt-2">
      <code>{code}</code>
    </pre>
  );
}

function EnvVar({ name, desc, example, optional }: { name: string; desc: string; example?: string; optional?: boolean }) {
  return (
    <div className="border border-border/50 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-1">
        <code className="text-xs font-mono font-semibold text-purple-600">{name}</code>
        {optional && (
          <span className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded">optional</span>
        )}
      </div>
      <p className="text-sm text-muted-foreground">{desc}</p>
      {example && (
        <p className="text-xs font-mono text-muted-foreground mt-1.5 bg-muted/50 px-2 py-1 rounded">
          e.g. <span className="text-foreground/70">{example}</span>
        </p>
      )}
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 bg-blue-500/5 border border-blue-500/20 rounded-xl px-4 py-3 mt-3">
      <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

export default function CouncilDocsPage() {
  const [searchParams] = useSearchParams();
  const [active, setActive] = useState<Section>(
    (searchParams.get("section") as Section) ?? "getting-started"
  );

  useEffect(() => {
    const s = searchParams.get("section") as Section | null;
    if (s && NAV.some((n) => n.id === s)) setActive(s);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border/50 bg-gradient-to-br from-background via-purple-500/5 to-pink-500/5 py-12 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6 flex-wrap">
            <Link to="/docs" className="hover:text-foreground transition-colors">Docs</Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <Link to="/docs/apps" className="hover:text-foreground transition-colors">Using the Apps</Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-foreground font-medium">Council</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-md">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">Council</h1>
                <p className="text-sm text-muted-foreground">Collaborative workspace for humans and AI personas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* In-page nav */}
      <div className="sticky top-[65px] z-40 bg-background/95 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex gap-0 overflow-x-auto">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`px-4 py-3.5 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                  active === item.id
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Getting Started */}
        {active === "getting-started" && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold mb-2">Getting Started</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Council is a frontend application that connects to Core. Install Core first via the setup wizard,
              then configure Council's environment variables to point at your Core instance.
            </p>

            {/* Environment variables */}
            <h3 className="font-semibold text-lg mb-4">Environment variables</h3>
            <div className="grid sm:grid-cols-1 gap-3 mb-8">
              <EnvVar
                name="VITE_KAIROS_CORE_API_BASE_URL"
                desc="The full base URL of your Core API instance. Council makes all API calls directly to this address."
                example="http://localhost:8000"
              />
              <EnvVar
                name="VITE_KAIROS_TENANT_ID"
                desc="Tenant scope fallback used when no tenant is resolved from the session context."
                example="default"
                optional
              />
              <EnvVar
                name="VITE_KAIROS_ORG_ID"
                desc="Default organization scope fallback. Council uses this when no org is available from the user's session."
                example="org_main"
                optional
              />
            </div>

            {/* API forwarding */}
            <h3 className="font-semibold text-lg mb-4">Connecting to Core</h3>
            <div className="bg-card border border-border/50 rounded-2xl p-5 sm:p-6 mb-5">
              <h4 className="font-semibold mb-2">Direct base URL mode (recommended)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Set <code className="bg-muted px-1 py-0.5 rounded text-xs">VITE_KAIROS_CORE_API_BASE_URL</code> to
                your Core base URL directly. Council resolves all API paths from this base.
              </p>
              <CodeBlock code={`VITE_KAIROS_CORE_API_BASE_URL=http://localhost:8000
VITE_KAIROS_TENANT_ID=default
VITE_KAIROS_ORG_ID=org_main`} />
            </div>

            <Callout>
              Core must be running and accessible before Council can authenticate. Complete the Core setup
              wizard first — Council will not function without a valid Core URL and a created organization.
            </Callout>

            {/* Auth flow */}
            <h3 className="font-semibold text-lg mb-4 mt-8">Authentication flow</h3>
            <div className="space-y-3">
              {[
                { step: 1, label: "Login", desc: "User submits credentials to the login endpoint." },
                { step: 2, label: "/auth/me", desc: "Council fetches the current user profile and confirms org membership." },
                { step: 3, label: "Context switch", desc: "If the user belongs to multiple orgs, Council presents a context selector before loading the workspace." },
                { step: 4, label: "Token refresh", desc: "Access tokens are auto-refreshed on 401 responses. The session retries once after a successful refresh." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3 border border-border/50 rounded-xl px-4 py-3">
                  <div className="w-6 h-6 rounded-full bg-purple-600/15 text-purple-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <code className="text-xs font-mono font-semibold">{item.label}</code>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Walkthroughs */}
        {active === "walkthroughs" && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold mb-2">Walkthroughs</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Use the demo sequence below to validate your Council installation and explore the core collaboration features.
            </p>

            {/* Demo sequence */}
            <h3 className="font-semibold text-lg mb-4">Suggested demo sequence</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Run through these steps in order for a complete first-run validation.
            </p>
            <div className="space-y-4 mb-10">
              {[
                {
                  step: 1,
                  title: "Login and confirm org context",
                  desc: "Sign in with your admin credentials. Verify your organization name appears correctly in the header. If you belong to multiple orgs, confirm the context selector appears and switching works.",
                },
                {
                  step: 2,
                  title: "Create or open a Thread",
                  desc: "Navigate to Threads and create a new room. Give it a name and set the room type (direct, group, or council). Confirm the room appears in the sidebar.",
                },
                {
                  step: 3,
                  title: "Send a direct message",
                  desc: "In a direct or user-only room, send a message. Confirm it appears immediately and is routed through the /messages endpoint. Check that the message persists after a page refresh.",
                },
                {
                  step: 4,
                  title: "Send a persona message",
                  desc: "In a council-type room with a persona configured, send a message and confirm the AI persona responds. Persona and council rooms route through /chat — verify the response includes reasoning traces if enabled.",
                },
                {
                  step: 5,
                  title: "Create a task",
                  desc: "From within a room, create a task linked to the conversation. Set an assignee and a due date. Confirm the task appears in the Tasks panel and remains linked to the source room.",
                },
                {
                  step: 6,
                  title: "Add a document",
                  desc: "Upload or create a document from the Documents section. Confirm it is associated with your org and visible to room participants. Verify document sections can be referenced in messages.",
                },
                {
                  step: 7,
                  title: "Open Meetings",
                  desc: "Navigate to the Meetings section and create a meeting. Confirm the meeting can be started, that participants are visible, and that a recap can be generated at the end.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-card border border-border/50 rounded-xl p-4">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1">{item.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Room types */}
            <h3 className="font-semibold text-lg mb-4">Room types and routing</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  type: "Direct / user-only",
                  endpoint: "/messages",
                  desc: "One-to-one or group conversations with no AI persona involvement. Messages route through the /messages endpoint.",
                },
                {
                  type: "Persona / Council",
                  endpoint: "/chat",
                  desc: "Rooms with one or more AI personas. All messages route through /chat — persona responses include reasoning traces.",
                },
              ].map((item) => (
                <div key={item.type} className="border border-border/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold text-sm">{item.type}</span>
                  </div>
                  <code className="text-xs font-mono text-purple-600 block mb-2">{item.endpoint}</code>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* FAQ */}
        {active === "faq" && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold mb-2">FAQ</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Common questions about Council configuration, API routing, and POC behavior.
            </p>

            <div className="space-y-5">
              {[
                {
                  q: "Why do some rooms use /messages and others use /chat?",
                  a: "Council uses two separate endpoints based on room type. Direct and user-only rooms send to /messages — these are standard message operations with no persona processing. Persona and council rooms send to /chat, which routes through Core's AI and persona pipeline. Switching room type changes the endpoint; mixing them will cause routing errors.",
                },
                {
                  q: "What does VITE_KAIROS_TENANT_ID do?",
                  a: "Tenant ID is an optional fallback used when Core cannot resolve a tenant from the user's session. In most single-tenant deployments you can leave this set to 'default'. In multi-tenant environments, set it to the tenant that should be used when no tenant is found in the request context.",
                },
                {
                  q: "Council shows a blank screen after login — what should I check?",
                  a: "First verify VITE_KAIROS_CORE_API_BASE_URL is correct and Core is running. Then check that the logged-in user belongs to at least one organization — Council requires a valid org context to load the workspace. Open the browser network tab and look for a failing /auth/me or context request.",
                },
                {
                  q: "What's the difference between Threads and Meetings?",
                  a: "Threads are persistent, asynchronous conversation rooms — they exist indefinitely and support tasks, documents, and persona participation. Meetings are time-bounded, synchronous sessions with a defined start, participant list, and end state that produces a recap. Both types live in the same workspace but serve different collaboration patterns.",
                },
                {
                  q: "Can I configure which personas appear in a room?",
                  a: "Yes. Persona access in rooms is governed by the app access grants configured in Studio. A persona must have an active grant for the org and the room type before it can participate. Configure this in Studio under Personas → Access Grants.",
                },
                {
                  q: "POC caveats — what should I be aware of?",
                  a: "During the POC phase: endpoint envelopes may shift between releases, persona chat validation should be re-run after any API regeneration, and workspace interactions may present in list-first order before detail views are fully scaffolded. Check the GitHub issues for current known limitations.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-border/50 rounded-xl p-5">
                  <div className="font-semibold mb-2">{item.q}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* Feedback template */}
            <div className="mt-8 bg-muted/40 border border-border/50 rounded-2xl p-5 sm:p-6">
              <h3 className="font-semibold mb-3">Reporting issues — what to include</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  "Environment (local, hosted, OS)",
                  "Version or commit hash",
                  "Page / route where the issue occurs",
                  "Network tab — failing request and response",
                  "Expected behavior",
                  "Actual behavior",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Source & API */}
        {active === "source" && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold mb-2">Source &amp; API</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Source repository, POC configuration guides, and API references for Council.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Council GitHub repo",
                  desc: "Main repository — frontend workspace, room management, persona participation, tasks, documents, and meetings.",
                  href: "https://github.com/myAI-tech/council",
                  label: "myAI-tech/council",
                  external: true,
                },
                {
                  title: "Council configuration guide (POC)",
                  desc: "Minimum configuration for running Council against a local Core instance — environment variables, API forwarding modes, auth requirements, and release checklist.",
                  href: "https://github.com/myAI-tech/council/blob/main/docs/knowledge-index/08-council-configuration-poc.md",
                  label: "08-council-configuration-poc.md",
                  external: true,
                },
                {
                  title: "Council usage walkthrough (POC)",
                  desc: "Tester-facing walkthrough for validating the Council collaboration experience — all tester flows, suggested demo sequence, and feedback template.",
                  href: "https://github.com/myAI-tech/council/blob/main/docs/knowledge-index/09-council-usage-poc.md",
                  label: "09-council-usage-poc.md",
                  external: true,
                },
                {
                  title: "Core API & Platform Integration docs",
                  desc: "REST API reference, authentication, context endpoints, and integration guides for the myAI Core platform.",
                  to: "/docs/api",
                  label: "docs/api",
                  external: false,
                },
              ].map((item) => (
                <div key={item.title} className="bg-card border border-border/50 rounded-xl p-5 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="font-semibold mb-1">{item.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">{item.desc}</p>
                    <code className="text-xs text-muted-foreground font-mono">{item.label}</code>
                  </div>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline whitespace-nowrap flex-shrink-0">
                      Open <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link to={item.to!}
                      className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline whitespace-nowrap flex-shrink-0">
                      Open <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer nav */}
      <section className="py-8 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            <Link to="/docs/apps" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors">
              <BookMarked className="w-3.5 h-3.5" /> All App Docs
            </Link>
            <Link to="/apps/council" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors">
              <ArrowRight className="w-3.5 h-3.5" /> Council App Page
            </Link>
            <Link to="/get-started" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors">
              <ArrowRight className="w-3.5 h-3.5" /> Get Started
            </Link>
          </div>
          <a href="https://github.com/myAI-tech/council" target="_blank" rel="noreferrer"
            className="text-sm text-blue-600 hover:underline flex items-center gap-1.5">
            <GitBranch className="w-3.5 h-3.5" /> myAI-tech/council
          </a>
        </div>
      </section>
    </div>
  );
}
