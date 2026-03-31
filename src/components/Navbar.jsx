import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import './Navbar.css'

const services = [
  { name: 'Paint Protection', path: '/paint-protection' },
  { name: 'Solar Films', path: '/solar-films' },
  { name: 'Custom Coatings', path: '/custom-coatings' },
  { name: 'Electronics', path: '/electronics' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="navbar">
      <div className="navbar-accent-line" />
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <img
            src="https://reflektech.com/wp-content/uploads/2022/12/logo.png"
            alt="Reflek Technologies Corporation"
          />
        </Link>

        <nav className={`navbar-nav ${mobileOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/about-us" className={isActive('/about-us') ? 'active' : ''} onClick={() => setMobileOpen(false)}>About Us</Link>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="nav-dropdown-trigger" onClick={() => setServicesOpen(!servicesOpen)}>
              Services <FiChevronDown size={14} />
            </button>
            <div className={`nav-dropdown-menu ${servicesOpen ? 'open' : ''}`}>
              <span className="dropdown-label">// Services</span>
              {services.map(s => (
                <Link
                  key={s.path}
                  to={s.path}
                  className={isActive(s.path) ? 'active' : ''}
                  onClick={() => { setMobileOpen(false); setServicesOpen(false) }}
                >
                  <span className="dropdown-link-marker" />
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/news" className={isActive('/news') ? 'active' : ''} onClick={() => setMobileOpen(false)}>News</Link>
          <Link to="/distributors" className={isActive('/distributors') ? 'active' : ''} onClick={() => setMobileOpen(false)}>Distributors</Link>
          <Link to="/contact-us" className={`nav-cta ${isActive('/contact-us') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>Contact</Link>
        </nav>

        <button className="navbar-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  )
}
