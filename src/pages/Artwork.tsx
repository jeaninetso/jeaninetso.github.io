import { artwork } from '../data/artwork'

export default function Artwork() {
  return (
    <div className="mx-auto max-w-4xl pt-12 sm:pt-20">
      <h1 className="font-mono text-3xl font-medium text-ink sm:text-4xl">
        Artwork
      </h1>
      <div className="mt-10 flex flex-col gap-16">
        {artwork.map((piece) => (
          <div
            key={piece.title}
            className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10"
          >
            <img
              src={piece.image}
              alt={piece.title}
              className="w-full rounded-md sm:w-1/2"
            />
            <div className="sm:w-1/2">
              <h2 className="font-mono text-lg font-medium text-ink">
                {piece.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed">{piece.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
