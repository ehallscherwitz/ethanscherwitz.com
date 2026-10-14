import ProjectCard from '../components/ProjectCard'
import { projects, sections } from '../data/projects'
import './WorkPage.css'

function WorkPage() {
  return (
    <main className="work-page">
      <header className="work-header">
        <h1 className="work-title">Work</h1>
      </header>
      {sections.map((section) => (
        <section key={section.id}>
          <div className="section-divider">
            <h2 className="section-divider-title">{section.title}</h2>
          </div>
          <div className="project-grid">
            {projects
              .filter((project) => !project.hidden && project.section === section.id)
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
          </div>
        </section>
      ))}
    </main>
  )
}

export default WorkPage
