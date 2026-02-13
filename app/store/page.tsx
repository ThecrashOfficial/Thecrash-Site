"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"

const CopyIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
)

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

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const ShoppingCartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
)

const TelegramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 8.5l-1.5 7c-.1.6-.6 1-1.1 1-.4 0-.8-.2-1-.5l-2.5-2-1.3 1.3c-.1.1-.3.2-.5.2-.4 0-.8-.3-.8-.8v-.5l3.2-4 .4-.5-3 2-2.8-2.2c-.2-.2-.3-.5-.3-.8 0-.7.8-1.2 1.5-1l6.5 2.5c.5.2.8.7.8 1.3z" />
  </svg>
)

const marketplaceItems = [
  // Prompt Templates Section
  {
    id: 1,
    title: "50 Quick AI Prompts Collection",
    description: "50 copy-paste ready AI prompts for productivity, content creation, coding, and problem-solving.",
    category: "Prompt Templates",
    price: 0,
    format: "Prompt Templates",
    downloads: "5,234",
    type: "prompt",
    buttonType: "copy",
    link: "#",
  },
  {
    id: 2,
    title: "100 AI Prompts for Business",
    description: "Premium collection of 100 business-focused AI prompts for marketing, sales, management, and strategy.",
    category: "Prompt Templates",
    price: 14999,
    format: "Prompt Collection",
    downloads: "432",
    type: "prompt",
    buttonType: "copy",
    link: "#",
  },
  {
    id: 3,
    title: "AI Prompt Engineering Master Guide",
    description: "Complete guide with 50+ tested prompts for ChatGPT, Claude, and Gemini. Learn prompt structures, best practices, and advanced techniques.",
    category: "Prompt Templates",
    price: 0,
    format: "PDF (45 pages)",
    downloads: "2,543",
    type: "prompt",
    buttonType: "telegram",
    link: "https://t.me/thecrashOfficial",
  },

  // Notion Templates Section
  {
    id: 4,
    title: "Premium Notion Template Pack",
    description: "All-in-one Notion system for project management, CRM, knowledge base, and task tracking.",
    category: "Notion Templates",
    price: 24999,
    format: "Notion Template",
    downloads: "567",
    type: "notion",
    buttonType: "notion",
    link: "https://notion.so",
  },
  {
    id: 5,
    title: "Daily Focus OS Notion Template",
    description: "Beginner-friendly Notion template to prioritize tasks, track progress, and complete important work without overwhelm.",
    category: "Notion Templates",
    price: 9999,
    format: "Notion Template",
    downloads: "834",
    type: "notion",
    buttonType: "notion",
    link: "https://notion.so",
  },

  // Books Section
  {
    id: 6,
    title: "Web Development Basics",
    description: "Essential concepts for modern web development including HTML, CSS, JavaScript, and React fundamentals.",
    category: "Books",
    price: 0,
    format: "Guide (30 pages)",
    downloads: "1,234",
    type: "book",
    buttonType: "telegram",
    link: "https://t.me/thecrashOfficial",
  },
  {
    id: 7,
    title: "Building Your First AI Agent",
    description: "Step-by-step guide to understanding and building your first AI agent from scratch.",
    category: "Books",
    price: 0,
    format: "PDF (25 pages)",
    downloads: "856",
    type: "book",
    buttonType: "telegram",
    link: "https://t.me/thecrashOfficial",
  },
  {
    id: 8,
    title: "Complete Guide to Next.js Development",
    description: "Comprehensive guide covering Next.js 16, App Router, Server Components, and modern full-stack development patterns with real-world examples.",
    category: "Books",
    price: 19999,
    format: "E-Book (150 pages)",
    downloads: "324",
    type: "book",
    buttonType: "buy",
    link: "#",
  },

  // Packages Section
  {
    id: 9,
    title: "Complete Next.js 16 Masterclass",
    description: "In-depth course covering Next.js 16, App Router, Server Components, and modern full-stack development patterns.",
    category: "Packages",
    price: 49999,
    format: "Video Course (12 hours)",
    downloads: "324",
    type: "package",
    buttonType: "buy",
    link: "#",
  },
  {
    id: 10,
    title: "AI Automation Business Bundle",
    description: "Complete guide to building and monetizing AI automation products. Includes templates, case studies, and business models.",
    category: "Packages",
    price: 99999,
    format: "Course + Templates (20 hours)",
    downloads: "156",
    type: "package",
    buttonType: "buy",
    link: "#",
  },
  {
    id: 11,
    title: "Web Dev Template Collection",
    description: "Premium collection of 10+ React and Next.js templates ready for production deployment.",
    category: "Packages",
    price: 19999,
    format: "Code Templates",
    downloads: "212",
    type: "package",
    buttonType: "buy",
    link: "#",
  },
]

