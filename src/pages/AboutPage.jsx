import PlaceholderImage from '../components/PlaceholderImage'
import './AboutPage.css'

function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-page-inner">
        <div className="about-portrait">
          <PlaceholderImage src="/images/portrait.jpg" alt="Portrait of Ethan Scherwitz" label="PORTRAIT" />
        </div>
        <h1 className="about-page-title">About</h1>
        <p className="about-page-text">
          I am a computer science student at the University of Texas at Dallas. I design and build digital work — websites, plugins, and visual systems — usually in black and white, usually with a tight type system.
        </p>
        <p className="about-page-text">
          Recent work includes the Third Space Digital website, a Three.js piece called Pulse, a Blender bake plugin, and experiments in Figma.
        </p>
        <p className="about-page-text">
          This site is a scaffold. Photos and longer case studies will land here as they are ready.
        </p>
      </div>
    </main>
  )
}

export default AboutPage
