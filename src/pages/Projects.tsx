import { professionalProjects, learningProjects } from '../data/projects'
import type { Project } from '../data/projects'

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
      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
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
