'use client'

import { usePathname } from "next/navigation"
import { AIChatWidget } from "@/components/ai-chat-widget"

export function AIChatWidgetWrapper() {
  const pathname = usePathname()

  if (pathname === "/os") return null

  return <AIChatWidget />
}
