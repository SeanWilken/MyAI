import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Users,
  Code2,
  Lightbulb,
  BookOpen,
  Orbit,
  AudioWaveform,
  Gamepad2,
  ArrowRight,
  ChevronRight,
  GitBranch,
  BookMarked,
  HelpCircle,
  Map,
  Play,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface AppDocEntry {
  id: string;
  label: string;
  descriptor: string;
  to: string;
  icon: LucideIcon;
  gradient: string;
  repoPath: string;
  soon?: boolean;
  docSections: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
}

const APPS: AppDocEntry[] = [
  {
    id: "council",
    label: "Council",
    descriptor: "Collaborative AI workspaces",
    to: "/apps/council",
    icon: Users,
    gradient: "from-purple-600 to-pink-600",
    repoPath: "seanwilken/council",
    docSections: [
      { icon: Play, title: "Getting Started", description: "Create your first room, invite participants, and configure AI personas." },
      { icon: Map, title: "Walkthroughs", description: "Engineering reviews, product planning sessions, research deep-dives, and more." },
      { icon: HelpCircle, title: "FAQ", description: "Persona configuration, room permissions, WebSocket troubleshooting, and data handling." },
      { icon: GitBranch, title: "Source & API", description: "Council repo documentation, schema reference, and extension hooks." },
    ],
  },
  {
    id: "aide",
    label: "AIDE",
    descriptor: "Self-hosted AI-native IDE",
    to: "/apps/aide",
    icon: Code2,
    gradient: "from-green-600 to-emerald-600",
    repoPath: "seanwilken/aide",
    docSections: [
      { icon: Play, title: "Getting Started", description: "Install locally or as part of the suite. Configure your AI provider, open a project, and explore the four work modes." },
      { icon: Map, title: "Walkthroughs", description: "Context panel navigation, work mode switching, sealed modules, container environments, and Futurelog capture." },
      { icon: HelpCircle, title: "FAQ", description: "AI provider setup, file locking, container environments, multi-repo workspaces, and context scope configuration." },
      { icon: GitBranch, title: "Source & API", description: "AIDE repo, AIDE Server API reference, AIR handoff spec, and runtime container documentation." },
    ],
  },
  {
    id: "knowledger",
    label: "KnowLedger",
    descriptor: "Visual knowledge graphs",
    to: "/apps/knowledger",
    icon: Lightbulb,
    gradient: "from-amber-600 to-orange-600",
    repoPath: "seanwilken/knowledger",
    docSections: [
      { icon: Play, title: "Getting Started", description: "Create your first knowledge graph, add nodes, and link concepts." },
      { icon: Map, title: "Walkthroughs", description: "Project architecture maps, rubber duck sessions, team knowledge bases, and cross-app references." },
      { icon: HelpCircle, title: "FAQ", description: "Graph storage format, export options, syncing across devices, and suite integration." },
      { icon: GitBranch, title: "Source & API", description: "KnowLedger repo, graph query API, and embedding guide." },
    ],
  },
  {
    id: "illuminate",
    label: "Illuminate",
    descriptor: "Guided workflows & SOPs",
    to: "/apps/illuminate",
    icon: BookOpen,
    gradient: "from-cyan-600 to-blue-600",
    repoPath: "seanwilken/illuminate",
    soon: true,
    docSections: [
      { icon: Play, title: "Getting Started", description: "Create interactive walkthroughs and guided flows for your team." },
      { icon: Map, title: "Walkthroughs", description: "Onboarding flows, SOP authoring, progress tracking, and export to PDF." },
      { icon: HelpCircle, title: "FAQ", description: "Common questions about flow branching, AI authoring, and team sharing." },
      { icon: GitBranch, title: "Source & API", description: "Illuminate repo and flow definition schema." },
    ],
  },
  {
    id: "conjure",
    label: "Conjure",
    descriptor: "AI image & video generation",
    to: "/apps/conjure",
    icon: Orbit,
    gradient: "from-indigo-600 to-purple-600",
    repoPath: "seanwilken/conjure",
    soon: true,
    docSections: [
      { icon: Play, title: "Getting Started", description: "Connect your image generation backend and run your first generation." },
      { icon: Map, title: "Walkthroughs", description: "Brand-consistent generation, batch workflows, and domain grounding." },
      { icon: HelpCircle, title: "FAQ", description: "Model compatibility, style transfer, storage, and output formats." },
      { icon: GitBranch, title: "Source & API", description: "Conjure repo and generation API reference." },
    ],
  },
  {
    id: "instructscription",
    label: "Instructscription",
    descriptor: "Audio transcription & synthesis",
    to: "/apps/instructscription",
    icon: AudioWaveform,
    gradient: "from-rose-600 to-pink-600",
    repoPath: "seanwilken/instructscription",
    soon: true,
    docSections: [
      { icon: Play, title: "Getting Started", description: "Upload audio for transcription or convert text to narrated audio." },
      { icon: Map, title: "Walkthroughs", description: "Podcast generation from notes, meeting transcription, and persona voice tuning." },
      { icon: HelpCircle, title: "FAQ", description: "Supported audio formats, voice provider setup, and export options." },
      { icon: GitBranch, title: "Source & API", description: "Instructscription repo and transcription API." },
    ],
  },
  {
    id: "iba",
    label: "Image Based Adventures",
    descriptor: "AI-powered story adventures",
    to: "/apps/iba",
    icon: Gamepad2,
    gradient: "from-orange-600 to-yellow-600",
    repoPath: "seanwilken/iba",
    soon: true,
    docSections: [
      { icon: Play, title: "Getting Started", description: "Create your first adventure, configure the world, and start exploring." },
      { icon: Map, title: "Walkthroughs", description: "Branching narrative design, character persistence, and multiplayer sessions." },
      { icon: HelpCircle, title: "FAQ", description: "Image generation provider setup, narrative memory, and session storage." },
      { icon: GitBranch, title: "Source & API", description: "IBA repo and adventure definition API." },
    ],
  },
];

