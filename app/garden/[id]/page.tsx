import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft, Sprout } from "lucide-react"
import Link from "next/link"

export default function NotePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/garden"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to garden
          </Link>

          <article>
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-green-500/10 text-green-700 dark:text-green-400">Growing</Badge>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                Last updated Jan 18, 2024
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              On Building in Public
            </h1>

            <div className="flex items-center gap-2 mb-12 pb-8 border-b border-border">
              <Sprout className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">This note is growing and evolving</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Building in public has become a popular approach in the tech community. It's about sharing your creative
                process, your wins, and your struggles openly with others.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Why Build in Public?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                There's something powerful about documenting your journey. It creates accountability, builds community,
                and helps others learn from your experiences.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">The Challenges</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Of course, it's not always easy. Sharing your work before it's "perfect" can feel vulnerable. But that's
                where the growth happens.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Moving Forward</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm committed to sharing more of my process, learning in public, and connecting with others on similar
                journeys.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                This is a living document that will continue to evolve as my thoughts develop.
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}
