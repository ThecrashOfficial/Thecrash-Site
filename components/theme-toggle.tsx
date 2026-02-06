'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg hover:bg-accent transition-colors">
        <Sun className="w-5 h-5" />
      </button>
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => {
        const newTheme = isDark ? 'light' : 'dark'
        console.log('[v0] Theme toggle: switching from', theme, 'to', newTheme)
        setTheme(newTheme)
      }}
      className="p-2 rounded-lg hover:bg-accent transition-colors active:scale-95"
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-500 hover:text-amber-400 transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-slate-600 hover:text-slate-700 transition-colors" />
      )}
    </button>
  )
}
