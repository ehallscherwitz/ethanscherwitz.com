import { Link, Navigate, useParams } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage'
import { getProject } from '../data/projects'
import './ProjectPage.css'

function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) {
    return <Navigate to="/#work" replace />
  }

  return (
    <main className="project-page">
      <Link to="/#work" className="project-page-back" aria-label="Back">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <line x1="26" y1="16" x2="6" y2="16" stroke="currentColor" strokeWidth="3" />
          <polyline points="14,8 6,16 14,24" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      </Link>
      <p className="project-page-tag">{project.tag}</p>
      <h1 className="project-page-title">{project.title}</h1>
      <p className="project-page-role">{project.role}</p>

      <div className="project-page-links">
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            {project.liveLabel || 'Live'}
          </a>
        )}
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            Repo
          </a>
        )}
        {project.extra && (
          <a href={project.extra} target="_blank" rel="noopener noreferrer">
            {project.extraLabel || 'More'}
          </a>
        )}
      </div>

      {project.video && (
        <div className="project-page-video">
          <video controls playsInline poster={project.image}>
            <source src={project.video} type="video/mp4" />
          </video>
        </div>
      )}

      <div className={`project-page-media project-page-media--${project.media.length}`}>
        {project.media.map((item) => (
          <div
            key={item.src}
            className={`project-page-frame${item.wide ? ' project-page-frame--wide' : ''}${item.contain ? ' project-page-frame--contain' : ''}`}
          >
            <PlaceholderImage src={item.src} alt={item.label} label={item.label} />
          </div>
        ))}
      </div>

      <div className="project-page-body">
        {project.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {project.options && (
        <>
          <h2 className="project-page-subtitle">Options</h2>
          <ul className="project-page-options">
            {project.options.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </>
      )}

    </main>
  )
}

export default ProjectPage
