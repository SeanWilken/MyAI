import { Link } from "react-router";
import { motion } from "motion/react";
import type { ElementType } from "react";
import {
  Code2,
  Zap,
  Shield,
  Globe,
  Webhook,
  Terminal,
  GitBranch,
  ArrowRight,
  ChevronRight,
  BookMarked,
  Layers,
  Database,
} from "lucide-react";

interface DocSectionProps {
  icon: ElementType;
  title: string;
  description: string;
  gradient: string;
  topics: string[];
  status?: "available" | "in-progress" | "planned";
}

const sections: DocSectionProps[] = [
  {
    icon: Zap,
    title: "Quick Start",
    description:
      "Get from zero to a working API integration in minutes. Covers authentication, your first request, and the core concepts you need to know.",
    gradient: "from-blue-600 to-indigo-600",
    topics: ["Installation", "Authentication", "First API call", "Environment setup", "Common patterns"],
    status: "in-progress",
  },
  {
    icon: Code2,
    title: "REST API Reference",
    description:
      "Complete reference for all Core API endpoints — personas, chat, context, apps, users, and more. Includes request/response schemas and examples.",
    gradient: "from-green-600 to-emerald-600",
    topics: ["/v1/auth/me", "/v1/context/resolve", "/v1/context/explain", "/v1/knowledge/entities/upsert", "/v1/graph/ingest-delta", "/v1/apps"],
    status: "in-progress",
  },
  {
    icon: Globe,
    title: "WebSocket API",
    description:
      "Real-time streaming for chat responses, live context updates, and event subscriptions. Covers connection lifecycle, message formats, and error handling.",
    gradient: "from-purple-600 to-pink-600",
    topics: ["Connection setup", "Streaming chat", "Event subscriptions", "Reconnect strategies", "Message formats"],
    status: "planned",
  },
  {
    icon: Shield,
    title: "Authentication & Authorization",
    description:
      "JWT-based auth, API keys, OAuth2 providers, and RBAC scopes. How to secure your integration and manage access at the API layer.",
    gradient: "from-amber-600 to-orange-600",
    topics: ["JWT tokens", "API keys", "OAuth2 setup", "RBAC scopes", "Token rotation", "Session management"],
    status: "in-progress",
  },
  {
    icon: Layers,
    title: "SDKs & Client Libraries",
    description:
      "Official and community client libraries for TypeScript/JavaScript, Python, and more. Type-safe wrappers around the Core API.",
    gradient: "from-cyan-600 to-blue-600",
    topics: ["TypeScript SDK", "Python SDK", "OpenAPI spec", "Code generation", "Type definitions"],
    status: "planned",
  },
  {
    icon: Webhook,
    title: "Webhooks & Events",
    description:
      "Subscribe to platform events — message sent, persona activated, context updated, task completed. Integrate myAI into your own systems.",
    gradient: "from-rose-600 to-pink-600",
    topics: ["Event types", "Webhook registration", "Payload schemas", "Retry behavior", "Security (HMAC)"],
    status: "planned",
  },
  {
    icon: Terminal,
    title: "Integration Guides",
    description:
      "Step-by-step guides for common integration patterns: embedding Council in your app, calling AIDE programmatically, querying KnowLedger from external tools.",
    gradient: "from-violet-600 to-purple-600",
    topics: ["Embed Council", "AIDE automation", "KnowLedger queries", "Custom personas", "Context injection"],
    status: "planned",
  },
  {
    icon: Database,
    title: "Core Architecture",
    description:
      "How Core works under the hood — the app contract system, context store, policy engine, and event bus. Essential reading for platform contributors.",
    gradient: "from-slate-600 to-gray-700",
    topics: ["App contracts", "Context store model", "Policy engine", "Event bus internals", "Plugin system"],
    status: "planned",
  },
];

const statusBadge = {
  available: { label: "Available", className: "bg-green-500/10 text-green-700 border-green-500/20" },
  "in-progress": { label: "In Progress", className: "bg-amber-500/10 text-amber-700 border-amber-500/20" },
  planned: { label: "Planned", className: "bg-muted text-muted-foreground border-border/50" },
};

export default function APIDocsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border/50 bg-gradient-to-br from-background via-blue-500/5 to-indigo-500/5 py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
            <Link to="/docs" className="hover:text-foreground transition-colors">Docs</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">API & Platform Integration</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">API & Platform Integration</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Everything you need to integrate with the myAI Core API, build on the platform,
              and connect your own systems to the suite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections grid */}
      <section className="py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {sections.map((section, i) => {
              const Icon = section.icon;
              const badge = statusBadge[section.status ?? "planned"];
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border/50 rounded-2xl p-5 sm:p-6 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-sm`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${badge.className}`}>
                      {badge.label}
                    </span>
                  </div>

                  <h2 className="font-bold mb-2">{section.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {section.description}
                  </p>

                  <ul className="space-y-1">
                    {section.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-border flex-shrink-0" />
                        <span className="font-mono">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Base URL callout */}
      <section className="py-8 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-foreground/5 border border-border/50 rounded-2xl p-5 sm:p-6">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Base URL
            </div>
            <div className="font-mono text-sm bg-background border border-border/50 rounded-lg px-4 py-3 mb-3">
              http://localhost:8000
              <span className="text-muted-foreground ml-3">— Core default (POC / local)</span>
            </div>
            <div className="font-mono text-xs bg-background border border-border/50 rounded-lg px-4 py-2.5 mb-4 text-muted-foreground">
              <span className="text-foreground/60">env: </span>VITE_KAIROS_CORE_API_BASE_URL=http://localhost:8000
            </div>
            <p className="text-sm text-muted-foreground">
              Configure <code className="bg-muted px-1 py-0.5 rounded text-xs">VITE_KAIROS_CORE_API_BASE_URL</code> in your
              client environment to point at your Core instance. All API requests go directly to your server —
              no traffic is routed through myAI infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Footer links */}
      <section className="py-8 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors">
              <BookMarked className="w-3.5 h-3.5" /> All Docs
            </Link>
            <Link to="/docs/apps" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors">
              <ArrowRight className="w-3.5 h-3.5" /> App Guides
            </Link>
            <Link to="/platform/core" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors">
              <Database className="w-3.5 h-3.5" /> Core Platform
            </Link>
          </div>
          <a href="https://github.com/myAI-tech" target="_blank" rel="noreferrer"
            className="text-sm text-blue-600 hover:underline flex items-center gap-1.5">
            <GitBranch className="w-3.5 h-3.5" /> View source on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
