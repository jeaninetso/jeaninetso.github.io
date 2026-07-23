import { roles } from '../data/experience'
import ProjectTile from '../components/ProjectTile'

export default function Experience() {
  return (
    <div className="mx-auto max-w-3xl pt-2">
      <h1 className="font-mono text-3xl font-medium text-ink sm:text-4xl">
        Experience
      </h1>
      <div className="mt-10 flex flex-col gap-14">
        {roles.map((role) => (
          <div key={role.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="font-mono text-lg font-medium text-ink">
                {role.title} &middot; {role.company}
              </h2>
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
                  <div
                    key={card.title}
                    className="rounded-md border border-line p-5"
                  >
                    <h3 className="font-mono text-sm font-medium text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed">
                      {card.text}
                    </p>
                    {card.link && (
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-block text-sm text-accent underline decoration-accent-soft underline-offset-2 hover:decoration-accent"
                      >
                        ({card.linkLabel ?? 'link'})
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
            {role.projects && (
              <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
                {role.projects.map((project) => (
                  <ProjectTile key={project.title} project={project} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
