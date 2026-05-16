import { Link } from "react-router";
import { motion } from "motion/react";
import {
  BookMarked,
  Code2,
  Layers,
  ArrowRight,
  GitBranch,
  Users,
  Lightbulb,
  Database,
  Settings,
  Palette,
  BookOpen,
  Orbit,
  AudioWaveform,
  Gamepad2,
  Flower,
} from "lucide-react";

const sections = [
  {
    to: "/docs/api",
    icon: Code2,
    title: "API & Platform Integration",
    description:
      "REST API reference, WebSocket streams, authentication, SDK usage, and guides for integrating with or building on top of the myAI Core platform.",
    gradient: "from-blue-600 to-indigo-600",
    tags: ["REST API", "WebSocket", "Auth", "SDKs", "Webhooks"],
  },
  {
    to: "/docs/apps",
    icon: Layers,
    title: "Using the Apps",
    description:
      "Walkthroughs, workflow guides, and FAQs for every myAI application — Council, AIDE, KnowLedger, and more. Links to source repos for deeper reference.",
    gradient: "from-purple-600 to-pink-600",
    tags: ["Council", "AIDE", "KnowLedger", "Walkthroughs", "FAQs"],
  },
];

const appLinks = [
  { label: "Council", to: "/apps/council", icon: Users, color: "text-purple-600" },
  { label: "AIDE", to: "/apps/aide", icon: Code2, color: "text-green-600" },
  { label: "KnowLedger", to: "/apps/knowledger", icon: Lightbulb, color: "text-amber-600" },
  { label: "Illuminate", to: "/apps/illuminate", icon: BookOpen, color: "text-cyan-600" },
  { label: "Conjure", to: "/apps/conjure", icon: Orbit, color: "text-indigo-600" },
  { label: "Instructscription", to: "/apps/instructscription", icon: AudioWaveform, color: "text-rose-600" },
  { label: "Adventures", to: "/apps/iba", icon: Gamepad2, color: "text-orange-600" },
  { label: "Core API", to: "/platform/core", icon: Database, color: "text-blue-600" },
  { label: "Studio", to: "/platform/studio", icon: Settings, color: "text-violet-600" },
  { label: "UX Craft", to: "/platform/ux-craft", icon: Palette, color: "text-teal-600" },
];

export default function DocsHub() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-slate-500/5 to-blue-500/5 border-b border-border/50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-slate-500/10 border border-slate-500/20 px-3 py-1.5 rounded-full mb-5">
              <Flower className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-semibold text-slate-600">myAI Documentation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Everything you need to build, run, and extend myAI
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From integrating with the Core API to using every application in the suite —
              documentation, walkthroughs, and source references all in one place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main section cards */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-5">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                >
                  <Link
                    to={section.to}
                    className="group block bg-card border border-border/50 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-border transition-all h-full"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center mb-5 shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {section.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {section.tags.map((tag) => (
                        <span key={tag} className="bg-muted text-muted-foreground text-xs px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                      Browse docs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick jump to apps */}
      <section className="py-10 sm:py-12 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
            Jump to an app
          </h3>
          <div className="flex flex-wrap gap-2">
            {appLinks.map((app) => {
              const Icon = app.icon;
              return (
                <Link
                  key={app.to}
                  to={app.to}
                  className="flex items-center gap-2 bg-muted/50 hover:bg-muted border border-border/50 rounded-full px-3 py-1.5 text-sm transition-colors"
                >
                  <Icon className={`w-3.5 h-3.5 ${app.color}`} />
                  <span>{app.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* GitHub callout */}
      <section className="py-10 sm:py-12 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-muted/40 border border-border/50 rounded-2xl px-6 py-5">
            <GitBranch className="w-6 h-6 text-muted-foreground flex-shrink-0" />
            <div className="flex-1">
              <div className="font-semibold mb-0.5">Source-level documentation</div>
              <div className="text-sm text-muted-foreground">
                Each repository has its own README, inline docs, and issue tracker.
                For deep technical reference, head to the source.
              </div>
            </div>
            <a
              href="https://github.com/seanwilken"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-blue-600 hover:underline whitespace-nowrap flex items-center gap-1"
            >
              github.com/seanwilken <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
