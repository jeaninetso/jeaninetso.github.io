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

  if (!project.image) {
    return (
      <div className="rounded-md border border-dashed border-line p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-mono text-base font-medium text-ink">
            {title}
          </h3>
          {project.status && (
            <span className="shrink-0 rounded-full bg-paper-dim px-2 py-0.5 font-mono text-xs text-ink-faint">
              {project.status}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed">{project.blurb}</p>
      </div>
    )
  }

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
