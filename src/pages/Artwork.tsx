import { useRef, useState } from 'react'
import { artwork, type ArtworkPiece } from '../data/artwork'

function ArtworkFrame({ piece }: { piece: ArtworkPiece }) {
  return (
    <>
      <div className="flex h-72 items-center justify-center overflow-hidden rounded-md bg-paper-dim sm:h-96">
        <img
          src={piece.image}
          alt={piece.title}
          className="max-h-full max-w-full rounded-md object-contain"
        />
      </div>
      <div className="mt-4 min-h-[170px] sm:min-h-[130px]">
        <h2 className="font-mono text-base font-medium text-ink">
          {piece.title}
        </h2>
        <p className="mt-1 text-sm leading-relaxed">{piece.text}</p>
      </div>
    </>
  )
}

export default function Artwork() {
  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const piece = artwork[index]

  const goTo = (i: number) => {
    const wrapped = (i + artwork.length) % artwork.length
    setIndex(wrapped)
    const track = trackRef.current
    const target = track?.children[wrapped] as HTMLElement | undefined
    if (track && target) {
      track.scrollTo({ left: target.offsetLeft, behavior: 'smooth' })
    }
  }

  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  const handleScroll = () => {
    const track = trackRef.current
    if (!track || track.clientWidth === 0) return
    const nearest = Math.round(track.scrollLeft / track.clientWidth)
    setIndex(Math.min(Math.max(nearest, 0), artwork.length - 1))
  }

  return (
    <div className="pt-2">
      <h1 className="font-mono text-3xl font-medium text-ink sm:text-4xl">
        Art &amp; Design
      </h1>
      <div className="mt-10">
        {/* Mobile: swipeable strip */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden sm:hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          {artwork.map((p) => (
            <div key={p.title} className="w-full shrink-0 snap-start">
              <ArtworkFrame piece={p} />
            </div>
          ))}
        </div>

        {/* Desktop: single piece, fades in on change */}
        <div
          key={piece.title}
          className="hidden animate-[fade-in_0.3s_ease-out] sm:block"
        >
          <ArtworkFrame piece={piece} />
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
