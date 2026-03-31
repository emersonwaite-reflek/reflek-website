import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown, FiShield, FiSun, FiDroplet, FiCpu, FiArrowRight } from 'react-icons/fi'
import './Navbar.css'

const services = [
  {
    name: 'Paint Protection',
    path: '/paint-protection',
    icon: <FiShield />,
    image: 'https://reflektech.com/wp-content/uploads/2022/12/slider-3.jpg',
    desc: 'Advanced PPF films for ultimate vehicle protection',
    color: '#7ab929',
  },
  {
    name: 'Solar Films',
    path: '/solar-films',
    icon: <FiSun />,
    image: 'https://reflektech.com/wp-content/uploads/2022/12/slider-1.jpg',
    desc: 'High-performance solar control window films',
    color: '#2bb5b2',
  },
  {
    name: 'Custom Coatings',
    path: '/custom-coatings',
    icon: <FiDroplet />,
    image: 'https://reflektech.com/wp-content/uploads/2022/12/slider-4.jpg',
    desc: 'DC vacuum sputtering & precision coatings',
    color: '#666',
  },
  {
    name: 'Electronics',
    path: '/electronics',
    icon: <FiCpu />,
    image: 'https://reflektech.com/wp-content/uploads/2022/12/slider-6.jpg',
    desc: 'Photovoltaics & flexible circuit applications',
    color: '#4a9e3f',
  },
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
            <div className={`mega-menu ${servicesOpen ? 'open' : ''}`}>
              <div className="mega-menu__header">
                <span className="dropdown-label">// Services</span>
              </div>
              <div className="mega-menu__grid">
                {services.map(s => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className={`mega-menu__item ${isActive(s.path) ? 'active' : ''}`}
                    onClick={() => { setMobileOpen(false); setServicesOpen(false) }}
                  >
                    <div className="mega-menu__img-wrapper">
                      <img src={s.image} alt={s.name} />
                    </div>
                    <div className="mega-menu__item-body">
                      <div className="mega-menu__icon" style={{ background: s.color }}>{s.icon}</div>
                      <h4 className="mega-menu__item-title">{s.name}</h4>
                      <p className="mega-menu__item-desc">{s.desc}</p>
                      <span className="mega-menu__item-link" style={{ color: s.color }}>
                        Learn More <FiArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
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
