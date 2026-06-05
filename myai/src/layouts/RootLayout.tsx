import { useState } from "react";
import { Link, Outlet, ScrollRestoration } from "react-router";
import { motion } from "motion/react";
import { Database, LayoutGrid } from "lucide-react";
import { LaunchPad } from "../components/LaunchPad";

export default function RootLayout() {
  const [launchPadOpen, setLaunchPadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollRestoration />

      {/* LaunchPad overlay — rendered outside header so it covers everything */}
      <LaunchPad isOpen={launchPadOpen} onClose={() => setLaunchPadOpen(false)} />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="border-b border-border/50 bg-background/95 backdrop-blur-xl sticky top-0 z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <motion.div
                className="relative w-10 h-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <img src="/myAI.svg" alt="myAI" className="w-10 h-10 rounded-lg shadow-lg" />
              </motion.div>
              <span className="text-lg font-semibold">myAI</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-2">
              {/* Apps dropdown */}
              <div className="relative group">
                <button className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50">
                  Applications
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
                  <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl p-3 w-56 grid grid-cols-1 gap-0.5">
                    {[
                      { label: "Council", to: "/apps/council", color: "text-purple-600" },
                      { label: "AIDE", to: "/apps/aide", color: "text-green-600" },
                      { label: "KnowLedger", to: "/apps/knowledger", color: "text-amber-600" },
                      { label: "Illuminate", to: "/apps/illuminate", color: "text-cyan-600" },
                      { label: "Conjure", to: "/apps/conjure", color: "text-indigo-600" },
                      { label: "Instructscription", to: "/apps/instructscription", color: "text-rose-600" },
                      { label: "Image Based Adventures", to: "/apps/iba", color: "text-orange-600" },
                    ].map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`px-3 py-2 rounded-lg hover:bg-muted/70 transition-colors text-sm font-medium ${item.color}`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Platform dropdown */}
              <div className="relative group">
                <button className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50">
                  Platform
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
                  <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl p-3 w-44 grid grid-cols-1 gap-0.5">
                    {[
                      { label: "Core API", to: "/platform/core" },
                      { label: "Studio", to: "/platform/studio" },
                      { label: "UX Craft", to: "/platform/ux-craft" },
                    ].map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="px-3 py-2 rounded-lg hover:bg-muted/70 transition-colors text-sm font-medium text-foreground"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/docs"
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
              >
                Docs
              </Link>

              <div className="w-px h-5 bg-border/70 mx-1" />

              {/* LaunchPad trigger — desktop */}
              <motion.button
                onClick={() => setLaunchPadOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Open app launcher"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden lg:inline">Launcher</span>
              </motion.button>

              <Link
                to="/get-started"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
            </nav>

            {/* Mobile: launcher + get started */}
            <div className="md:hidden flex items-center gap-2">
              <motion.button
                onClick={() => setLaunchPadOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open app launcher"
                className="w-10 h-10 rounded-xl bg-muted/60 hover:bg-muted flex items-center justify-center transition-colors"
              >
                <LayoutGrid className="w-5 h-5 text-foreground" />
              </motion.button>
              <Link
                to="/get-started"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-6 h-6 text-primary" />
                <span className="font-bold">myAI Platform</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Free and open-source modular AI application ecosystem. Your data, your infrastructure.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/myAI-tech"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  GitHub →
                </a>
                <a
                  href="https://hub.docker.com/u/myai-tech"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Docker →
                </a>
                <button
                  onClick={() => setLaunchPadOpen(true)}
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  All Apps
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Applications</h4>
              <ul className="space-y-2">
                {[
                  { label: "Council", to: "/apps/council" },
                  { label: "AIDE", to: "/apps/aide" },
                  { label: "KnowLedger", to: "/apps/knowledger" },
                  { label: "Illuminate", to: "/apps/illuminate" },
                  { label: "Conjure", to: "/apps/conjure" },
                  { label: "IBA", to: "/apps/iba" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                {[
                  { label: "Core API", to: "/platform/core" },
                  { label: "Studio", to: "/platform/studio" },
                  { label: "UX Craft", to: "/platform/ux-craft" },
                  { label: "Documentation", to: "/docs" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2">
                {[
                  { label: "Install Full Suite", to: "/get-started" },
                  { label: "Install Core + Apps", to: "/get-started" },
                  { label: "AIDE Standalone", to: "/get-started" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.to}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://github.com/myAI-tech"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <span>© 2026 myAI Platform. Open-source under MIT License.</span>
            <button
              onClick={() => setLaunchPadOpen(true)}
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Open App Launcher
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
