"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { SphereWelcome } from "./sphere-welcome"

export function TerminalWrapper({ children }: { children: React.ReactNode }) {
  const [showTerminal, setShowTerminal] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Check if user has already seen the terminal in this session
    const hasSeenTerminal = sessionStorage.getItem("hasSeenTerminal")
    if (hasSeenTerminal) {
      setShowTerminal(false)
    }
  }, [])

  const handleComplete = () => {
    sessionStorage.setItem("hasSeenTerminal", "true")
    setShowTerminal(false)
  }

  if (!isClient) {
    return null
  }

  return (
    <>
      {showTerminal && <SphereWelcome onComplete={handleComplete} />}
      <div className={showTerminal ? "hidden" : ""}>{children}</div>
    </>
  )
}
