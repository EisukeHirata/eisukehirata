'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { Locale } from './content'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'locale'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start at 'en' so server and first client render match,
  // then hydrate the stored preference after mount.
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'ja' || stored === 'en') {
      setLocaleState(stored)
    }
  }, [])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  const toggle = () => setLocale(locale === 'en' ? 'ja' : 'en')

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
