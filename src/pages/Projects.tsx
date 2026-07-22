import { professionalProjects, learningProjects } from '../data/projects'
import type { Project } from '../data/projects'
import { roles } from '../data/experience'

function ProjectTile({ project }: { project: Project }) {
  const title = project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="hover:text-accent"
    >
      {project.title}
    </a>
  ) : (
    project.title
  )

  return (
    <div>
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-md"
      />
      <h3 className="mt-3 font-mono text-base font-medium text-ink">
        {title}
      </h3>
      <p className="mt-1 text-sm leading-relaxed">{project.blurb}</p>
    </div>
  )
}

export default function Projects() {
  return (
    <div className="mx-auto max-w-4xl pt-12 sm:pt-20">
      <h1 className="font-mono text-3xl font-medium text-ink sm:text-4xl">
        Projects
      </h1>

      <h2 className="mt-10 font-mono text-sm uppercase tracking-wide text-ink-faint">
        Experience
      </h2>
      <div className="mt-6 flex flex-col gap-10">
        {roles.map((role) => (
          <div key={role.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-mono text-lg font-medium text-ink">
                {role.title} &middot; {role.company}
              </h3>
              {role.dates && (
                <span className="font-mono text-xs text-ink-faint">
                  {role.dates}
                </span>
              )}
            </div>
            {role.pending ? (
              <p className="mt-2 text-sm italic text-ink-faint">
                Case study coming soon.
              </p>
            ) : (
              <>
                {role.summary && (
                  <p className="mt-3 text-base leading-relaxed">
                    {role.summary}
                  </p>
                )}
                {role.bullets && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-mono text-sm uppercase tracking-wide text-ink-faint">
        Projects
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
        {professionalProjects.map((project) => (
          <ProjectTile key={project.title} project={project} />
        ))}
      </div>

      <h2 className="mt-16 font-mono text-sm uppercase tracking-wide text-ink-faint">
        Earlier / learning projects
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
        {learningProjects.map((project) => (
          <ProjectTile key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
