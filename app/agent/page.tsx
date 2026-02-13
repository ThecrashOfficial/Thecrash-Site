"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, User, Menu, X, ChevronLeft, ChevronRight } from "lucide-react"
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
  const [selectedMentorIndex, setSelectedMentorIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const selectedMentor = mentors[selectedMentorIndex]

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleMentorChange = (index: number) => {
    setSelectedMentorIndex(index)
    setMessages([])
    setSidebarOpen(false)
  }

  const handleNextMentor = () => {
    setSelectedMentorIndex((prev) => (prev + 1) % mentors.length)
    setMessages([])
  }

  const handlePrevMentor = () => {
    setSelectedMentorIndex((prev) => (prev - 1 + mentors.length) % mentors.length)
    setMessages([])
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && !e.ctrlKey && !e.metaKey) {
        e.preventDefault()
        handleNextMentor()
      } else if (e.key === "ArrowLeft" && !e.ctrlKey && !e.metaKey) {
        e.preventDefault()
        handlePrevMentor()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleNextMentor, handlePrevMentor])

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
      
      <main className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar */}
        <div
          className={`hidden sm:flex sm:w-64 bg-card border-r border-border flex-col z-40`}
        >
          {/* Sidebar Header with Arrow Navigation */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-bold text-sm text-foreground">AI Mentors</h2>
              <div className="flex gap-1">
                <button
                  onClick={handlePrevMentor}
                  className="text-muted-foreground hover:text-foreground hover:bg-muted p-1 rounded transition-colors"
                  title="Previous mentor (← Arrow)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextMentor}
                  className="text-muted-foreground hover:text-foreground hover:bg-muted p-1 rounded transition-colors"
                  title="Next mentor (→ Arrow)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Mentors List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {mentors.map((mentor, idx) => (
              <button
                key={mentor.name}
                onClick={() => handleMentorChange(idx)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm font-medium ${
                  selectedMentorIndex === idx
                    ? `bg-gradient-to-r ${mentor.color} text-white shadow-md`
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {mentor.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col relative">
          {/* Chat Header */}
          <div className={`px-4 py-3 bg-gradient-to-r ${selectedMentor.color} text-white flex items-center justify-between sm:justify-start gap-2`}>
            {/* Mobile: Left Arrow */}
            <button
              onClick={handlePrevMentor}
              className="sm:hidden text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              title="Previous mentor"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Mentor Name */}
            <div className="flex-1 text-center sm:text-left">
              <p className="font-semibold text-sm sm:text-base">{selectedMentor.name}</p>
            </div>

            {/* Mobile: Right Arrow */}
            <button
              onClick={handleNextMentor}
              className="sm:hidden text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              title="Next mentor"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col">
            {isEmpty ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className={`w-16 h-16 rounded-full ${selectedMentor.accentBg}`} />
                <div>
                  <p className="font-semibold text-foreground">Start chatting with {selectedMentor.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">Ask anything and get instant guidance</p>
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.role === "assistant" && (
                      <div className={`w-8 h-8 rounded-full ${selectedMentor.accentBg} flex-shrink-0 flex items-center justify-center mt-1`} />
                    )}
                    <div
                      className={`max-w-sm lg:max-w-md rounded-lg px-4 py-2 text-sm break-words ${
                        msg.role === "user"
                          ? `bg-gradient-to-r ${selectedMentor.color} text-white`
                          : "bg-muted text-foreground border border-border"
                      }`}
                    >
                      {msg.content}
                    </div>
                    {msg.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-secondary/30 flex-shrink-0 flex items-center justify-center mt-1">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <div className={`w-8 h-8 rounded-full ${selectedMentor.accentBg} flex-shrink-0 mt-1`} />
                    <div className="flex gap-1 items-center bg-muted rounded-lg px-4 py-3">
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

          {/* Input Area */}
          <div className="px-4 py-3 border-t border-border bg-card">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                placeholder="Message..."
                disabled={isLoading}
                className="flex-1 px-4 py-2 rounded-lg bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none border border-border disabled:opacity-50 text-sm"
              />
              <Button
                onClick={handleSend}
                className={`bg-gradient-to-r ${selectedMentor.color} text-white disabled:opacity-50 px-4`}
                disabled={isLoading}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
