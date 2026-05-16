import { Link } from "react-router";
import { motion } from "motion/react";
import { Palette, Layers, Sliders, Moon, Layout, Code2, Check, ArrowRight, ChevronRight, Sparkles } from "lucide-react";

const features = [
  { icon: Layers, title: "Component Library", desc: "Dozens of pre-built, accessible components used across all myAI apps. Import them in your own app extensions with one line." },
  { icon: Sliders, title: "Design Tokens", desc: "Every color, spacing, typography, and shadow value is a token. Customize the entire suite appearance by changing a handful of variables." },
  { icon: Moon, title: "Theme System", desc: "Light mode, dark mode, and custom themes supported across all apps. Users set their preference once; it applies everywhere." },
  { icon: Layout, title: "Workspace Layouts", desc: "Standard workspace shells — sidebar, split-panel, fullscreen — pre-built for consistency. Each app plugs in its content, not its chrome." },
  { icon: Code2, title: "Open Source & Extensible", desc: "UX Craft is fully open. Fork it, extend it, or contribute new components. Third-party myAI apps can depend on it directly." },
  { icon: Sparkles, title: "Motion & Animation", desc: "A consistent animation vocabulary across the suite. Entrance animations, hover states, and transitions all follow shared design principles." },
];

export default function UXCraftPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-green-500/5 to-emerald-500/5 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-3 py-1.5 rounded-full mb-4">
              <Palette className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-600">Design System</span>
            </div>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Palette className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              myAI{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                UX Craft
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The shared design system powering every myAI application. One component library, one token system,
              one coherent experience — across the entire suite.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/get-started" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://github.com/seanwilken/ux-craft" target="_blank" rel="noreferrer"
                className="border border-border px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-muted/50 transition-colors">
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Consistency across every surface</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              UX Craft means that Council, AIDE, KnowLedger, and any future app look and feel like they belong together —
              because they share the same foundation.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="bg-card rounded-2xl p-5 border border-border/50 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mb-3">
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

      {/* Token preview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-3">Design token system</h2>
            <p className="text-sm text-muted-foreground">All tokens are CSS custom properties — customize once, apply everywhere.</p>
          </motion.div>
          <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-muted/50 px-5 py-3 text-xs font-semibold text-muted-foreground flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="ml-2">theme.css</span>
            </div>
            <pre className="p-5 text-xs font-mono text-foreground/80 overflow-x-auto leading-relaxed">{`:root {
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --primary: #030213;
  --muted: #ececf0;
  --radius: 0.625rem;
  /* ... 50+ tokens */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... */
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-4">Build on top of UX Craft.</h2>
            <p className="text-white/90 mb-8">Extend myAI with your own apps that look like they belong. Open-source, MIT licensed.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-started" className="bg-white text-green-700 px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2">
                Get Started <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
