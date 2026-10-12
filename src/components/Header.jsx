import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
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
