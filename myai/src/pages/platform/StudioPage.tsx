import { Link } from "react-router";
import { motion } from "motion/react";
import { Settings, Users, Shield, Lock, FileText, Zap, Check, ArrowRight, ChevronRight, Building, Key, Activity } from "lucide-react";

const features = [
  { icon: Building, title: "Organization Management", desc: "Create organizations and sub-teams. Manage billing units, quotas, and resource limits per org. Full multi-tenancy support." },
  { icon: Users, title: "User & Role Management", desc: "Invite users, assign roles, and manage permissions with fine-grained RBAC. Roles span across all myAI apps from a single admin panel." },
  { icon: Shield, title: "AI Persona Lifecycle", desc: "Create, configure, publish, and retire AI personas. Define behavioral constraints, knowledge scopes, and interaction policies per persona." },
  { icon: Key, title: "API Key Management", desc: "Issue, rotate, and revoke API keys for apps, integrations, and external services. Scoped permissions per key." },
  { icon: FileText, title: "Audit Logs", desc: "Comprehensive logs of every action — who did what, when, with which AI persona, and what the outcome was. Exportable and retention-configurable." },
  { icon: Activity, title: "Usage Monitoring", desc: "Real-time dashboards showing token usage, API calls, active sessions, and performance metrics across your entire suite." },
];

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-purple-500/5 to-pink-500/5 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-3 py-1.5 rounded-full mb-4">
              <Settings className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600">Platform Administration</span>
            </div>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              myAI{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Studio
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Complete administration for your myAI platform. Manage organizations, users, roles,
              AI personas, and governance — all from one dashboard.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/get-started" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://github.com/myAI-tech/studio" target="_blank" rel="noreferrer"
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
            <h2 className="text-3xl font-bold mb-4">Everything you need to run myAI for a team</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="bg-card rounded-2xl p-5 border border-border/50 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-3">
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

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-4">Studio is always bundled with Core</h2>
            <p className="text-muted-foreground mb-6">
              Whether you run the full suite, Core + selected apps, or just Core alone — Studio is always included.
              It's the administrative backbone that makes everything manageable at scale.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Full Suite", "Core + Select", "AIDE Only (via Core)"].map((mode) => (
                <div key={mode} className="flex items-center gap-2 bg-muted/60 rounded-full px-4 py-2 text-sm">
                  <Check className="w-3.5 h-3.5 text-green-500" />
                  <span>{mode}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-4">Govern your AI platform your way.</h2>
            <p className="text-white/90 mb-8">Open-source, self-hosted, fully auditable.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-started" className="bg-white text-purple-700 px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2">
                Get Started <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
