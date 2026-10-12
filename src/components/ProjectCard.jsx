import PlaceholderImage from './PlaceholderImage'
import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <a
      className="project-card"
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-image">
        <PlaceholderImage src={project.image} alt="" label="IMAGE" />
      </div>
      <div className="project-card-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
    </a>
  )
}

export default ProjectCard
