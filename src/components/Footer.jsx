import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-grid">

          {/* Column 1: Brand */}
          <div className="footer-brand">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="Reflek Technologies Corporation"
                className="footer-logo"
              />
            </Link>
            <p className="footer-tagline">
              Precision-engineered films &amp; coatings.<br />
              Manufactured in Chandler, Arizona.
            </p>
            <p className="footer-sub">
              Serving distributors, installers, and OEMs in 60+ countries worldwide.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="footer-col">
            <span className="footer-col-label">Services</span>
            <ul className="footer-links">
              <li><Link to="/paint-protection">Paint Protection Film</Link></li>
              <li><Link to="/solar-films">Solar Window Films</Link></li>
              <li><Link to="/custom-coatings">Custom Coatings</Link></li>
              <li><Link to="/electronics">Electronics Films</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-col">
            <span className="footer-col-label">Company</span>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/news">News &amp; Updates</Link></li>
              <li><Link to="/distributors">Distributors</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col">
            <span className="footer-col-label">Contact</span>
            <address className="footer-contact">
              <p>280 N Roosevelt Ave<br />Chandler, AZ 85226</p>
              <a href="tel:+18663129909">+1 (866) 312-9909</a>
              <a href="mailto:contact@reflektech.com">contact@reflektech.com</a>
              <p className="footer-hours">Mon – Fri, 8:00 AM – 5:00 PM MST</p>
            </address>
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>&copy; 2026 Reflek Technologies Corporation. All rights reserved.</span>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
