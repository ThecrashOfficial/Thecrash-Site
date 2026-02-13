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
  // Free Resources
  {
    id: 1,
    title: "AI Prompt Engineering Master Guide",
    description: "Complete guide with 50+ tested prompts for ChatGPT, Claude, and Gemini. Learn prompt structures, best practices, and advanced techniques.",
    category: "AI & Prompts",
    price: 0,
    format: "PDF (45 pages)",
    downloads: "2,543",
    type: "free",
    buttonType: "telegram",
    link: "https://t.me/thecrashOfficial",
  },
  {
    id: 2,
    title: "Web Development Basics",
    description: "Essential concepts for modern web development including HTML, CSS, JavaScript, and React fundamentals.",
    category: "Web Development",
    price: 0,
    format: "Guide (30 pages)",
    downloads: "1,234",
    type: "free",
    buttonType: "telegram",
    link: "https://t.me/thecrashOfficial",
  },
  {
    id: 3,
    title: "Building Your First AI Agent",
    description: "Step-by-step guide to understanding and building your first AI agent from scratch.",
    category: "AI & Automation",
    price: 0,
    format: "PDF (25 pages)",
    downloads: "856",
    type: "free",
    buttonType: "telegram",
    link: "https://t.me/thecrashOfficial",
  },
  {
    id: 4,
    title: "50 Quick AI Prompts Collection",
    description: "50 copy-paste ready AI prompts for productivity, content creation, coding, and problem-solving.",
    category: "AI & Prompts",
    price: 0,
    format: "Prompt Templates",
    downloads: "5,234",
    type: "free",
    buttonType: "copy",
    link: "#",
  },

  // Paid Resources
  {
    id: 5,
    title: "Complete Next.js 16 Masterclass",
    description: "In-depth course covering Next.js 16, App Router, Server Components, and modern full-stack development patterns.",
    category: "Web Development",
    price: 49999,
    format: "Video Course (12 hours)",
    downloads: "324",
    type: "paid",
    buttonType: "buy",
    link: "#",
  },
  {
    id: 6,
    title: "AI Automation Business Bundle",
    description: "Complete guide to building and monetizing AI automation products. Includes templates, case studies, and business models.",
    category: "AI & Automation",
    price: 99999,
    format: "Course + Templates (20 hours)",
    downloads: "156",
    type: "paid",
    buttonType: "buy",
    link: "#",
  },
  {
    id: 7,
    title: "100 AI Prompts for Business",
    description: "Premium collection of 100 business-focused AI prompts for marketing, sales, management, and strategy.",
    category: "AI & Prompts",
    price: 14999,
    format: "Prompt Collection",
    downloads: "432",
    type: "paid",
    buttonType: "copy",
    link: "#",
  },
  {
    id: 8,
    title: "Premium Notion Template Pack",
    description: "All-in-one Notion system for project management, CRM, knowledge base, and task tracking.",
    category: "Productivity",
    price: 24999,
    format: "Notion Template",
    downloads: "567",
    type: "paid",
    buttonType: "notion",
    link: "https://notion.so",
  },
  {
    id: 9,
    title: "Web Dev Template Collection",
    description: "Premium collection of 10+ React and Next.js templates ready for production deployment.",
    category: "Templates",
    price: 19999,
    format: "Code Templates",
    downloads: "212",
    type: "paid",
    buttonType: "buy",
    link: "#",
  },
]

export default function MarketPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "AI & Prompts", "Web Development", "AI & Automation", "Templates", "Productivity"]

  const freeItems = marketplaceItems.filter((item) => item.type === "free")
  const paidItems = marketplaceItems.filter((item) => item.type === "paid")

  const filterItemsByCategory = (items) => {
    if (selectedCategory === "All") return items
    return items.filter((item) => item.category === selectedCategory)
  }

  const filteredFreeItems = filterItemsByCategory(freeItems)
  const filteredPaidItems = filterItemsByCategory(paidItems)

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    alert("Copied to clipboard!")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 animate-slide-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Market</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Discover free and premium resources, templates, and courses to accelerate your journey. Everything you need to build, learn, and scale.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12 animate-slide-up">
            <h3 className="text-sm font-semibold text-foreground mb-3">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Free Resources Section */}
          {filteredFreeItems.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-green-500 rounded-full"></span>
                Free Resources
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {filteredFreeItems.map((item, index) => (
                  <Card
                    key={item.id}
                    className="overflow-hidden border-border bg-card group transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:scale-[1.02] stagger-item"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-6 lg:p-8 flex flex-col justify-between h-full">
                      {/* Type Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="default" className="text-xs bg-green-500 hover:bg-green-600">
                          Free
                        </Badge>
                        <span className="text-xs text-muted-foreground">{item.downloads} downloads</span>
                      </div>

                      {/* Title & Category */}
                      <div className="mb-4 flex-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">{item.category}</p>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{item.description}</p>

                        {/* Format */}
                        <p className="text-xs text-muted-foreground mb-4">{item.format}</p>
                      </div>

                      {/* Price & Action */}
                      <div className="border-t border-border/50 pt-4">
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold text-green-500">Free</p>

                          {item.buttonType === "copy" && (
                            <button
                              onClick={() => handleCopy(item.title)}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all font-medium hover:shadow-lg active:scale-95"
                            >
                              <CopyIcon />
                              Copy
                            </button>
                          )}

                          {item.buttonType === "telegram" && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all font-medium hover:shadow-lg active:scale-95"
                            >
                              <TelegramIcon />
                              Get on Telegram
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Paid Resources Section */}
          {filteredPaidItems.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-primary rounded-full"></span>
                Premium Resources
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPaidItems.map((item, index) => (
                  <Card
                    key={item.id}
                    className="overflow-hidden border-border bg-card group transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:scale-[1.02] stagger-item"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-6 lg:p-8 flex flex-col justify-between h-full">
                      {/* Type Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="secondary" className="text-xs">
                          Premium
                        </Badge>
                        <span className="text-xs text-muted-foreground">{item.downloads} downloads</span>
                      </div>

                      {/* Title & Category */}
                      <div className="mb-4 flex-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">{item.category}</p>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{item.description}</p>

                        {/* Format */}
                        <p className="text-xs text-muted-foreground mb-4">{item.format}</p>
                      </div>

                      {/* Price & Action */}
                      <div className="border-t border-border/50 pt-4">
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold text-foreground">{item.price.toLocaleString()} MMK</p>

                          {item.buttonType === "buy" && (
                            <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all font-medium hover:shadow-lg active:scale-95">
                              <ShoppingCartIcon />
                              Buy Now
                            </button>
                          )}

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
                              Get Template
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {filteredFreeItems.length === 0 && filteredPaidItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No items found matching your filters.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
