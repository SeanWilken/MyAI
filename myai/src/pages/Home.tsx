import { Link } from "react-router";
import { AppScreenshot } from "../components/AppScreenshot";
import { AIDEPreview } from "../components/AIDE";
import { FloatingAppWindows } from "../components/FloatingAppWindows";
import { CouncilPreview } from "../components/CouncilPreview";
import { KnowLedgerPreview } from "../components/KnowLedge";
import { FeatureComparison } from "../components/FeatureComparison";
import {
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
  Briefcase,
} from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-blue-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
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
                Free &amp; Open-Source
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Build, collaborate, and create with your own{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI-powered apps
              </span>{" "}
              — self-hosted, cloud-hosted, or anywhere you choose.
            </h2>

            <div className="m-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Your AI. Your data. Your infrastructure.
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                myAI is a fully open-source suite of modular applications that you can run
                locally, deploy to your own server, or host in the cloud. Use your own models,
                connect your existing API subscriptions, and keep complete control over your data,
                identity, and workflows. No subscriptions, no lock-in, no external data sharing.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/get-started"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center gap-2 text-lg"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.a
                href="https://github.com/myAI-tech"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-background border-2 border-border hover:border-primary/50 text-foreground px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-colors text-lg"
              >
                View on GitHub
              </motion.a>
            </div>
          </motion.div>

          <FloatingAppWindows />
        </div>
      </section>

      {/* Foundation Section — uses lg:grid-cols-3 to prevent overflow on mid-size viewports */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Built on a Powerful, Open Foundation
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Every myAI application runs on MyAI Core — an open, extensible runtime that handles
              identity, context, orchestration, and governance across your entire environment.
              Whether you run locally, in a homelab, or on a cloud provider, Core ensures everything
              stays aligned, secure, and interoperable.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Database,
                title: "Core",
                to: "/platform/core",
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
                to: "/platform/studio",
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
                to: "/platform/ux-craft",
                description:
                  "Shared design system ensuring consistent, beautiful experiences across all applications.",
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
                  className="bg-card rounded-2xl p-6 sm:p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={item.to}
                    className={`inline-flex items-center gap-1.5 text-sm font-medium bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5" style={{ color: "inherit" }} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Council Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-3 py-1.5 rounded-full mb-4">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-600">Collaboration</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Where humans and AI collaborate — privately, securely, and on your terms.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Council creates shared workspaces where teams and AI personas can think, plan, and
                solve problems together. Everything runs through your own infrastructure — your
                WebSockets, your rules, your data.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: MessageSquare, text: "Multi-party conversations with human teammates and AI personas" },
                  { icon: Users, text: "Private, self-hosted collaboration rooms" },
                  { icon: FileCode, text: "Integrated tasks, documents, and workflows" },
                  { icon: Zap, text: "Real-time collaboration and brainstorming" },
                  { icon: Brain, text: "Transparent reasoning and decision trails" },
                  { icon: Lock, text: "Persona-level permissions and behavioral constraints" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground pt-1">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
              <Link
                to="/apps/council"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Explore Council
                <ArrowRight className="w-4 h-4" />
              </Link>
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
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                <span className="text-sm font-semibold text-green-600">Development</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                AI-native development, from local to hosted.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                AIDE is an AI-native developer environment for planning, building, validating, and
                evolving software — across local and hosted runtimes. Four work modes let you dial
                AI involvement from zero to fully governed agentic execution.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: Brain, text: "Live context panel — active scope, dependencies, AI suggestions" },
                  { icon: FileCode, text: "Visual dependency graph and project navigator" },
                  { icon: Workflow, text: "Reproducible execution in managed containers" },
                  { icon: Lock, text: "File locking, sealed modules, and approval-gated AI edits" },
                  { icon: Server, text: "Preset and raw base environments — workbench and ephemeral runners" },
                  { icon: Briefcase, text: "Multi-repo workspaces with cross-repo context awareness" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground pt-1">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
              <Link
                to="/apps/aide"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Explore AIDE
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KnowLedger Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full mb-4">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-semibold text-amber-600">KnowLedger</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Capture ideas. Build understanding. Own your knowledge.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                KnowLedger transforms brainstorming into structured knowledge — all stored locally
                or on your server. Visual concept maps, intelligent linking, and AI-assisted
                organization help you build a knowledge engine that's fully yours.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Visual concept walls and knowledge graphs",
                  "Rubber duck mode for AI-assisted thinking",
                  "Structured, AI-readable indexes",
                  "Cross-reference discovery across your entire suite",
                  "Local-first knowledge ownership",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground pt-1">{text}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/apps/knowledger"
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Explore KnowLedger
                <ArrowRight className="w-4 h-4" />
              </Link>
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
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why choose a modular, open, self-hosted platform?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlike closed SaaS tools, myAI gives you full control over your data, your models,
              your personas, and your workflows — with transparent reasoning and explainable AI behavior.
            </p>
          </motion.div>
          <FeatureComparison />
        </div>
      </section>

      {/* More Apps Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">More to come soon</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Additional specialized applications for guided execution and creative workflows.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                icon: BookOpen,
                title: "Illuminate",
                to: "/apps/illuminate",
                category: "Guided Execution",
                description:
                  "Step-by-step guided workflows with completion tracking, skill-building flows, and exportable SOPs and cheatsheets.",
                gradient: "from-cyan-600 to-blue-600",
                features: ["Interactive Walkthroughs", "Progress Tracking", "Knowledge Export", "Skill Building"],
              },
              {
                icon: AudioWaveform,
                title: "Instructscription",
                to: "/apps/instructscription",
                category: "Creative",
                description:
                  "Transcribe audio or turn your notes into informative podcast / audiobook-like experiences to study.",
                gradient: "from-rose-600 to-pink-600",
                features: ["Text-to-Audio", "Audio Transcription", "Podcast-style Content", "Persona Tuning"],
              },
              {
                icon: Orbit,
                title: "Conjure",
                to: "/apps/conjure",
                category: "Creative",
                description: "Generative AI for images and video — grounded in your domain, styled for your brand.",
                gradient: "from-indigo-600 to-purple-600",
                features: ["Contextual Generation", "Domain Grounding", "Style Transfer", "Brand Building"],
              },
              {
                icon: Gamepad2,
                title: "Image Based Adventures",
                to: "/apps/iba",
                category: "Creative",
                description:
                  "Image-based adventure platform that transforms prompts into interactive stories with generated scenes.",
                gradient: "from-orange-600 to-yellow-600",
                features: ["Prompt-to-Story", "Scene Generation", "Branching Paths", "Adventure Memory"],
              },
            ].map((app, i) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className={`bg-gradient-to-br ${app.gradient} p-10 sm:p-12 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="relative">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4 text-white text-xs font-semibold">
                        {app.category}
                      </div>
                      <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{app.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">{app.description}</p>
                    <ul className="space-y-2 mb-6">
                      {app.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={app.to}
                      className={`bg-gradient-to-r ${app.gradient} text-white px-5 py-2.5 rounded-lg font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-grid-white/[0.05]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to run your own AI platform?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
              Download the suite, generate your environment, and deploy the apps you need —
              locally or in the cloud. Everything is open-source, modular, and built to grow with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/get-started"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl inline-flex items-center gap-2"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.a
                href="https://github.com/myAI-tech"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg"
              >
                View on GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
