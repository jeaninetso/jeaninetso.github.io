import { personalProjects } from '../data/projects'
import ProjectTile from '../components/ProjectTile'
import SectionHeading from '../components/SectionHeading'

export default function Projects() {
  return (
    <div>
      <SectionHeading numeral="III" title="Projects" />
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {personalProjects.map((project) => (
          <ProjectTile key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
