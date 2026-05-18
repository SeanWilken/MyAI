import { useState } from "react";
import type { ElementType, ReactNode } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Flower,
  Code2,
  Database,
  Settings,
  Users,
  Lightbulb,
  Palette,
  Server,
  Check,
  Copy,
  Terminal,
  Package,
  Cpu,
  HardDrive,
  ChevronRight,
  ArrowRight,
  Info,
  Layers,
  ToggleLeft,
} from "lucide-react";

type Mode = "suite" | "core" | "aide";

interface StepProps {
  number: number;
  title: string;
  children: ReactNode;
}

function Step({ number, title, children }: StepProps) {
  return (
    <div className="flex gap-4 sm:gap-6">
      <div className="flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-sm font-bold shadow-md">
          {number}
        </div>
      </div>
      <div className="flex-1 pb-8 border-b border-border/50 last:border-0 last:pb-0">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        {children}
      </div>
    </div>
  );
}

interface CodeBlockProps {
  code: string;
  language?: string;
}

function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group mt-3">
      <pre className="bg-foreground/5 border border-border/50 rounded-xl p-4 text-sm font-mono overflow-x-auto text-foreground/90 leading-relaxed">
        <code>{code}</code>
      </pre>
      <button
        onClick={copy}
        className="absolute top-3 right-3 p-1.5 rounded-lg bg-background/80 border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-green-500" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-muted-foreground" />
        )}
      </button>
    </div>
  );
}

interface RequirementBadgeProps {
  icon: ElementType;
  label: string;
  value: string;
  optional?: boolean;
}

function RequirementBadge({ icon: Icon, label, value, optional }: RequirementBadgeProps) {
  return (
    <div className="flex items-center gap-3 bg-muted/60 rounded-xl px-4 py-3">
      <Icon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-medium flex items-center gap-1.5">
          {value}
          {optional && (
            <span className="text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground">optional</span>
          )}
        </div>
      </div>
    </div>
  );
}

const MODES = [
  {
    id: "suite" as Mode,
    icon: Layers,
    title: "Full Suite",
    subtitle: "Everything included",
    description: "The complete myAI platform — Core, Studio, AIDE, AIDE Server, Council, KnowLedger, and UX Craft. Best for teams and individuals who want the full experience out of the box.",
    gradient: "from-blue-600 to-indigo-600",
    includes: [
      { icon: Database, label: "Core API", desc: "Runtime, orchestration, identity" },
      { icon: Settings, label: "Studio", desc: "Admin, RBAC, governance" },
      { icon: Code2, label: "AIDE + AIDE Server", desc: "IDE and AI execution layer" },
      { icon: Users, label: "Council", desc: "Collaboration workspace" },
      { icon: Lightbulb, label: "KnowLedger", desc: "Knowledge management" },
      { icon: Palette, label: "UX Craft", desc: "Shared design system" },
    ],
  },
  {
    id: "core" as Mode,
    icon: ToggleLeft,
    title: "Core + Select",
    subtitle: "Choose your experiences",
    description: "Install the Core foundation and choose exactly which applications to enable. Perfect for users who want specific tools without the full suite overhead.",
    gradient: "from-purple-600 to-pink-600",
    includes: [
      { icon: Database, label: "Core API", desc: "Required — always included" },
      { icon: Settings, label: "Studio", desc: "Required — always included" },
      { icon: Code2, label: "AIDE + AIDE Server", desc: "Optional" },
      { icon: Users, label: "Council", desc: "Optional" },
      { icon: Lightbulb, label: "KnowLedger", desc: "Optional" },
      { icon: Palette, label: "UX Craft", desc: "Optional" },
    ],
  },
  {
    id: "aide" as Mode,
    icon: Code2,
    title: "AIDE Only",
    subtitle: "Standalone IDE",
    description: "AIDE as a fully self-contained development environment. No suite required — use it as a powerful Monaco-based code editor with optional AI features via your own keys.",
    gradient: "from-green-600 to-emerald-600",
    includes: [
      { icon: Code2, label: "AIDE", desc: "Monaco-based code editor" },
      { icon: Server, label: "AIDE Server", desc: "Local execution layer" },
      { icon: Terminal, label: "Integrated terminal", desc: "Run commands inline" },
    ],
  },
];

