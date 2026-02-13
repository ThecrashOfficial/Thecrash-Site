'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  icon: string
  title: string
  subtitle: string
  description: string
  ctaText?: string
  ctaLink?: string
}

export default function ProjectCard({
  icon,
  title,
  subtitle,
  description,
  ctaText = 'Learn More',
  ctaLink = '#',
}: ProjectCardProps) {
  return (
    <div className="w-full bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
      {/* Top Section: Icon + Title/Subtitle */}
      <div className="flex gap-4 mb-6">
        {/* Icon Container - 60x60px square */}
        <div className="w-15 h-15 flex-shrink-0 rounded-xl bg-muted/50 flex items-center justify-center overflow-hidden">
          <Image
            src={icon}
            alt={title}
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Title & Subtitle */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors truncate">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground truncate">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Body Text - 4 lines */}
      <div className="flex-1 mb-6">
        <p className="text-sm text-foreground/80 leading-relaxed line-clamp-4">
          {description}
        </p>
      </div>

      {/* Bottom: CTA Button aligned bottom-right */}
      <div className="flex justify-end pt-4 border-t border-border/30">
        <Link
          href={ctaLink}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium text-sm transition-all duration-300 active:scale-95"
        >
          {ctaText}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
