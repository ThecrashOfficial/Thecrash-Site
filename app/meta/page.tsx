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
          <div className="space-y-16">
            {products.map((product, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-border bg-card group transition-all duration-500 hover:shadow-2xl hover:border-primary/50 hover:scale-[1.01]`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`grid gap-0 ${index % 2 === 0 ? "md:grid-cols-[280px_1fr]" : "md:grid-cols-[1fr_280px]"}`}>
                  {/* Product Image/Logo */}
                  <div className={`relative aspect-square md:aspect-auto overflow-hidden bg-muted flex items-center justify-center p-8 transition-all duration-500 group-hover:bg-muted/70 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    {product.logo && (
                      <Image
                        src={product.logo}
                        alt={product.title}
                        width={200}
                        height={200}
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      {/* Header with Badges */}
                      <div className="flex items-center gap-3 mb-4 flex-wrap animate-slide-up" style={{ animationDelay: `${index * 150 + 100}ms` }}>
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
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{product.year}</span>
                      </div>

                      {/* Title */}
                      <div className="mb-4 animate-slide-up" style={{ animationDelay: `${index * 150 + 150}ms` }}>
                        <h2 className="text-3xl font-bold text-card-foreground transition-colors duration-300 group-hover:text-primary">
                          {product.title}
                        </h2>
                        {product.subtitle && <p className="text-sm text-muted-foreground mt-1">{product.subtitle}</p>}
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed animate-slide-up" style={{ animationDelay: `${index * 150 + 200}ms` }}>
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6 animate-slide-up" style={{ animationDelay: `${index * 150 + 250}ms` }}>
                        <h3 className="text-sm font-semibold text-card-foreground mb-3">Key Features:</h3>
                        <ul className="space-y-2">
                          {product.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground flex items-start gap-2 transition-all duration-300 hover:text-foreground hover:translate-x-1"
                            >
                              <span className="text-primary mt-1 transition-transform duration-300 hover:scale-125">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-border/50 animate-slide-up" style={{ animationDelay: `${index * 150 + 300}ms` }}>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Price</p>
                        <p className="text-2xl font-bold text-primary">{product.price}</p>
                      </div>

                      <div className="flex gap-3">
                        {product.link && product.status !== "Coming Soon" && (
                          <Link
                            href={product.link}
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground border-2 border-foreground rounded-lg transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-105 active:scale-95"
                          >
                            <ExternalLinkIcon />
                            {product.previewText}
                          </Link>
                        )}
                        {product.status !== "Coming Soon" && product.price !== "Free" ? (
                          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all font-medium hover:shadow-lg hover:scale-105 active:scale-95">
                            <ShoppingCartIcon />
                            Buy Now
                          </button>
                        ) : product.status === "Coming Soon" ? (
                          <button className="inline-flex items-center gap-2 px-6 py-3 bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-all font-medium">
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
