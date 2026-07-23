import { artwork } from '../data/artwork'

export default function Artwork() {
  return (
    <div className="pt-2">
      <h1 className="font-mono text-3xl font-medium text-ink sm:text-4xl">
        Artwork
      </h1>
      <div className="mt-10 flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory">
        {artwork.map((piece) => (
          <figure
            key={piece.title}
            className="w-64 shrink-0 snap-start sm:w-80"
          >
            <img
              src={piece.image}
              alt={piece.title}
              className="w-full rounded-md"
            />
            <figcaption className="mt-3">
              <h2 className="font-mono text-base font-medium text-ink">
                {piece.title}
              </h2>
              <p className="mt-1 text-sm leading-relaxed">{piece.text}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
