import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { socials } from '../data/projects'
import './Header.css'

const TOP_THRESHOLD = 24
const SCROLL_DELTA_THRESHOLD = 4

function Header({ onOpenMenu }) {
  const location = useLocation()
  const navigate = useNavigate()
  const lastScrollY = useRef(0)
  const [headerVisible, setHeaderVisible] = useState(true)
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY ?? window.pageYOffset ?? 0
      const previousY = lastScrollY.current
      const delta = y - previousY
      const scrollingUp = delta < 0

      if (y <= TOP_THRESHOLD) {
        setAtTop(true)
        setHeaderVisible(true)
      } else if (Math.abs(delta) >= SCROLL_DELTA_THRESHOLD) {
        setAtTop(false)
        setHeaderVisible(scrollingUp)
      } else {
        setAtTop(false)
      }
      lastScrollY.current = y
    }

    const initialY = window.scrollY ?? 0
    lastScrollY.current = initialY
    setAtTop(initialY <= TOP_THRESHOLD)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const handleHomeClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    navigate('/')
  }

  const headerClass = [
    'header',
    !headerVisible && 'header--hidden',
    atTop ? 'header--transparent' : 'header--glass',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClass}>
      <div className="header-left">
        <Link to="/" className="header-logo-link" aria-label="Home" onClick={handleHomeClick}>
          <span className="header-mark">ES</span>
        </Link>
      </div>

      <div className="header-center">
        <div className="brand-name-link" onClick={handleHomeClick}>
          <div className="brand-name">Ethan Scherwitz</div>
        </div>
      </div>

      <div className="header-right">
        <a
          className="header-nav-icon"
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg className="header-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              stroke="none"
              d="M12 .3A12 12 0 0 0 8.2 23.7c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"
            />
          </svg>
          <span className="tooltip">github</span>
        </a>
        <a
          className="header-nav-icon"
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg className="header-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              stroke="none"
              d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z"
            />
          </svg>
          <span className="tooltip">linkedin</span>
        </a>
        <button
          type="button"
          className="header-menu-button"
          onClick={onOpenMenu}
          aria-label="Open menu"
        >
          <svg className="header-icon-svg" viewBox="0 0 32 32" aria-hidden="true">
            <line x1="4" y1="8" x2="28" y2="8" stroke="currentColor" strokeWidth="3" />
            <line x1="4" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="3" />
            <line x1="4" y1="24" x2="28" y2="24" stroke="currentColor" strokeWidth="3" />
          </svg>
          <span className="tooltip">menu</span>
        </button>
      </div>
    </header>
  )
}

export default Header
