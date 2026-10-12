import { Link } from 'react-router-dom'
import PlaceholderImage from './PlaceholderImage'
import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <Link className="project-card" to={`/work/${project.slug}`}>
      <div className="project-image">
        <PlaceholderImage src={project.image} alt="" label="IMAGE" />
      </div>
      <div className="project-card-content">
        <p className="project-tag">{project.tag}</p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.card}</p>
      </div>
    </Link>
  )
}

export default ProjectCard
