import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

interface AppScreenshotProps {
  title: string;
  icon: LucideIcon;
  gradient: string;
  children: React.ReactNode;
  delay?: number;
  size?: "small" | "medium" | "large";
}

export function AppScreenshot({ title, icon: Icon, gradient, children, delay = 0, size = "medium" }: AppScreenshotProps) {
  const sizes = {
    small: "w-full max-w-md",
    medium: "w-full max-w-2xl",
    large: "w-full max-w-5xl"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className={`${sizes[size]} mx-auto perspective-1000`}
    >
      {/* Window chrome */}
      <div className="bg-background/95 backdrop-blur-xl rounded-t-2xl border border-border/50 shadow-2xl overflow-hidden">
        {/* Title bar */}
        <div className={`bg-gradient-to-r ${gradient} px-4 py-3 flex items-center gap-3`}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center gap-2 text-white ml-2">
            <Icon className="w-4 h-4" />
            <span className="text-sm font-semibold">{title}</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-card border-t border-border/50">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
