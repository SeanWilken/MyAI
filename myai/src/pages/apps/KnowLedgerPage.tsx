import { Link } from "react-router";
import { motion } from "motion/react";
import { AppScreenshot } from "../../components/AppScreenshot";
import { KnowLedgerPreview } from "../../components/KnowLedge";
import {
  Lightbulb, Brain, Network, BookOpen, FileText, Search,
  ArrowRight, Check, Lock, Globe, Layers, ChevronRight,
  MessageSquare, Workflow,
} from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Visual Knowledge Graphs",
    description: "Map relationships between ideas, decisions, and artifacts. Drag, link, and cluster concepts visually — the graph evolves with your thinking.",
  },
  {
    icon: Lightbulb,
    title: "Concept Walls",
    description: "A freeform canvas for capturing raw ideas, links, images, and fragments before they're structured. Think Pinterest meets your second brain.",
  },
  {
    icon: Brain,
    title: "Rubber Duck Mode",
    description: "Talk through a problem with an AI that asks clarifying questions, not just gives answers. Structured thinking, not just Q&A.",
  },
  {
    icon: Search,
    title: "Cross-Reference Discovery",
    description: "KnowLedger indexes everything across your suite — Council conversations, AIDE code snippets, and your own notes — and surfaces connections you didn't know existed.",
  },
  {
    icon: FileText,
    title: "AI-Readable Indexes",
    description: "Every graph is structured so that other myAI apps can consume it. Your AI personas in Council can query your knowledge graph for context.",
  },
  {
    icon: Workflow,
    title: "Timeline View",
    description: "See how your understanding of a topic evolved over time. Every node has a history — when it was created, edited, and linked.",
  },
];

export default function KnowLedgerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-amber-500/5 to-orange-500/5 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full mb-4">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-semibold text-amber-600">Knowledge Management</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                myAI{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  KnowLedger
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Transform brainstorming into structured, AI-readable knowledge. Visual concept maps,
                intelligent linking, and suite-wide cross-referencing — all stored locally or on your server.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Visual concept walls and knowledge graphs",
                  "Rubber duck mode for AI-assisted thinking",
                  "Cross-references across Council, AIDE, and your notes",
                  "Local-first — your knowledge never leaves your server",
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
                  className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="https://github.com/myAI-Tech/knowledger" target="_blank" rel="noreferrer"
                  className="border border-border px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-muted/50 transition-colors">
                  View on GitHub
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <AppScreenshot title="myAI KnowLedger" icon={Lightbulb} gradient="from-amber-600 to-orange-600" size="large">
                <KnowLedgerPreview />
              </AppScreenshot>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Your knowledge, structured your way</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Not another note-taking app. KnowLedger is a knowledge engine — built to be queried by AI, not just read by humans.
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
                  className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center mb-4">
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

      {/* Suite integration */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Connected to your entire suite</h2>
            <p className="text-muted-foreground">
              KnowLedger doesn't live in isolation. It's the memory layer for everything else.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: MessageSquare,
                title: "Council Integration",
                desc: "Reference knowledge graph nodes directly in Council rooms. AI personas can query KnowLedger for context before responding.",
                gradient: "from-purple-600 to-pink-600",
              },
              {
                icon: BookOpen,
                title: "AIDE Integration",
                desc: "AIDE can populate KnowLedger with code architecture docs, API notes, and dependency maps automatically.",
                gradient: "from-green-600 to-emerald-600",
              },
              {
                icon: Layers,
                title: "AI-Readable Index",
                desc: "Every graph is exported as structured JSON so any AI persona can query your knowledge base with full semantic context.",
                gradient: "from-blue-600 to-indigo-600",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border/50 rounded-2xl p-5"
                >
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-3`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="font-semibold text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { icon: Lock, label: "Local-first storage" },
              { icon: Globe, label: "Optional cloud sync (self-hosted)" },
              { icon: Brain, label: "AI-readable structured output" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="w-4 h-4 text-amber-600" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-600" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Build a knowledge engine that's actually yours.
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Free, open-source, local-first. No SaaS, no syncing to someone else's cloud, no lock-in.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-started" className="bg-white text-amber-700 px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2">
                Get Started <ChevronRight className="w-4 h-4" />
              </Link>
              <a href="https://github.com/myAI-Tech/knowledger" target="_blank" rel="noreferrer"
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
