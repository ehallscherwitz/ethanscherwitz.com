import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import './WorkPage.css'

function WorkPage() {
  return (
    <main className="work-page">
      <header className="work-header">
        <h1 className="work-title">Work</h1>
      </header>
      <div className="section-divider">
        <h2 className="section-divider-title">Projects</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  )
}

export default WorkPage
