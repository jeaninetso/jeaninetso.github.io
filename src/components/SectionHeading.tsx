import type { ReactNode } from 'react'

type SectionHeadingProps = {
  numeral: string
  title: string
  aside?: ReactNode
}

export default function SectionHeading({
  numeral,
  title,
  aside,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
      <div>
        <div className="eyebrow">No. {numeral}</div>
        <h2 className="mt-2 font-serif text-5xl leading-none text-ink sm:text-6xl">
          {title}
        </h2>
      </div>
      {aside}
    </div>
  )
}
