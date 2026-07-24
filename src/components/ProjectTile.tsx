import Card from './Card'
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
    <Card
      image={project.image}
      imageAlt={project.title}
      title={title}
      badge={project.status}
      tone="tinted"
    >
      {project.blurb}
    </Card>
  )
}
