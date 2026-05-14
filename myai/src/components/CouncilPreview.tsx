import { Users, Send, Paperclip, Smile } from "lucide-react";

export function CouncilPreview() {
  const messages = [
    {
      user: "Sarah Chen",
      avatar: "from-blue-500 to-cyan-500",
      message: "We need to decide on the authentication strategy for the new API.",
      time: "2:34 PM"
    },
    {
      user: "AI Strategic Advisor",
      avatar: "from-purple-500 to-pink-500",
      message: "I recommend OAuth 2.0 with PKCE for enhanced security. Here's why: it prevents authorization code interception and works seamlessly with mobile apps.",
      time: "2:35 PM",
      ai: true
    },
    {
      user: "Marcus Rodriguez",
      avatar: "from-green-500 to-emerald-500",
      message: "That makes sense. What about token refresh?",
      time: "2:36 PM"
    },
    {
      user: "AI Technical Lead",
      avatar: "from-amber-500 to-orange-500",
      message: "I suggest implementing rotating refresh tokens with a 7-day expiry. This balances security and UX.",
      time: "2:37 PM",
      ai: true
    }
  ];

  return (
    <div className="h-[500px] flex">
      {/* Sidebar */}
      <div className="w-64 bg-muted/30 border-r border-border/50 p-4 space-y-3">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">Rooms</div>
        <div className="space-y-2">
          <div className="bg-primary/10 border border-primary/30 rounded-lg px-3 py-2">
            <div className="text-sm font-medium">API Strategy Council</div>
            <div className="text-xs text-muted-foreground mt-0.5">4 members • 2 AI</div>
          </div>
          <div className="hover:bg-muted/50 rounded-lg px-3 py-2 cursor-pointer transition-colors">
            <div className="text-sm">Product Planning</div>
            <div className="text-xs text-muted-foreground mt-0.5">6 members • 3 AI</div>
          </div>
          <div className="hover:bg-muted/50 rounded-lg px-3 py-2 cursor-pointer transition-colors">
            <div className="text-sm">Design Review</div>
            <div className="text-xs text-muted-foreground mt-0.5">3 members • 1 AI</div>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-border/50 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold">API Strategy Council</div>
              <div className="text-xs text-muted-foreground">4 humans, 2 AI personas active</div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className="flex gap-3">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${msg.avatar} flex-shrink-0 flex items-center justify-center text-white text-xs font-bold`}>
                {msg.user[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-sm font-semibold">{msg.user}</span>
                  {msg.ai && (
                    <span className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-0.5 rounded-full">AI</span>
                  )}
                  <span className="text-xs text-muted-foreground">{msg.time}</span>
                </div>
                <div className="text-sm text-foreground/90">{msg.message}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-border/50 p-4">
          <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-4 py-3 border border-border/50">
            <input
              type="text"
              placeholder="Message the council..."
              className="flex-1 bg-transparent border-none outline-none text-sm"
              disabled
            />
            <Paperclip className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
            <Smile className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-lg">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