export default function GetStarted() {
  const [mode, setMode] = useState<Mode>("suite");
  const [selectedApps, setSelectedApps] = useState<string[]>(["aide", "council", "knowledger"]);

  const toggleApp = (app: string) => {
    setSelectedApps((prev) =>
      prev.includes(app) ? prev.filter((a) => a !== app) : [...prev, app]
    );
  };

  const selectedMode = MODES.find((m) => m.id === mode)!;

  const coreCloneCmd = `git clone https://github.com/myAI-Tech/core.git
cd core
bun install`;

  const coreEnvCmd = `cp .env.example .env
# Minimum required:
#   MYAI_HOST=localhost
#   MYAI_PORT=8000
#   MYAI_SECRET=change-me
#   DATABASE_URL=your-db-connection-string`;

  const coreRunCmd = `bun run dev`;

  const aideInstallCmdA = `# Mode A — AIDE only (fastest local boot)
git clone https://github.com/myAI-Tech/aide.git
cd aide

# Install dependencies (Bun recommended)
bun install

# Copy and edit environment file
cp .env.example .env
# Set: AIDE_WORKSPACES_ROOT, AIDE_STATE_ROOT
#      MYAIDE_RUNTIME_EXECUTOR, MYAIDE_RUNTIME_DOTNET_IMAGE

# Start AIDE
bun run dev`;

  const aideInstallCmdB = `# Mode B — AIDE + Core (recommended for AIR/governance)
# 1. Start Core first (see Full Suite or Core + Select setup)
# 2. Then in your AIDE .env, add:
CORE_BASE_URL=http://localhost:8000
CORE_API_KEY=your-core-api-key
MYAIDE_CORE_POLICY_MODE=enforce   # or: log-only

# 3. Start AIDE
bun run dev`;

  const configEnvCmd = `# Copy the example environment file
cp .env.example .env

# Edit with your settings:
#   MYAI_HOST=localhost
#   MYAI_PORT=3000
#   AI_PROVIDER=openai          # or anthropic, ollama, etc.
#   AI_API_KEY=your-key-here    # your own key
#   MYAI_SECRET=change-me       # session secret`;

  const dockerCmd = `# Using Docker Compose (recommended for self-hosting)
docker compose up -d

# Or with a specific profile
docker compose --profile suite up -d`;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-blue-500/5 to-purple-500/5 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-full mb-6">
              <Flower className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-600">Free &amp; Open-Source</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Get Started with myAI
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Choose how you want to run myAI. No account needed, no telemetry, no vendor lock-in.
              Everything runs on your own infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mode Selector */}
      <section className="py-10 sm:py-12 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-center text-muted-foreground text-sm mb-6 font-medium uppercase tracking-wider">
            Select your install path
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {MODES.map((m) => {
              const Icon = m.icon;
              const active = mode === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id)}
                  className={`relative rounded-2xl p-5 border-2 text-left transition-all ${
                    active
                      ? "border-blue-500 bg-blue-500/5 shadow-lg"
                      : "border-border/50 hover:border-border bg-card"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.gradient} flex items-center justify-center mb-3`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-semibold mb-0.5">{m.title}</div>
                  <div className="text-xs text-muted-foreground">{m.subtitle}</div>
                  {active && (
                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mode Detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
              {/* Left — what's included */}
              <div>
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedMode.gradient} flex items-center justify-center mb-4 shadow-md`}
                >
                  <selectedMode.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{selectedMode.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {selectedMode.description}
                </p>

                <div className="mb-6">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    {mode === "core" ? "Included packages" : "Includes"}
                  </div>
                  <ul className="space-y-2">
                    {selectedMode.includes.map((item, i) => {
                      const Icon = item.icon;
                      const isOptional = item.desc === "Optional";
                      return (
                        <li
                          key={i}
                          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                            isOptional && mode === "core"
                              ? "bg-muted/40 cursor-pointer hover:bg-muted/60 transition-colors"
                              : "bg-muted/30"
                          }`}
                          onClick={
                            isOptional && mode === "core"
                              ? () => toggleApp(item.label.toLowerCase().replace(/\s.*/, ""))
                              : undefined
                          }
                        >
                          {isOptional && mode === "core" ? (
                            <div
                              className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                                selectedApps.includes(item.label.toLowerCase().replace(/\s.*/, ""))
                                  ? "bg-blue-600 border-blue-600"
                                  : "border-border"
                              }`}
                            >
                              {selectedApps.includes(item.label.toLowerCase().replace(/\s.*/, "")) && (
                                <Check className="w-2.5 h-2.5 text-white" />
                              )}
                            </div>
                          ) : (
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          )}
                          <Icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <div>
                            <span className="font-medium">{item.label}</span>
                            <span className="text-muted-foreground ml-1.5">— {item.desc}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Prerequisites
                  </div>
                  <div className="space-y-2">
                    <RequirementBadge icon={Package} label="Runtime" value="Bun 1.x" />
                    <RequirementBadge icon={Cpu} label="RAM" value={mode === "suite" ? "4 GB min" : mode === "core" ? "2 GB min" : "2 GB min"} />
                    <RequirementBadge icon={HardDrive} label="Disk" value={mode === "suite" ? "2 GB" : "500 MB"} />
                    <RequirementBadge icon={Terminal} label="Docker" value="Desktop 4.x+" />
                    {mode === "aide" && (
                      <RequirementBadge icon={Server} label=".NET SDK" value="8.0+" />
                    )}
                  </div>
                </div>
              </div>

              {/* Right — install steps */}
              <div className="lg:col-span-2">
                <div className="space-y-0">
                  {(mode === "suite" || mode === "core") && (
                    <>
                      <Step number={1} title="Clone &amp; run Core">
                        <p className="text-muted-foreground text-sm mb-2">
                          Core is its own repo — there is no monorepo. Clone it, configure your environment, and start the server.
                        </p>
                        <CodeBlock code={coreCloneCmd} />
                        <div className="mt-3">
                          <CodeBlock code={coreEnvCmd} />
                        </div>
                        <div className="mt-3">
                          <CodeBlock code={coreRunCmd} />
                        </div>
                        <p className="text-sm text-muted-foreground mt-3">
                          Core starts at{" "}
                          <code className="bg-muted px-1 py-0.5 rounded text-xs">http://localhost:8000</code>.
                          The setup wizard launches automatically on first run.
                        </p>
                      </Step>

                      <Step number={2} title="Complete the setup wizard">
                        <p className="text-muted-foreground text-sm mb-3">
                          The wizard runs in your browser and walks you through the full configuration:
                        </p>
                        <ul className="space-y-2 mb-3">
                          {[
                            "Create your organization and admin account",
                            "Configure your AI provider and API keys",
                            mode === "suite"
                              ? "Select all apps — Core pulls the frontend images automatically"
                              : "Select which apps to enable — only those images are pulled",
                            "Set governance defaults, persona access, and RBAC",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-start gap-2 text-sm text-muted-foreground bg-blue-500/5 border border-blue-500/20 rounded-lg px-3 py-2.5">
                          <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>
                            myAI supports OpenAI, Anthropic, Ollama, and any OpenAI-compatible API.
                            Your keys stay on your infrastructure — nothing is sent to myAI servers.
                          </span>
                        </div>
                      </Step>

                      <Step number={3} title="Open your apps">
                        <p className="text-muted-foreground text-sm">
                          After the wizard completes, your selected apps are live. Studio is always at{" "}
                          <code className="bg-muted px-1 py-0.5 rounded text-xs">http://localhost:8000/studio</code>.
                          {mode === "suite"
                            ? " All apps are available at their respective routes."
                            : " Only apps you enabled in the wizard are available."}
                        </p>
                      </Step>
                    </>
                  )}

                  {mode === "aide" && (
                    <>
                      <Step number={1} title="Mode A — AIDE standalone (fastest local boot)">
                        <p className="text-muted-foreground text-sm mb-2">
                          Clone, configure, and run AIDE with no Core dependency. Policy checks run in local/degraded mode.
                        </p>
                        <CodeBlock code={aideInstallCmdA} />
                        <p className="text-sm text-muted-foreground mt-3">
                          Opens at <code className="bg-muted px-1 py-0.5 rounded text-xs">http://localhost:4000</code> by default.
                        </p>
                      </Step>

                      <Step number={2} title="(Optional) Mode B — AIDE + Core for AIR governance">
                        <p className="text-muted-foreground text-sm mb-2">
                          Connect AIDE to a running Core instance to enable full policy enforcement, AIR governed execution,
                          and cross-app context. Recommended for team use.
                        </p>
                        <CodeBlock code={aideInstallCmdB} />
                        <div className="mt-3 flex items-start gap-2 text-sm text-muted-foreground bg-blue-500/5 border border-blue-500/20 rounded-lg px-3 py-2.5">
                          <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>
                            Start with <code className="bg-muted px-1 py-0.5 rounded text-xs">MYAIDE_CORE_POLICY_MODE=log-only</code> to
                            observe policy decisions before switching to enforce mode.
                          </span>
                        </div>
                      </Step>

                      <Step number={3} title="(Optional) Connect an AI provider">
                        <p className="text-muted-foreground text-sm mb-2">
                          AIDE is a fully capable editor without any AI configured. To enable AI features:
                        </p>
                        <CodeBlock code={`# In AIDE settings, or via .env:\nAI_PROVIDER=openai           # openai | anthropic | ollama\nAI_API_KEY=your-key-here\n\n# For local models (Ollama):\nAI_PROVIDER=ollama\nAI_BASE_URL=http://localhost:11434`} />
                        <div className="mt-3 flex items-start gap-2 text-sm text-muted-foreground bg-green-500/5 border border-green-500/20 rounded-lg px-3 py-2.5">
                          <Info className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>
                            AI features are additive, not required. All four work modes (Code, Code Assist, Pair Program, AIDE) are
                            available — AI involvement scales with the mode you choose.
                          </span>
                        </div>
                      </Step>

                      <Step number={4} title="Upgrade to the full suite anytime">
                        <p className="text-muted-foreground text-sm">
                          When you're ready for Council, KnowLedger, or the full platform, AIDE slots directly into the suite.
                          Your projects, settings, and keybindings carry over automatically.
                        </p>
                        <div className="mt-3">
                          <Link
                            to="/get-started"
                            onClick={() => {}}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline"
                          >
                            View full suite setup <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </Step>
                    </>
                  )}
                </div>

                {/* Next steps */}
                <div className="mt-10 pt-8 border-t border-border/50">
                  <div className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
                    After you're up and running
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { label: "Explore Council", desc: "Set up rooms and invite AI personas", to: "/apps/council" },
                      { label: "Open AIDE", desc: "Explore the IDE and AI code features", to: "/apps/aide" },
                      { label: "Create a knowledge graph", desc: "Start building in KnowLedger", to: "/apps/knowledger" },
                      { label: "Configure Studio", desc: "Manage users, roles, and personas", to: "/platform/studio" },
                    ].map((item, i) => (
                      <Link
                        key={i}
                        to={item.to}
                        className="flex items-start gap-3 p-4 rounded-xl border border-border/50 hover:bg-muted/50 transition-colors group"
                      >
                        <div className="flex-1">
                          <div className="text-sm font-medium group-hover:text-blue-600 transition-colors">
                            {item.label}
                          </div>
                          <div className="text-xs text-muted-foreground">{item.desc}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-blue-600 transition-colors flex-shrink-0 mt-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
