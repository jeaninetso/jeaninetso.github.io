import { personalProjects } from '../data/projects'
import ProjectTile from '../components/ProjectTile'

export default function Projects() {
  return (
    <div className="mx-auto max-w-4xl pt-2">
      <h1 className="font-mono text-3xl font-medium text-ink sm:text-4xl">
        Projects
      </h1>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {personalProjects.map((project) => (
          <ProjectTile key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
