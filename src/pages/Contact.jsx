import { useState } from 'react'
import { FiMapPin, FiPhone, FiMail, FiClock, FiArrowRight } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent!')
    setForm({ name: '', email: '', company: '', subject: '', message: '' })
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team in Chandler, Arizona"
        image="/images/slider-2.jpg"
      />

      {/* Main contact layout */}
      <section className="ct-main-section">
        <div className="ct-container">
          <div className="ct-layout">

            {/* Left — Form */}
            <div className="ct-form-col">
              <span className="ct-tag">SEND A MESSAGE</span>
              <h2 className="ct-col-title">Get in Touch</h2>

              <form onSubmit={handleSubmit} className="ct-form">
                <div className="ct-form-row">
                  <div className="ct-form-group">
                    <label htmlFor="ct-name" className="ct-label">Name</label>
                    <input
                      type="text"
                      id="ct-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="ct-form-group">
                    <label htmlFor="ct-email" className="ct-label">Email</label>
                    <input
                      type="email"
                      id="ct-email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="ct-form-group">
                  <label htmlFor="ct-company" className="ct-label">Company</label>
                  <input
                    type="text"
                    id="ct-company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>

                <div className="ct-form-group">
                  <label htmlFor="ct-subject" className="ct-label">Subject</label>
                  <select
                    id="ct-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Distributor Inquiry">Distributor Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Product Sample">Product Sample</option>
                  </select>
                </div>

                <div className="ct-form-group">
                  <label htmlFor="ct-message" className="ct-label">Message</label>
                  <textarea
                    id="ct-message"
                    name="message"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry…"
                    required
                  />
                </div>

                <button type="submit" className="ct-submit-btn">
                  Send Message <FiArrowRight size={16} />
                </button>
              </form>
            </div>

            {/* Right — Info */}
            <div className="ct-info-col">
              <span className="ct-tag">CONTACT INFO</span>
              <h2 className="ct-col-title">Our Offices</h2>

              {/* HQ block */}
              <div className="ct-info-block">
                <h4 className="ct-info-block-title">Headquarters</h4>
                <div className="ct-info-row">
                  <FiMapPin size={15} className="ct-info-icon" />
                  <span>280 N Roosevelt Ave, Chandler, AZ 85226</span>
                </div>
                <div className="ct-info-row">
                  <FiPhone size={15} className="ct-info-icon" />
                  <a href="tel:+18663129909">+1 (866) 312-9909</a>
                </div>
                <div className="ct-info-row">
                  <FiMail size={15} className="ct-info-icon" />
                  <a href="mailto:contact@reflektech.com">contact@reflektech.com</a>
                </div>
                <div className="ct-info-row">
                  <FiClock size={15} className="ct-info-icon" />
                  <span>Mon – Fri, 8:00 AM – 5:00 PM MST</span>
                </div>
              </div>

              {/* International offices */}
              <div className="ct-info-block ct-info-block--intl">
                <h4 className="ct-info-block-title">International Offices</h4>

                <p className="ct-intl-region">Europe</p>
                <div className="ct-info-row ct-info-row--sm">
                  <FiMapPin size={13} className="ct-info-icon" />
                  <span>Marconistraat 70H, Gouda 2809PE, NL</span>
                </div>
                <div className="ct-info-row ct-info-row--sm">
                  <FiPhone size={13} className="ct-info-icon" />
                  <a href="tel:+31634583582">+31 6 3458 3582</a>
                </div>
                <div className="ct-info-row ct-info-row--sm">
                  <FiMail size={13} className="ct-info-icon" />
                  <a href="mailto:salesEU@reflektech.com">salesEU@reflektech.com</a>
                </div>

                <p className="ct-intl-region ct-intl-region--mt">Middle East</p>
                <div className="ct-info-row ct-info-row--sm">
                  <FiMapPin size={13} className="ct-info-icon" />
                  <span>WH 36/D 06 ABA Avenue, Al Qouz 02, Dubai, UAE</span>
                </div>
                <div className="ct-info-row ct-info-row--sm">
                  <FiPhone size={13} className="ct-info-icon" />
                  <a href="tel:+971505554246">+971 50 555 4246</a>
                </div>
                <div className="ct-info-row ct-info-row--sm">
                  <FiMail size={13} className="ct-info-icon" />
                  <a href="mailto:salesME@reflektech.com">salesME@reflektech.com</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div className="ct-map-placeholder">
        <span className="ct-map-label">Chandler, Arizona — Manufacturing Headquarters</span>
      </div>
    </>
  )
}
