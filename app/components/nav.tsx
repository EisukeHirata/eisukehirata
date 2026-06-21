'use client'

import Link from 'next/link'
import { useLanguage } from 'app/i18n/LanguageProvider'
import { ui } from 'app/i18n/content'

const navItems = {
  '/': ui.nav.home,
  '/articles': ui.nav.articles,
  '/communities': ui.nav.communities,
}

export function Navbar() {
  const { locale, toggle } = useLanguage()

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, label]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {label[locale]}
                </Link>
              )
            })}
          </div>
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle language"
            className="text-sm tabular-nums text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all py-1 px-2 m-1"
          >
            {locale === 'en' ? '日本語' : 'EN'}
          </button>
        </nav>
      </div>
    </aside>
  )
}
