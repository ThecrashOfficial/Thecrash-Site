"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const services = [
  {
    title: "1-on-1 Coaching",
    description: "Personal mentorship sessions covering web development, AI integration, or career guidance",
    price: "$50/hour",
    features: ["Video call session", "Code review", "Career advice", "Custom learning path"],
    badge: "Most Popular",
    cta: "Book Session",
  },
  {
    title: "Code Review Service",
    description: "Get your code professionally reviewed with detailed feedback and improvement suggestions",
    price: "$30/project",
    features: ["Detailed feedback document", "Best practices suggestions", "Performance tips", "24h turnaround"],
    badge: null,
    cta: "Submit Code",
  },
  {
    title: "Custom Development",
    description: "Build custom web applications, AI integrations, or automation tools for your business",
    price: "Starting $500",
    features: ["Full-stack development", "AI integration", "API development", "Deployment & support"],
    badge: null,
    cta: "Get Quote",
  },
  {
    title: "Workshop & Training",
    description: "Group workshops on web development, AI, or specific technologies for teams",
    price: "$200/session",
    features: ["2-3 hour live session", "Hands-on projects", "Q&A support", "Recording provided"],
    badge: "For Teams",
    cta: "Book Workshop",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">Professional Services</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Work With Me
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Get personalized help with your projects, learn new skills, or build custom solutions together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-500 hover:scale-105">
                {service.badge && (
                  <Badge className="mb-4 bg-primary text-primary-foreground">{service.badge}</Badge>
                )}
                <h2 className="text-2xl font-bold text-foreground mb-2">{service.title}</h2>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="text-3xl font-bold text-primary mb-6">{service.price}</div>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                  {service.cta}
                </button>
              </Card>
            ))}
          </div>

          <div className="p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30 rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">Not sure which service you need?</h2>
            <p className="text-muted-foreground mb-6">
              Let's have a free 15-minute consultation to discuss your needs
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/community" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                Contact Me
              </Link>
              <Link href="/projects" className="px-6 py-3 border-2 border-primary text-foreground rounded-lg font-medium hover:bg-primary/10 transition-colors">
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
