import { useEffect, useRef, useState } from 'react'
import { artwork, type ArtworkPiece } from '../data/artwork'
import Frame from '../components/Frame'
import SectionHeading from '../components/SectionHeading'

// Justified rows: every piece in a row gets the same height, edges flush.
// Each piece flexes in proportion to its aspect ratio (a); with basis
// a * (row - 2 * mat) + 2 * mat, any extra width raises the whole row's
// height equally, so mats line up without cropping. Below lg, the ::after
// filler keeps a short last row from stretching; on desktop the hang order
// makes the last row full, so it stretches flush too.
const justified = (piece: ArtworkPiece) => {
  const a = piece.width / piece.height
  return {
    flexGrow: a,
    flexBasis: `calc(${a} * (var(--row) - 2 * var(--mat)) + 2 * var(--mat))`,
  }
}

export default function Artwork() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState<number | null>(null)
  const piece = open === null ? null : artwork[open]

  // Open after the piece renders so showModal() can focus a real control.
  useEffect(() => {
    const dialog = dialogRef.current
    if (open !== null && dialog && !dialog.open) dialog.showModal()
  }, [open])

  const show = (i: number) => {
    setOpen(i)
    // Same piece as the (stale) state: the effect won't re-run, so open here.
    const dialog = dialogRef.current
    if (i === open && dialog && !dialog.open) dialog.showModal()
  }

  const close = () => {
    dialogRef.current?.close()
    setOpen(null)
  }

  const step = (delta: number) => {
    if (open === null) return
    setOpen((open + delta + artwork.length) % artwork.length)
  }

  return (
    <div>
      <SectionHeading numeral="IV" title="Art & Design" />

      <div className="mt-12 flex flex-wrap items-start gap-6 [--mat:8px] [--row:140px] after:grow-[999] after:content-[''] sm:[--mat:12px] sm:[--row:170px] lg:[--row:200px] lg:after:content-none">
        {artwork.map((p, i) => (
          <button
            key={p.title}
            type="button"
            onClick={() => show(i)}
            style={justified(p)}
            className="group block min-w-0 cursor-zoom-in"
            aria-haspopup="dialog"
            aria-label={`View ${p.title}`}
          >
            <div className="bg-mat p-[var(--mat)] shadow-[0_18px_36px_-20px_rgb(0_0_0/0.6)] transition-transform duration-300 ease-out group-hover:-translate-y-1">
              <img
                src={p.image}
                alt=""
                width={p.width}
                height={p.height}
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        // The close event is queued, so it can land after a piece was
        // reopened; only clear state if the dialog really is closed (Esc).
        onClose={() => {
          if (!dialogRef.current?.open) setOpen(null)
        }}
        onClick={(event) => {
          // A click on the backdrop lands on the dialog element itself.
          if (event.target === event.currentTarget) close()
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') step(1)
          if (event.key === 'ArrowLeft') step(-1)
        }}
        aria-label={piece?.title}
        className="m-auto max-h-[92vh] w-[min(94vw,1100px)] overflow-y-auto bg-paper p-0 text-ink-soft"
      >
        {piece && (
          <div className="relative grid gap-8 px-5 pb-5 pt-14 [--art-h:44vh] sm:px-8 sm:pb-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-10 md:pt-8 md:[--art-h:76vh]">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center text-2xl leading-none text-ink-faint transition-colors hover:text-accent sm:right-5 sm:top-5"
            >
              &times;
            </button>

            {/* The art and text re-key per piece; the nav buttons don't, so they keep focus. */}
            <div
              key={`${piece.title}-art`}
              className="flex animate-[fade-in_0.25s_ease-out] items-center justify-center"
            >
              {/* Cap by height so tall flyers fit on screen beside the text. */}
              <div
                className="w-full"
                style={{
                  maxWidth: `calc(var(--art-h) * ${piece.width / piece.height})`,
                }}
              >
                <Frame
                  src={piece.image}
                  alt={piece.title}
                  width={piece.width}
                  height={piece.height}
                />
              </div>
            </div>

            <div className="flex flex-col md:py-6">
              <div
                key={`${piece.title}-text`}
                className="animate-[fade-in_0.25s_ease-out] pr-8"
              >
                <h3 className="font-serif text-4xl italic leading-tight text-ink">
                  {piece.title}
                </h3>
                <div className="eyebrow mt-2">{piece.tools}</div>
                <div className="mt-6 h-px w-10 bg-accent" aria-hidden="true" />
                <p className="mt-6 text-base leading-relaxed">{piece.text}</p>
              </div>
              <div className="mt-10 flex items-center justify-between border-t border-line pt-5 text-sm md:mt-auto">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="text-ink-faint transition-colors hover:text-accent"
                >
                  &larr; Previous
                </button>
                <span className="eyebrow">
                  {open! + 1} / {artwork.length}
                </span>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="text-ink-faint transition-colors hover:text-accent"
                >
                  Next &rarr;
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  )
}
