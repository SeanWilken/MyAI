import { Link } from "react-router";
import { motion } from "motion/react";
import { AppScreenshot } from "../../components/AppScreenshot";
import { AIDEPreview } from "../../components/AIDE";
import {
  Code2, Brain, FileCode, Lock, Server, Workflow,
  ArrowRight, Check, Terminal, GitBranch, Layers, Globe,
  ChevronRight, Cpu, Shield, Zap, Users, Monitor, Cloud,
  BookOpen, Clock, Sparkles, Lightbulb, AlertCircle,
} from "lucide-react";

const workModes = [
  {
    id: "code",
    label: "Code",
    description: "Classic editor mode. Monaco, file tree, git, terminal. Full IDE without any AI involvement.",
    icon: Code2,
    color: "text-slate-600",
    bg: "from-slate-600 to-gray-700",
  },
  {
    id: "code-assist",
    label: "Code Assist",
    description: "AI suggests completions and patches inline. You stay in the driver's seat — accept, reject, or modify every suggestion.",
    icon: Zap,
    color: "text-green-600",
    bg: "from-green-600 to-emerald-600",
  },
  {
    id: "pair-program",
    label: "Pair Program",
    description: "AI joins as an active collaborator. Discusses approach, proposes diffs, and explains reasoning — like pairing with a senior engineer.",
    icon: Users,
    color: "text-blue-600",
    bg: "from-blue-600 to-indigo-600",
  },
  {
    id: "aide",
    label: "AIDE",
    description: "Governed agentic mode. AI can plan and execute multi-step tasks within your permission gates, approval flows, and sealed modules.",
    icon: Brain,
    color: "text-purple-600",
    bg: "from-purple-600 to-violet-600",
  },
];

const pillars = [
  {
    icon: BookOpen,
    title: "Context-aware development",
    description:
      "Active context, current scope, architecture patterns, critical dependencies, cross-cutting concerns, and AI suggestions — all surfaced in a live panel that mirrors exactly what the AI sees.",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    icon: Server,
    title: "Reproducible execution",
    description:
      "Run code, tests, and builds in managed containers. Preset environments, raw base images, long-lived workbench containers, and ephemeral task runners — no more 'works on my machine'.",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: Shield,
    title: "Recoverability",
    description:
      "Workspace snapshots, container reset, and reclone strategies mean you can move fast without fear. Recover from any bad state without manual archaeology.",
    gradient: "from-amber-600 to-orange-600",
  },
  {
    icon: Layers,
    title: "Cross-app continuity",
    description:
      "Artifacts, context, and knowledge flow to and from Core, Studio, Council, and KnowLedger. Switching tools doesn't mean switching context.",
    gradient: "from-purple-600 to-pink-600",
  },
];

const automationFeatures = [
  {
    icon: Clock,
    title: "Nightly AI code reviews",
    description: "AIDE runs automated review passes on your codebase at scheduled intervals, surfacing risks, patterns, and debt before your morning standup.",
  },
  {
    icon: Sparkles,
    title: "Morning briefing generation",
    description: "Start every session with an AI-generated briefing: what changed overnight, open risks, and suggested focus areas for the day.",
  },
  {
    icon: Lightbulb,
    title: "Futurelog capture",
    description: "During development, AIDE captures roadmap items, follow-up ideas, and deferred decisions into a structured log — so nothing falls through the cracks.",
  },
  {
    icon: Workflow,
    title: "Scheduled test routines",
    description: "Configure nightly or policy-driven test execution across your workbench environments. Results feed directly into the morning briefing.",
  },
];

const comparisons = [
  { feature: "Self-hosted & offline capable", aide: true, vscode: false, note: "VS Code extensions require cloud connectivity" },
  { feature: "Project-graph-aware AI context", aide: true, vscode: false, note: "Copilot operates at file level, not graph level" },
  { feature: "Monaco-based editor (familiar shortcuts)", aide: true, vscode: true, note: "" },
  { feature: "File locking & sealed modules", aide: true, vscode: false, note: "" },
  { feature: "Transparent AI reasoning traces", aide: true, vscode: false, note: "" },
  { feature: "Mode-aware AI (Code → Pair → AIDE)", aide: true, vscode: false, note: "Copilot has no permission-gated agentic mode" },
  { feature: "Reproducible execution containers", aide: true, vscode: false, note: "VS Code devcontainers require external tooling" },
  { feature: "Governed agent interop (AIR)", aide: true, vscode: false, note: "" },
  { feature: "Integrated suite (Council, KnowLedger)", aide: true, vscode: false, note: "" },
  { feature: "Bring your own AI model / key", aide: true, vscode: false, note: "Copilot requires GitHub subscription" },
  { feature: "Works without any AI at all", aide: true, vscode: true, note: "" },
];

