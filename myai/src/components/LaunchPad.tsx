import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Users,
  Code2,
  Lightbulb,
  BookOpen,
  Orbit,
  AudioWaveform,
  Gamepad2,
  Database,
  Settings,
  Palette,
  Flower,
  GitBranch,
  BookMarked,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface AppEntry {
  id: string;
  label: string;
  shortLabel?: string;
  descriptor: string;
  to?: string;
  href?: string;
  icon: LucideIcon;
  gradient: string;
  soon?: boolean;
}

const APP_SECTIONS: { title: string; items: AppEntry[] }[] = [
  {
    title: "Applications",
    items: [
      {
        id: "council",
        label: "Council",
        descriptor: "Collaborate with AI personas",
        to: "/apps/council",
        icon: Users,
        gradient: "from-purple-600 to-pink-600",
      },
      {
        id: "aide",
        label: "AIDE",
        descriptor: "Self-hosted AI-native IDE",
        to: "/apps/aide",
        icon: Code2,
        gradient: "from-green-600 to-emerald-600",
      },
      {
        id: "knowledger",
        label: "KnowLedger",
        descriptor: "Visual knowledge graphs",
        to: "/apps/knowledger",
        icon: Lightbulb,
        gradient: "from-amber-600 to-orange-600",
      },
      {
        id: "illuminate",
        label: "Illuminate",
        descriptor: "Guided workflows & SOPs",
        to: "/apps/illuminate",
        icon: BookOpen,
        gradient: "from-cyan-600 to-blue-600",
        soon: true,
      },
      {
        id: "conjure",
        label: "Conjure",
        descriptor: "AI image & video generation",
        to: "/apps/conjure",
        icon: Orbit,
        gradient: "from-indigo-600 to-purple-600",
        soon: true,
      },
      {
        id: "instructscription",
        label: "Instructscription",
        shortLabel: "Instructscr.",
        descriptor: "Audio transcription & synthesis",
        to: "/apps/instructscription",
        icon: AudioWaveform,
        gradient: "from-rose-600 to-pink-600",
        soon: true,
      },
      {
        id: "iba",
        label: "Adventures",
        descriptor: "AI-powered story adventures",
        to: "/apps/iba",
        icon: Gamepad2,
        gradient: "from-orange-600 to-yellow-600",
        soon: true,
      },
    ],
  },
  {
    title: "Platform",
    items: [
      {
        id: "core",
        label: "Core API",
        descriptor: "Runtime backbone & orchestration",
        to: "/platform/core",
        icon: Database,
        gradient: "from-blue-600 to-indigo-600",
      },
      {
        id: "studio",
        label: "Studio",
        descriptor: "Admin, roles & governance",
        to: "/platform/studio",
        icon: Settings,
        gradient: "from-violet-600 to-purple-600",
      },
      {
        id: "ux-craft",
        label: "UX Craft",
        descriptor: "Shared design system",
        to: "/platform/ux-craft",
        icon: Palette,
        gradient: "from-teal-600 to-green-600",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        id: "get-started",
        label: "Get Started",
        descriptor: "Install & configure your suite",
        to: "/get-started",
        icon: Zap,
        gradient: "from-blue-600 to-indigo-600",
      },
      {
        id: "docs",
        label: "Documentation",
        descriptor: "Guides & API reference",
        to: "/docs",
        icon: BookMarked,
        gradient: "from-slate-600 to-slate-700",
      },
      {
        id: "github",
        label: "GitHub",
        descriptor: "Source code & releases",
        href: "https://github.com/myAI-Tech",
        icon: GitBranch,
        gradient: "from-gray-700 to-gray-900",
      },
    ],
  },
];

// Flat list for staggering all icons in sequence
const ALL_ITEMS = APP_SECTIONS.flatMap((s) => s.items);

interface LaunchPadProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LaunchPad({ isOpen, onClose }: LaunchPadProps) {
  const navigate = useNavigate();

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavigate = (item: AppEntry) => {
    onClose();
    if (item.href) {
      window.open(item.href, "_blank", "noreferrer");
    } else if (item.to) {
      navigate(item.to);
    }
  };

  // Get global stagger index for an item
  const getStaggerIndex = (itemId: string) =>
    ALL_ITEMS.findIndex((i) => i.id === itemId);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="launchpad-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-background/85 backdrop-blur-2xl"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="launchpad-panel"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[201] overflow-y-auto pointer-events-none"
          >
            <div className="min-h-full flex flex-col pointer-events-auto">
              {/* Header bar */}
              <div className="flex items-center justify-between px-6 py-5 max-w-4xl mx-auto w-full">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow">
                    <Flower className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">myAI</span>
                </div>

                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-muted/70 hover:bg-muted flex items-center justify-center transition-colors"
                  aria-label="Close launcher"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* App grid */}
              <div className="flex-1 px-6 pb-16 max-w-4xl mx-auto w-full">
                {APP_SECTIONS.map((section) => (
                  <div key={section.title} className="mb-10">
                    {/* Section label */}
                    <div className="text-[11px] font-semibold text-muted-foreground/60 uppercase tracking-widest mb-5 px-1">
                      {section.title}
                    </div>

                    {/* Icons row */}
                    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-2 sm:gap-3">
                      {section.items.map((item) => {
                        const Icon = item.icon;
                        const staggerIdx = getStaggerIndex(item.id);

                        return (
                          <motion.button
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.6, y: 12 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.7, y: 8 }}
                            transition={{
                              delay: staggerIdx * 0.03,
                              duration: 0.35,
                              type: "spring",
                              stiffness: 300,
                              damping: 22,
                            }}
                            whileHover={{ scale: 1.12, y: -4 }}
                            whileTap={{ scale: 0.92 }}
                            onClick={() => handleNavigate(item)}
                            className="flex flex-col items-center gap-2 p-2 rounded-2xl hover:bg-muted/40 transition-colors cursor-pointer group"
                          >
                            {/* Icon square */}
                            <div className="relative">
                              <div
                                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                              >
                                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                              </div>

                              {/* Coming soon badge */}
                              {item.soon && (
                                <div className="absolute -top-1 -right-1 bg-amber-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none shadow">
                                  SOON
                                </div>
                              )}
                            </div>

                            {/* Label */}
                            <span className="text-[11px] sm:text-xs font-semibold text-center leading-tight line-clamp-1 w-full">
                              {item.shortLabel ?? item.label}
                            </span>

                            {/* Descriptor */}
                            <span className="text-[10px] text-muted-foreground text-center leading-tight line-clamp-2 hidden sm:block w-full">
                              {item.descriptor}
                            </span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Bottom hint */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 }}
                  className="text-center text-xs text-muted-foreground/50 mt-4"
                >
                  Press <kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono">Esc</kbd> to close
                </motion.p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
