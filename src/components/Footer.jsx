import { Link } from 'react-router-dom'
import { FiFacebook, FiYoutube, FiTwitter, FiRss, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      {/* Geometric decorative elements */}
      <div className="footer-geo-accent" />

      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src="https://reflektech.com/wp-content/uploads/2022/12/footer-logo.png"
              alt="Reflek Technologies"
              className="footer-logo"
            />
            <div className="footer-contact-item">
              <FiMapPin size={16} />
              <span>280 N Roosevelt Ave, Chandler, AZ 85226</span>
            </div>
          </div>

          <div className="footer-col">
            <h4><span className="footer-label">// Contact</span></h4>
            <div className="footer-contact-item">
              <FiPhone size={16} />
              <a href="tel:+18663129909">+1 866 312 9909</a>
            </div>
            <div className="footer-contact-item">
              <FiMail size={16} />
              <a href="mailto:contact@reflektech.com">contact@reflektech.com</a>
            </div>
          </div>

          <div className="footer-col">
            <h4><span className="footer-label">// Quick Links</span></h4>
            <Link to="/about-us"><span className="footer-link-marker" />About Us</Link>
            <Link to="/paint-protection"><span className="footer-link-marker" />Paint Protection</Link>
            <Link to="/solar-films"><span className="footer-link-marker" />Solar Films</Link>
            <Link to="/custom-coatings"><span className="footer-link-marker" />Custom Coatings</Link>
            <Link to="/electronics"><span className="footer-link-marker" />Electronics</Link>
          </div>

          <div className="footer-col">
            <h4><span className="footer-label">// Connect With Us</span></h4>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-hex"><FiFacebook size={18} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-hex"><FiYoutube size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="footer-social-hex"><FiTwitter size={18} /></a>
              <a href="#" aria-label="RSS" className="footer-social-hex"><FiRss size={18} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Reflek Technologies Corporation. All rights reserved.</p>
          <Link to="#">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
