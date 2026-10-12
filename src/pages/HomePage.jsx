import { Link } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage'
import ProjectCard from '../components/ProjectCard'
import { featuredSlugs, getProject } from '../data/projects'
import './HomePage.css'

function HomePage() {
  const featured = featuredSlugs.map((slug) => getProject(slug))

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
              Ethan Scherwitz builds tools and pipelines — Blender add-ons, Figma plugins, publish automations — so teams can move faster.
            </p>
            <p className="home-text">
              CS at UT Dallas. Applying to Game Lab for tooling, pipelines, and version control; UI/UX second. The work is custom software around 3D, design, and production, not a reel of shipped games.
            </p>
            <p className="home-text home-text--italic">
              Screenshots and videos land here as they come in.
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
