import { Link } from "react-router";
import { motion } from "motion/react";
import { AudioWaveform, Check, ArrowRight, ChevronRight, Sparkles, Mic, Headphones, FileText, Users, Sliders } from "lucide-react";

const features = [
  { icon: Mic, title: "Audio Transcription", desc: "Transcribe meetings, voice notes, lectures, and recorded conversations with high-accuracy AI — all processed locally or on your server." },
  { icon: Headphones, title: "Text-to-Audio", desc: "Convert any text — notes, articles, documentation — into natural-sounding narration. Study while commuting, exercising, or away from a screen." },
  { icon: AudioWaveform, title: "Podcast-Style Content", desc: "Pick a topic and Instructscription pulls relevant articles, synthesizes them, and delivers a podcast-style deep-dive narrated in your preferred style." },
  { icon: Users, title: "Multi-Persona Narration", desc: "Define AI personas for different voices — host, guest, expert — and generate dynamic multi-voice audio content automatically." },
  { icon: Sliders, title: "Persona Tuning", desc: "Control tone, pacing, vocabulary level, and narrative style per persona. Your AI voices, your style guide." },
  { icon: FileText, title: "Export & Integration", desc: "Export to MP3, integrate with your podcast workflow, or feed generated audio into KnowLedger as an audio knowledge node." },
];

export default function InstructscriptionPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-rose-500/5 to-pink-500/5 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-rose-600" />
              <span className="text-sm font-semibold text-rose-600">Coming Soon</span>
            </div>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-600 to-pink-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
              <AudioWaveform className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              myAI{" "}
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Instructscription
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Transcribe audio, turn notes into podcasts, and study content through AI-narrated audio experiences.
              Your knowledge, in the format that works for how you think.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/get-started" className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90">
                Get Notified at Launch <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://github.com/seanwilken" target="_blank" rel="noreferrer"
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
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-600 to-pink-600 flex items-center justify-center mb-3">
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
          <Link to="/get-started" className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-600 hover:underline">
            Get started with the suite <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
