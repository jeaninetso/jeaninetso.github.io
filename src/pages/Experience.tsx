import { roles } from '../data/experience'
import SectionHeading from '../components/SectionHeading'

export default function Experience() {
  return (
    <div>
      <SectionHeading numeral="II" title="Experience" />
      <div className="mt-12 flex flex-col gap-20">
        {roles.map((role) => (
          <article key={role.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-serif text-4xl leading-tight text-ink">
                {role.company}
              </h3>
              <span className="eyebrow">{role.dates}</span>
            </div>
            <p className="mt-1 font-serif text-xl italic text-ink-soft">
              {role.title}
            </p>

            {role.summary && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed">
                {role.summary}
              </p>
            )}
            {role.cards && (
              <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
                {role.cards.map((card) => (
                  <div key={card.title} className="border-t border-line pt-5">
                    {card.image && (
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        className="mb-5 w-full rounded-sm"
                      />
                    )}
                    <h4 className="font-serif text-2xl leading-snug text-ink">
                      {card.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed">{card.text}</p>
                    {card.link && (
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline mt-3 inline-block text-sm"
                      >
                        View {card.linkLabel ?? 'link'} &#8599;
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