export default function AppDocsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border/50 bg-gradient-to-br from-background via-purple-500/5 to-pink-500/5 py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
            <Link to="/docs" className="hover:text-foreground transition-colors">Docs</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">Using the Apps</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-md">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">Using the Apps</h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Walkthroughs, workflow guides, and FAQs for each application in the myAI suite.
              For source-level reference, each card links directly to the GitHub repository.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Onboarding note */}
      <section className="py-5 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-3 bg-blue-500/5 border border-blue-500/20 rounded-xl px-5 py-4">
            <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">The best way to learn is to use it.</span>{" "}
              Each app includes an onboarding flow when you first open it. This docs section supplements
              that with walkthroughs for specific use cases and answers to common questions.
            </p>
          </div>
        </div>
      </section>

      {/* App sections */}
      <section className="py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          {APPS.map((app, i) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border/50 rounded-2xl overflow-hidden"
              >
                {/* App header */}
                <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${app.gradient} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{app.label}</span>
                        {app.soon && (
                          <span className="text-[9px] font-bold bg-amber-500/10 text-amber-700 border border-amber-500/20 px-1.5 py-0.5 rounded-full">
                            COMING SOON
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">{app.descriptor}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      to={app.to}
                      className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      App page <ArrowRight className="w-3 h-3" />
                    </Link>
                    <a
                      href={`https://github.com/${app.repoPath}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <GitBranch className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Doc sub-sections */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border/50">
                  {app.docSections.map((sub) => {
                    const SubIcon = sub.icon;
                    return (
                      <div key={sub.title} className="px-5 py-4 hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <SubIcon className="w-3.5 h-3.5 text-muted-foreground" />
                          <span className="text-xs font-semibold">{sub.title}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {sub.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer nav */}
      <section className="py-8 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors">
              <BookMarked className="w-3.5 h-3.5" /> All Docs
            </Link>
            <Link to="/docs/api" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors">
              <ArrowRight className="w-3.5 h-3.5" /> API Reference
            </Link>
            <Link to="/get-started" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors">
              <ArrowRight className="w-3.5 h-3.5" /> Get Started
            </Link>
          </div>
          <a href="https://github.com/seanwilken" target="_blank" rel="noreferrer"
            className="text-sm text-blue-600 hover:underline flex items-center gap-1.5">
            <GitBranch className="w-3.5 h-3.5" /> github.com/seanwilken
          </a>
        </div>
      </section>
    </div>
  );
}
