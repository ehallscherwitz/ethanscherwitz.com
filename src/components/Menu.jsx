import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

function Menu({ onClose }) {
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => onClose?.(), 300)
  }

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <div className={`menu-page ${isClosing ? 'menu-page--closing' : ''}`} role="dialog" aria-label="Navigation menu">
      <div
        className="menu-page-overlay"
        onClick={handleClose}
        onKeyDown={(e) => e.key === 'Escape' && handleClose()}
        role="button"
        tabIndex={0}
        aria-label="Close menu"
      />
      <div className="menu-panel">
        <div className="menu-page-inner">
          <header className="menu-header">
            <button type="button" className="menu-close-button" onClick={handleClose} aria-label="Close menu">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <line x1="6" y1="6" x2="26" y2="26" stroke="currentColor" strokeWidth="3" />
                <line x1="26" y1="6" x2="6" y2="26" stroke="currentColor" strokeWidth="3" />
              </svg>
            </button>
          </header>

          <section className="menu-section">
            <Link to="/work" className="menu-section-link" onClick={handleClose}>
              <h2 className="menu-section-title">Work</h2>
            </Link>
          </section>

          <section className="menu-section">
            <Link to="/about" className="menu-section-link" onClick={handleClose}>
              <h2 className="menu-section-title">About</h2>
            </Link>
          </section>

          <section className="menu-section">
            <Link to="/contact" className="menu-section-link" onClick={handleClose}>
              <h2 className="menu-section-title">Contact</h2>
            </Link>
          </section>

          <section className="menu-section">
            <a
              href="https://github.com/ehallscherwitz"
              className="menu-section-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="menu-section-title menu-section-title-italic">GitHub</h2>
            </a>
          </section>

          <footer className="menu-footer">
            <span className="menu-footer-mark">ES</span>
            <span className="menu-footer-mark">ES</span>
            <span className="menu-footer-mark">ES</span>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Menu
