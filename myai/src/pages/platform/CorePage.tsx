import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Database, Server, Shield, Zap, Workflow, Lock,
  Check, ArrowRight, ChevronRight, Globe, Cpu, Code2, Settings,
} from "lucide-react";

const features = [
  { icon: Workflow, title: "Runtime Orchestration", desc: "Core manages the lifecycle of every app, persona, and task in your suite. Service discovery, health checks, and graceful degradation built-in." },
  { icon: Shield, title: "Identity & Auth", desc: "JWT-based authentication with pluggable providers (local, LDAP, OAuth2). Every request is authenticated and authorized before it touches your data." },
  { icon: Database, title: "Context Management", desc: "Core maintains a shared context store that all apps can read and write to. AI personas stay coherent across Council, AIDE, and KnowLedger." },
  { icon: Lock, title: "Policy Engine", desc: "Define fine-grained policies for what apps, personas, and users can do. Policies are enforced at the API layer — no app can bypass them." },
  { icon: Zap, title: "Real-Time Event Bus", desc: "WebSocket-backed event bus for live updates across all apps. A Council message can trigger an AIDE task trigger a KnowLedger update — instantly." },
  { icon: Code2, title: "App Contracts", desc: "Each myAI app declares its capabilities and requirements via a typed contract. Core validates compatibility and wires dependencies automatically." },
];

const endpoints = [
  { method: "GET", path: "/api/personas", desc: "List available AI personas" },
  { method: "POST", path: "/api/chat", desc: "Send a message to a persona" },
  { method: "WS", path: "/api/stream", desc: "Stream responses in real-time" },
  { method: "GET", path: "/api/context", desc: "Read shared context store" },
  { method: "POST", path: "/api/context", desc: "Write to context store" },
  { method: "GET", path: "/api/apps", desc: "Discover registered apps" },
];

export default function CorePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-blue-500/5 to-indigo-500/5 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-3 py-1.5 rounded-full mb-4">
              <Database className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Platform Foundation</span>
            </div>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Database className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              myAI{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Core
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The open API backbone of the entire myAI suite. Handles identity, context, orchestration,
              and governance so every app can focus on what it does best.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/get-started" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://github.com/myAI-tech/core" target="_blank" rel="noreferrer"
                className="border border-border px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-muted/50 transition-colors">
                View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Core provides</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Core is the only required component in the myAI suite. Every other app is optional — but all of them depend on Core.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="bg-card rounded-2xl p-5 border border-border/50 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-3">
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

      {/* API Reference Preview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Core API endpoints</h2>
            <p className="text-muted-foreground text-sm">RESTful + WebSocket API. OpenAPI spec included.</p>
          </motion.div>
          <div className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-lg">
            {endpoints.map((ep, i) => (
              <div key={i} className={`flex items-center gap-4 px-5 py-3.5 text-sm font-mono ${i > 0 ? "border-t border-border/50" : ""}`}>
                <span className={`w-12 text-xs font-bold px-2 py-0.5 rounded ${
                  ep.method === "GET" ? "bg-blue-500/10 text-blue-600" :
                  ep.method === "POST" ? "bg-green-500/10 text-green-600" :
                  "bg-purple-500/10 text-purple-600"
                }`}>
                  {ep.method}
                </span>
                <span className="text-foreground/80 flex-1">{ep.path}</span>
                <span className="text-muted-foreground text-xs hidden sm:block">{ep.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deploy anywhere */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Deploy anywhere</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { icon: Server, label: "Local / Homelab" },
              { icon: Globe, label: "Any VPS" },
              { icon: Cpu, label: "Cloud (AWS, GCP, Azure)" },
              { icon: Shield, label: "Air-gapped" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-card border border-border/50 rounded-xl p-4">
                  <Icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Build on an open foundation.</h2>
            <p className="text-white/90 mb-8">Free, open-source, MIT licensed. No vendor lock-in, ever.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/get-started" className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2">
                Get Started <ChevronRight className="w-4 h-4" />
              </Link>
              <a href="https://github.com/myAI-tech/core" target="_blank" rel="noreferrer"
                className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-xl font-bold">
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
