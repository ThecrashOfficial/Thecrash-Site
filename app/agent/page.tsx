"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Send, User, Sparkles, Zap, Brain, Target } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const mentors = [
  {
    name: "Thecrash",
    description: "Personal guidance from Pyae Sone Phyo",
    specialty: "Personal",
    icon: "👤",
    color: "from-blue-500 to-blue-600",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/30",
    accentColor: "text-blue-600",
  },
  {
    name: "Life Coach",
    description: "Guidance for personal growth and life balance",
    specialty: "Life",
    icon: "🎯",
    color: "from-purple-500 to-purple-600",
    accentBg: "bg-purple-500/10",
    accentBorder: "border-purple-500/30",
    accentColor: "text-purple-600",
  },
  {
    name: "Financial Coach",
    description: "Expert advice on money management and wealth building",
    specialty: "Finance",
    icon: "💰",
    color: "from-emerald-500 to-emerald-600",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/30",
    accentColor: "text-emerald-600",
  },
  {
    name: "Stoic + Buddhist Philosopher",
    description: "Wisdom from Stoic and Buddhist philosophy",
    specialty: "Philosophy",
    icon: "🧘",
    color: "from-amber-500 to-amber-600",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/30",
    accentColor: "text-amber-600",
  },
  {
    name: "Learning Coach",
    description: "Strategies for effective learning and skill development",
    specialty: "Learning",
    icon: "📚",
    color: "from-cyan-500 to-cyan-600",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/30",
    accentColor: "text-cyan-600",
  },
  {
    name: "Meta Coach",
    description: "Learn how to learn, prompt how to prompt",
    specialty: "Meta",
    icon: "🔄",
    color: "from-pink-500 to-pink-600",
    accentBg: "bg-pink-500/10",
    accentBorder: "border-pink-500/30",
    accentColor: "text-pink-600",
  },
]

const suggestedPrompts: { [key: string]: string[] } = {
  Thecrash: [
    "What should I focus on this week?",
    "How can I improve my productivity?",
    "Share your latest insights on building",
  ],
  "Life Coach": [
    "How can I achieve better work-life balance?",
    "What steps should I take for personal growth?",
    "How do I stay motivated long-term?",
  ],
  "Financial Coach": [
    "What's a good savings strategy?",
    "How should I start investing?",
    "How can I build passive income?",
  ],
  "Stoic + Buddhist Philosopher": [
    "How can I apply Stoicism in daily life?",
    "What is the path to inner peace?",
    "How do I handle setbacks wisely?",
  ],
  "Learning Coach": [
    "How can I learn faster?",
    "What's the best study technique?",
    "How do I retain information better?",
  ],
  "Meta Coach": [
    "How do I ask better questions?",
    "What makes a good prompt?",
    "How can I think more clearly?",
  ],
}

