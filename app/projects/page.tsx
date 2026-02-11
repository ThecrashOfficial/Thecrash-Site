import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Thecrash",
    subtitle: "Personal Workspace Ecosystem",
    version: "v1.0",
    logo: "/images/design-mode/thesonehub-logo.jpg",
    description:
      "A modern, Notion-inspired personal workspace platform designed for creators, builders, and learners. TheSoneHub serves as a central hub for projects, learning resources, digital notes, and community engagement. Built with Next.js 16 and featuring a clean black-and-white aesthetic with interactive particle effects and floating card animations.",
    features: [
      "Dynamic homepage with interactive particle effects that follow cursor movement",
      "Projects showcase featuring TranBook, leaEng, and ViralScript with detailed descriptions",
      "AI Assistant powered by Google AI Studio API with multiple mentor modes",
      "Digital Garden for personal knowledge management with note status tracking",
      "Learn Space with curated articles and tutorials on web development and AI",
      "Community Forum for discussions and engagement",
    ],
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Google AI Studio API", "shadcn/ui"],
    github: "https://github.com/ThecrashOfficial/Thecrash-Site.git",
    demo: "https://v0-the-crash-site.vercel.app/",
    year: "2024",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 animate-slide-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Projects</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A collection of projects I've built, ranging from web applications to experimental tools.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-border bg-card group transition-all duration-500 hover:shadow-2xl hover:border-primary/50 hover:scale-[1.02] stagger-item`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid md:grid-cols-[300px_1fr] gap-0">
                  <div className="relative aspect-square md:aspect-auto overflow-hidden bg-muted flex items-center justify-center p-8 transition-all duration-500 group-hover:bg-muted/70">
                    {project.logo ? (
                      <Image
                        src={project.logo || "/placeholder.svg"}
                        alt={`${project.title} logo`}
                        width={200}
                        height={200}
                        className="object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                      />
                    ) : project.image ? (
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : null}
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4 animate-slide-up" style={{ animationDelay: `${index * 150 + 100}ms` }}>
                      <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-primary">{project.year}</span>
                      {project.version && (
                        <Badge variant="outline" className="text-xs transition-all duration-300 group-hover:scale-110">
                          {project.version}
                        </Badge>
                      )}
                    </div>

                    <div className="mb-4 animate-slide-up" style={{ animationDelay: `${index * 150 + 150}ms` }}>
                      <h2 className="text-3xl font-bold text-card-foreground transition-colors duration-300 group-hover:text-primary">{project.title}</h2>
                      {project.subtitle && <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>}
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed animate-slide-up" style={{ animationDelay: `${index * 150 + 200}ms` }}>{project.description}</p>

                    {project.features && (
                      <div className="mb-6 animate-slide-up" style={{ animationDelay: `${index * 150 + 250}ms` }}>
                        <h3 className="text-sm font-semibold text-card-foreground mb-3">Key Features:</h3>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2 transition-all duration-300 hover:text-foreground hover:translate-x-1">
                              <span className="text-primary mt-1 transition-transform duration-300 hover:scale-125">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6 animate-slide-up" style={{ animationDelay: `${index * 150 + 300}ms` }}>
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tag} variant="secondary" className="text-xs transition-all duration-300 hover:scale-110 hover:bg-primary/20" style={{ animationDelay: `${index * 150 + 300 + tagIndex * 30}ms` }}>
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: `${index * 150 + 350}ms` }}>
                      {project.github && (
                        <Link
                          href={project.github}
                          className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-all duration-300 hover:text-primary hover:gap-3 hover:scale-105 no-hover"
                        >
                          <GithubIcon />
                          Code
                        </Link>
                      )}
                      {project.demo && (
                        <Link
                          href={project.demo}
                          className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-all duration-300 hover:text-primary hover:gap-3 hover:scale-105 no-hover"
                        >
                          <ExternalLinkIcon />
                          Use App
                        </Link>
                      )}
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
