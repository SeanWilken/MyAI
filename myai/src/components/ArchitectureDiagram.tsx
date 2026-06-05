import { motion } from "motion/react";
import { Database, Settings, Palette, Users, Code2, Lightbulb, BookOpen, Gamepad2 } from "lucide-react";
import { useEffect, useState } from "react";

const products = [
  { name: "Core", icon: Database, x: 50, y: 45, size: "large", gradient: "from-blue-600 to-indigo-600", layer: 0 },
  { name: "Studio", icon: Settings, x: 25, y: 25, size: "medium", gradient: "from-blue-500 to-indigo-500", layer: 1 },
  { name: "UX", icon: Palette, x: 75, y: 25, size: "medium", gradient: "from-blue-500 to-indigo-500", layer: 1 },
  { name: "Council", icon: Users, x: 15, y: 60, size: "small", gradient: "from-purple-600 to-pink-600", layer: 2 },
  { name: "AIDE", icon: Code2, x: 85, y: 60, size: "small", gradient: "from-green-600 to-emerald-600", layer: 2 },
  { name: "KnowLedger", icon: Lightbulb, x: 10, y: 85, size: "small", gradient: "from-amber-600 to-orange-600", layer: 2 },
  { name: "Illuminate", icon: BookOpen, x: 50, y: 90, size: "small", gradient: "from-cyan-600 to-blue-600", layer: 2 },
  { name: "IBA", icon: Gamepad2, x: 90, y: 85, size: "small", gradient: "from-rose-600 to-pink-600", layer: 2 }
];

const connections = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 0, to: 3 },
  { from: 0, to: 4 },
  { from: 0, to: 5 },
  { from: 0, to: 6 },
  { from: 0, to: 7 }
];

export function ArchitectureDiagram() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-background via-primary/5 to-background rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ x: `${particle.x}%`, y: `${particle.y}%`, opacity: 0 }}
          animate={{
            x: [`${particle.x}%`, `${particle.x + 10}%`, `${particle.x}%`],
            y: [`${particle.y}%`, `${particle.y - 10}%`, `${particle.y}%`],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          className="absolute w-1 h-1 rounded-full bg-primary"
        />
      ))}

      {/* Glow effect behind core */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-[100px]"
      />

      <svg className="absolute inset-0 w-full h-full">
        <defs>
          {connections.map((_, i) => (
            <linearGradient key={i} id={`lineGradient${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.8" />
            </linearGradient>
          ))}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {connections.map((conn, i) => {
          const from = products[conn.from];
          const to = products[conn.to];
          return (
            <g key={i}>
              {/* Animated line */}
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 + i * 0.15, ease: "easeOut" }}
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke={`url(#lineGradient${i})`}
                strokeWidth="2"
                filter="url(#glow)"
              />
              {/* Traveling particle */}
              <motion.circle
                initial={{ opacity: 0 }}
                animate={{
                  offsetDistance: ["0%", "100%"],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 3,
                  delay: 1 + i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                r="3"
                fill="var(--primary)"
                filter="url(#glow)"
              >
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${1 + i * 0.2}s`}
                >
                  <mpath href={`#path${i}`} />
                </animateMotion>
              </motion.circle>
              {/* Hidden path for particle motion */}
              <path
                id={`path${i}`}
                d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          );
        })}
      </svg>

      {products.map((product, i) => {
        const Icon = product.icon;
        const sizes = {
          large: "w-24 h-24",
          medium: "w-20 h-20",
          small: "w-16 h-16"
        };
        const iconSizes = {
          large: "w-12 h-12",
          medium: "w-9 h-9",
          small: "w-7 h-7"
        };

        let productSize = sizes[product.size as keyof typeof iconSizes]

        let iconSize = iconSizes[product.size as keyof typeof iconSizes]

        return (
          <motion.div
            key={product.name}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.4 + i * 0.1,
              type: "spring",
              stiffness: 200
            }}
            style={{
              position: "absolute",
              left: `${product.x}%`,
              top: `${product.y}%`,
              transform: "translate(-50%, -50%)"
            }}
            className="flex flex-col items-center gap-3 z-10"
          >
            {/* Pulsing glow ring */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.2, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className={`absolute ${productSize} rounded-2xl bg-gradient-to-br ${product.gradient} blur-xl`}
            />

            <motion.div
              whileHover={{
                scale: 1.15,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              {/* Node container with glassmorphism */}
              <div className={`${productSize} rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-2xl border-4 border-background backdrop-blur-sm relative overflow-hidden group cursor-pointer`}>
                {/* Shine effect */}
                <motion.div
                  initial={{ x: "-100%", y: "-100%" }}
                  whileHover={{ x: "100%", y: "100%" }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"
                  style={{ transform: "skew(-10deg)" }}
                />

                <motion.div
                  animate={{
                    rotate: product.size === "large" ? [0, 360] : 0
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Icon className={`${iconSize} text-white drop-shadow-lg relative z-10`} />
                </motion.div>

                {/* Core badge */}
                {product.size === "large" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: "spring" }}
                    className="absolute -top-2 -right-2 bg-gradient-to-br from-amber-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full shadow-lg border-2 border-background"
                  >
                    Core
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Label with background */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="text-sm font-semibold text-foreground bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg border border-border/50"
            >
              {product.name}
            </motion.span>
          </motion.div>
        );
      })}

      {/* Corner decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1 }}
        className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary to-transparent rounded-br-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-primary to-transparent rounded-tl-full"
      />
    </div>
  );
}
