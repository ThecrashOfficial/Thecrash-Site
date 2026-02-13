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

const storeItems = [
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
    link: "https://t.me/thecrash_hub",
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
    link: "https://t.me/thecrash_hub",
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
    link: "https://t.me/thecrash_hub",
  },

  // Paid Resources
  {
    id: 4,
    title: "Complete Next.js 16 Masterclass",
    description: "In-depth course covering Next.js 16, App Router, Server Components, and modern full-stack development patterns.",
    category: "Web Development",
    price: 49999,
    format: "Video Course (12 hours)",
    downloads: "324",
    type: "paid",
    link: "#",
  },
  {
    id: 5,
    title: "AI Automation Business Bundle",
    description: "Complete guide to building and monetizing AI automation products. Includes templates, case studies, and business models.",
    category: "AI & Automation",
    price: 99999,
    format: "Course + Templates (20 hours)",
    downloads: "156",
    type: "paid",
    link: "#",
  },
  {
    id: 6,
    title: "50 AI Prompts for Productivity",
    description: "Curated collection of 50 AI prompts to boost your productivity. Use with ChatGPT, Claude, or any AI tool.",
    category: "AI & Prompts",
    price: 14999,
    format: "Notion Database",
    downloads: "432",
    type: "paid",
    link: "#",
  },
  {
    id: 7,
    title: "Web Dev Template Collection",
    description: "Premium collection of 10+ React and Next.js templates ready for production deployment.",
    category: "Templates",
    price: 24999,
    format: "Code Templates",
    downloads: "212",
    type: "paid",
    link: "#",
  },
  {
    id: 8,
    title: "Complete Notion OS System",
    description: "All-in-one Notion operating system including task management, CRM, project tracking, and more.",
    category: "Productivity",
    price: 39999,
    format: "Notion System",
    downloads: "567",
    type: "paid",
    link: "#",
  },
]

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showFreeOnly, setShowFreeOnly] = useState(false)

  const categories = ["All", "AI & Prompts", "Web Development", "AI & Automation", "Templates", "Productivity"]

  let filteredItems = storeItems.filter((item) => {
    if (showFreeOnly && item.type !== "free") return false
    if (selectedCategory === "All") return true
    return item.category === selectedCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 animate-slide-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Store</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Browse free and premium resources, templates, and courses to accelerate your journey as a builder and creator.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12 space-y-6 animate-slide-up">
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Categories</h3>
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

            {/* Free/Paid Toggle */}
            <div>
              <button
                onClick={() => setShowFreeOnly(!showFreeOnly)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  showFreeOnly
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {showFreeOnly ? "Showing Free Items" : "All Items"}
              </button>
            </div>
          </div>

          {/* Store Items Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="overflow-hidden border-border bg-card group transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:scale-[1.02] stagger-item p-6 lg:p-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Type Badge */}
                <div className="flex items-start justify-between mb-4">
                  <Badge
                    variant={item.type === "free" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {item.type === "free" ? "Free" : "Premium"}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{item.downloads} downloads</span>
                </div>

                {/* Title & Category */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{item.category}</p>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">{item.description}</p>

                {/* Format */}
                <p className="text-xs text-muted-foreground mb-6">{item.format}</p>

                {/* Price */}
                <div className="mb-6">
                  {item.type === "free" ? (
                    <p className="text-2xl font-bold text-green-500">Free</p>
                  ) : (
                    <p className="text-2xl font-bold text-foreground">{item.price.toLocaleString()} MMK</p>
                  )}
                </div>

                {/* Action Button */}
                <a
                  href={item.link}
                  className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    item.type === "free"
                      ? "bg-muted text-foreground hover:bg-muted/70"
                      : "bg-primary text-primary-foreground hover:shadow-lg hover:scale-105 active:scale-95"
                  }`}
                >
                  {item.type === "free" ? (
                    <>
                      <DownloadIcon />
                      Get Free
                    </>
                  ) : (
                    <>
                      <ShoppingCartIcon />
                      Buy Now
                    </>
                  )}
                </a>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No items found matching your filters.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
