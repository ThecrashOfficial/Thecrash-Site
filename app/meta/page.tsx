import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import ProjectCard from "@/components/project-card"

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
              <ProjectCard
                key={index}
                icon={product.logo}
                title={product.title}
                subtitle={product.subtitle}
                description={product.description}
                ctaText={product.previewText}
                ctaLink={product.link || '#'}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
