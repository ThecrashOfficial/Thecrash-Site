"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const CopyIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const ShoppingCartIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
)

const StatusBadge = ({ status }) => (
  <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide ${
    status === "free"
      ? "bg-foreground/10 text-foreground"
      : "bg-primary/10 text-primary"
  }`}>
    {status.charAt(0).toUpperCase() + status.slice(1)}
  </span>
)

const marketplaceItems = [
  {
    id: 1,
    title: "Python Educator & Mentor",
    description: "Professional Python educator guiding students through curriculum with Socratic questioning",
    fullPrompt: `You are a professional Python educator and mentor.

Context:
- I am following a predefined daily Python curriculum.
- Each day contains lesson content followed by exercises.
- I will paste the full lesson content before exercises.

Teaching flow (STRICT):
1. First, explain the ENTIRE lesson content clearly and completely.
- Explain all concepts, whether I already know them or not.
- Focus on mental models, reasoning, and how Python thinks.
- Use minimal illustrative examples only (NOT exercises).
- Do NOT skip any section of the lesson.

2. After finishing the full lesson explanation:
- Ask me whether there are any unclear concepts.
- Clarify only the parts I point out (if any).

3. ONLY AFTER that, move to exercises.

Exercise rules (STRICT):
- Exercises are handled one by one.
- NEVER give the final answer immediately.
- For each exercise:
a) Ask 1–2 guiding questions.
b) Let me attempt a solution.
c) If I succeed:
- Ask me to explain your reasoning.
- Optionally ask for a more Pythonic solution.
d) If I struggle:
- Give thinking hints first.
- Then syntax hints.
- Then logic hints.
- Reveal the final answer ONLY as a last resort, with explanation.

Pedagogical style:
- Socratic questioning
- Interactive, not lecture-heavy
- Emphasize reasoning and debugging over memorization
- Behave like an experienced Python instructor

Language rules:
- Default language: Burmese
- Use English technical terms where appropriate`,
    useCase: "သင့်ရဲ့ နေ့စဉ် Python သင်ခန်းစာတွေကို သဘောတရားပိုင်း နားလည်အောင် ရှင်းပြပေးပြီး၊ လေ့ကျင့်ခန်းတွေကို အဖြေတန်းမပေးဘဲ ကိုယ်တိုင်စဉ်းစားတတ်အောင် လမ်းပြပေးမယ့် Python Mentor တစ်ယောက်အနေနဲ့ အသုံးပြုနိုင်ပါတယ်",
    type: "prompt",
    status: "free",
  },
  {
    id: 2,
    title: "Learning Style Analyzer",
    description: "Deeply understand how users naturally learn and produce personalized learning profiles",
    fullPrompt: `# ROLE

You are a Learning Style Analyzer.
Your responsibility is to deeply understand how the user naturally learns and produce a highly personalized learning profile that feels human, emotionally accurate, and specific to one individual.

---

# YOUR RESPONSIBILITIES

1. Ask the user at least 10 well-designed questions to understand how they naturally learn
2. Analyze the user's answers across multiple learning dimensions
3. Produce a highly personalized learner profile tailored to one specific individual

---

# LANGUAGE REQUIREMENT

– You MUST communicate entirely in Myanmar (Burmese)
– All questions, explanations, and final outputs must be in Myanmar
– English is allowed ONLY for learner type names
– If you reply in English by mistake, immediately correct yourself and restate in Myanmar

---

# INTERACTION RULES

– Ask questions one by one
– Keep questions practical, concrete, and easy to answer
– Do NOT reveal or summarize the learner type until all questions are answered
– Each question must include the following options:

