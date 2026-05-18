import { Link } from "react-router";
import { motion } from "motion/react";
import { Gamepad2, Check, ArrowRight, ChevronRight, Sparkles, Map, Brain, BookOpen, Users, Image } from "lucide-react";

const features = [
  { icon: Image, title: "Prompt-to-Scene Generation", desc: "Describe a moment and IBA generates a vivid illustrated scene. Each image is unique, contextually driven, and stored in your adventure history." },
  { icon: Map, title: "Branching Narratives", desc: "Every choice spawns a new path. IBA tracks the full decision tree so you can backtrack, explore alternatives, and revisit past scenes." },
  { icon: Brain, title: "Adventure Memory", desc: "Characters, places, and plot threads persist across sessions. Your AI narrator remembers everything that happened before." },
  { icon: Users, title: "Collaborative Adventures", desc: "Multiple players can join a session, each making choices that affect the shared world. AI mediates and narrates for the group." },
  { icon: BookOpen, title: "Educational Modes", desc: "Run history, language, or science adventures where story events are grounded in real facts. Learning through immersive narrative." },
  { icon: Sparkles, title: "Custom Worlds & Characters", desc: "Define your own setting, lore, and characters. IBA's AI narrator stays faithful to your world-building rules across any adventure." },
];

export default function IBAPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-orange-500/5 to-yellow-500/5 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-semibold text-orange-600">Coming Soon</span>
            </div>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-600 to-yellow-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Gamepad2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              myAI{" "}
              <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Image Based Adventures
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Transform prompts into living, illustrated adventures. Branching narratives, generated scenes,
              persistent worlds — all running on your own infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/get-started" className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90">
                Get Notified at Launch <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://github.com/myAI-Tech" target="_blank" rel="noreferrer"
                className="border border-border px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-muted/50 transition-colors">
                Follow on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Planned features</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="bg-card rounded-2xl p-5 border border-border/50">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-600 to-yellow-600 flex items-center justify-center mb-3">
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

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-muted-foreground mb-4">Explore what's available in myAI today.</p>
          <Link to="/get-started" className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:underline">
            Get started with the suite <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
