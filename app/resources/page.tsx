"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
)

const FileTextIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
)

const NotionIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
)

const SparklesIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
)

const LinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const TelegramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.328-.373-.115l-6.869 4.332-2.96-.924c-.644-.203-.658-.644.136-.953l11.566-4.453c.538-.196 1.006.128.832.941z"/>
  </svg>
)

const resources = [
  {
    title: "AI Prompt Engineering Master Guide",
    description:
      "Complete guide with 50+ tested prompts for ChatGPT, Claude, and Gemini. Learn prompt structures, best practices, and advanced techniques.",
    category: "AI & Prompts",
    downloads: "2,543",
    format: "PDF",
    pages: "45 pages",
    tier: "Free",
    telegramLink: "https://t.me/thecrash_hub",
  },
]

const categories = ["All", "AI & Prompts", "Book Summaries", "Web Development", "Career"]

const notionTemplates = [
  {
    title: "Daily Focus OS notion template (Crash)",
    description:
      "ဤ beginner-friendly Notion template သည် သင့်အား tasks များကို ဦးစားပေး prioritize လုပ်နိုင်ရန်၊ progress ကို ခြေရာခံနိုင်ရန်နှင့် overwhelm မဖြစ်ဘဲ အရေးကြီးဆုံး work များ ပြီးမြောက်စေရန် ကူညီပေးပါမည်။",
    category: "Notion Template",
    uses: "1000",
    link: "https://stump-wallflower-3d2.notion.site/2d5693387896806f9097ef79a764dbb0?v=2d569338789680519211000cbcfac1d9&source=copy_link",
    tier: "Free",
  },
]

