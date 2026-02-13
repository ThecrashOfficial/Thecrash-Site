import { Navigation } from "@/components/navigation"
import { TerminalGame } from "@/components/terminal-game"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const ProjectsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 12a5 5 0 1110 0 5 5 0 01-10 0z" />
  </svg>
)

const BlogIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2v-5.5a2.972 2.972 0 002-2.5A2.972 2.972 0 0019 7.5" />
  </svg>
)

const MarketIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
)

const BotIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const AboutMeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const hubCards = [
  {
    title: "Meta",
    description: "Web Dev, AI & Automation",
    detail: "Portfolio & Projects",
    href: "/meta",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Blog",
    description: "Tech Tips & Insights",
    detail: "Latest updates on web & AI",
    href: "/blog",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Market",
    description: "Premium Templates & Tools",
    detail: "Curated resources for builders",
    href: "/market",
    color: "from-purple-500/20 to-pink-500/20",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20 lg:space-y-28">
          
          {/* 1. Hero Section */}
          <section className="text-center space-y-6 lg:space-y-8 animate-slide-up">
            <div className="flex justify-center mb-8 animate-scale-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Image
                  src="/thecrash-logo.jpg"
                  alt="Thecrash Logo"
                  width={120}
                  height={120}
                  className="relative rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground tracking-tight px-4">
                Thecrash
              </h1>
              <p className="text-lg sm:text-2xl text-foreground/80 max-w-3xl mx-auto font-medium px-4">
                Tech Workspace Platform for Myanmar Builders
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                Projects, Learning Resources, AI Tools & Developer Community
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 px-4">
              <Link
                href="/meta"
                className="group px-8 py-4 bg-foreground text-background rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 text-center relative overflow-hidden"
              >
                <span className="relative z-10">Explore Meta</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="/agent"
                className="px-8 py-4 border-2 border-foreground text-foreground rounded-xl font-semibold transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-105 hover:shadow-xl active:scale-95 text-center"
              >
                Talk to AI Agent
              </Link>
            </div>
          </section>

          {/* 2. About Me Section */}
          <section className="max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
            <Card className="p-8 sm:p-12 border-2 border-border/50 bg-gradient-to-br from-card to-card/50">
              <div className="space-y-8">
                {/* About Me Header */}
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <AboutMeIcon />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      About Me
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Builder, educator, and advocate for Myanmar's tech community
                    </p>
                  </div>
                </div>

                {/* Bio Content */}
                <div className="space-y-4 text-base leading-relaxed text-foreground/90">
                  <p>
                    I'm <span className="font-semibold">Pyae Sone Phyo (Thecrash)</span>, passionate about creating tools and resources that empower Myanmar builders. I focus on making advanced tech concepts accessible through practical tutorials, templates, and mentorship.
                  </p>
                  <p>
                    My expertise spans <span className="font-semibold">web development, AI automation, and full-stack engineering</span>. I believe in building in public and sharing knowledge to strengthen our developer community.
                  </p>
                </div>

                {/* What I Do - Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border/50">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Build</h4>
                    <p className="text-sm text-foreground/80">Creating innovative projects and tools</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Teach</h4>
                    <p className="text-sm text-foreground/80">Sharing knowledge through content</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Mentor</h4>
                    <p className="text-sm text-foreground/80">Guiding the next generation</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-3 pt-6 border-t border-border/50">
                  <a href="https://t.me/thecrashOfficial" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-muted rounded-lg text-sm font-medium hover:bg-muted/80 transition-all">
                    Telegram
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-muted rounded-lg text-sm font-medium hover:bg-muted/80 transition-all">
                    GitHub
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-muted rounded-lg text-sm font-medium hover:bg-muted/80 transition-all">
                    Twitter
                  </a>
                </div>
              </div>
            </Card>
          </section>

          {/* 3. Explore Meta (Projects) */}
          <section className="animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Explore Meta</h2>
              <p className="text-muted-foreground">Discover my projects and learning resources</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
              {hubCards.map((card, index) => (
                <Link key={card.href} href={card.href}>
                  <Card className="group relative p-8 hover:shadow-2xl transition-all duration-500 border-2 border-border h-full hover:scale-[1.02]">
                    <div className="space-y-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                        {card.title === "Meta" ? <ProjectsIcon /> : card.title === "Blog" ? <BlogIcon /> : <MarketIcon />}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{card.title}</h3>
                        <p className="text-sm font-medium text-foreground/80 mt-1">{card.description}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{card.detail}</p>
                      <div className="flex items-center text-sm font-semibold text-foreground group-hover:gap-2 transition-all pt-2">
                        <span>Explore</span>
                        <span className="ml-1 transition-transform group-hover:translate-x-1">
                          <ArrowRightIcon />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* 4. Talk to AI Agent */}
          <section className="max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "300ms" }}>
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Talk to AI Agent</h2>
              <p className="text-muted-foreground">Get personalized guidance from 6 specialized mentors</p>
            </div>
            <Link href="/agent">
              <Card className="group p-8 sm:p-12 border-2 border-border hover:border-primary/50 bg-gradient-to-br from-background via-card to-muted/30 hover:shadow-2xl transition-all cursor-pointer hover:scale-[1.01]">
                <div className="flex items-center justify-between gap-6">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <BotIcon />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">6 Specialized Mentors</h3>
                        <p className="text-sm text-muted-foreground mt-1">Life, Finance, Learning, Philosophy & More</p>
                      </div>
                    </div>
                    <p className="text-foreground/80 max-w-2xl">
                      Choose from AI coaches specialized in personal growth, financial advice, learning strategies, philosophy, and meta-thinking.
                    </p>
                  </div>
                  <div className="hidden sm:flex w-12 h-12 rounded-full bg-primary/10 items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <ArrowRightIcon />
                  </div>
                </div>
              </Card>
            </Link>
          </section>

          {/* 5. Market CTA (Optional) */}
          <section className="max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "500ms" }}>
            <Link href="/market">
              <Card className="p-8 sm:p-12 text-center border-2 border-border/50 bg-gradient-to-br from-muted/30 to-background hover:border-primary/50 hover:shadow-xl transition-all cursor-pointer group">
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Premium Templates & Tools</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Explore curated resources, courses, and templates to accelerate your building journey
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    <span>Explore Market</span>
                    <ArrowRightIcon />
                  </div>
                </div>
              </Card>
            </Link>
          </section>

          {/* Community Section */}
          <section className="max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "600ms" }}>
            <Card className="p-8 sm:p-12 text-center border-2 border-border bg-gradient-to-br from-background to-muted/30">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Connect with Myanmar builders, share knowledge, and grow together
              </p>
              <a
                href="https://t.me/thecrashOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-foreground text-background rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              >
                Join Now
              </a>
            </Card>
          </section>

          {/* Terminal Game */}
          <section className="max-w-md mx-auto animate-slide-up" style={{ animationDelay: "700ms" }}>
            <TerminalGame />
          </section>
        </div>
      </main>
    </div>
  )
}
