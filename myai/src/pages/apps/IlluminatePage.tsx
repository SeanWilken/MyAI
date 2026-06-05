import { Link } from "react-router";
import { motion } from "motion/react";
import { BookOpen, Check, ArrowRight, ChevronRight, ListChecks, Map, Download, Sparkles, Zap, FileText } from "lucide-react";

const features = [
  { icon: Map, title: "Interactive Walkthroughs", desc: "Step-by-step flows with decision points, branching paths, and contextual help at every stage." },
  { icon: ListChecks, title: "Progress Tracking", desc: "Track completion across your team. See who's done what, spot bottlenecks, and measure skill acquisition over time." },
  { icon: Download, title: "Knowledge Export", desc: "Export any guide as a PDF, web page, or structured SOP. Share with your team or embed in your documentation." },
  { icon: Sparkles, title: "AI-Assisted Authoring", desc: "Describe a process in natural language and let AI scaffold the walkthrough for you. Edit and refine from there." },
  { icon: Zap, title: "Skill Building Paths", desc: "Chain guides into learning paths. New team members follow structured onboarding; experienced members tackle advanced flows." },
  { icon: FileText, title: "Cheatsheet Generation", desc: "Automatically condense any guide into a printable cheatsheet. Perfect for high-frequency reference material." },
];

export default function IlluminatePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-cyan-500/5 to-blue-500/5 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-600">Coming Soon</span>
            </div>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              myAI{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Illuminate
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Guided execution for complex processes. Turn any workflow into an interactive, AI-assisted walkthrough
              your team can follow, complete, and export.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/get-started" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90">
                Get Notified at Launch <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://github.com/myAI-tech" target="_blank" rel="noreferrer"
                className="border border-border px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-muted/50 transition-colors">
                Follow on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Planned features</h2>
            <p className="text-muted-foreground">What Illuminate will do when it launches as part of the myAI suite.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="bg-card rounded-2xl p-5 border border-border/50">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1.5">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's available now */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-4">While you wait — what's available now</h3>
            <ul className="space-y-2 mb-6">
              {[
                "Council — AI-assisted team collaboration and planning rooms",
                "KnowLedger — structured knowledge graphs and concept maps",
                "AIDE — self-hosted code editor with optional AI features",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/get-started" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 hover:underline">
              Start with the full suite today <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
