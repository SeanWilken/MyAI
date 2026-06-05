import { Check, X } from "lucide-react";
import { motion } from "motion/react";

export function FeatureComparison() {
  const features = [
    { name: "Self-hosted or cloud-hosted", core: true, standalone: false },
    { name: "Open-source", core: true, standalone: false },
    { name: "Bring your own models or APIs", core: true, standalone: false },
    { name: "Transparent reasoning & decision trails", core: true, standalone: false },
    { name: "Persona-level control & constraints", core: true, standalone: false },
    { name: "Modular apps, not a monolith", core: true, standalone: false },
    { name: "Local-first knowledge storage", core: true, standalone: false },
    { name: "Private WebSocket communication", core: true, standalone: false },
    { name: "No vendor lock-in", core: true, standalone: false },
    { name: "User-owned identity & context", core: true, standalone: false },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-xl">
        {/* Header */}
        <div className="grid grid-cols-3 gap-4 p-6 bg-muted/30 border-b border-border/50">
          <div className="font-semibold">Feature</div>
          <div className="text-center">
            <div className="font-semibold mb-1">MyAI Platform</div>
            <div className="text-xs text-muted-foreground">Unified Suite</div>
          </div>
          <div className="text-center">
            <div className="font-semibold mb-1">Standalone Tools</div>
            <div className="text-xs text-muted-foreground">Disconnected Apps</div>
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-border/50">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-3 gap-4 p-4 hover:bg-muted/20 transition-colors"
            >
              <div className="text-sm">{feature.name}</div>
              <div className="flex justify-center">
                {feature.core ? (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                {feature.standalone ? (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
