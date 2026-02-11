import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Inline SVG Icons
const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 5 12 12 16 14" />
  </svg>
)

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
)

const GiftIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
  </svg>
)



const articles = [
  {
    title: "Example- Understanding TypeScript Generics",
    excerpt: "A deep dive into TypeScript generics and how they can make your code more reusable and type-safe.",
    category: "TypeScript",
    date: "2026-01-01",
    readTime: "1 min read",
    slug: "typescript-generics",
  },
]

const categories = ["All", "Web Development", "TypeScript", "CSS", "AI", "Database"]

export default function LearnPage() {
  const handleDownload = (resource: typeof freeResources[0]) => {
    // Create a temporary link and trigger download
    const link = document.createElement('a')
    link.href = resource.fileUrl
    link.download = `${resource.title.replace(/\s+/g, '-').toLowerCase()}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">Knowledge Hub</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Learn</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
              Polished tutorials, guides, and articles to help you grow as a developer and creator.
            </p>
            
          </div>

          

          

          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {articles.map((article, index) => (
              <Link key={index} href={`/learn/${article.slug}`}>
                <Card
                  className={`p-8 hover:shadow-md transition-all duration-300 border-border bg-card group animate-float-delay-${index % 6}`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-3">
                        {article.category}
                      </Badge>

                      <h2 className="text-2xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <CalendarIcon className="w-4 h-4" />
                          {new Date(article.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <ClockIcon className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>

                    <ArrowRightIcon className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
