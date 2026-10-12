import { socials } from '../data/projects'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <a className="site-footer-resume" href={socials.resume} download>
        Download resume
      </a>
    </footer>
  )
}

export default Footer
