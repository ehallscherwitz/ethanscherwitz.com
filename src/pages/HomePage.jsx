import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage'
import { projects, socials } from '../data/projects'
import './HomePage.css'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#work') {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  return (
    <main className="home">
      <section className="home-intro">
        <div className="home-intro-grid">
          <div className="home-portrait">
            <PlaceholderImage src="/images/portrait.jpg" alt="Portrait of Ethan Scherwitz" label="PORTRAIT" />
          </div>
          <div className="home-intro-body">
            <h1 className="home-text home-text--lead">
              My name is Ethan Scherwitz, I&apos;m a Computer Science student at UTD, and I&apos;m passionate about solving technical problems with creative &amp; efficient solutions.
            </h1>
            <p className="home-text">
              I&apos;m comfortable with programming full stack applications, building custom tools, and creative design.
            </p>
          </div>
        </div>
      </section>

      <section className="home-work" id="work">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            className={`work-row${index % 2 === 1 ? ' work-row--flip' : ''}`}
            to={`/work/${project.slug}`}
          >
            <div className="work-row-thumb">
              <PlaceholderImage src={project.image} alt="" label="IMAGE" />
            </div>
            <div className="work-row-copy">
              <p className="work-row-tag">{project.tag}</p>
              <h2 className="work-row-title">{project.title}</h2>
              <p className="work-row-text">{project.card}</p>
            </div>
          </Link>
        ))}
      </section>

      <div className="home-resume">
        <a className="home-resume-link" href={socials.resume} download>
          Download resume
        </a>
      </div>
    </main>
  )
}

export default HomePage
