import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const TelegramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L8.08 13.73l-2.97-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.827z"/>
  </svg>
)

const DiscordIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
)

const ViberIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.693 6.698.623 9.82c-.06 3.11-.13 8.95 5.5 10.541v2.42s-.038.97.602 1.17c.79.25 1.24-.499 1.99-1.299l1.4-1.58c3.85.32 6.8-.419 7.14-.529.78-.25 5.181-.811 5.901-6.652.74-6.031-.36-9.831-2.34-11.551l-.01-.002c-.6-.55-3-2.3-8.37-2.32 0 0-.396-.025-1.038-.016zm.067 1.697c.545-.003.88.02.88.02 4.54.01 6.711 1.38 7.221 1.84 1.67 1.429 2.528 4.856 1.9 9.892-.6 4.88-4.17 5.19-4.83 5.4-.28.09-2.88.73-6.152.52 0 0-2.439 2.941-3.199 3.701-.12.13-.26.17-.35.15-.13-.03-.17-.19-.16-.41l.02-4.019c-4.771-1.32-4.491-6.302-4.441-8.902.06-2.6.55-4.732 2-6.172 1.957-1.77 5.475-2.01 7.11-2.02zm.36 2.6a.299.299 0 0 0-.3.299.3.3 0 0 0 .3.3 5.631 5.631 0 0 1 4.03 1.59 5.513 5.513 0 0 1 1.62 4 .3.3 0 0 0 .3.3.3.3 0 0 0 .3-.3 6.112 6.112 0 0 0-1.796-4.449 6.232 6.232 0 0 0-4.455-1.74zm-3.954.73a.966.966 0 0 0-.5.16l-.01.01c-.4.24-.864.594-1.033.921-.18.334-.18.969.208 1.665.38.689 1.39 2.459 3.228 4.214 1.838 1.755 3.694 2.76 4.463 3.14.768.38 1.416.26 1.75.08.328-.17.694-.63.934-1.03l.01-.01c.26-.43.16-.98-.16-1.3a29.267 29.267 0 0 0-1.816-1.614c-.326-.256-.766-.17-1.043.117l-.625.625c-.208.21-.537.23-.769.07-.646-.437-1.638-1.284-2.297-2.042-.659-.759-1.464-1.854-1.865-2.53a.515.515 0 0 1 .062-.74l.584-.584c.28-.28.364-.722.098-1.05a28.838 28.838 0 0 0-1.534-1.833.89.89 0 0 0-.62-.27zm3.656 2.146a.3.3 0 0 0-.3.3.3.3 0 0 0 .3.3 3.562 3.562 0 0 1 2.55 1.003 3.41 3.41 0 0 1 1.03 2.53.299.299 0 0 0 .3.299.3.3 0 0 0 .3-.3 3.997 3.997 0 0 0-1.208-2.962 4.178 4.178 0 0 0-2.992-1.17h-.004zm.43 1.923a.3.3 0 0 0-.3.3c0 .166.134.3.3.3.633 0 1.179.23 1.575.62.397.39.637.93.637 1.54a.3.3 0 0 0 .3.3.3.3 0 0 0 .3-.3c0-.76-.29-1.45-.77-1.94a2.858 2.858 0 0 0-1.962-.82h-.08z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const communities = [
  {
    id: 1,
    name: "Thecrash Telegram Channel",
    platform: "Telegram",
    description: "Main channel hub - Daily thoughts, knowledge and free packages sharing",
    members: "500+",
    link: "https://t.me/thecrashOfficial",
    icon: TelegramIcon,
    color: "from-blue-500/10 to-cyan-500/10",
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Community Links</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join our communities on different platforms - Connect, learn, and grow together with Myanmar builders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communities.map((community, index) => {
              const Icon = community.icon
              return (
                <a
                  key={community.id}
                  href={community.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card
                    className={`p-6 hover:shadow-lg transition-all duration-300 border-primary/20 bg-gradient-to-br ${community.color} group h-full animate-float-delay-${index % 6}`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center flex-shrink-0">
                        <Icon />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {community.name}
                          </h3>
                        </div>
                        <Badge variant="secondary" className="mb-3">
                          {community.platform}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{community.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{community.members} members</span>
                      <span className="text-sm font-medium text-primary group-hover:underline">Join Now →</span>
                    </div>
                  </Card>
                </a>
              )
            })}
          </div>

          <div className="mt-12 p-6 bg-secondary/30 rounded-lg border border-primary/10">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Want to start your own community?</h2>
            <p className="text-muted-foreground mb-4">
              If you're building a Myanmar tech community and want to be featured here, reach out to us!
            </p>
            <a
              href="mailto:contact@thecrash.com"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
