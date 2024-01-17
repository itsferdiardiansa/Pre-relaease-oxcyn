import { PropsWithChildren } from 'react'
import { Metadata } from 'next'
import { unstable_cache as cache } from 'next/cache'
import { getBaseMetadata } from '@/firestore/collections/metadata'
import { BASE_METADATA } from '@/constants/cache/metadata'
import ThemeProvider from '@/context/theme/theme.provider'
import ThemeSwitcher from '@/components/layouts/theme-switcher/ThemeSwitcher'
import { cn } from '@oxcyn/utils'

import './globals.css'

const getBaseMetadataCached = cache(
  async () => getBaseMetadata(),
  [BASE_METADATA.CACHE_KEY],
  { tags: [...BASE_METADATA.CACHE_TAGS] }
)

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getBaseMetadataCached()

  return { ...data }
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={cn('antialiased')} suppressHydrationWarning>
      <body className={cn('bg-slate-100 dark:bg-secondary')}>
        <ThemeProvider defaultTheme="dark">
          <ThemeSwitcher />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
