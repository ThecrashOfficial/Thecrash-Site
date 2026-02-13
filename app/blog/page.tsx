"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

const posts = [
  {
    id: 1,
    title: "The Future of AI Agents",
    excerpt:
      "Exploring how autonomous AI agents will reshape software development, businesses, and how we work. The shift from tools to intelligent assistants is just beginning.",
    image: "/placeholder.jpg",
    date: "Feb 13, 2025",
    category: "AI & Automation",
    readTime: "8 min read",
    slug: "future-of-ai-agents",
  },
  {
    id: 2,
    title: "Why Builders Should Think in Systems",
    excerpt:
      "Learn how systems thinking transforms product development. Instead of building features in isolation, understand how interconnected components create powerful outcomes.",
    image: "/placeholder-user.jpg",
    date: "Feb 10, 2025",
    category: "Strategy",
    readTime: "6 min read",
    slug: "systems-thinking-builders",
  },
  {
    id: 3,
    title: "Monetizing Digital Intelligence",
    excerpt:
      "A practical guide to turning AI capabilities into revenue streams. From SaaS to AI agents, explore proven monetization strategies for the AI era.",
    image: "/placeholder.jpg",
    date: "Feb 5, 2025",
    category: "Business",
    readTime: "10 min read",
    slug: "monetizing-digital-intelligence",
  },
  {
    id: 4,
    title: "From Tools to Infrastructure: The AI Shift",
    excerpt:
      "The next wave isn't about better AI tools—it's about AI infrastructure. Discover how this shift creates new opportunities for builders and entrepreneurs.",
    image: "/placeholder-user.jpg",
    date: "Jan 28, 2025",
    category: "Technology",
    readTime: "7 min read",
    slug: "tools-to-infrastructure-ai",
  },
  {
    id: 5,
    title: "Building in Public: Lessons from 2024",
    excerpt:
      "Reflecting on what I learned by building and sharing projects publicly. The transparency, community feedback, and opportunities that emerged changed everything.",
    image: "/placeholder.jpg",
    date: "Jan 20, 2025",
    category: "Entrepreneurship",
    readTime: "9 min read",
    slug: "building-in-public-2024",
  },
  {
    id: 6,
    title: "The Art of Shipping Fast",
    excerpt:
      "Why speed matters more than perfection. A framework for building, launching, and iterating quickly while maintaining quality and user satisfaction.",
    image: "/placeholder-user.jpg",
    date: "Jan 12, 2025",
    category: "Development",
    readTime: "5 min read",
    slug: "art-of-shipping-fast",
  },
]

const categories = ["All", "AI & Automation", "Strategy", "Business", "Technology", "Entrepreneurship", "Development"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = selectedCategory === "All" ? posts : posts.filter((post) => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 animate-slide-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Blog</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Thoughts, opinions, and insights on technology, business, and building in the digital age.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground scale-105"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105"
                  }`}
                  style={{ animationDelay: `${150 + index * 50}ms` }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
            {filteredPosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden border-border bg-card group transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:scale-[1.01] cursor-pointer" style={{ animationDelay: `${250 + index * 75}ms` }}>
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Image Section */}
                    <div className="relative aspect-video md:aspect-auto overflow-hidden bg-muted">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:col-span-2 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          <Badge variant="secondary" className="text-xs">
                            {post.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        </div>

                        <h2 className="text-xl lg:text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                          {post.title}
                        </h2>

                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <ArrowRightIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts found in this category.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