const featuredPrompts = [
  {
    title: "MetaStudent – Learning Style Analyzer",
    description:
      "သင့်၏ သဘာအတိုင်း တွေးခေါ်ပုံနှင့် သင်ယူပုံကို အခြေခံ၍ ကိုယ်ပိုင် သင်ယူမှု ပုံစံကို ဖော်ထုတ်ပေးပြီး၊ နက်နဲစွာ စိတ်ကြိုက်ပြင်ဆင်ထားသည့် သင်ယူမှု ပုံစံ (Learning Profile) ကို ထုတ်ပေးမည့် AI-powered learning analyzer",
    prompt:
      "# ROLE\n\n" +
      "You are a **Learning Style Analyzer**.\n" +
      "Your responsibility is to deeply understand how the user naturally learns and produce a **highly personalized learning profile** that feels human, emotionally accurate, and specific to one individual.\n\n" +

      "---\n\n" +
      "# YOUR RESPONSIBILITIES\n\n" +
      "1. Ask the user **at least 10 well-designed questions** to understand how they naturally learn\n" +
      "2. Analyze the user's answers across **multiple learning dimensions**\n" +
      "3. Produce a **highly personalized learner profile** tailored to one specific individual\n\n" +

      "---\n\n" +
      "# LANGUAGE REQUIREMENT\n\n" +
      "– You MUST communicate **entirely in Myanmar (Burmese)**\n" +
      "– All questions, explanations, and final outputs must be in Myanmar\n" +
      "– **English is allowed ONLY for learner type names**\n" +
      "– If you reply in English by mistake, immediately correct yourself and restate in Myanmar\n\n" +

      "---\n\n" +
      "# INTERACTION RULES\n\n" +
      "– Ask questions **one by one**\n" +
      "– Keep questions **practical, concrete, and easy to answer**\n" +
      "– Do NOT reveal or summarize the learner type until **all questions are answered**\n" +
      "– Each question must include the following options:\n\n" +
      "A. Option A description\n" +
      "B. Option B description\n" +
      "C. Option C description\n" +
      "D. Option D description\n" +
      "E. Other (free-text, user's own words)\n\n" +
      "– If the user chooses option E, parse the free-text answer and **map it to the closest internal learning pattern**\n\n" +

      "---\n\n" +
      "# ANALYSIS GUIDELINES (INTERNAL USE ONLY)\n\n" +
      "– Learning input preference\n" +
      "– Information processing style\n" +
      "– Memory and retention triggers\n" +
      "– Motivation drivers\n" +
      "– Structure vs freedom preference\n" +
      "– Feedback and correction style\n" +
      "– Pace tolerance\n" +
      "– Goal orientation\n\n" +

      "---\n\n" +
      "# LEARNER TYPE LOGIC\n\n" +
      "– Combine **2 to 3 dominant traits** into a custom learner type\n" +
      "– Avoid generic learner labels\n" +
      "– Present the learner type name in **English and Myanmar**\n\n" +

      "---\n\n" +
      "# FINAL OUTPUT STRUCTURE\n\n" +
      "### 1) LEARNER TYPE\n\n" +
      "– English Name\n" +
      "– Myanmar Name\n\n" +

      "### 2) DETAILED DESCRIPTION\n\n" +
      "– Explain how the learner thinks and processes information\n" +
      "– Explain how they behave when learning something new\n" +
      "– Explain what makes learning easy or difficult for them\n" +
      "– The description must feel like: \"This was written exactly for me.\"\n\n" +

      "### 3) WHY THIS FITS YOU\n\n" +
      "– 2 to 4 bullet points directly tied to the user's answers\n\n" +

      "### 4) BEST WAY FOR YOU TO LEARN\n\n" +
      "– Practical, actionable learning methods\n" +
      "– Written in a **human, conversational tone**, not academic\n\n" +

      "### 5) WHAT YOU SHOULD AVOID\n\n" +
      "– Learning approaches that reduce effectiveness\n" +
      "– Describe these as natural tendencies, **not rules**\n\n" +

      "### 6) ONE HIGH-IMPACT TIP\n\n" +
      "– One single, highly relevant, actionable recommendation\n\n" +

      "---\n\n" +
      "# CRITICAL RULES\n\n" +
      "– Never reveal the learner type before **all questions are completed**\n" +
      "– Always prioritize **clarity, personalization, and real-world usefulness**\n" +
      "– The final output must feel written for **one specific individual only**\n\n" +

      "---\n\n" +
      "# ENDING BEHAVIOR RULES (VERY IMPORTANT)\n\n" +
      "– Do NOT include any questions, calls-to-action, or next-step suggestions at the end\n" +
      "– Do NOT ask about learning plans, next steps, or future actions\n" +
      "– The final paragraph must feel emotionally accurate, not instructional\n" +
      "– Do NOT speak like a teacher, coach, or instructor\n" +
      "– The tone must feel like **one human understanding another human**\n" +
      "– Avoid checklist language or lectures\n\n" +

      "---\n\n" +
      "# START\n\n" +
      "Briefly introduce yourself, then ask the first question in Myanmar:\n\n" +
      "**When you start learning something new, what do you usually want to do first?**",
    useCase: "Learning & Self-Discovery",
    tags: ["Education", "Learning Style", "Personalized", "Myanmar"],
    tier: "Free"
  },
  {
    title: "Content Creation Blueprinter",
    description:
      "သင့်၏ ထူးခြားသော စတိုင်နှင့် အမြင်ကို အံဝင်ခွင်ကျဖြစ်စေမည့်၊ အကောင်အထည်ဖော်ရန် အသင့်ဖြစ်သော Content Creator Blueprint ကို ဖန်တီးနိုင်ရန် နက်ရှိုင်းသည့် ကိုယ်ပိုင်ရှာဖွေတွေ့ရှိမှုများအား လမ်းညွှန်ပေးမည့် AI-powered content strategy mentor",
    prompt:
      "## ROLE\n\n" +
      "You are an **AI Content Mentor, Brand Strategist, and Creative Coach**.\n" +
      "Your role is to guide a content creator through deep self-discovery and produce a complete, personalized, and execution-ready **Content Creator Blueprint**.\n\n" +
      "You are a mentor, not a chatbot.\n" +
      "Your tone must be calm, clear, authoritative, and instructional.\n\n" +

      "---\n\n" +
      "## LANGUAGE RULE\n\n" +
      "* All questions and outputs must be in **Myanmar language**\n\n" +

      "---\n\n" +
      "## COMMUNICATION STYLE\n\n" +
      "* Professional and mentor-level\n" +
      "* No greetings or filler language\n" +
      "* Clear, direct, and structured\n" +
      "* Minimal emoji usage (only when emphasis is necessary)\n" +
      "* If the creator does not understand a question, explain it clearly before moving on\n\n" +

      "---\n\n" +
      "## QUESTION MODE (STRICT)\n\n" +
      "* Ask **one question at a time only**\n" +
      "* Wait for the creator's full answer before continuing\n" +
      "* If an answer is vague or incomplete, ask clarifying follow-up questions\n" +
      "* Do not proceed until clarity is achieved\n" +
      "* Never skip phases\n" +
      "* Never rush the process\n\n" +

      "---\n\n" +
      "## PROCESS OVERVIEW\n\n" +
      "### Phase 0 – How to Use This Prompt\n" +
      "Explain to the creator:\n" +
      "* How this guided process works\n" +
      "* Why questions are asked one at a time\n" +
      "* Why clarity and honesty are critical\n" +
      "* How the final blueprint should be used as a long-term reference document\n\n" +
      "Proceed only after understanding is confirmed.\n\n" +

      "---\n\n" +
      "### Phase 1 – Initial Self-Discovery (10 Questions)\n" +
      "Ask 10 foundational questions covering:\n" +
      "* Personal motivation\n" +
      "* Long-term goals and vision\n" +
      "* Current struggles and blockers\n" +
      "* Creative preferences and dislikes\n" +
      "* Identity as a content creator\n\n" +
      "Rules:\n" +
      "* One question at a time\n" +
      "* Wait for complete answers\n" +
      "* Clarify when necessary\n\n" +

      "---\n\n" +
      "### Phase 2 – Strategic Deep Dive (15 Dynamic Questions)\n" +
      "Based entirely on Phase 1 answers, ask 15 adaptive questions related to:\n" +
      "* Niche clarity\n" +
      "* Target audience\n" +
      "* Content workflow\n" +
      "* Brand positioning\n" +
      "* Personal boundaries and trade-offs\n\n" +
      "Questions must be customized, not generic.\n" +
      "If sufficient information is already available, do not ask redundantly.\n\n" +

      "---\n\n" +
      "### Phase 3 – Generate 'My Content Creator Blueprint'\n" +
      "Create a **document-style blueprint** in Myanmar language containing:\n\n" +
      "1. Content Creator Type (unique combination name)\n" +
      "2. Creator Definition (detailed explanation, max 1000 words)\n" +
      "3. Target Audience\n" +
      "4. Core Value\n" +
      "5. Niche\n" +
      "6. Content Rules\n" +
      "7. Brand Point of View\n" +
      "8. Enemy (what the brand stands against)\n" +
      "9. Voice and Language Rules\n" +
      "10. Growth and Distribution Strategy\n" +
      "11. Examples or Mini-Guides (if useful)\n" +
      "12. 10 Raw Content Ideas\n" +
      "13. Monetization Paths\n\n" +
      "The blueprint must be:\n" +
      "* Actionable\n" +
      "* Personalized\n" +
      "* Long-term focused\n" +
      "* Ready to be reused as a strategy reference\n\n" +

      "---\n\n" +
      "### Phase 4 – Completion Message\n" +
      "After the blueprint is complete, provide a closing message in Myanmar language that:\n" +
      "* Congratulates the creator\n" +
      "* Explains the importance of the blueprint\n" +
      "* Encourages using it for future workflows\n" +
      "* Suggests checking **Thecrash channel** for next steps\n\n" +

      "---\n\n" +
      "## FINAL REQUIREMENTS\n\n" +
      "* Maintain a mentor / consultant mindset throughout\n" +
      "* The final output must feel like a **strategy file**, not a motivational post\n" +
      "* Optimize for clarity, execution, and long-term brand growth\n\n" +

      "---\n\n" +
      "## START\n\n" +
      "Begin with Phase 0: Explain how this process works in Myanmar language",
    useCase: "Content & Brand Strategy",
    tags: ["Content Creation", "Personal Brand", "Strategy", "Myanmar"],
    tier: "Free"
  }
];

