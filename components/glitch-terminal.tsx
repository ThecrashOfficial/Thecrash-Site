"use client"

import { useEffect, useState } from "react"

export function GlitchTerminal({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([])
  const [showLogo, setShowLogo] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)

  const bootSequence = [
    "[    0.000000] Linux version 6.8.0-sone (builder@thesonehub)",
    "[    0.000000] Command line: BOOT_IMAGE=/vmlinuz root=/dev/sda1",
    "[    0.234567] Initializing cgroup subsys cpuset",
    "[    0.456789] CPU: Physical Processor ID: 0",
    "[    0.678901] Memory: 16384MB available",
    "[    1.234567] Checking for SoneOS modules...",
    "[    1.456789] Loading AI Neural Network drivers...",
    "[    1.678901] Mounting /dev/nexus...",
    "[    2.123456] Starting network services...",
    "[    2.345678] Establishing connection to TheSoneHub...",
    "[    2.567890] All systems operational.",
    "[    2.789012] Welcome to SoneOS v2.0.24",
  ]

  const asciiLogo = `
  ████████╗██╗  ██╗███████╗███████╗ ██████╗ ███╗   ██╗███████╗██╗  ██╗██╗   ██╗██████╗ 
  ╚══██╔══╝██║  ██║██╔════╝██╔════╝██╔═══██╗████╗  ██║██╔════╝██║  ██║██║   ██║██╔══██╗
     ██║   ███████║█████╗  ███████╗██║   ██║██╔██╗ ██║█████╗  ███████║██║   ██║██████╔╝
     ██║   ██╔══██║██╔══╝  ╚════██║██║   ██║██║╚██╗██║██╔══╝  ██╔══██║██║   ██║██╔══██╗
     ██║   ██║  ██║███████╗███████║╚██████╔╝██║ ╚████║███████╗██║  ██║╚██████╔╝██████╔╝
     ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ 
  `

  useEffect(() => {
    let currentLine = 0
    const typeInterval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[currentLine]])
        currentLine++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setShowLogo(true)
          setTimeout(() => {
            setShowPrompt(true)
          }, 500)
        }, 500)
      }
    }, 200)

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    if (showPrompt) {
      const handleKeyPress = () => {
        onComplete()
      }
      window.addEventListener("keydown", handleKeyPress)
      return () => window.removeEventListener("keydown", handleKeyPress)
    }
  }, [showPrompt, onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden p-4">
      <div className="relative w-full max-w-4xl">
        {/* Boot sequence */}
        <div className="font-mono text-xs md:text-sm space-y-1 mb-6">
          {lines.map((line, i) => (
            <div
              key={i}
              className="text-green-400 animate-in fade-in slide-in-from-left-2"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {line}
            </div>
          ))}
        </div>

        {/* ASCII Logo */}
        {showLogo && (
          <div className="font-mono text-[6px] md:text-[10px] leading-tight text-cyan-400 whitespace-pre mb-6 animate-in fade-in zoom-in-95">
            {asciiLogo}
          </div>
        )}

        {/* Prompt */}
        {showPrompt && (
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4">
            <div className="text-green-400 font-mono text-base md:text-lg">
              sone@thesonehub:~$ <span className="inline-block animate-pulse">█</span>
            </div>
            <div className="text-green-500/60 font-mono text-xs md:text-sm">Press any key to continue...</div>
          </div>
        )}

        {/* Blinking cursor */}
        {!showPrompt && lines.length > 0 && <span className="inline-block w-2 h-3 bg-green-400 animate-pulse ml-1" />}
      </div>
    </div>
  )
}
