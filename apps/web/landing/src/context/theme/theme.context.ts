import { createContext, useContext, type Dispatch, SetStateAction } from 'react'

export type Theme = 'dark' | 'light'

export type ThemeContextType = {
  theme: Theme
  changeTheme: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export default function useThemeContext() {
  const ctx = useContext(ThemeContext)

  if ('theme' in ThemeContext) {
    throw new Error('Theme context should be used within <ThemeProvider>')
  }

  return ctx
}
