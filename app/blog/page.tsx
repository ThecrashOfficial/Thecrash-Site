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
    title: "၂၀၂၄ မှ ၂၀၂၆ အတွင်း ပြောင်းလဲခဲ့သော AI အပေါ် အမြင်",
    excerpt:
      "AI နည်းပညာ မြှင့်လာတဲ့ အမျှ ကျွန်တော်အတွက် access လုပ်ရတာ ပိုလွယ်လာခဲ့တယ်။ အရင်ကတော့ AI နဲ့ အလုပ်မဖြစ်တာတွေ များခဲ့ပေမယ့် အခုနောက်ပိုင်း တော်တော်များများ အလုပ်ဖြစ်လာခဲ့တယ်။",
    date: "Feb 13, 2026",
    category: "AI & Perspectives",
    readTime: "12 min read",
    slug: "ai-perspectives-2024-2026",
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
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
            {posts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div
                  className="group border border-border/40 rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/50 hover:shadow-lg hover:-translate-y-1 cursor-pointer bg-card/20 backdrop-blur-sm shadow-sm"
                  style={{ animationDelay: `${150 + index * 50}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Title */}
                      <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
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
                    <div className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 group-hover:scale-110 transition-all mt-1">
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
