'use client'

import Link from 'next/link'
import { useLanguage } from 'app/i18n/LanguageProvider'
import { ui, getCommunity } from 'app/i18n/content'
import { Gallery } from './gallery'

export function CommunityDetail({ slug }: { slug: string }) {
  const { locale } = useLanguage()
  const community = getCommunity(slug)

  if (!community) return null

  return (
    <section>
      <Link
        href="/communities"
        className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all"
      >
        {ui.communitiesPage.back[locale]}
      </Link>
      <h1 className="font-semibold text-2xl mt-4 mb-1 tracking-tighter">
        {community.name[locale]}
      </h1>
      <p className="mb-8 text-sm text-neutral-600 dark:text-neutral-400">
        {ui.communitiesPage.roleLabel[locale]}: {community.role[locale]}
      </p>
      {community.images && community.images.length > 0 && (
        <Gallery images={community.images} alt={community.name[locale]} />
      )}
      <article className="prose">
        {community.body[locale].map((paragraph, i) => (
          <p key={i} className="mb-4 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </article>
      {community.links.length > 0 && (
        <div className="mt-8 text-sm">
          <span className="text-neutral-600 dark:text-neutral-400">
            {ui.communitiesPage.linkLabel[locale]}:{' '}
          </span>
          {community.links.map((link, i) => (
            <span key={link.url}>
              {i > 0 && <span className="text-neutral-400"> · </span>}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-neutral-900 dark:text-neutral-100"
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>
      )}
    </section>
  )
}
