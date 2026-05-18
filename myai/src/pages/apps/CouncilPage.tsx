import { Link } from "react-router";
import { motion } from "motion/react";
import { AppScreenshot } from "../../components/AppScreenshot";
import { CouncilPreview } from "../../components/CouncilPreview";
import {
  Users, MessageSquare, FileCode, Zap, Brain, Lock,
  ArrowRight, Check, Shield, Workflow, Globe, Server,
  Sparkles, ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Persistent Conversation Rooms",
    description: "Create named rooms for specific projects, topics, or teams. Threads persist with full history, searchable context, and AI memory.",
  },
  {
    icon: Sparkles,
    title: "AI Persona Participation",
    description: "Invite AI personas into any room. Each persona has a defined role, behavioral constraints, and transparent reasoning traces visible to all participants.",
  },
  {
    icon: FileCode,
    title: "Documents & Tasks",
    description: "Create and collaborate on documents, action items, and structured data — all linked to the conversations that produced them.",
  },
  {
    icon: Brain,
    title: "Reasoning Transparency",
    description: "See why an AI persona said something. Full reasoning traces are visible to room participants, making AI decision-making auditable and explainable.",
  },
  {
    icon: Workflow,
    title: "Cross-App Workflows",
    description: "Reference KnowLedger entries, trigger AIDE tasks, or attach generated artifacts — Council becomes the connective tissue of your entire suite.",
  },
  {
    icon: Shield,
    title: "Governance & Audit Logs",
    description: "Every AI action is logged. Role-based access controls determine who can add personas, what they can do, and what data they can see.",
  },
];

const useCases = [
  {
    title: "Engineering Teams",
    description: "Run architecture reviews, sprint planning, and post-mortems with AI personas that understand your codebase and propose solutions inline.",
    icon: FileCode,
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    title: "Product Planning",
    description: "Brainstorm features, debate tradeoffs, and get AI-assisted prioritization — all in context, all in your infrastructure.",
    icon: Zap,
    gradient: "from-purple-600 to-pink-600",
  },
  {
    title: "Research & Analysis",
    description: "Multi-persona analysis where different AI viewpoints challenge assumptions and surface blind spots. Every conclusion is traceable.",
    icon: Brain,
    gradient: "from-amber-600 to-orange-600",
  },
  {
    title: "Customer Support",
    description: "Internal support rooms where your team and AI personas handle complex customer issues together, with escalation paths and history.",
    icon: Users,
    gradient: "from-green-600 to-emerald-600",
  },
];

export default function CouncilPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-purple-500/5 to-pink-500/5 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-3 py-1.5 rounded-full mb-4">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-600">Collaboration</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                myAI{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Council
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Shared workspaces where humans and AI personas think, plan, and solve problems together.
                Fully self-hosted, transparent by design, no data leaves your infrastructure.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Multi-party rooms with humans + AI personas",
                  "Real-time collaboration via self-hosted WebSockets",
                  "Transparent AI reasoning traces",
                  "Role-based access and persona governance",
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
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://github.com/myAI-Tech/council"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-border px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-muted/50 transition-colors"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <AppScreenshot title="myAI Council" icon={Users} gradient="from-purple-600 to-pink-600" size="large">
                <CouncilPreview />
              </AppScreenshot>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built for teams that think out loud</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Council goes beyond chat. It's a structured collaboration layer for complex, ongoing work — with AI that participates, not just responds.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What teams use Council for</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border/50 flex gap-4"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${uc.gradient} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{uc.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Runs entirely on your infrastructure</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: Server, label: "Self-hosted", desc: "WebSocket server, message bus, and storage are all yours" },
              { icon: Lock, label: "No telemetry", desc: "Zero data sent to myAI servers. Ever." },
              { icon: Globe, label: "Any cloud", desc: "Deploy to AWS, GCP, Azure, a VPS, or your homelab" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-card rounded-2xl p-6 border border-border/50">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-semibold mb-1">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to bring AI into your team's workflow?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Council is free, open-source, and runs entirely on your own infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-started" className="bg-white text-purple-600 px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2 hover:opacity-90">
                Get Started Free <ChevronRight className="w-4 h-4" />
              </Link>
              <a href="https://github.com/myAI-Tech/council" target="_blank" rel="noreferrer"
                className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-xl font-bold">
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
