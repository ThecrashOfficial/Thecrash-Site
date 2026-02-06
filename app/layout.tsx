import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { TerminalWrapper } from "@/components/terminal-wrapper"
import { NavigationWrapper } from "@/components/navigation-wrapper"
import { AIChatWidgetWrapper } from "@/components/ai-chat-widget-wrapper"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Thecrash - Personal Ecosystem",
  description: "A personal hub for projects, learning, and community by Pyae Sone Phyo",
  generator: "v0.app",
  icons: {
    icon: "/thecrash-logo.jpg",
    apple: "/thecrash-logo.jpg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning />
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TerminalWrapper>
            <NavigationWrapper />

            <div className="page-container">
              <Suspense
                fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-pulse text-muted-foreground">
                      Loading...
                    </div>
                  </div>
                }
              >
                {children}
              </Suspense>
            </div>

            <AIChatWidgetWrapper />
          </TerminalWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
