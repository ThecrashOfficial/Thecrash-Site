"use client"

import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

const posts = [
  {
    id: 1,
    title: "The Future of AI Agents",
    excerpt:
      "Exploring how autonomous AI agents will reshape software development, businesses, and how we work. The shift from tools to intelligent assistants is just beginning.",
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
    date: "Jan 12, 2025",
    category: "Development",
    readTime: "5 min read",
    slug: "art-of-shipping-fast",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-16 animate-slide-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Blog</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Thoughts, opinions, and insights on technology, business, and building in the digital age.
            </p>
          </div>

          {/* Blog Posts List */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: "100ms" }}>
            {posts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div
                  className="group border border-border/50 rounded-lg p-5 transition-all duration-300 hover:border-primary/50 hover:bg-card/30 hover:shadow-md cursor-pointer"
                  style={{ animationDelay: `${150 + index * 50}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Title */}
                      <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors mt-1">
                      <ArrowRightIcon />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
