import { Lightbulb, Plus, Search, Link2 } from "lucide-react";

export function KnowLedgerPreview() {
  const nodes = [
    { id: 1, x: 20, y: 30, title: "Authentication Strategy", color: "from-blue-500 to-cyan-500", connections: [2, 3] },
    { id: 2, x: 60, y: 20, title: "OAuth 2.0 + PKCE", color: "from-purple-500 to-pink-500", connections: [4] },
    { id: 3, x: 55, y: 50, title: "Token Rotation", color: "from-green-500 to-emerald-500", connections: [4] },
    { id: 4, x: 85, y: 35, title: "Implementation Plan", color: "from-amber-500 to-orange-500", connections: [] },
    { id: 5, x: 15, y: 70, title: "Security Audit", color: "from-rose-500 to-pink-500", connections: [1] }
  ];

  return (
    <div className="h-[500px] flex flex-col">
      {/* Toolbar */}
      <div className="border-b border-border/50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-semibold">API Security Architecture</div>
            <div className="text-xs text-muted-foreground">5 concepts • 4 connections</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-3 py-2 rounded-lg text-sm">
            <Plus className="w-4 h-4" />
            Add Node
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 bg-gradient-to-br from-muted/20 to-muted/5 relative overflow-hidden">
        {/* Grid background */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="grid-knowl" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-knowl)" />
        </svg>

        {/* Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {nodes.flatMap(node =>
            node.connections.map(targetId => {
              const target = nodes.find(n => n.id === targetId);
              if (!target) return null;
              return (
                <line
                  key={`${node.id}-${targetId}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${target.x}%`}
                  y2={`${target.y}%`}
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.3"
                />
              );
            })
          )}
        </svg>

        {/* Nodes */}
        {nodes.map(node => (
          <div
            key={node.id}
            className="absolute cursor-pointer group"
            style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
          >
            {/* Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${node.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity rounded-xl scale-150`} />

            {/* Card */}
            <div className={`relative bg-card border-2 border-border/50 rounded-xl px-4 py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 min-w-[180px]`}>
              <div className="flex items-start gap-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center flex-shrink-0`}>
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm">{node.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {node.connections.length} {node.connections.length === 1 ? 'connection' : 'connections'}
                  </div>
                </div>
              </div>

              {/* Connection indicator */}
              {node.connections.length > 0 && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center border-2 border-background">
                  <Link2 className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Help text */}
        <div className="absolute bottom-4 left-4 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-border/50">
          Click nodes to expand • Drag to connect • Double-click to edit
        </div>
      </div>
    </div>
  );
}