export default function MarketPage() {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    alert("Copied to clipboard!")
  }

  const promptTemplates = marketplaceItems.filter((item) => item.type === "prompt")
  const notionTemplates = marketplaceItems.filter((item) => item.type === "notion")
  const books = marketplaceItems.filter((item) => item.type === "book")
  const packages = marketplaceItems.filter((item) => item.type === "package")

  const MarketSection = ({ title, accentColor, items, icon: Icon }) => (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
        <span className={`w-1 h-8 rounded-full ${accentColor}`}></span>
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <Card
            key={item.id}
            className="overflow-hidden border-border bg-card group transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:scale-[1.02]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="p-6 lg:p-8 flex flex-col justify-between h-full">
              {/* Badge */}
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="text-xs">
                  {item.category}
                </Badge>
                <span className="text-xs text-muted-foreground">{item.downloads} downloads</span>
              </div>

              {/* Content */}
              <div className="mb-4 flex-1">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{item.description}</p>
                <p className="text-xs text-muted-foreground">{item.format}</p>
              </div>

              {/* Price & Action */}
              <div className="border-t border-border/50 pt-4">
                <div className="flex items-center justify-between">
                  <p className={`text-lg font-bold ${item.price === 0 ? "text-green-500" : "text-foreground"}`}>
                    {item.price === 0 ? "Free" : `${item.price.toLocaleString()} MMK`}
                  </p>

                  {item.buttonType === "copy" && (
                    <button
                      onClick={() => handleCopy(item.title)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all font-medium hover:shadow-lg active:scale-95"
                    >
                      <CopyIcon />
                      Copy
                    </button>
                  )}

                  {item.buttonType === "notion" && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all font-medium hover:shadow-lg active:scale-95"
                    >
                      <ExternalLinkIcon />
                      Get
                    </a>
                  )}

                  {item.buttonType === "telegram" && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all font-medium hover:shadow-lg active:scale-95"
                    >
                      <TelegramIcon />
                      Get
                    </a>
                  )}

                  {item.buttonType === "buy" && (
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all font-medium hover:shadow-lg active:scale-95">
                      <ShoppingCartIcon />
                      Buy Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 animate-slide-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Market</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Discover everything you need to build, learn, and scale. Premium prompts, templates, books, and complete packages all in one place.
            </p>
          </div>

          {/* Prompt Templates Section */}
          {promptTemplates.length > 0 && (
            <MarketSection
              title="Prompt Templates"
              accentColor="bg-blue-500"
              items={promptTemplates}
            />
          )}

          {/* Notion Templates Section */}
          {notionTemplates.length > 0 && (
            <MarketSection
              title="Notion Templates"
              accentColor="bg-purple-500"
              items={notionTemplates}
            />
          )}

          {/* Books Section */}
          {books.length > 0 && (
            <MarketSection
              title="Books"
              accentColor="bg-amber-500"
              items={books}
            />
          )}

          {/* Packages Section */}
          {packages.length > 0 && (
            <MarketSection
              title="Packages"
              accentColor="bg-primary"
              items={packages}
            />
          )}
        </div>
      </main>
    </div>
  )
}
