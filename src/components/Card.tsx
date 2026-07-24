import type { ReactNode } from 'react'

export type CardTone = 'plain' | 'tinted'

type CardProps = {
  image?: string
  imageAlt?: string
  title: ReactNode
  badge?: string
  tone?: CardTone
  tags?: string[]
  link?: string
  linkLabel?: string
  children: ReactNode
}

export default function Card({
  image,
  imageAlt,
  title,
  badge,
  tone = 'plain',
  tags,
  link,
  linkLabel,
  children,
}: CardProps) {
  return (
    <div
      className={`rounded-md border border-line p-5 ${
        tone === 'tinted' ? 'bg-paper-dim' : ''
      }`}
    >
      {image && (
        <img
          src={image}
          alt={imageAlt ?? ''}
          className="mb-4 w-full rounded-sm"
        />
      )}
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-mono text-base font-medium text-ink">{title}</h3>
        {badge && (
          <span className="shrink-0 rounded-full bg-paper px-2 py-0.5 font-mono text-xs text-ink-faint">
            {badge}
          </span>
        )}
      </div>
      <div className="mt-2 text-sm leading-relaxed">{children}</div>
      {tags && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-2 py-0.5 font-mono text-xs text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-sm text-accent underline decoration-accent-soft underline-offset-2 hover:decoration-accent"
        >
          ({linkLabel ?? 'link'})
        </a>
      )}
    </div>
  )
}
