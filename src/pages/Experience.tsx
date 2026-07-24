import { roles } from '../data/experience'
import Card from '../components/Card'

export default function Experience() {
  return (
    <div className="mx-auto max-w-3xl pt-2">
      <h1 className="font-mono text-3xl font-medium text-ink sm:text-4xl">
        Experience
      </h1>
      <div className="mt-10 flex flex-col gap-14">
        {roles.map((role) => (
          <div key={role.company}>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
              <div className="flex items-center gap-3">
                {role.logo && (
                  <img
                    src={role.logo}
                    alt={`${role.company} logo`}
                    className="h-9 w-9 shrink-0 rounded-sm object-contain"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                  />
                )}
                <h2 className="font-mono text-lg font-medium text-ink">
                  {role.title} &middot; {role.company}
                </h2>
              </div>
              {role.dates && (
                <span className="font-mono text-xs text-ink-faint">
                  {role.dates}
                </span>
              )}
            </div>

            {role.summary && (
              <p className="mt-3 text-base leading-relaxed">{role.summary}</p>
            )}
            {role.cards && (
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {role.cards.map((card) => (
                  <Card
                    key={card.title}
                    image={card.image}
                    imageAlt={card.title}
                    title={card.title}
                    link={card.link}
                    linkLabel={card.linkLabel}
                    tone="plain"
                  >
                    {card.text}
                  </Card>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
