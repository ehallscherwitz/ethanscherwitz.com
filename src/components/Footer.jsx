import { socials } from '../data/projects'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <p className="site-footer-contact">
        Contact Me:{' '}
        <a href={socials.email}>ehallscherwitz@gmail.com</a>
      </p>
    </footer>
  )
}

export default Footer
