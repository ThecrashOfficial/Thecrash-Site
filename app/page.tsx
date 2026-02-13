import { Navigation } from "@/components/navigation"
import { TerminalGame } from "@/components/terminal-game"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const UserIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

const CodeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const BookOpenIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
)

const BotIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const SproutIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0H3v-1a6 6 0 009-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const ResourcesIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
    />
  </svg>
)

const StoreIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
)

const BlogIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2v-5.5a2.972 2.972 0 002-2.5A2.972 2.972 0 0019 7.5"
    />
  </svg>
)

const hubCards = [
  {
    title: "Meta",
    description: "Web Dev, AI & Automation",
    detail: "Tutorials in Myanmar language",
    icon: BookOpenIcon,
    href: "/meta",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Market",
    description: "Premium Templates & Tools",
    detail: "Curated resources for builders",
    icon: StoreIcon,
    href: "/market",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Blog",
    description: "Tech Tips & Insights",
    detail: "Latest updates on web & AI",
    icon: BlogIcon,
    href: "/blog",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "AI Agent",
    description: "6 Specialized AI Mentors",
    detail: "Life, Finance, Learning & Career coaching",
    icon: BotIcon,
    href: "/agent",
    color: "from-rose-500/20 to-red-500/20",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
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

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight animate-slide-up px-4">
              Thecrash
            </h1>

            <p className="text-lg sm:text-2xl text-foreground/80 max-w-3xl mx-auto mb-3 animate-slide-up animate-delay-100 px-4 font-medium">
              Tech Workspace Platform for Myanmar Builders
            </p>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up animate-delay-200 px-4">
              Projects, Learning Resources, AI Tools & Developer Community
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-slide-up animate-delay-300 px-4">
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mb-16">
            {hubCards.map((card, index) => {
              const Icon = card.icon
              return (
                <Link key={card.href} href={card.href}>
                  <Card
                    className={`group relative p-8 hover:shadow-2xl transition-all duration-500 border-2 border-border h-full stagger-item overflow-hidden`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    

                    <div className="relative z-10">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 border-2 border-border`}
                      >
                        <Icon />
                      </div>

                      <h3 className="text-2xl font-bold text-card-foreground mb-2 transition-colors duration-300">
                        {card.title}
                      </h3>

                      <p className="text-lg font-medium text-foreground/90 mb-2">{card.description}</p>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{card.detail}</p>

                      <div className="flex items-center text-sm font-semibold text-foreground transition-all duration-300 group-hover:gap-2">
                        <span>Explore</span>
                        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1 inline-block">
                          <ArrowRightIcon />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>

          <div className="max-w-4xl mx-auto mb-16 px-4">
            <Card className="p-8 sm:p-12 text-center border-2 border-border bg-gradient-to-br from-background to-muted/30">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Join Community</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Connect with builders, share knowledge, and grow together
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
          </div>

          <div
            className="max-w-md mx-auto animate-slide-up animate-delay-400 opacity-0 px-4"
            style={{ animationFillMode: "forwards" }}
          >
            <TerminalGame />
          </div>
        </div>
      </main>
    </div>
  )
}
