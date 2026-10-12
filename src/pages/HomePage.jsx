import { Link } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import './HomePage.css'

function HomePage() {
  const featured = projects.slice(0, 3)

  return (
    <main className="home">
      <section className="home-intro">
        <div className="home-intro-grid">
          <div className="home-portrait">
            <PlaceholderImage src="/images/portrait.jpg" alt="Portrait of Ethan Scherwitz" label="PORTRAIT" />
          </div>
          <div className="home-intro-body">
            <h1 className="home-title">
              <span className="home-title-line">Who I Am</span>
            </h1>
            <p className="home-text home-text--lead">
              Ethan Scherwitz is a computer science student at UT Dallas, working across design and engineering.
            </p>
            <p className="home-text">
              I build websites, tools, and visual systems — from the Third Space Digital platform to Three.js studies and Figma plugins.
            </p>
            <p className="home-text home-text--italic">
              Images and case studies go here as they land.
            </p>
          </div>
        </div>
      </section>

      <section className="home-work">
        <div className="section-divider">
          <h2 className="section-divider-title">Selected</h2>
        </div>
        <div className="project-grid">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link to="/work" className="home-all-link">
          All work
        </Link>
      </section>
    </main>
  )
}

export default HomePage
