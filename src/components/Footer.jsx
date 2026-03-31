import { Link } from 'react-router-dom'
import { FiFacebook, FiYoutube, FiTwitter, FiRss, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
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
            <h4>Contact</h4>
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
            <h4>Quick Links</h4>
            <Link to="/about-us">About Us</Link>
            <Link to="/paint-protection">Paint Protection</Link>
            <Link to="/solar-films">Solar Films</Link>
            <Link to="/custom-coatings">Custom Coatings</Link>
            <Link to="/electronics">Electronics</Link>
          </div>

          <div className="footer-col">
            <h4>Connect With Us</h4>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FiFacebook size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FiYoutube size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FiTwitter size={20} /></a>
              <a href="#" aria-label="RSS"><FiRss size={20} /></a>
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
