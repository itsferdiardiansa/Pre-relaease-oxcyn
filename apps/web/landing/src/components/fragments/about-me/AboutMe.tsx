import { unstable_cache as cache } from 'next/cache'
import { getAboutMe } from '@/firestore/features/profile'
import { ABOUT_ME } from '@/constants/cache/profile'

const getAboutMeCached = cache(async () => getAboutMe(), [ABOUT_ME.CACHE_KEY], {
  tags: [...ABOUT_ME.CACHE_TAGS],
})

export default async function AboutMe() {
  const {
    data: { title, subTitle, shortBio, greeting },
  } = await getAboutMeCached()

  return (
    <div className="relative">
      <div className="flex items-center gap-x-4">
        <div className="text-sm leading-6">
          <p className="font-semibold text-primary dark:text-white">
            <a href="#">
              <span className="absolute inset-0"></span>
              {title}
            </a>
          </p>
          <p className="text-zinc-500 dark:text-zinc-400">{subTitle}</p>
        </div>
      </div>
      <p className="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white">
        {greeting}
      </p>
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
        {shortBio}
      </p>
    </div>
  )
}
