import type { ReactNode } from 'react'
import SectionHeading from '../components/SectionHeading'

type Stop = {
  when: string
  place: string
  text: ReactNode
}

// Chronological on purpose: this section reads as a journey, not a résumé.
const stops: Stop[] = [
  {
    when: 'Before 2021',
    place: 'UC Berkeley',
    text: 'Started in chemical engineering and switched to cognitive science. A web design elective is what pulled me into code: it was the first place my love of art and design met engineering.',
  },
  {
    when: '2021–2025',
    place: "Moody's",
    text: 'Almost four years as a software engineer, from C#/.NET financial modeling APIs to Angular front ends.',
  },
  {
    when: '2025–2026',
    place: 'Phnom Penh, Cambodia',
    text: (
      <>
        A year launching a local chapter of the{' '}
        <a
          href="https://www.internationalmentorship.org/"
          target="_blank"
          rel="noreferrer"
          className="link-underline"
        >
          International Student Mentorship Program
        </a>
        , mentoring college students academically, professionally, and
        spiritually. I also served as the team&apos;s finance lead and designed
        our event flyers.
      </>
    ),
  },
  {
    when: 'Sept 2026',
    place: 'Muon Space',
    text: 'Joined as a Software Engineer, Frontend.',
  },
]

export default function About() {
  return (
    <div>
      <SectionHeading numeral="I" title="Where I've Been" />
      <ol className="mt-4">
        {stops.map((stop) => (
          <li
            key={stop.place}
            className="grid grid-cols-1 gap-x-10 gap-y-2 border-b border-line py-8 sm:grid-cols-[150px_1fr]"
          >
            <div className="eyebrow pt-2">{stop.when}</div>
            <div>
              <h3 className="font-serif text-3xl leading-tight text-ink">
                {stop.place}
              </h3>
              <p className="mt-2 max-w-xl text-base leading-relaxed">
                {stop.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
