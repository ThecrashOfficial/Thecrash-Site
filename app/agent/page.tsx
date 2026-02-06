"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Send, Bot, User, Sparkles } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const mentors = [
  {
    name: "Thecrash",
    description: "Personal guidance from Pyae Sone Phyo",
    specialty: "Personal",
  },
  {
    name: "Life Coach",
    description: "Guidance for personal growth and life balance",
    specialty: "Life",
  },
  {
    name: "Financial Coach",
    description: "Expert advice on money management and wealth building",
    specialty: "Finance",
  },
  {
    name: "Stoic + Buddhist Philosopher",
    description: "Wisdom from Stoic and Buddhist philosophy",
    specialty: "Philosophy",
  },
  {
    name: "Learning Coach",
    description: "Strategies for effective learning and skill development",
    specialty: "Learning",
  },
  {
    name: "Meta Coach",
    description: "Learn how to learn, prompt how to prompt",
    specialty: "Meta",
  },
]

export default function AgentPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [selectedMentor, setSelectedMentor] = useState(mentors[0])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showMentors, setShowMentors] = useState(false)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          mentor: selectedMentor.name,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }])
    } catch (error) {
      console.error("[v0] Error sending message:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I apologize, but I encountered an error. Please try again.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 text-center lg:text-left animate-slide-up">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-black to-gray-800 flex items-center justify-center">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">AI Agent</h1>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto lg:mx-0">
              Chat with specialized AI mentors powered by Google Gemini for guidance on development, design, and career
              growth.
            </p>
          </div>

          <div className="space-y-4">
            <div className="lg:hidden">
              <Button
                onClick={() => setShowMentors(!showMentors)}
                variant="outline"
                className="w-full justify-between h-auto py-4 px-5 rounded-2xl border-2 hover:border-primary transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-sm">{selectedMentor.name}</p>
                    <p className="text-xs text-muted-foreground">{selectedMentor.specialty}</p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform ${showMentors ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>

              {showMentors && (
                <div className="mt-3 space-y-2 animate-slide-up">
                  {mentors.map((mentor) => (
                    <Card
                      key={mentor.name}
                      className={`p-4 cursor-pointer transition-all ${
                        selectedMentor.name === mentor.name
                          ? "border-primary bg-accent border-2"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => {
                        setSelectedMentor(mentor)
                        setShowMentors(false)
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-card-foreground mb-1">{mentor.name}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">{mentor.description}</p>
                          <Badge variant="secondary" className="mt-2 text-xs">
                            {mentor.specialty}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
              <div className="hidden lg:block lg:col-span-3 space-y-3">
                <h3 className="text-sm font-semibold text-foreground mb-4 px-1">Select Mentor</h3>
                <div className="space-y-2">
                  {mentors.map((mentor, index) => (
                    <Card
                      key={mentor.name}
                      className={`p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                        selectedMentor.name === mentor.name
                          ? "border-primary bg-accent border-2 shadow-lg"
                          : "border-border hover:border-primary/50 hover:shadow-md"
                      }`}
                      onClick={() => setSelectedMentor(mentor)}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-card-foreground mb-1">{mentor.name}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                            {mentor.description}
                          </p>
                          <Badge variant="secondary" className="mt-2 text-xs">
                            {mentor.specialty}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-9">
                <Card className="flex flex-col border-2 border-border bg-card shadow-xl rounded-3xl overflow-hidden h-[calc(100vh-280px)] sm:h-[calc(100vh-240px)] lg:h-[700px]">
                  <div className="p-4 sm:p-6 border-b-2 border-border bg-gradient-to-r from-muted/50 to-transparent">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                        <Bot className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base sm:text-lg text-card-foreground truncate">
                          {selectedMentor.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground truncate">
                          {selectedMentor.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6 bg-gradient-to-b from-transparent to-muted/20">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex gap-2 sm:gap-3 animate-slide-up ${
                          message.role === "user" ? "justify-end" : ""
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {message.role === "assistant" && (
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 border border-primary/20">
                            <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                        )}
                        <div
                          className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-md ${
                            message.role === "user"
                              ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground"
                              : "bg-muted text-foreground border border-border"
                          }`}
                        >
                          <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-words">
                            {message.content}
                          </p>
                        </div>
                        {message.role === "user" && (
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center flex-shrink-0 border border-border">
                            <User className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-foreground" />
                          </div>
                        )}
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex gap-2 sm:gap-3 animate-slide-up">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 border border-primary/20">
                          <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div className="max-w-[80%] rounded-2xl px-4 py-3 sm:px-5 sm:py-4 bg-muted border border-border shadow-md">
                          <div className="flex gap-1.5">
                            <div
                              className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            />
                            <div
                              className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            />
                            <div
                              className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  <div className="p-4 sm:p-6 border-t-2 border-border bg-gradient-to-r from-transparent to-muted/30">
                    <div className="flex gap-2 sm:gap-3">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                        placeholder="Type your message..."
                        disabled={isLoading}
                        className="flex-1 px-4 py-3 sm:px-5 sm:py-4 rounded-2xl bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 border-2 border-border transition-all text-sm sm:text-base"
                      />
                      <Button
                        onClick={handleSend}
                        size="icon"
                        className="rounded-2xl w-12 h-12 sm:w-14 sm:h-14 shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                        disabled={isLoading}
                      >
                        <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
