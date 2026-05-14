import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  category: "foundation" | "collaboration" | "development" | "knowledge" | "execution" | "creative";
  featured?: boolean;
  delay?: number;
}

const categoryColors = {
  foundation: "from-blue-600 to-indigo-600",
  collaboration: "from-purple-600 to-pink-600",
  development: "from-green-600 to-emerald-600",
  knowledge: "from-amber-600 to-orange-600",
  execution: "from-cyan-600 to-blue-600",
  creative: "from-rose-600 to-pink-600"
};

export function ProductCard({ name, description, icon: Icon, category, featured, delay = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, type: "spring", stiffness: 300 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative bg-gradient-to-br from-card to-card/50 rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all backdrop-blur-sm overflow-hidden group ${
        featured ? "md:col-span-2 lg:col-span-3" : ""
      }`}
    >
      {/* Animated gradient background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 0.1 : 0,
          scale: isHovered ? 1 : 0.8
        }}
        transition={{ duration: 0.4 }}
        className={`absolute inset-0 bg-gradient-to-br ${categoryColors[category]} blur-2xl`}
      />

      {/* Shine effect on hover */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{
          x: isHovered ? "100%" : "-100%",
          opacity: isHovered ? 0.2 : 0
        }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
      />

      <div className="relative z-10">
        {/* Icon with animated background */}
        <motion.div
          className="relative inline-flex mb-5"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Pulsing glow */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.2, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: delay * 0.5
            }}
            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${categoryColors[category]} blur-md`}
          />

          <div className={`relative p-4 rounded-xl bg-gradient-to-br ${categoryColors[category]} shadow-lg`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-lg">{name}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>

        {/* Feature badges */}
        {featured && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: delay + 0.3, type: "spring" }}
            className="absolute top-4 right-4 flex gap-2"
          >
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              Essential
            </span>
          </motion.div>
        )}

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${categoryColors[category]} origin-left`}
        />

        {/* Particle effects on hover */}
        {isHovered && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: "50%",
                  y: "50%",
                  scale: 0,
                  opacity: 1
                }}
                animate={{
                  x: `${50 + (Math.random() - 0.5) * 100}%`,
                  y: `${50 + (Math.random() - 0.5) * 100}%`,
                  scale: Math.random() * 2,
                  opacity: 0
                }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className={`absolute w-1 h-1 rounded-full bg-gradient-to-br ${categoryColors[category]}`}
              />
            ))}
          </>
        )}
      </div>
    </motion.div>
  );
}
