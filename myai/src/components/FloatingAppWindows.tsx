import { motion } from "motion/react";
import { Database, Users, Code2, Lightbulb, MessageSquare, Terminal, FileText, Sparkles } from "lucide-react";

export function FloatingAppWindows() {
  const windows = [
    {
      icon: Users,
      title: "Council",
      gradient: "from-purple-600 to-pink-600",
      x: "10%",
      y: "20%",
      rotate: -5,
      delay: 0.2,
      content: (
        <div className="p-4 space-y-2">
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
            <div className="flex-1 bg-muted rounded-lg p-2 text-xs">How should we approach this migration?</div>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500" />
            <div className="flex-1 bg-primary/10 rounded-lg p-2 text-xs">Let me analyze the dependencies...</div>
          </div>
        </div>
      )
    },
    {
      icon: Code2,
      title: "AIDE",
      gradient: "from-green-600 to-emerald-600",
      x: "60%",
      y: "15%",
      rotate: 3,
      delay: 0.4,
      content: (
        <div className="p-3 font-mono text-xs space-y-1">
          <div className="text-green-500">// AI-generated component</div>
          <div className="text-foreground">function <span className="text-blue-500">ProductCard</span>() {"{"}</div>
          <div className="text-muted-foreground pl-4">return &lt;div&gt;...&lt;/div&gt;</div>
          <div className="text-foreground">{"}"}</div>
        </div>
      )
    },
    {
      icon: Lightbulb,
      title: "KnowLedger",
      gradient: "from-amber-600 to-orange-600",
      x: "15%",
      y: "65%",
      rotate: -3,
      delay: 0.6,
      content: (
        <div className="p-3 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="text-xs font-medium">Project Architecture</div>
          </div>
          <div className="grid grid-cols-2 gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded border border-amber-500/30" />
            ))}
          </div>
        </div>
      )
    },
    {
      icon: Database,
      title: "Core API",
      gradient: "from-blue-600 to-indigo-600",
      x: "65%",
      y: "60%",
      rotate: 4,
      delay: 0.8,
      content: (
        <div className="p-3 space-y-1 text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-muted-foreground">GET /api/personas</span>
            <span className="text-green-500 ml-auto">200</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-muted-foreground">POST /api/chat</span>
            <span className="text-green-500 ml-auto">201</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-muted-foreground">WS /api/stream</span>
            <span className="text-blue-500 ml-auto">LIVE</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="relative w-full h-[600px] mb-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20 blur-3xl" />

      {windows.map((window, i) => {
        const Icon = window.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: window.delay, type: "spring" }}
            style={{
              position: "absolute",
              left: window.x,
              top: window.y,
              rotate: window.rotate
            }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              zIndex: 10,
              transition: { duration: 0.3 }
            }}
            className="w-64 cursor-pointer"
          >
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-background/95 backdrop-blur-xl rounded-xl border border-border/50 shadow-2xl overflow-hidden"
            >
              {/* Title bar */}
              <div className={`bg-gradient-to-r ${window.gradient} px-3 py-2 flex items-center gap-2`}>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                </div>
                <div className="flex items-center gap-1.5 text-white ml-1">
                  <Icon className="w-3.5 h-3.5" />
                  <span className="text-xs font-semibold">{window.title}</span>
                </div>
              </div>
              {/* Content */}
              <div className="bg-card">
                {window.content}
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Center focal point */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
          className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-2xl border-4 border-background">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
