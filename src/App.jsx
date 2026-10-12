import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Menu from './components/Menu'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Header onOpenMenu={() => setMenuOpen(true)} />
      {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
      <div className="app-routes">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
