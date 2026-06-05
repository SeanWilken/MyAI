import { Link } from "react-router";
import { motion } from "motion/react";
import { Orbit, Check, ArrowRight, ChevronRight, Sparkles, Palette, Image, Video, Layers, Cpu } from "lucide-react";

const features = [
  { icon: Image, title: "Image Generation", desc: "Connect Stable Diffusion, ComfyUI, or any OpenAI-compatible image API. Generate contextually grounded images from your domain." },
  { icon: Video, title: "Video Generation", desc: "Stitch scenes, animate concepts, or generate short videos from prompts — with your own GPU or a cloud provider you control." },
  { icon: Palette, title: "Style Consistency", desc: "Train Conjure on your brand assets, style guides, or reference images. Every generation stays on-brand without manual prompting." },
  { icon: Layers, title: "Batch & Variations", desc: "Generate dozens of variations in one run. Pick, refine, and iterate — the full creative loop without leaving your infrastructure." },
  { icon: Sparkles, title: "Context-Grounded Generation", desc: "Conjure reads your KnowLedger and project context so generated assets match your domain — not generic stock imagery." },
  { icon: Cpu, title: "Local or Cloud Compute", desc: "Run Conjure on your own GPU, a cloud VM, or via your existing API keys. You own every output." },
];

export default function ConjurePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-indigo-500/5 to-purple-500/5 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-600">Coming Soon</span>
            </div>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Orbit className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              myAI{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Conjure
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Generative AI for images and video — grounded in your domain, styled for your brand,
              running on infrastructure you control.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/get-started" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90">
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
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-3">
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
          <p className="text-muted-foreground mb-4">Ready to get started with myAI today?</p>
          <Link to="/get-started" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:underline">
            Explore the full suite <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