export default function ResourcesPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [expandedPrompt, setExpandedPrompt] = useState<number | null>(null)

  const handleCopyPrompt = (prompt: string, index: number) => {
    navigator.clipboard.writeText(prompt)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const handleDownload = (resourceTitle: string, fileUrl?: string) => {
    if (fileUrl) {
      const link = document.createElement("a")
      link.href = fileUrl
      link.download = resourceTitle.replace(/\s+/g, "-").toLowerCase()
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      alert(`Downloading: ${resourceTitle}\n\nNote: Add your actual file URL in the code!`)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 rounded-full mb-4 sm:mb-6 animate-scale-in">
              <span className="text-xs sm:text-sm font-medium text-primary">Free & Premium Resources</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight animate-slide-up px-4">
              Resource Library
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-slide-up animate-delay-100 px-4">
              Download ready-to-use templates, guides, and summaries. Most resources are completely free!
            </p>
          </div>

          <div className="mb-12 sm:mb-16 animate-slide-up animate-delay-200">
            <div className="flex items-center gap-3 mb-4 sm:mb-6 px-4">
              <div className="p-2 bg-primary/10 rounded-lg transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <SparklesIcon />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Featured Prompts</h2>
                <p className="text-xs sm:text-sm text-muted-foreground">Ready-to-use AI prompts for various tasks</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4">
              {featuredPrompts.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl hover:border-primary/50 transition-all duration-500 stagger-item hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                      </div>
                      <Badge variant="default" className="ml-2 transition-transform duration-300 group-hover:scale-110">
                        {item.tier}
                      </Badge>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">{item.useCase}</span>
                    </div>

                    {/* Prompt Preview/Full View */}
                    {expandedPrompt === index ? (
                      <div className="bg-muted/50 p-4 rounded-lg mb-4 max-h-96 overflow-y-auto">
                        <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap text-muted-foreground">
                          {item.prompt}
                        </pre>
                      </div>
                    ) : (
                      <div
                        className="bg-muted/30 p-3 rounded-lg mb-4 cursor-pointer"
                        onClick={() => setExpandedPrompt(index)}
                      >
                        <p className="font-mono text-xs text-muted-foreground line-clamp-2">{item.prompt}</p>
                        <button className="text-xs text-primary mt-2 hover:underline">View full prompt →</button>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleCopyPrompt(item.prompt, index)}
                        className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-300 btn-smooth ${
                          copiedIndex === index
                            ? "bg-green-500 text-white"
                            : "bg-primary text-primary-foreground hover:scale-105 hover:shadow-lg active:scale-95"
                        }`}
                      >
                        {copiedIndex === index ? "✓ Copied!" : "Copy Prompt"}
                      </button>
                      {expandedPrompt === index && (
                        <button
                          onClick={() => setExpandedPrompt(null)}
                          className="px-4 py-2 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground hover:bg-accent transition-all duration-300"
                        >
                          Collapse
                        </button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12 sm:mb-16 animate-slide-up animate-delay-300">
            <div className="flex items-center gap-3 mb-4 sm:mb-6 px-4">
              <div className="p-2 bg-primary/10 rounded-lg transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <NotionIcon />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Notion Templates</h2>
                <p className="text-xs sm:text-sm text-muted-foreground">Duplicate and customize for your workflow</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
              {notionTemplates.map((template, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-500 group stagger-item hover:scale-105 flex flex-col h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Badge
                      variant={template.tier === "Free" ? "default" : "secondary"}
                      className="transition-transform duration-300 group-hover:scale-110"
                    >
                      {template.tier}
                    </Badge>
                    <a
                      href={template.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-6 active:scale-95"
                    >
                      <LinkIcon />
                    </a>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                    {template.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed flex-grow line-clamp-none">
                    {template.description}
                  </p>

                  <div className="text-xs sm:text-sm text-muted-foreground">{template.uses} duplicates</div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-6 animate-slide-up animate-delay-500">
            <div className="flex items-center gap-3 mb-4 sm:mb-6 px-4">
              <div className="p-2 bg-primary/10 rounded-lg transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <FileTextIcon />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Guides & Summaries</h2>
                <p className="text-xs sm:text-sm text-muted-foreground">Comprehensive resources and book summaries</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8 sm:mb-12 justify-center px-4">
            {categories.map((category, index) => (
              <button
                key={category}
                className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-secondary text-secondary-foreground transition-all duration-300 hover:bg-accent hover:scale-105 hover:shadow-md active:scale-95"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-500 group cursor-pointer stagger-item hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <FileTextIcon />
                    </div>
                    <div>
                      <Badge
                        variant={resource.tier === "Free" ? "default" : "secondary"}
                        className="transition-transform duration-300 group-hover:scale-110"
                      >
                        {resource.tier}
                      </Badge>
                    </div>
                  </div>
                  <a
                    href={resource.telegramLink || "https://t.me"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:rotate-6 active:scale-95 flex items-center justify-center"
                    title="Get on Telegram"
                  >
                    <TelegramIcon />
                  </a>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-card-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                  {resource.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                  <span>{resource.format}</span>
                  <span>•</span>
                  <span>{resource.pages}</span>
                  <span>•</span>
                  <span>{resource.downloads} downloads</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="p-6 sm:p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30 rounded-2xl text-center transition-all duration-500 hover:shadow-2xl hover:border-primary/50 animate-slide-up animate-delay-600 mx-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Want Premium Access?</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
              Get unlimited access to all premium resources, exclusive content, and monthly workshops
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/services"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95 btn-smooth"
              >
                View Services
              </Link>
              <a
                href="https://t.me/thecrashOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-primary text-foreground rounded-lg font-medium transition-all duration-300 hover:bg-primary/10 hover:scale-110 hover:shadow-lg active:scale-95 btn-smooth"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
