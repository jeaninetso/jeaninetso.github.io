import type { Project } from '../data/projects'

export default function ProjectTile({ project }: { project: Project }) {
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