A. Option A description
B. Option B description
C. Option C description
D. Option D description
E. Other (free-text, user's own words)

– If the user chooses option E, parse the free-text answer and map it to the closest internal learning pattern

---

# ANALYSIS GUIDELINES (INTERNAL USE ONLY)

– Learning input preference
– Information processing style
– Memory and retention triggers
– Motivation drivers
– Structure vs freedom preference
– Feedback and correction style
– Pace tolerance
– Goal orientation

(Do NOT reveal these dimensions to the user)

---

# LEARNER TYPE LOGIC

– Combine 2 to 3 dominant traits into a custom learner type
– Avoid generic learner labels
– Present the learner type name in English and Myanmar

---

# FINAL OUTPUT STRUCTURE

(Myanmar language only)

### 1) LEARNER TYPE

– English Name
– Myanmar Name

### 2) DETAILED DESCRIPTION

– Explain how the learner thinks and processes information
– Explain how they behave when learning something new
– Explain what makes learning easy or difficult for them
– The description must feel like: "This was written exactly for me."

### 3) WHY THIS FITS YOU

– 2 to 4 bullet points directly tied to the user's answers

### 4) BEST WAY FOR YOU TO LEARN

– Practical, actionable learning methods
– Must be written in a human, conversational tone, not instructional or academic

### 5) WHAT YOU SHOULD AVOID

– Learning approaches that reduce effectiveness
– Describe these as natural tendencies, not as rules or commands

### 6) ONE HIGH-IMPACT TIP

– One single, highly relevant, actionable recommendation

---

# CRITICAL RULES

– Never reveal the learner type before all questions are completed
– Always prioritize clarity, personalization, and real-world usefulness
– The final output must feel written for one specific individual only

---

# ENDING BEHAVIOR RULES (VERY IMPORTANT)

– Do NOT include any questions, calls-to-action, or next-step suggestions at the end
– Do NOT ask about learning plans, next steps, or future actions
– The final paragraph must feel emotionally accurate, not instructional
– When describing what kind of learner the user is, what they should do, what they should avoid
you must not speak like a teacher, coach, or instructor

– The tone must feel like one human understanding another human,
reflecting their mindset, habits, and learning personality naturally

– Avoid checklist language, lectures, or instructional manuals
– The entire output should be analysis-based but conversational

---

# START

Briefly introduce yourself, then ask the first question in Myanmar:

"When you start learning something new, what do you usually want to do first?"`,
    useCase: "သင့်ရဲ့ သဘာဝအတိုင်း သင်ယူလေ့လာပုံ (Learning Style) ကို မေးခွန်းတွေကနေတစ်ဆင့် သုံးသပ်ပေးပြီး၊ သင်နဲ့ အကိုက်ညီဆုံးဖြစ်မယ့် ထိရောက်တဲ့ လေ့လာနည်းလမ်းတွေကို အသေးစိတ် ဖော်ပြပေးနိုင်ပါတယ်။",
    type: "prompt",
    status: "free",
  },
  {
    id: 3,
    title: "Content Creator Mentor & Brand Strategist",
    description: "Guide content creators to discover their niche and generate detailed content blueprints",
    fullPrompt: `[ROLE]
You are an AI Content Mentor and Brand Strategist.
Your task is to guide a content creator to discover their niche, understand themselves, and generate a full, detailed content blueprint.

All questions and outputs must be in Myanmar language.

[QUESTION MODE]
- Ask one question at a time in Myanmar language.
- Wait for the creator's answer before asking the next question.
- If the creator don't understand the questions you ask, explain this question detail to understand creator.
- If creator's answer is unclear or incomplete, ask clarifying follow-up questions until the answer is sufficient.
- Only after receiving a clear answer, proceed to the next main question.

[TASK OVERVIEW]
0. Phase 0: How to work this prompt for creator (guideline to use prompt)
1. Phase 1: Ask 10 initial self-discovery questions (Personal, Goals, Challenges, Style, Vision)
2. Phase 2: Based on Phase 1 answers, ask next 15 dynamic follow-up questions (Niche, Workflow, Audience, Content style, Identity) and if you have collection of some data or information about your content creation, you give me this (if not, you don't give me)
3. Phase 3: Generate My CC Blueprint(document version) with detail information in Myanmar language including:
- Type of content creator (unique combination name)
- Detail description with long detail information (words<=1000)
- Target Audience
- Core Value
- Niche
- Content Rules
- Brand POV
- Enemy
- Voice / Language Rules
- Growth / Strategy
- Examples or mini-guides if necessary
- 10 raw content ideas
- How to monetize
4. Phase 4: After blueprint is complete, provide completion message in Myanmar:
- Congratulate creator: "ဂုဏ်ယူပါတယ်! သင့်ပုဂ္ဂိုလ်ရေး blueprint ပြီးစီးသွားပါပြီ။"
- Explain importance: "ဒီ blueprint က Thecrash (ငါ) ဆီကနေ အနာဂတ် workflow အတွက် အရေးပါပြီး reference အနေနဲ့ သုံးနိုင်ပါပြီ။"
- Encourage next steps: " Suggest Thecrash channel to use this blueprint for the next useful workflow  "

[QUESTION RULES]
- Keep questions clear, concise, focused.
- Avoid filler words or greetings.
- Ask one question at a time, wait for complete answer.
- Clarifying loop: ask follow-ups if needed until answer is clear.
- Phase 2 questions must adapt dynamically based on Phase 1 answers.

[OUTPUT FORMAT]
- Phase 0: How to work this prompt for creator (guideline to use prompt)
(if phase 0 is completed, go phase 1 step by step)
- Phase 1: 10 initial questions (Myanmar language, one at a time)
- Phase 2: Next 15 follow-up questions (Myanmar language, one at a time)
- Phase 3: Full My CC Blueprint (Myanmar language, detailed, actionable)
- Phase 4: Completion message, importance of saving blueprint, encouragement to check Thecrash videos

[INSTRUCTIONS]
- Maintain friendly, simple, stepwise, guided interaction.
- Ensure final blueprint is complete, personalized, actionable, ready for future workflows.`,
    useCase: "သင့်ရဲ့ ကိုယ်ပိုင် Identity၊ Niche နဲ့ ပရိသတ်ကို ရှင်းရှင်းလင်းလင်း သိမြင်လာစေပြီး၊ လက်တွေ့အသုံးချနိုင်မယ့် Content Strategy Blueprint တစ်ခုလုံးကို အဆင့်ဆင့် တည်ဆောက်ပေးမယ့် လမ်းညွှန်အဖြစ် အသုံးပြုနိုင်ပါတယ်",
    type: "prompt",
    status: "free",
  },
  {
    id: 4,
    title: "Daily Focus OS Notion Template",
    description: "အလုပ်တွေကို ဦးစားပေးအလိုက် စီမံနိုင်ဖို့၊ ပြီးစီးမှုအခြေအနေကို စောင့်ကြည့်ဖို့နဲ့ အရေးကြီးတဲ့အလုပ်တွေကို စိတ်ဖိစီးမှုမရှိဘဲ ပြီးမြောက်အောင် ကူညီပေးမယ့် Beginner တွေအတွက် အသင့်တော်ဆုံး Notion Template ပါ။",
    price: 0,
    format: "Notion Template",
    downloads: "834",
    type: "notion",
    status: "free",
    link: "https://stump-wallflower-3d2.notion.site/2d5693387896806f9097ef79a764dbb0?v=2d569338789680519211000cbcfac1d9&source=copy_link",
  },
  {
    id: 5,
    title: "Web Development Basics",
    description: "Essential concepts for modern web development including HTML, CSS, JavaScript, and React fundamentals.",
    price: 0,
    format: "Guide (30 pages)",
    downloads: "1,234",
    type: "book",
    status: "free",
    link: "https://t.me/thecrashOfficial",
  },
  {
    id: 6,
    title: "Building Your First AI Agent",
    description: "Step-by-step guide to understanding and building your first AI agent from scratch.",
    price: 0,
    format: "PDF (25 pages)",
    downloads: "856",
    type: "book",
    status: "free",
    link: "https://t.me/thecrashOfficial",
  },
  {
    id: 7,
    title: "Complete Guide to Next.js Development",
    description: "Comprehensive guide covering Next.js 16, App Router, Server Components, and modern full-stack development patterns.",
    price: 19999,
    format: "E-Book (150 pages)",
    downloads: "324",
    type: "book",
    status: "paid",
  },
  {
    id: 8,
    title: "Complete Next.js 16 Masterclass",
    description: "In-depth course covering Next.js 16, App Router, Server Components, and modern full-stack development patterns.",
    price: 49999,
    format: "Video Course (12 hours)",
    downloads: "324",
    type: "package",
    status: "paid",
  },
  {
    id: 9,
    title: "AI Automation Business Bundle",
    description: "Complete guide to building and monetizing AI automation products. Includes templates, case studies, and business models.",
    price: 99999,
    format: "Course + Templates (20 hours)",
    downloads: "156",
    type: "package",
    status: "paid",
  },
  {
    id: 10,
    title: "Web Dev Template Collection",
    description: "Premium collection of 10+ React and Next.js templates ready for production deployment.",
    price: 19999,
    format: "Code Templates",
    downloads: "212",
    type: "package",
    status: "paid",
  },
]

export default function MarketPage() {
  const [copiedId, setCopiedId] = useState(null)
  const [expandedId, setExpandedId] = useState(null)

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const promptTemplates = marketplaceItems.filter((item) => item.type === "prompt")
  const notionTemplates = marketplaceItems.filter((item) => item.type === "notion")
  const books = marketplaceItems.filter((item) => item.type === "book")
  const packages = marketplaceItems.filter((item) => item.type === "package")

  const PromptCard = ({ item, index }) => {
    const isExpanded = expandedId === item.id
    const displayPrompt = isExpanded ? item.fullPrompt : item.fullPrompt.substring(0, 200) + "..."

    return (
      <Card
        key={item.id}
        className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur group transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-lg"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="p-6 flex flex-col h-full gap-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
            <StatusBadge status={item.status} />
          </div>

          {/* Use Case */}
          <div className="bg-muted/20 rounded-lg p-3 border border-border/30">
            <p className="text-xs font-semibold text-muted-foreground mb-1">အသုံးချ:</p>
            <p className="text-sm text-foreground/80">{item.useCase}</p>
          </div>

          {/* Prompt Display */}
          <div className="flex-1 bg-muted/30 rounded-lg p-4 border border-border/30">
            <p className="text-sm text-foreground/80 leading-relaxed font-mono whitespace-pre-wrap">
              {displayPrompt}
            </p>
          </div>

          {/* Show More / Show Less Button */}
          <button
            onClick={() => setExpandedId(isExpanded ? null : item.id)}
            className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-muted/50 hover:bg-muted text-foreground text-sm font-medium transition-all"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            {isExpanded ? "Show Less" : "Show More"}
          </button>

          {/* Copy Button */}
          <button
            onClick={() => handleCopy(item.id, item.fullPrompt)}
            className={`w-full py-2.5 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all ${
              copiedId === item.id
                ? "bg-foreground text-background"
                : "bg-primary hover:bg-primary/90 text-primary-foreground active:scale-95"
            }`}
          >
            <CopyIcon />
            {copiedId === item.id ? "Copied!" : "Copy Complete Prompt"}
          </button>
        </div>
      </Card>
    )
  }

  const ProductCard = ({ item, index }) => (
    <Card
      key={item.id}
      className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur group transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-lg"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6 flex flex-col h-full gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
          <StatusBadge status={item.status} />
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground/70">
          {item.format && <span>{item.format}</span>}
          {item.downloads && <span>{item.downloads} downloads</span>}
        </div>

        <div className="flex items-center justify-between gap-3 pt-2 border-t border-border/30">
          <span className="font-semibold text-foreground">
            {item.price === 0 ? "Free" : `${item.price.toLocaleString()} MMK`}
          </span>

          {item.type === "notion" && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground text-sm font-medium transition-all active:scale-95"
            >
              <ExternalLinkIcon />
              Access
            </a>
          )}

          {item.type === "book" && item.status === "free" && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground text-sm font-medium transition-all active:scale-95"
            >
              <ExternalLinkIcon />
              Access
            </a>
          )}

          {(item.type === "package" || (item.type === "book" && item.status === "paid")) && (
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium transition-all active:scale-95">
              <ShoppingCartIcon />
              Buy
            </button>
          )}
        </div>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-3 tracking-tight">Market</h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              Discover everything you need to build, learn, and scale. Premium prompts, templates, books, and complete packages all in one place.
            </p>
          </div>

          {promptTemplates.length > 0 && (
            <div className="mb-20">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-foreground mb-2 tracking-tight">Prompt Templates</h2>
                <p className="text-base text-muted-foreground">Copy-paste ready prompts for any task</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {promptTemplates.map((item, index) => (
                  <PromptCard item={item} index={index} key={item.id} />
                ))}
              </div>
            </div>
          )}

          {notionTemplates.length > 0 && (
            <div className="mb-20">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-foreground mb-2 tracking-tight">Notion Templates</h2>
                <p className="text-base text-muted-foreground">Pre-built systems for productivity</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notionTemplates.map((item, index) => (
                  <ProductCard item={item} index={index} key={item.id} />
                ))}
              </div>
            </div>
          )}

          {books.length > 0 && (
            <div className="mb-20">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-foreground mb-2 tracking-tight">Books</h2>
                <p className="text-base text-muted-foreground">Guides and e-books to level up your skills</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((item, index) => (
                  <ProductCard item={item} index={index} key={item.id} />
                ))}
              </div>
            </div>
          )}

          {packages.length > 0 && (
            <div>
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-foreground mb-2 tracking-tight">Packages</h2>
                <p className="text-base text-muted-foreground">Complete courses and bundles</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((item, index) => (
                  <ProductCard item={item} index={index} key={item.id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
