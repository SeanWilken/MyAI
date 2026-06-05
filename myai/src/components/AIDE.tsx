import { FileText, Folder, ChevronRight, GitBranch, Play, Terminal } from "lucide-react";

export function AIDEPreview() {
  return (
    <div className="h-[500px] flex">
      {/* File tree */}
      <div className="w-64 bg-muted/30 border-r border-border/50 p-3 space-y-1 text-xs overflow-y-auto">
        <div className="flex items-center gap-1 text-muted-foreground mb-2">
          <Folder className="w-4 h-4" />
          <span className="font-semibold">myAI</span>
        </div>
        <div className="pl-3 space-y-0.5">
          <div className="flex items-center gap-1 py-1">
            <ChevronRight className="w-3 h-3" />
            <Folder className="w-3 h-3 text-blue-500" />
            <span>src</span>
          </div>
          <div className="pl-4 space-y-0.5">
            <div className="flex items-center gap-1 py-1">
              <ChevronRight className="w-3 h-3" />
              <Folder className="w-3 h-3 text-blue-500" />
              <span>components</span>
            </div>
            <div className="pl-4 space-y-0.5">
              <div className="flex items-center gap-1 py-1 bg-primary/10 px-2 rounded">
                <FileText className="w-3 h-3 text-green-500" />
                <span>ProductCard.tsx</span>
              </div>
              <div className="flex items-center gap-1 py-1 text-muted-foreground">
                <FileText className="w-3 h-3 text-blue-500" />
                <span>AppScreenshot.tsx</span>
              </div>
            </div>
            <div className="flex items-center gap-1 py-1 text-muted-foreground">
              <FileText className="w-3 h-3 text-green-500" />
              <span>App.tsx</span>
            </div>
          </div>
          <div className="flex items-center gap-1 py-1 text-muted-foreground">
            <FileText className="w-3 h-3" />
            <span>package.json</span>
          </div>
        </div>
      </div>

      {/* Code editor */}
      <div className="flex-1 flex flex-col">
        {/* Tab bar */}
        <div className="border-b border-border/50 flex items-center gap-2 px-4 py-2 bg-muted/20">
          <div className="flex items-center gap-2 bg-card px-3 py-1.5 rounded-t border-t border-x border-border/50">
            <FileText className="w-3 h-3 text-green-500" />
            <span className="text-xs">ProductCard.tsx</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground px-3 py-1.5">
            <FileText className="w-3 h-3" />
            <span className="text-xs">App.tsx</span>
          </div>
        </div>

        {/* Code */}
        <div className="flex-1 p-6 font-mono text-sm overflow-y-auto space-y-1">
          <div className="flex gap-4">
            <div className="text-muted-foreground select-none w-8 text-right">1</div>
            <div><span className="text-purple-500">import</span> <span className="text-foreground">{"{"} motion {"}"}</span> <span className="text-purple-500">from</span> <span className="text-green-500">"motion/react"</span>;</div>
          </div>
          <div className="flex gap-4">
            <div className="text-muted-foreground select-none w-8 text-right">2</div>
            <div></div>
          </div>
          <div className="flex gap-4">
            <div className="text-muted-foreground select-none w-8 text-right">3</div>
            <div><span className="text-purple-500">interface</span> <span className="text-blue-500">ProductCardProps</span> {"{"}</div>
          </div>
          <div className="flex gap-4">
            <div className="text-muted-foreground select-none w-8 text-right">4</div>
            <div className="pl-4"><span className="text-foreground">name</span>: <span className="text-blue-500">string</span>;</div>
          </div>
          <div className="flex gap-4">
            <div className="text-muted-foreground select-none w-8 text-right">5</div>
            <div className="pl-4"><span className="text-foreground">icon</span>: <span className="text-blue-500">LucideIcon</span>;</div>
          </div>
          <div className="flex gap-4">
            <div className="text-muted-foreground select-none w-8 text-right">6</div>
            <div>{"}"}</div>
          </div>
          <div className="flex gap-4">
            <div className="text-muted-foreground select-none w-8 text-right">7</div>
            <div></div>
          </div>
          <div className="flex gap-4 bg-green-500/10 -mx-6 px-6">
            <div className="text-green-500 select-none w-8 text-right">8</div>
            <div><span className="text-purple-500">export</span> <span className="text-purple-500">function</span> <span className="text-blue-500">ProductCard</span>() {"{"}</div>
          </div>
          <div className="flex gap-4 bg-green-500/10 -mx-6 px-6">
            <div className="text-green-500 select-none w-8 text-right">9</div>
            <div className="pl-4"><span className="text-purple-500">return</span> (</div>
          </div>
          <div className="flex gap-4 bg-green-500/10 -mx-6 px-6">
            <div className="text-green-500 select-none w-8 text-right">10</div>
            <div className="pl-8">&lt;<span className="text-amber-500">motion.div</span>&gt;</div>
          </div>
        </div>

        {/* Bottom toolbar */}
        <div className="border-t border-border/50 px-4 py-2 flex items-center justify-between bg-muted/20">
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <GitBranch className="w-3 h-3" />
              <span>main</span>
            </div>
            <div className="text-muted-foreground">TypeScript React</div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700 transition-colors">
              <Play className="w-3 h-3" />
              Run
            </button>
            <button className="flex items-center gap-1.5 bg-card border border-border px-3 py-1 rounded text-xs hover:bg-muted/50 transition-colors">
              <Terminal className="w-3 h-3" />
              Terminal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