export default function AIDEPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-green-500/5 to-emerald-500/5 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-3 py-1.5 rounded-full mb-4">
                <Code2 className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-600">Development</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">
                myAI{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  AIDE
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-5 leading-relaxed">
                An AI-native developer environment for planning, building, validating, and evolving
                software across local and hosted runtimes.
              </p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Start quickly, stay explainable, and scale from solo experimentation to team-grade
                hosted delivery — without changing tools.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Local & hosted", "Context-aware", "Reproducible execution", "Open source"].map((tag) => (
                  <span key={tag} className="bg-green-500/10 text-green-700 px-3 py-1 rounded-full text-xs font-semibold border border-green-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 mb-8">
                {[
                  "Four work modes: Code, Code Assist, Pair Program, and AIDE",
                  "Live context panel — active scope, dependencies, and AI suggestions",
                  "Reproducible execution in managed containers",
                  "Governed agentic mode with file locking and approval gates",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/get-started"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  Try locally
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  disabled
                  className="border border-border px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 text-muted-foreground cursor-not-allowed opacity-60"
                >
                  Request hosted access
                </button>
                <a
                  href="https://github.com/myAI-Tech/aide"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-border px-5 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-muted/50 transition-colors"
                >
                  <GitBranch className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <AppScreenshot title="myAI AIDE" icon={Code2} gradient="from-green-600 to-emerald-600" size="large">
                <AIDEPreview />
              </AppScreenshot>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deployment modes */}
      <section className="py-10 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: Monitor,
                label: "Local",
                status: "Available",
                statusClass: "bg-green-500/10 text-green-700 border-green-500/20",
                description: "Run the full IDE on your own machine. Works offline, zero cloud dependency, bring your own AI provider or none at all.",
              },
              {
                icon: Cloud,
                label: "Hosted",
                status: "In progress",
                statusClass: "bg-amber-500/10 text-amber-700 border-amber-500/20",
                description: "Team-grade hosted environments with shared runtimes, governance controls, and managed build infrastructure.",
              },
              {
                icon: Cpu,
                label: "Native clients",
                status: "Planned",
                statusClass: "bg-muted text-muted-foreground border-border/50",
                description: "Desktop-native and mobile experiences for AIDE — same architecture, optimized for each platform.",
              },
            ].map((mode) => {
              const Icon = mode.icon;
              return (
                <div key={mode.label} className="bg-card border border-border/50 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${mode.statusClass}`}>
                      {mode.status}
                    </span>
                  </div>
                  <div className="font-semibold text-sm mb-1.5">{mode.label}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{mode.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work modes */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Four work modes. One environment.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Switch between modes as your task changes — from pure editing to full governed agentic execution.
              No context is lost when you switch.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workModes.map((mode, i) => {
              const Icon = mode.icon;
              return (
                <motion.div
                  key={mode.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-card border border-border/50 rounded-2xl p-5 hover:shadow-md transition-all"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${mode.bg} flex items-center justify-center mb-4 shadow-sm`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-bold mb-2">{mode.label}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{mode.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Context panel */}
      <section className="py-16 sm:py-20 bg-muted/20 border-y border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">The AI sees exactly what you see</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                AIDE's context panel surfaces the same six dimensions the AI uses for every suggestion.
                No black box — you can inspect, override, and extend the context at any time.
              </p>
              <ul className="space-y-3">
                {[
                  { label: "Active Context", desc: "The file or module currently in focus" },
                  { label: "Current Context Scope", desc: "Boundaries of what the AI can read and modify" },
                  { label: "Architecture Pattern", desc: "Detected structural patterns in the active scope" },
                  { label: "Critical Dependencies", desc: "Direct and transitive deps that affect the active code" },
                  { label: "Cross-Cutting Concerns", desc: "Auth, logging, error handling, and other shared behaviors" },
                  { label: "AI Suggestion", desc: "The current proposal — with reasoning attached" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold font-mono">{item.label}</span>
                      <span className="text-sm text-muted-foreground"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-muted/60 px-4 py-2.5 border-b border-border/50 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                  <span className="text-xs text-muted-foreground ml-2 font-mono">Context Panel</span>
                </div>
                <div className="p-4 space-y-2.5 text-xs font-mono">
                  {[
                    { label: "Active Context", value: "auth/middleware.ts", color: "text-green-600" },
                    { label: "Scope", value: "src/auth/**", color: "text-blue-600" },
                    { label: "Architecture", value: "JWT + RBAC middleware chain", color: "text-purple-600" },
                    { label: "Critical Deps", value: "jsonwebtoken, prisma/client", color: "text-amber-600" },
                    { label: "Concerns", value: "token rotation, audit logging", color: "text-rose-600" },
                    { label: "AI Suggestion", value: "Extract token refresh to service layer", color: "text-emerald-600" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start gap-2">
                      <span className="text-muted-foreground w-28 flex-shrink-0">{row.label}</span>
                      <span className={`${row.color} font-medium`}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience pillars */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Built on four pillars</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Every design decision in AIDE traces back to one of these four principles.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-card border border-border/50 rounded-2xl p-6 hover:shadow-md transition-all"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-4 shadow-sm`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Automation */}
      <section className="py-16 sm:py-20 bg-muted/20 border-y border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full mb-4 text-xs font-semibold text-amber-700">
              Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Engineering readiness on autopilot</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              AIDE's automation layer keeps your codebase healthy and your team oriented — while you focus on building.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {automationFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-card border border-border/50 rounded-2xl p-5"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1.5">{feat.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feat.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold mb-4">AIDE vs. VS Code + Copilot</h2>
            <p className="text-muted-foreground">When your AI tooling should be as transparent and controllable as your source code.</p>
          </motion.div>

          <div className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-lg">
            <div className="grid grid-cols-3 bg-muted/50 px-6 py-3 text-sm font-semibold text-muted-foreground">
              <div>Feature</div>
              <div className="text-center text-green-600">AIDE</div>
              <div className="text-center">VS Code + Copilot</div>
            </div>
            {comparisons.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="grid grid-cols-3 px-6 py-3.5 border-t border-border/50 items-center"
              >
                <div className="text-sm pr-4">
                  <span>{row.feature}</span>
                  {row.note && (
                    <span className="block text-xs text-muted-foreground mt-0.5">{row.note}</span>
                  )}
                </div>
                <div className="flex justify-center">
                  {row.aide ? (
                    <div className="w-6 h-6 rounded-full bg-green-500/15 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 text-xs font-bold">✕</div>
                  )}
                </div>
                <div className="flex justify-center">
                  {row.vscode ? (
                    <div className="w-6 h-6 rounded-full bg-green-500/15 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 text-xs font-bold">✕</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI providers */}
      <section className="py-16 sm:py-20 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Works with any AI provider — or none</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Connect your existing OpenAI, Anthropic, or Ollama keys. Switch providers at any time.
              AIDE is a fully capable editor without any AI configured.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "OpenAI", desc: "GPT-4o, o1, o3", color: "text-green-600" },
                { name: "Anthropic", desc: "Claude Opus/Sonnet", color: "text-orange-600" },
                { name: "Ollama", desc: "Local models", color: "text-blue-600" },
                { name: "Any OpenAI-compat", desc: "LM Studio, Groq…", color: "text-purple-600" },
              ].map((p) => (
                <div key={p.name} className="bg-card border border-border/50 rounded-xl p-4">
                  <Cpu className={`w-6 h-6 mb-2 mx-auto ${p.color}`} />
                  <div className="font-semibold text-sm">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start quickly. Stay explainable. Scale when ready.
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Free, open-source, and runs entirely on your machine.
              No subscriptions, no cloud dependency, no lock-in.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/get-started"
                className="bg-white text-green-700 px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-white/90 transition-colors"
              >
                Try locally <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="https://github.com/myAI-Tech/aide"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
