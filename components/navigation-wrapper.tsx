'use client'

import { usePathname } from "next/navigation"
import { Navigation } from "@/components/navigation"

export function NavigationWrapper() {
  const pathname = usePathname()

  if (pathname === "/os") return null

  return <Navigation />
}