export default function AgentPage() {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([])
  const [input, setInput] = useState("")
  const [selectedMentor, setSelectedMentor] = useState(mentors[0])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showMentors, setShowMentors] = useState(false)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleMentorChange = (mentor: (typeof mentors)[0]) => {
    setSelectedMentor(mentor)
    setShowMentors(false)
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

  const isEmpty = messages.length === 0

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12 animate-slide-up">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-black to-gray-800 flex items-center justify-center">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                6 Specialized AI Mentors
              </h1>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
              Get personalized guidance from expert AI mentors. Choose your specialist and start a conversation tailored to your needs.
            </p>

            {/* Capability Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <p className="text-sm text-muted-foreground">Instant Responses</p>
                </div>
                <p className="text-2xl font-bold text-foreground">Real-time</p>
              </div>
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Brain className="w-5 h-5 text-purple-500" />
                  <p className="text-sm text-muted-foreground">AI-Powered</p>
                </div>
                <p className="text-2xl font-bold text-foreground">Advanced</p>
              </div>
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  <p className="text-sm text-muted-foreground">Personalized</p>
                </div>
                <p className="text-2xl font-bold text-foreground">Guidance</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Mobile Mentor Selector */}
            <div className="lg:hidden">
              <Button
                onClick={() => setShowMentors(!showMentors)}
                variant="outline"
                className="w-full justify-between h-auto py-4 px-5 rounded-2xl border-2 hover:border-primary transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${selectedMentor.accentBg} flex items-center justify-center text-lg`}>
                    {selectedMentor.icon}
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
                          ? `border-2 ${mentor.accentBorder} bg-accent`
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => handleMentorChange(mentor)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-xl ${mentor.accentBg} flex items-center justify-center flex-shrink-0 text-lg`}>
                          {mentor.icon}
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
              {/* Mentor Sidebar - Desktop */}
              <div className="hidden lg:block lg:col-span-3 space-y-3">
                <h3 className="text-sm font-semibold text-foreground mb-4 px-1">Select Mentor</h3>
                <div className="space-y-2">
                  {mentors.map((mentor, index) => (
                    <Card
                      key={mentor.name}
                      className={`p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                        selectedMentor.name === mentor.name
                          ? `border-2 ${mentor.accentBorder} bg-accent shadow-lg`
                          : "border-border hover:border-primary/50 hover:shadow-md"
                      }`}
                      onClick={() => handleMentorChange(mentor)}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-xl ${mentor.accentBg} flex items-center justify-center flex-shrink-0 text-lg`}>
                          {mentor.icon}
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

              {/* Chat Interface */}
              <div className="lg:col-span-9">
                <Card
                  className={`flex flex-col border-2 bg-card shadow-xl rounded-3xl overflow-hidden h-[calc(100vh-280px)] sm:h-[calc(100vh-240px)] lg:h-[700px] transition-all duration-300 ${
                    selectedMentor.accentBorder
                  }`}
                >
                  {/* Chat Header */}
                  <div
                    className={`p-4 sm:p-6 border-b-2 bg-gradient-to-r ${selectedMentor.color} bg-opacity-10 transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${selectedMentor.accentBg} flex items-center justify-center shadow-lg text-2xl`}
                      >
                        {selectedMentor.icon}
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

                  {/* Messages Area */}
                  <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6 bg-gradient-to-b from-transparent to-muted/20">
                    {isEmpty ? (
                      <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4 space-y-6">
                        <div
                          className={`w-16 h-16 rounded-2xl ${selectedMentor.accentBg} flex items-center justify-center text-4xl`}
                        >
                          {selectedMentor.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-foreground mb-2">
                            Chat with {selectedMentor.name}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {selectedMentor.description}
                          </p>
                        </div>
                        <div className="w-full max-w-md space-y-2 pt-4">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                            Suggested Questions
                          </p>
                          <div className="space-y-2">
                            {suggestedPrompts[selectedMentor.name]?.map((prompt, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleSuggestedPrompt(prompt)}
                                className="w-full text-left p-3 rounded-lg border border-border/50 hover:border-primary/50 bg-card/30 hover:bg-card/50 transition-all text-sm text-foreground hover:text-primary"
                              >
                                "{prompt}"
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {messages.map((message, index) => (
                          <div
                            key={index}
                            className={`flex gap-2 sm:gap-3 animate-slide-up ${
                              message.role === "user" ? "justify-end" : ""
                            }`}
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            {message.role === "assistant" && (
                              <div
                                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl ${selectedMentor.accentBg} flex items-center justify-center flex-shrink-0 border ${selectedMentor.accentBorder} text-lg`}
                              >
                                {selectedMentor.icon}
                              </div>
                            )}
                            <div
                              className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-md ${
                                message.role === "user"
                                  ? `bg-gradient-to-br ${selectedMentor.color} text-white`
                                  : "bg-muted text-foreground border border-border"
                              }`}
                            >
                              <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-words">
                                {message.content}
                              </p>
                            </div>
                            {message.role === "user" && (
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 border border-border">
                                <User className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-foreground" />
                              </div>
                            )}
                          </div>
                        ))}
                        {isLoading && (
                          <div className="flex gap-2 sm:gap-3 animate-slide-up">
                            <div
                              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl ${selectedMentor.accentBg} flex items-center justify-center flex-shrink-0 border ${selectedMentor.accentBorder}`}
                            >
                              {selectedMentor.icon}
                            </div>
                            <div className="max-w-[80%] rounded-2xl px-4 py-3 sm:px-5 sm:py-4 bg-muted border border-border shadow-md">
                              <div className="flex gap-2 items-center">
                                <span className="text-xs text-muted-foreground">Typing</span>
                                <div className="flex gap-1">
                                  <div
                                    className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-bounce"
                                    style={{ animationDelay: "0ms" }}
                                  />
                                  <div
                                    className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-bounce"
                                    style={{ animationDelay: "150ms" }}
                                  />
                                  <div
                                    className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-bounce"
                                    style={{ animationDelay: "300ms" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input Area */}
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
                        className={`rounded-2xl w-12 h-12 sm:w-14 sm:h-14 shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 bg-gradient-to-r ${selectedMentor.color}`}
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
