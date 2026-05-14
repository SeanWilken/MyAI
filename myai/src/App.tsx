import { AppScreenshot } from "./components/AppScreenshot";
import { AIDEPreview } from "./components/AIDE";
import { FloatingAppWindows } from "./components/FloatingAppWindows";
import { CouncilPreview } from "./components/CouncilPreview";
import { KnowLedgerPreview } from "./components/KnowLedge";
import { FeatureComparison } from "./components/FeatureComparison";
import {
  Flower,
  Database,
  Settings,
  Orbit,
  AudioWaveform,
  Palette,
  Users,
  Code2,
  Lightbulb,
  BookOpen,
  Gamepad2,
  Briefcase,
  Sparkles,
  Lock,
  Server,
  Zap,
  ArrowRight,
  Check,
  MessageSquare,
  FileCode,
  Brain,
  Workflow,
} from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="border-b border-border/50 bg-background/95 backdrop-blur-xl sticky top-0 z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                className="relative w-10 h-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                  <Flower className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              <div>
                <h1 className="text-lg">myAI</h1>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a
                href="#products"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Applications
              </a>
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Docs
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </motion.header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-blue-500/5 to-purple-500/5">
          <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Open-Source Intelligence
                </span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Build, collaborate, and create with your own{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                   AI-powered apps 
                </span>
                {" "}- self-hosted, cloud-hosted, or anywhere you choose.
              </h2>

              <div className="m-4">
                <h2 className="text-4xl font-bold mb-4">
                    Your AI. Your data. Your infrastructure.
                </h2>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    myAI is a fully open-source suite of modular applications that you can run locally, deploy to your own server, or host in the cloud.
                    Use your own models, connect your existing API subscriptions, and keep complete control over your data, identity, and workflows.
                    No subscriptions, no lock-in, no external data sharing required.
                    Download, generate your environment, and start using your own AI
                    tools in minutes.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center gap-2 text-lg"
                >
                  Download & Deploy
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-background border-2 border-border hover:border-primary/50 text-foreground px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-colors text-lg"
                >
                  View Documentation
                </motion.button>
              </div>
            </motion.div>

            {/* Value Proposition Section */}

            {/* Floating app windows */}
            <FloatingAppWindows />
          </div>
        </section>

        {/* Foundation Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                Built on a Powerful, Open Foundation
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every myAI application runs on MyAI Core — an open, extensible runtime that handles identity, context, orchestration, and governance across your entire environment. Whether you run locally, in a homelab, or on a cloud provider, Core ensures everything stays aligned, secure, and interoperable.
              </p>
            </motion.div>

            

            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Database,
                  title: "Core",
                  description:
                    "API backbone with runtime orchestration, context management, policy enforcement, and app contracts.",
                  features: [
                    "Unified API",
                    "Real-time Orchestration",
                    "Policy Engine",
                    "App Ecosystem",
                  ],
                  gradient: "from-blue-600 to-indigo-600",
                },
                {
                  icon: Settings,
                  title: "Studio",
                  description:
                    "Complete administration for organizations, teams, users, RBAC, persona lifecycle, and governance.",
                  features: [
                    "Organization Management",
                    "Role-Based Access",
                    "Persona Control",
                    "Audit Logs",
                  ],
                  gradient: "from-purple-600 to-pink-600",
                },
                {
                  icon: Palette,
                  title: "UX Craft",
                  description:
                    "Shared design system ensuring consistent experience across all applications.",
                  features: [
                    "Component Library",
                    "Design Tokens",
                    "Workspace Layouts",
                    "Theme System",
                  ],
                  gradient: "from-green-600 to-emerald-600",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Council Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-3 py-1.5 rounded-full mb-4">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-600">
                    Collaboration
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-6">
                    Where humans and AI collaborate — privately, securely, and on your terms.
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Council creates shared workspaces where teams and AI personas can think, plan, and solve problems together. Everything runs through your own infrastructure — your WebSockets, your rules, your data.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    {
                      icon: MessageSquare,
                      text: "Multi-party conversations with human teammates and AI personas",
                    },
                    { icon: Users, text: "Private, self-hosted collaboration" },
                    {
                      icon: FileCode,
                      text: "Integrated tasks, documents, and workflows",
                    },
                    {
                      icon: Zap,
                      text: "Real-time collaboration and brainstorming",
                    },
                    {
                      icon: Brain,
                      text: "Transparent reasoning and decision trails",
                    },
                    {
                      icon: Lock,
                      text: "Persona-level permissions and behavioral constraints",
                    },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-foreground pt-1">
                          {item.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                  Explore Council
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <AppScreenshot
                  title="myAI Council"
                  icon={Users}
                  gradient="from-purple-600 to-pink-600"
                  size="large"
                >
                  <CouncilPreview />
                </AppScreenshot>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AIDE Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <AppScreenshot
                  title="myAI AIDE"
                  icon={Code2}
                  gradient="from-green-600 to-emerald-600"
                  size="large"
                >
                  <AIDEPreview />
                </AppScreenshot>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-3 py-1.5 rounded-full mb-4">
                  <Code2 className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-600">
                    Development
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  A self-hosted, AI-native IDE for everyone.
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  AIDE is a Monaco-powered development environment that runs locally or on your server. Use it as a standalone code editor, or pair it with your own AI assistant to generate code, refactor safely, and navigate your project with full transparency.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: Brain, text: "Context-aware AI code generation" },
                    {
                      icon: FileCode,
                      text: "Visual file graph and project navigator",
                    },
                    {
                      icon: Workflow,
                      text: "Build, test, and run workflows in your own environment",
                    },
                    {
                      icon: Lock,
                      text: "File locking, sealed modules, and permission-gated AI edits",
                    },
                    {
                      icon: Server,
                      text: "Works with local containers, remote servers, or cloud runners",
                    },
                    {
                      icon: Briefcase,
                      text: "Monolithic project breakdown or multi-repo workspaces",
                    },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-foreground pt-1">
                          {item.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                  Explore AIDE
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* KnowLedger Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full mb-4">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-semibold text-amber-600">
                    KnowLedger
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  Capture ideas. Build understanding. Own your knowledge.
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  KnowLedger transforms brainstorming into structured knowledge — all stored locally or on your server. Visual concept maps, intelligent linking, and AI-assisted organization help you build a knowledge engine that's fully yours.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    { text: "Visual concept walls and knowledge graphs" },
                    { text: "Rubber duck mode for AI-assisted thinking" },
                    { text: "Structured, AI-readable indexes" },
                    { text: "Cross-reference discovery across your entire suite" },
                    { text: "Local-first knowledge ownership" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground pt-1">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                  Explore KnowLedger
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <AppScreenshot
                  title="myAI KnowLedger"
                  icon={Lightbulb}
                  gradient="from-amber-600 to-orange-600"
                  size="large"
                >
                  <KnowLedgerPreview />
                </AppScreenshot>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                Why choose a modular, open, self-hosted platform?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Unlike closed SaaS tools, myAI gives you full control over your data, your models, your personas, and your workflows — with transparent reasoning and explainable AI behavior.
              </p>
            </motion.div>
            <FeatureComparison />
          </div>
        </section>

        {/* More Apps Grid */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                More to come soon
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Additional specialized applications for guided execution and
                creatives.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Illuminate",
                  category: "Guided Execution",
                  description:
                    "Step-by-step guided workflows with completion tracking, skill-building flows, and exportable SOPs and cheatsheets.",
                  gradient: "from-cyan-600 to-blue-600",
                  features: [
                    "Interactive Walkthroughs",
                    "Progress Tracking",
                    "Knowledge Export",
                    "Skill Building",
                  ],
                },
                {
                  icon: AudioWaveform,
                  title: "Instructscription",
                  category: "Creative",
                  description:
                    "Transcribe audio or turn your notes or questions into informative podcast / audiobook like experience to study.",
                  gradient: "from-rose-600 to-pink-600",
                  features: [
                    "Text-to-Audio",
                    "Audio-to-Text transcriptions",
                    "Pick a topic and get podcast like content from relevant articles",
                    "Persona tuning for style and tone",
                  ],
                },
                {
                  icon: Orbit,
                  title: "Conjure",
                  category: "Creative",
                  description:
                    "Generative AI for Images and Video",
                  gradient: "from-indigo-600 to-purple-600",
                  features: [
                    "Contextual Generation",
                    "Grounded in your domain",
                    "Stylized for you",
                    "Build your brand",
                  ],
                },
                {
                  icon: Gamepad2,
                  title: "Image Based Adventures",
                  category: "Creative",
                  description:
                    "Image-based adventure platform that transforms prompts into interactive stories with generated scenes and branching narratives.",
                  gradient: "from-orange-600 to-yellow-600",
                  features: [
                    "Prompt-to-Story",
                    "Scene Generation",
                    "Branching Paths",
                    "Adventure Memory",
                  ],
                },
              ].map((app, i) => {
                const Icon = app.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-all group"
                  >
                    <div
                      className={`bg-gradient-to-br ${app.gradient} p-12 relative overflow-hidden`}
                    >
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                      <div className="relative">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4 text-white text-xs font-semibold">
                          {app.category}
                        </div>
                        <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {app.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {app.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {app.features.map((feature, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Check className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        className={`bg-gradient-to-r ${app.gradient} text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
          <div className="absolute inset-0 bg-grid-white/[0.05]" />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Ready to run your own AI platform?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Download the suite, generate your environment, and deploy the apps you need — locally or in the cloud. Everything is open-source, modular, and built to grow with you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl"
                >
                  Download Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg"
                >
                  View Setup Guide
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-6 h-6 text-primary" />
                <span className="font-bold">myAI Platform</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Modular AI application ecosystem for modern teams.
              </p>
            </div>
            {[
              {
                title: "Products",
                links: ["Council", "AIDE", "KnowLedger", "Illuminate", "IBA"],
              },
              {
                title: "Platform",
                links: [
                  "Core API",
                  "Studio",
                  "UI/Craft",
                  "Documentation",
                  "Security",
                ],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Contact", "Legal"],
              },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2026 myAI Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
