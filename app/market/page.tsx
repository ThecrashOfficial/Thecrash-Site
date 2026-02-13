"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { useState } from "react"

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
    title: "Content Creator Brief",
    description: "Generate compelling content briefs for any topic",
    prompt: "Create a detailed content brief for [TOPIC] including: main points, target audience, tone, key messages, and call-to-action",
    type: "prompt",
    status: "free",
  },
  {
    id: 2,
    title: "Product Description Writer",
    description: "Write persuasive product descriptions",
    prompt: "Write a compelling product description for [PRODUCT NAME] that includes: key features, benefits, use cases, and why customers should buy it",
    type: "prompt",
    status: "free",
  },
  {
    id: 3,
    title: "Social Media Caption",
    description: "Create engaging social media posts",
    prompt: "Write 5 different social media captions for [PLATFORM] about [TOPIC]. Make them engaging, include relevant hashtags, and optimize for [GOAL]",
    type: "prompt",
    status: "free",
  },
  {
    id: 4,
    title: "Email Newsletter",
    description: "Craft professional newsletters",
    prompt: "Write a professional newsletter email about [TOPIC] with: catchy subject line, greeting, main content, key insights, and clear CTA",
    type: "prompt",
    status: "free",
  },
  {
    id: 5,
    title: "Premium Notion Template Pack",
    description: "All-in-one Notion system for project management, CRM, knowledge base, and task tracking.",
    price: 24999,
    format: "Notion Template",
    downloads: "567",
    type: "notion",
    status: "paid",
    link: "https://notion.so",
  },
  {
    id: 6,
    title: "Daily Focus OS Notion Template",
    description: "Beginner-friendly Notion template to prioritize tasks, track progress, and complete important work without overwhelm.",
    price: 9999,
    format: "Notion Template",
    downloads: "834",
    type: "notion",
    status: "paid",
    link: "https://notion.so",
  },
  {
    id: 7,
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
    id: 8,
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
    id: 9,
    title: "Complete Guide to Next.js Development",
    description: "Comprehensive guide covering Next.js 16, App Router, Server Components, and modern full-stack development patterns.",
    price: 19999,
    format: "E-Book (150 pages)",
    downloads: "324",
    type: "book",
    status: "paid",
  },
  {
    id: 10,
    title: "Complete Next.js 16 Masterclass",
    description: "In-depth course covering Next.js 16, App Router, Server Components, and modern full-stack development patterns.",
    price: 49999,
    format: "Video Course (12 hours)",
    downloads: "324",
    type: "package",
    status: "paid",
  },
  {
    id: 11,
    title: "AI Automation Business Bundle",
    description: "Complete guide to building and monetizing AI automation products. Includes templates, case studies, and business models.",
    price: 99999,
    format: "Course + Templates (20 hours)",
    downloads: "156",
    type: "package",
    status: "paid",
  },
  {
    id: 12,
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

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const promptTemplates = marketplaceItems.filter((item) => item.type === "prompt")
  const notionTemplates = marketplaceItems.filter((item) => item.type === "notion")
  const books = marketplaceItems.filter((item) => item.type === "book")
  const packages = marketplaceItems.filter((item) => item.type === "package")

  const PromptCard = ({ item, index }) => (
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

        <div className="flex-1 bg-muted/30 rounded-lg p-4 border border-border/30">
          <p className="text-sm text-foreground/80 leading-relaxed font-mono">{item.prompt}</p>
        </div>

        <button
          onClick={() => handleCopy(item.id, item.prompt)}
          className={`w-full py-2.5 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all ${
            copiedId === item.id
              ? "bg-foreground text-background"
              : "bg-muted hover:bg-muted/80 text-foreground active:scale-95"
          }`}
        >
          <CopyIcon />
          {copiedId === item.id ? "Copied" : "Copy Prompt"}
        </button>
      </div>
    </Card>
  )

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
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground">Prompt Templates</h2>
                <p className="text-sm text-muted-foreground mt-2">Copy-paste ready prompts for any task</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {promptTemplates.map((item, index) => (
                  <PromptCard item={item} index={index} key={item.id} />
                ))}
              </div>
            </div>
          )}

          {notionTemplates.length > 0 && (
            <div className="mb-20">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground">Notion Templates</h2>
                <p className="text-sm text-muted-foreground mt-2">Pre-built systems for productivity</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {notionTemplates.map((item, index) => (
                  <ProductCard item={item} index={index} key={item.id} />
                ))}
              </div>
            </div>
          )}

          {books.length > 0 && (
            <div className="mb-20">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground">Books</h2>
                <p className="text-sm text-muted-foreground mt-2">Guides and e-books to level up your skills</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {books.map((item, index) => (
                  <ProductCard item={item} index={index} key={item.id} />
                ))}
              </div>
            </div>
          )}

          {packages.length > 0 && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground">Packages</h2>
                <p className="text-sm text-muted-foreground mt-2">Complete courses and bundles</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
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
