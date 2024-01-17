'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { Theme } from './theme.context'

type ThemeProviderProps = {
  defaultTheme: Theme
} & PropsWithChildren

export default function ThemeProvider({
  defaultTheme,
  children,
}: ThemeProviderProps) {
  return (
    <NextThemeProvider
      storageKey="OXCYN_THEME"
      attribute="class"
      defaultTheme={defaultTheme}
    >
      {children}
    </NextThemeProvider>
  )
}
