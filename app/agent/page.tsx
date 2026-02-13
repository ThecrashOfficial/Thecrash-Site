"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, User } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const mentors = [
  { name: "Thecrash", color: "from-blue-500 to-blue-600", accentBg: "bg-blue-500/10" },
  { name: "Life Coach", color: "from-purple-500 to-purple-600", accentBg: "bg-purple-500/10" },
  { name: "Financial Coach", color: "from-emerald-500 to-emerald-600", accentBg: "bg-emerald-500/10" },
  { name: "Philosopher", color: "from-amber-500 to-amber-600", accentBg: "bg-amber-500/10" },
  { name: "Learning Coach", color: "from-cyan-500 to-cyan-600", accentBg: "bg-cyan-500/10" },
  { name: "Meta Coach", color: "from-pink-500 to-pink-600", accentBg: "bg-pink-500/10" },
]

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
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col pt-4 pb-4 px-3 sm:px-6">
        <div className="w-full max-w-3xl mx-auto flex flex-col h-full space-y-3">
          
          {/* Header */}
          <div className="text-center mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">AI Mentors</h1>
          </div>

          {/* Mentor Buttons - Horizontal Scroll */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0 sm:flex-wrap sm:gap-2">
            {mentors.map((mentor) => (
              <button
                key={mentor.name}
                onClick={() => handleMentorChange(mentor)}
                className={`flex-shrink-0 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all text-xs sm:text-sm font-medium whitespace-nowrap ${
                  selectedMentor.name === mentor.name
                    ? `bg-gradient-to-r ${mentor.color} text-white shadow-md`
                    : "bg-card border border-border hover:border-foreground/30"
                }`}
              >
                {mentor.name}
              </button>
            ))}
          </div>

          {/* Chat Container */}
          <div className="flex-1 flex flex-col bg-card border border-border rounded-xl overflow-hidden shadow-lg min-h-0">
            
            {/* Chat Header */}
            <div className={`px-3 py-2 sm:px-4 sm:py-3 bg-gradient-to-r ${selectedMentor.color} text-white`}>
              <p className="font-semibold text-sm">{selectedMentor.name}</p>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 sm:space-y-3">
              {isEmpty ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-3">
                  <div className={`w-10 h-10 rounded-full ${selectedMentor.accentBg}`} />
                  <p className="text-sm text-muted-foreground">Start chatting with {selectedMentor.name}</p>
                </div>
              ) : (
                <>
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      {msg.role === "assistant" && (
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${selectedMentor.accentBg} flex-shrink-0 mt-1`} />
                      )}
                      <div
                        className={`max-w-xs sm:max-w-md rounded-lg px-3 py-2 text-xs sm:text-sm break-words ${
                          msg.role === "user"
                            ? `bg-gradient-to-r ${selectedMentor.color} text-white`
                            : "bg-muted text-foreground border border-border"
                        }`}
                      >
                        {msg.content}
                      </div>
                      {msg.role === "user" && (
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-secondary/30 flex-shrink-0 mt-1 flex items-center justify-center">
                          <User className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-2">
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${selectedMentor.accentBg} flex-shrink-0 mt-1`} />
                      <div className="flex gap-1 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" />
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  )}
                </>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="px-3 py-2 sm:px-4 sm:py-3 border-t border-border bg-card">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                  placeholder="Message..."
                  disabled={isLoading}
                  className="flex-1 px-3 py-2 rounded-lg bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none border border-border disabled:opacity-50 text-sm"
                />
                <Button
                  onClick={handleSend}
                  size="sm"
                  className={`bg-gradient-to-r ${selectedMentor.color} text-white disabled:opacity-50 px-3 sm:px-4`}
                  disabled={isLoading}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
