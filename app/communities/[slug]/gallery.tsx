'use client'

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0)

  if (images.length === 0) return null

  return (
    <div className="mb-8">
      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <img
          src={images[active]}
          alt={`${alt} ${active + 1}`}
          className="w-full h-full object-contain"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex flex-row gap-2 overflow-x-auto">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${alt} ${i + 1}`}
              aria-current={i === active}
              className={`shrink-0 w-16 h-16 rounded-md overflow-hidden border transition-all ${
                i === active
                  ? 'border-neutral-900 dark:border-neutral-100 opacity-100'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
