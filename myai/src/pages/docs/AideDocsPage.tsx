import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import { motion } from "motion/react";
import {
  Code2, ChevronRight, GitBranch, BookMarked, ArrowRight,
  Terminal, Server, Check, Info, AlertCircle, ExternalLink,
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

function EnvVar({ name, desc, example }: { name: string; desc: string; example?: string }) {
  return (
    <div className="border border-border/50 rounded-xl p-4">
      <code className="text-xs font-mono font-semibold text-green-600">{name}</code>
      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
      {example && (
        <p className="text-xs font-mono text-muted-foreground mt-1.5 bg-muted/50 px-2 py-1 rounded">
          e.g. <span className="text-foreground/70">{example}</span>
        </p>
      )}
    </div>
  );
}

function Callout({ type, children }: { type: "info" | "warning"; children: React.ReactNode }) {
  const styles = {
    info: "bg-blue-500/5 border-blue-500/20 text-blue-600",
    warning: "bg-amber-500/5 border-amber-500/20 text-amber-600",
  };
  const Icon = type === "info" ? Info : AlertCircle;
  return (
    <div className={`flex items-start gap-3 border rounded-xl px-4 py-3 mt-3 ${styles[type]}`}>
      <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" />
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

export default function AideDocsPage() {
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
      <section className="border-b border-border/50 bg-gradient-to-br from-background via-green-500/5 to-emerald-500/5 py-12 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6 flex-wrap">
            <Link to="/docs" className="hover:text-foreground transition-colors">Docs</Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <Link to="/docs/apps" className="hover:text-foreground transition-colors">Using the Apps</Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-foreground font-medium">AIDE</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center shadow-md">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">AIDE</h1>
                <p className="text-sm text-muted-foreground">AI-native developer environment</p>
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
                    ? "border-green-600 text-green-600"
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
              AIDE ships as its own repo. Run it standalone (Mode A) or alongside Core for full AIR governance (Mode B).
            </p>

            {/* Prerequisites */}
            <h3 className="font-semibold text-lg mb-4">Prerequisites</h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: GitBranch, label: "Git", value: "Any recent version" },
                { icon: Terminal, label: "Docker Desktop", value: "4.x or later — required for container execution" },
                { icon: Code2, label: "Bun", value: "1.x (recommended) or Node.js 18+" },
                { icon: Server, label: ".NET SDK", value: "8.0 — required for script execution runtime" },
              ].map((req) => {
                const Icon = req.icon;
                return (
                  <div key={req.label} className="flex items-start gap-3 bg-muted/40 rounded-xl px-4 py-3">
                    <Icon className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold">{req.label}</div>
                      <div className="text-xs text-muted-foreground">{req.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mode A */}
            <div className="bg-card border border-border/50 rounded-2xl p-5 sm:p-6 mb-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center">A</div>
                <h3 className="font-bold">Mode A — AIDE standalone</h3>
                <span className="text-[10px] font-semibold bg-green-500/10 text-green-700 border border-green-500/20 px-2 py-0.5 rounded-full">Fastest</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                No Core required. Policy checks run in local/degraded mode. Best for solo use and initial evaluation.
              </p>
              <CodeBlock code={`git clone https://github.com/myAI-tech/aide.git
cd aide
bun install

cp .env.example .env
# Required env vars — see FAQ for descriptions

bun run dev`} />
              <p className="text-sm text-muted-foreground mt-3">
                Opens at <code className="bg-muted px-1 py-0.5 rounded text-xs">http://localhost:4000</code>
              </p>
            </div>

            {/* Mode B */}
            <div className="bg-card border border-border/50 rounded-2xl p-5 sm:p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">B</div>
                <h3 className="font-bold">Mode B — AIDE + Core</h3>
                <span className="text-[10px] font-semibold bg-blue-500/10 text-blue-700 border border-blue-500/20 px-2 py-0.5 rounded-full">Recommended for teams</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Connects AIDE to a running Core instance. Enables full policy enforcement, AIR governed execution,
                and cross-app context flow.
              </p>
              <CodeBlock code={`# After starting Core (see Get Started page)
# Add to your AIDE .env:

CORE_BASE_URL=http://localhost:8000
CORE_API_KEY=your-core-api-key
MYAIDE_CORE_POLICY_MODE=log-only   # start here, switch to: enforce

bun run dev`} />
              <Callout type="info">
                Start with <code className="bg-muted px-1 py-0.5 rounded text-xs">log-only</code> to observe
                policy decisions before switching to <code className="bg-muted px-1 py-0.5 rounded text-xs">enforce</code>.
                This lets you validate your configuration without blocking workflows.
              </Callout>
            </div>

            {/* Required env vars */}
            <h3 className="font-semibold text-lg mb-4">Required environment variables (Mode A)</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <EnvVar
                name="AIDE_WORKSPACES_ROOT"
                desc="Root directory where AIDE stores all workspace data."
                example="/home/user/.aide/workspaces"
              />
              <EnvVar
                name="AIDE_STATE_ROOT"
                desc="Directory for AIDE application state files (snapshots, metadata)."
                example="/home/user/.aide/state"
              />
              <EnvVar
                name="MYAIDE_RUNTIME_EXECUTOR"
                desc="Execution backend used for running scripts and builds."
                example="docker"
              />
              <EnvVar
                name="MYAIDE_RUNTIME_DOTNET_IMAGE"
                desc=".NET Docker image used for script execution containers."
                example="mcr.microsoft.com/dotnet/sdk:8.0"
              />
            </div>
          </motion.div>
        )}

        {/* Walkthroughs */}
        {active === "walkthroughs" && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold mb-2">Walkthroughs</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Use these sequences to validate your AIDE installation and explore the core workflows.
            </p>

            {/* Smoke test */}
            <h3 className="font-semibold text-lg mb-4">POC smoke test — verify your install</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Run through this sequence after first boot to confirm AIDE is working correctly.
            </p>
            <div className="space-y-4 mb-10">
              {[
                {
                  step: 1,
                  title: "Run a terminal command",
                  desc: "Open the integrated terminal and run any command (e.g. `ls` or `echo hello`). Confirm output appears in the terminal panel.",
                },
                {
                  step: 2,
                  title: "Move and save a file",
                  desc: "Drag a file to a new folder in the file tree. Open it, make a small edit, and save. Confirm the change persists after a browser refresh.",
                },
                {
                  step: 3,
                  title: "Create and restore a snapshot",
                  desc: "Open a workspace and create a snapshot from the workspace menu. Make additional changes, then restore the snapshot. Confirm the workspace returns to the snapshot state.",
                },
                {
                  step: 4,
                  title: "Verify policy reasons (Mode B only)",
                  desc: "With Core connected in log-only mode, trigger an AI action. Open the Activity panel and confirm policy decision records appear with reasons attached.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-card border border-border/50 rounded-xl p-4">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1">{item.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Work modes */}
            <h3 className="font-semibold text-lg mb-4">Exploring work modes</h3>
            <p className="text-sm text-muted-foreground mb-4">
              AIDE has four modes you can switch between without losing context.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { mode: "Code", desc: "Pure editor — Monaco, file tree, git, terminal. No AI involvement." },
                { mode: "Code Assist", desc: "AI suggests completions and patches inline. You accept, reject, or modify each one." },
                { mode: "Pair Program", desc: "AI collaborates actively — discusses approach, proposes diffs, and explains reasoning." },
                { mode: "AIDE", desc: "Governed agentic mode. AI plans and executes multi-step tasks within your permission gates." },
              ].map((item) => (
                <div key={item.mode} className="border border-border/50 rounded-xl p-4">
                  <div className="font-semibold text-sm mb-1 font-mono">{item.mode}</div>
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
              Common questions about environment configuration, deployment modes, and POC behavior.
            </p>

            <div className="space-y-5">
              {[
                {
                  q: "What is AIDE_WORKSPACES_ROOT?",
                  a: "The root directory on your host where AIDE stores all workspace data — project files, git state, and workspace metadata. Set this to a stable path that persists across restarts.",
                },
                {
                  q: "What is MYAIDE_RUNTIME_DOTNET_IMAGE?",
                  a: "The Docker image AIDE uses when spinning up containers for .NET script execution. The recommended value is mcr.microsoft.com/dotnet/sdk:8.0. This image is pulled on first use — Docker Desktop must be running.",
                },
                {
                  q: "What's the difference between Mode A and Mode B?",
                  a: "Mode A runs AIDE with no Core dependency — policy checks degrade gracefully and all features work locally. Mode B connects AIDE to a running Core instance, enabling full AIR policy enforcement, cross-app context, and governed agentic execution. Start with Mode A for evaluation, switch to Mode B for team use.",
                },
                {
                  q: "What does MYAIDE_CORE_POLICY_MODE=log-only do?",
                  a: "In log-only mode, AIDE records policy decisions and their reasons without blocking any action. This lets you observe how policy would behave before switching to enforce mode, where blocked actions are rejected with a reason surfaced in the UI.",
                },
                {
                  q: "Why does AIDE need Docker Desktop?",
                  a: "AIDE's execution runtime spins up ephemeral containers for script execution, test runs, and build tasks. Docker Desktop provides the container runtime. Without it, AIDE works as an editor but the build/run features will not function.",
                },
                {
                  q: "Can I use AIDE without any AI configured?",
                  a: "Yes. AIDE is a fully capable Monaco-based editor without any AI provider. AI features are additive — configure a provider in settings when you're ready. All four work modes are available; Code mode has no AI involvement at all.",
                },
                {
                  q: "POC caveats — what should I be aware of?",
                  a: "During the POC phase: the AIR activity stream is functional but expanding, diff approval UX is scaffolded, and some build bootstrap scripts are still being hardened. Refer to the quickstart guide or GitHub issues for known limitations.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-border/50 rounded-xl p-5">
                  <div className="font-semibold mb-2">{item.q}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Source & API */}
        {active === "source" && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-2xl font-bold mb-2">Source &amp; API</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Source repositories, technical guides, and API references for AIDE and AIDE Server.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "AIDE GitHub repo",
                  desc: "Main repository — editor, runtime, context panel, work modes, and AIDE Server.",
                  href: "https://github.com/myAI-tech/aide",
                  label: "myAI-tech/aide",
                  external: true,
                },
                {
                  title: "AIDE Server quickstart (POC)",
                  desc: "Step-by-step guide for running the AIDE Server POC locally — Mode A and Mode B setup, smoke test sequence, and roadmap.",
                  href: "https://github.com/myAI-tech/aide/blob/main/docs/knowledge-index/07-aide-server-quickstart-poc.md",
                  label: "07-aide-server-quickstart-poc.md",
                  external: true,
                },
                {
                  title: "AIR handoff checklist",
                  desc: "Cross-repo responsibilities for the federated knowledge contract — Core endpoints, AIDE adapter flow, dual-read mode, and shared pending items.",
                  href: "https://github.com/myAI-tech/aide/blob/main/docs/knowledge-index/03-core-myaide-handoff-checklist.md",
                  label: "03-core-myaide-handoff-checklist.md",
                  external: true,
                },
                {
                  title: "API & Platform Integration docs",
                  desc: "REST API reference, WebSocket streams, authentication, and integration guides for the myAI Core platform.",
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
            <Link to="/apps/aide" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors">
              <ArrowRight className="w-3.5 h-3.5" /> AIDE App Page
            </Link>
            <Link to="/get-started" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors">
              <ArrowRight className="w-3.5 h-3.5" /> Get Started
            </Link>
          </div>
          <a href="https://github.com/myAI-tech/aide" target="_blank" rel="noreferrer"
            className="text-sm text-blue-600 hover:underline flex items-center gap-1.5">
            <GitBranch className="w-3.5 h-3.5" /> myAI-tech/aide
          </a>
        </div>
      </section>
    </div>
  );
}
