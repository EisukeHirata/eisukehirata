'use client'

import Link from 'next/link'
import { useLanguage } from 'app/i18n/LanguageProvider'
import { ui, communities } from 'app/i18n/content'

export default function Page() {
  const { locale } = useLanguage()

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-2 tracking-tighter">
        {ui.communitiesPage.title[locale]}
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        {ui.communitiesPage.intro[locale]}
      </p>
      <div>
        {communities.map((c) => (
          <Link
            key={c.slug}
            href={`/communities/${c.slug}`}
            className="flex flex-col space-y-1 mb-6 group"
          >
            <p className="font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:underline">
              {c.name[locale]}
              <span className="text-neutral-500 dark:text-neutral-500 font-normal">
                {' · '}
                {c.role[locale]}
              </span>
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              {c.summary[locale]}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
