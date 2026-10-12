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
          I am a CS student at UT Dallas. I write software I actually use — a bake add-on for Blender, a Figma plugin, the site for my shop, the backend for Third Space Digital.
        </p>
        <p className="about-page-text">
          I also work on Org Portal at ACM, Indigo Magazine, and a few other things that live on the work page.
        </p>
      </div>
    </main>
  )
}

export default AboutPage
