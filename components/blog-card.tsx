"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface BlogCardProps {
  image: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  slug: string
  color?: string
}

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

export default function BlogCard({
  image,
  title,
  excerpt,
  category,
  date,
  readTime,
  slug,
  color = "from-slate-500/20 to-gray-500/20",
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block h-full">
      <div className="rounded-xl overflow-hidden bg-card/50 backdrop-blur border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/50 h-full flex flex-col">
        {/* Image - Full Width Top */}
        <div className={`relative w-full aspect-video overflow-hidden bg-gradient-to-br ${color}`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Content - Flex Column Below */}
        <div className="p-6 lg:p-7 flex flex-col justify-between flex-1">
          {/* Top Section */}
          <div>
            {/* Meta Info */}
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <Badge variant="secondary" className="text-xs">
                {category}
              </Badge>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">{readTime}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
              {title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{excerpt}</p>
          </div>

          {/* Bottom Section - Read Button */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/30">
            <span className="text-xs text-muted-foreground">{date}</span>
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
              <ArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
