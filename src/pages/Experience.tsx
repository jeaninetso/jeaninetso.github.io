import { roles } from '../data/experience'
import ProjectTile from '../components/ProjectTile'

export default function Experience() {
  return (
    <div className="mx-auto max-w-3xl pt-12 sm:pt-20">
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
              <div className="flex items-baseline gap-3">
                {role.draft && (
                  <span className="font-mono text-xs italic text-ink-faint">
                    draft, pending review
                  </span>
                )}
                {role.dates && (
                  <span className="font-mono text-xs text-ink-faint">
                    {role.dates}
                  </span>
                )}
              </div>
            </div>

            {role.summary && (
              <p className="mt-3 text-base leading-relaxed">{role.summary}</p>
            )}
            {role.bullets && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed">
                {role.bullets.map((bullet) => (
                  <li key={bullet.text}>
                    {bullet.text}
                    {bullet.link && (
                      <>
                        {' '}
                        <a
                          href={bullet.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-accent underline decoration-accent-soft underline-offset-2 hover:decoration-accent"
                        >
                          ({bullet.linkLabel ?? 'link'})
                        </a>
                      </>
                    )}
                  </li>
                ))}
              </ul>
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
