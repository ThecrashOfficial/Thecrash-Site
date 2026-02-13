import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

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
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
)

const products = [
  {
    title: "Thecrash Workspace",
    subtitle: "Personal Ecosystem",
    version: "v1.0",
    logo: "/images/design-mode/thesonehub-logo.jpg",
    description:
      "A complete personal workspace ecosystem for creators and builders. Manage projects, learn, collaborate, and grow in one place with AI-powered mentorship.",
    features: [
      "Interactive dashboard with real-time updates",
      "Project management and portfolio showcase",
      "Learning space with curated content in Myanmar",
      "AI-powered assistant with 6 specialized mentor modes",
      "Digital garden for knowledge management",
      "Community forum and engagement",
    ],
    price: "Free",
    status: "Live",
    category: "SaaS",
    link: "https://v0-the-crash-site.vercel.app/",
    previewText: "View Live",
    year: "2024",
  },
  {
    title: "AI Prompt Templates Pack",
    subtitle: "50+ Production-Ready Prompts",
    version: "v2.0",
    logo: "/placeholder-logo.svg",
    description:
      "Collection of 50+ battle-tested AI prompts for content creation, development, business, and productivity. Save hours of prompt engineering work.",
    features: [
      "ChatGPT, Claude, and Gemini optimized prompts",
      "Well-organized by category and use case",
      "Copy-paste ready templates with examples",
      "Regular updates with new prompts monthly",
      "Commercial usage allowed",
      "Lifetime access to all updates",
    ],
    price: "29,000 MMK",
    status: "Available",
    category: "Digital Product",
    previewText: "Buy Now",
    year: "2024",
  },
  {
    title: "Web Dev Starter Kit",
    subtitle: "Next.js + TypeScript + Tailwind",
    version: "v1.5",
    logo: "/placeholder-logo.png",
    description:
      "Production-ready boilerplate for building modern web applications. Includes authentication, database setup, and complete deployment guides.",
    features: [
      "Next.js 16 with App Router configured",
      "TypeScript with strict type checking",
      "Tailwind CSS with custom component library",
      "Auth templates for Supabase",
      "Database integration examples",
      "GitHub Actions CI/CD ready",
    ],
    price: "49,000 MMK",
    status: "Available",
    category: "Template",
    link: "https://github.com",
    previewText: "Preview",
    year: "2024",
  },
  {
    title: "AI Agents Development Course",
    subtitle: "Build Autonomous Systems",
    version: "v1.0",
    logo: "/placeholder-logo.svg",
    description:
      "Learn to build production-ready AI agents using LangChain, OpenAI APIs, and modern frameworks. From theory to deployment in production.",
    features: [
      "8 comprehensive video modules",
      "Real-world AI agent project walkthroughs",
      "Complete source code and templates",
      "Live Q&A sessions with instructors",
      "Certificate of completion",
      "Lifetime course access and updates",
    ],
    price: "99,000 MMK",
    status: "Coming Soon",
    category: "Course",
    previewText: "Notify Me",
    year: "2025",
  },
]

export default function MetaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 animate-slide-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Meta</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Premium products, templates, and resources built to help you create, learn, and scale your skills.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur group transition-all duration-500 hover:shadow-xl hover:border-primary/50 hover:bg-card/80 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  {/* Icon Container - Top */}
                  <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-muted/50 to-muted/30 flex items-center justify-center p-6 transition-all duration-500 group-hover:from-primary/5 group-hover:to-muted/40">
                    {product.logo && (
                      <Image
                        src={product.logo}
                        alt={product.title}
                        width={160}
                        height={160}
                        className="object-contain max-w-[60%] max-h-[60%] transition-transform duration-500 group-hover:scale-110 drop-shadow-sm"
                      />
                    )}
                  </div>

                  {/* Content - Bottom */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    {/* Status Badges */}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <Badge
                        variant={
                          product.status === "Live"
                            ? "default"
                            : product.status === "Available"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs"
                      >
                        {product.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{product.category}</span>
                    </div>

                    {/* Title */}
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {product.title}
                      </h3>
                      {product.subtitle && <p className="text-xs text-muted-foreground mt-1">{product.subtitle}</p>}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features - Compact */}
                    <div className="mb-4 space-y-1">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <p key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                          <span className="line-clamp-1">{feature}</span>
                        </p>
                      ))}
                      {product.features.length > 2 && (
                        <p className="text-xs text-muted-foreground/70 italic">+{product.features.length - 2} more features</p>
                      )}
                    </div>

                    {/* Price & CTA */}
                    <div className="border-t border-border/30 pt-4 space-y-3">
                      <div>
                        <p className="text-xs text-muted-foreground/70 mb-1">Price</p>
                        <p className="text-xl font-bold text-primary">{product.price}</p>
                      </div>

                      <div className="flex flex-col gap-2">
                        {product.link && product.status !== "Coming Soon" && (
                          <Link
                            href={product.link}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-foreground border border-foreground rounded-lg transition-all duration-300 hover:bg-foreground hover:text-background active:scale-95"
                          >
                            <ExternalLinkIcon />
                            {product.previewText}
                          </Link>
                        )}
                        {product.status !== "Coming Soon" && product.price !== "Free" ? (
                          <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all font-medium text-xs hover:shadow-lg active:scale-95">
                            <ShoppingCartIcon />
                            Buy Now
                          </button>
                        ) : product.status === "Coming Soon" ? (
                          <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-all font-medium text-xs">
                            {product.previewText}
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
