import { Link, Navigate, useParams } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage'
import { getProject } from '../data/projects'
import './ProjectPage.css'

function MediaGrid({ items }) {
  if (!items.length) return null

  return (
    <div className={`project-page-media project-page-media--${items.length}`}>
      {items.map((item) => (
        <figure
          key={item.src}
          className={`project-page-shot${item.wide ? ' project-page-shot--wide' : ''}`}
        >
          <div
            className={`project-page-frame${item.wide ? ' project-page-frame--wide' : ''}${item.contain ? ' project-page-frame--contain' : ''}`}
          >
            <PlaceholderImage src={item.src} alt={item.caption || item.label} label={item.label} />
          </div>
          {item.caption && <figcaption className="project-page-caption">{item.caption}</figcaption>}
        </figure>
      ))}
    </div>
  )
}

function CopyBlock({ text }) {
  return (
    <div className="project-page-body">
      {text.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  )
}

function ListBlock({ heading, items, ordered = false }) {
  const List = ordered ? 'ol' : 'ul'

  return (
    <div className="project-page-copy">
      {heading && <h2 className="project-page-subtitle">{heading}</h2>}
      <List className={ordered ? 'project-page-steps' : 'project-page-options'}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </List>
    </div>
  )
}

function Story({ project }) {
  return project.story.map((block, index) => {
    const key = `${block.type}-${index}`

    if (block.type === 'copy') {
      return <CopyBlock key={key} text={block.text} />
    }

    if (block.type === 'heading') {
      return (
        <div key={key} className="project-page-copy">
          <h2 className="project-page-subtitle">{block.text}</h2>
        </div>
      )
    }

    if (block.type === 'steps') {
      return <ListBlock key={key} heading={block.heading} items={block.items} ordered />
    }

    if (block.type === 'list') {
      return <ListBlock key={key} heading={block.heading} items={block.items} />
    }

    if (block.type === 'media') {
      return (
        <MediaGrid
          key={key}
          items={project.media.filter((item) => item.group === block.group)}
        />
      )
    }

    if (block.type === 'scene') {
      return (
        <div key={key} className="project-page-body">
          <p>
            {block.preface}{' '}
            <a href={block.href} target="_blank" rel="noopener noreferrer">
              {block.label}
            </a>
          </p>
        </div>
      )
    }

    return null
  })
}

function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) {
    return <Navigate to="/#work" replace />
  }

  const grouped = !project.story && project.media.some((item) => item.group)
  const before = grouped ? project.media.filter((item) => item.group === 'before') : project.media
  const optionShots = grouped ? project.media.filter((item) => item.group === 'options') : []
  const after = grouped ? project.media.filter((item) => item.group === 'after') : []

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
        {project.live && !project.story && (
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

      {project.story ? (
        <Story project={project} />
      ) : (
        <>
          <MediaGrid items={grouped ? before : project.media} />
          <MediaGrid items={optionShots} />
          {project.options && (
            <ListBlock heading="Options" items={project.options} />
          )}
          <MediaGrid items={after} />
          <CopyBlock text={project.body} />
        </>
      )}
    </main>
  )
}

export default ProjectPage
