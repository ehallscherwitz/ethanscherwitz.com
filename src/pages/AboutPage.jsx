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
          Computer science student at UT Dallas. I write the tools around production: a Blender lighting-bake add-on for browser and game assets, a Figma gesture plugin, a one-button shop-to-Pinterest publish path, backends for editorial and campus orgs.
        </p>
        <p className="about-page-text">
          That is the case for Game Lab tooling and pipelines. UI/UX is the second track — Third Space Digital, ACM Org Portal, Indigo Magazine, HackLab (Best Design).
        </p>
        <p className="about-page-text">
          I would rather a team ship faster because of something I built than because I already made a game.
        </p>
      </div>
    </main>
  )
}

export default AboutPage
