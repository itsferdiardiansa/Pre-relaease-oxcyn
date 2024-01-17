'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { cn } from '@oxcyn/utils'

import MoonIcon from '@/assets/svg/layouts/moon.svg'
import SunIcon from '@/assets/svg/layouts/sun.svg'

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className={cn('fixed top-10 right-10')}>
      <button
        className="p-3 dark:bg-zinc-800 md:hover:opacity-70 shadow-lg ring-1 ring-gray-100 dark:ring-transparent rounded-full cursor-pointer"
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      >
        {resolvedTheme === 'light' ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  )
}
