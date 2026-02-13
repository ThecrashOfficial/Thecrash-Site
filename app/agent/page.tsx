"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Send, User } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const mentors = [
  {
    name: "Thecrash",
    description: "Personal guidance",
    color: "from-blue-500 to-blue-600",
    accentBg: "bg-blue-500/10",
  },
  {
    name: "Life Coach",
    description: "Personal growth",
    color: "from-purple-500 to-purple-600",
    accentBg: "bg-purple-500/10",
  },
  {
    name: "Financial Coach",
    description: "Money & wealth",
    color: "from-emerald-500 to-emerald-600",
    accentBg: "bg-emerald-500/10",
  },
  {
    name: "Philosopher",
    description: "Wisdom & mindfulness",
    color: "from-amber-500 to-amber-600",
    accentBg: "bg-amber-500/10",
  },
  {
    name: "Learning Coach",
    description: "Learning strategies",
    color: "from-cyan-500 to-cyan-600",
    accentBg: "bg-cyan-500/10",
  },
  {
    name: "Meta Coach",
    description: "Thinking & prompts",
    color: "from-pink-500 to-pink-600",
    accentBg: "bg-pink-500/10",
  },
]

const suggestedPrompts: { [key: string]: string[] } = {
  Thecrash: ["What should I focus on this week?", "How can I improve?", "Share insights on building"],
  "Life Coach": ["How to balance work and life?", "Steps for growth?", "How to stay motivated?"],
  "Financial Coach": ["Good savings strategy?", "How to invest?", "Build passive income?"],
  Philosopher: ["Apply Stoicism daily?", "Path to peace?", "Handle setbacks?"],
  "Learning Coach": ["Learn faster?", "Best study technique?", "Retain better?"],
  "Meta Coach": ["Ask better questions?", "What makes good prompt?", "Think more clearly?"],
}

export default function AgentPage() {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([])
  const [input, setInput] = useState("")
  const [selectedMentor, setSelectedMentor] = useState(mentors[0])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleMentorChange = (mentor: typeof mentors[0]) => {
    setSelectedMentor(mentor)
    setMessages([])
  }

  const handleSuggestedPrompt = (prompt: string) => {
    setInput(prompt)
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          mentor: selectedMentor.name,
        }),
      })

      if (!response.ok) throw new Error("Failed to get response")
      const data = await response.json()
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }])
    } catch (error) {
      console.error("[v0] Error:", error)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const isEmpty = messages.length === 0

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 pb-20 px-4">
        <div className="max-w-2xl mx-auto space-y-4">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">AI Mentors</h1>
            <p className="text-sm text-muted-foreground">Choose a mentor and start chatting</p>
          </div>

          {/* Mentor Selection */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
            {mentors.map((mentor) => (
              <button
                key={mentor.name}
                onClick={() => handleMentorChange(mentor)}
                className={`p-3 rounded-lg transition-all border-2 ${
                  selectedMentor.name === mentor.name
                    ? `border-foreground bg-gradient-to-r ${mentor.color} text-white shadow-lg`
                    : "border-border bg-card hover:border-foreground/30"
                }`}
              >
                <p className="text-xs font-semibold truncate">{mentor.name}</p>
                <p className="text-xs text-foreground/70 truncate">{mentor.description}</p>
              </button>
            ))}
          </div>

          {/* Chat Card */}
          <Card className="border-2 flex flex-col h-[60vh] sm:h-[600px] rounded-2xl overflow-hidden">
            {/* Chat Header */}
            <div className={`px-4 py-3 bg-gradient-to-r ${selectedMentor.color} text-white`}>
              <p className="font-semibold text-sm">{selectedMentor.name}</p>
              <p className="text-xs opacity-90">{selectedMentor.description}</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-transparent to-muted/10">
              {isEmpty ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className={`w-12 h-12 rounded-full ${selectedMentor.accentBg}`} />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Start a conversation</p>
                    <p className="text-xs text-muted-foreground mt-1">Ask anything and get instant guidance</p>
                  </div>
                  <div className="w-full space-y-2 pt-4">
                    <p className="text-xs font-medium text-muted-foreground">Try asking:</p>
                    {suggestedPrompts[selectedMentor.name]?.slice(0, 2).map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestedPrompt(prompt)}
                        className="w-full text-left text-xs p-2 rounded bg-card/50 hover:bg-card border border-border/50 hover:border-foreground/20 transition-all text-foreground"
                      >
                        "{prompt}"
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.role === "assistant" && (
                        <div className={`w-6 h-6 rounded-full ${selectedMentor.accentBg} flex-shrink-0`} />
                      )}
                      <div
                        className={`max-w-xs rounded-lg px-3 py-2 text-sm ${
                          msg.role === "user"
                            ? `bg-gradient-to-r ${selectedMentor.color} text-white`
                            : "bg-muted text-foreground border border-border"
                        }`}
                      >
                        <p className="break-words">{msg.content}</p>
                      </div>
                      {msg.role === "user" && (
                        <div className="w-6 h-6 rounded-full bg-secondary/30 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-2">
                      <div className={`w-6 h-6 rounded-full ${selectedMentor.accentBg} flex-shrink-0`} />
                      <div className="flex gap-1 items-center">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" />
                        <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  )}
                </>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border bg-card">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                  placeholder="Type message..."
                  disabled={isLoading}
                  className="flex-1 px-3 py-2 rounded-lg bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none border border-border disabled:opacity-50 text-sm"
                />
                <Button
                  onClick={handleSend}
                  size="sm"
                  className={`bg-gradient-to-r ${selectedMentor.color} text-white disabled:opacity-50 rounded-lg`}
                  disabled={isLoading}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
