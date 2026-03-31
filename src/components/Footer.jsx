import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main container">
        <div className="footer-grid">

          {/* Column 1: Brand */}
          <div className="footer-brand">
            <Link to="/">
              <img
                src="https://reflektech.com/wp-content/uploads/2022/12/logo.png"
                alt="Reflek Technologies Corporation"
                className="footer-logo"
                height="32"
              />
            </Link>
            <p className="footer-tagline">
              Precision-engineered films &amp; coatings.<br />
              Manufactured in the USA.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <span className="footer-col-label">Quick Links</span>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About</Link></li>
              <li><Link to="/paint-protection">Paint Protection</Link></li>
              <li><Link to="/solar-films">Solar Films</Link></li>
              <li><Link to="/custom-coatings">Custom Coatings</Link></li>
              <li><Link to="/electronics">Electronics</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/distributors">Distributors</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-col">
            <span className="footer-col-label">Contact</span>
            <address className="footer-contact">
              <p>280 N Roosevelt Ave<br />Chandler, AZ 85226</p>
              <a href="tel:+18663129909">+1 (866) 312-9909</a>
              <a href="mailto:contact@reflektech.com">contact@reflektech.com</a>
            </address>
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner container">
          <span>&copy; 2026 Reflek Technologies Corporation. All rights reserved.</span>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
