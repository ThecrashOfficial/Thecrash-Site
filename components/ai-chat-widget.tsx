"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const RobotIcon = () => (
  <svg 
    className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5 2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5z"/>
  </svg>
)

export function AIChatWidget() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isOnAgentPage = mounted && pathname === "/agent"

  if (!mounted || isOnAgentPage) {
    return null
  }

  return (
    <Link
      href="/agent"
      className="group cursor-pointer w-16 h-16 bg-black text-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out hover:scale-110 active:scale-95 flex items-center justify-center hover:rotate-3"
      style={{ 
        position: 'fixed', 
        bottom: '24px', 
        right: '24px',
        zIndex: 50
      }}
      aria-label="Open AI Assistant"
    >
      <RobotIcon />
      <span className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-lg border border-gray-700">
        AI Assistant
        <svg className="absolute top-full right-4 -mt-1 w-3 h-2 text-black" viewBox="0 0 10 5">
          <path fill="currentColor" d="M0 0l5 5 5-5z"/>
        </svg>
      </span>
    </Link>
  )
}
