import { useState, useRef, useEffect } from 'react'
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
  const dropdownRef = useRef(null)

  const isActive = (path) => location.pathname === path
  const isServicesActive = services.some((s) => location.pathname === s.path)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img
            src="/images/logo.png"
            alt="Reflek Technologies Corporation"
            height="72"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar-nav" aria-label="Main navigation">
          <Link to="/" className={`nav-link${isActive('/') ? ' active' : ''}`}>
            Home
          </Link>
          <Link to="/about-us" className={`nav-link${isActive('/about-us') ? ' active' : ''}`}>
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="nav-dropdown"
            ref={dropdownRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`nav-link nav-dropdown-trigger${isServicesActive ? ' active' : ''}`}
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <FiChevronDown size={14} className={`chevron${servicesOpen ? ' open' : ''}`} />
            </button>
            <div className={`dropdown-panel${servicesOpen ? ' open' : ''}`} role="menu">
              {services.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className={`dropdown-item${isActive(s.path) ? ' active' : ''}`}
                  role="menuitem"
                  onClick={() => setServicesOpen(false)}
                >
                  <span className="dropdown-dot" aria-hidden="true" />
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/news" className={`nav-link${isActive('/news') ? ' active' : ''}`}>
            News
          </Link>
          <Link to="/distributors" className={`nav-link${isActive('/distributors') ? ' active' : ''}`}>
            Distributors
          </Link>
        </nav>

        {/* CTA */}
        <Link
          to="/contact-us"
          className={`nav-cta${isActive('/contact-us') ? ' active' : ''}`}
        >
          Contact
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Panel */}
      <div className={`mobile-panel${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        <nav className="mobile-nav">
          <Link to="/" className={`mobile-link${isActive('/') ? ' active' : ''}`}>Home</Link>
          <Link to="/about-us" className={`mobile-link${isActive('/about-us') ? ' active' : ''}`}>About Us</Link>

          <div className="mobile-dropdown">
            <button
              className={`mobile-link mobile-dropdown-trigger${isServicesActive ? ' active' : ''}`}
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              Services
              <FiChevronDown size={14} className={`chevron${servicesOpen ? ' open' : ''}`} />
            </button>
            <div className={`mobile-submenu${servicesOpen ? ' open' : ''}`}>
              {services.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className={`mobile-sublink${isActive(s.path) ? ' active' : ''}`}
                >
                  <span className="dropdown-dot" aria-hidden="true" />
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/news" className={`mobile-link${isActive('/news') ? ' active' : ''}`}>News</Link>
          <Link to="/distributors" className={`mobile-link${isActive('/distributors') ? ' active' : ''}`}>Distributors</Link>

          <Link to="/contact-us" className="nav-cta mobile-cta">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
