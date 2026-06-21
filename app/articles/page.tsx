'use client'

import { useLanguage } from 'app/i18n/LanguageProvider'
import { ui, articles } from 'app/i18n/content'

function formatDate(date: string, locale: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString(
    locale === 'ja' ? 'ja-JP' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )
}

export default function Page() {
  const { locale } = useLanguage()

  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-2 tracking-tighter">
        {ui.articlesPage.title[locale]}
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        {ui.articlesPage.intro[locale]}
      </p>
      <div>
        {sorted.map((post) => (
          <a
            key={post.url}
            className="flex flex-col space-y-1 mb-4"
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[140px] tabular-nums shrink-0">
                {formatDate(post.publishedAt, locale)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.title[locale]}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
