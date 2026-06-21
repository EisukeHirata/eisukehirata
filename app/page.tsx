'use client'

import { useLanguage } from 'app/i18n/LanguageProvider'
import { ui } from 'app/i18n/content'

export default function Page() {
  const { locale } = useLanguage()

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Eisuke Hirata/平田叡佑
      </h1>
      {ui.home.intro[locale].map((paragraph, i) => (
        <p key={i} className="mb-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </section>
  )
}
