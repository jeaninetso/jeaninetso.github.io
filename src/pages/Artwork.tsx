import { useState } from 'react'
import { artwork } from '../data/artwork'

export default function Artwork() {
  const [index, setIndex] = useState(0)
  const piece = artwork[index]

  const prev = () => setIndex((i) => (i - 1 + artwork.length) % artwork.length)
  const next = () => setIndex((i) => (i + 1) % artwork.length)

  return (
    <div className="pt-2">
      <h1 className="font-mono text-3xl font-medium text-ink sm:text-4xl">
        Artwork
      </h1>
      <div className="mt-10 max-w-xl">
        <div key={piece.title} className="animate-[fade-in_0.3s_ease-out]">
          <img
            src={piece.image}
            alt={piece.title}
            className="w-full rounded-md"
          />
          <div className="mt-4">
            <h2 className="font-mono text-base font-medium text-ink">
              {piece.title}
            </h2>
            <p className="mt-1 text-sm leading-relaxed">{piece.text}</p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between font-mono text-sm">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous piece"
            className="text-ink-faint transition-colors hover:text-accent"
          >
            &larr; prev
          </button>
          <span className="text-xs text-ink-faint">
            {index + 1} / {artwork.length}
          </span>
          <button
            type="button"
            onClick={next}
            aria-label="Next piece"
            className="text-ink-faint transition-colors hover:text-accent"
          >
            next &rarr;
          </button>
        </div>
      </div>
    </div>
  )
}
