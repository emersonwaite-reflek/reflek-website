import { useState } from 'react'
import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import './Contact.css'

const offices = [
  {
    title: 'Main Office',
    name: 'Reflek Technologies Corporation',
    address: '280 N Roosevelt Ave, Chandler, Arizona 85226, United States',
    phone: '+1 866 312 9909',
    fax: '+1 480 718 8698',
    email: 'contact@reflektech.com',
  },
  {
    title: 'International / Private Labeling / OEM',
    phone: '+1 866 312 9909',
    fax: '+1 480 718 8698',
    email: 'intl@reflektech.com',
  },
  {
    title: 'Luxo Window Films Division',
    phone: '+1 480 331 5896',
    fax: '+1 480 718 8698',
    email: 'contact@luxofilms.com',
  },
  {
    title: 'Asian Pacific Distribution Center',
    name: 'RTC - Asian Pacific Distribution Center',
    address: '2868 Jufeng Road, Caolu Zhen, Pudong New District, Shanghai, China 200000',
    phone: '+86 400 821 0984',
    email: 'contact@reflektech.com',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team"
        image="https://reflektech.com/wp-content/uploads/2022/12/slider-3.jpg"
      />

      {/* Form Section - Light BG */}
      <section className="ct-form-section">
        <div className="ct-container">
          <div className="ct-section-header">
            <span className="ct-mono-label">// Send a Message</span>
            <h2 className="ct-section-title">Get In <span>Touch</span></h2>
            <div className="ct-title-bar" />
          </div>

          <div className="ct-form-card">
            <div className="ct-form-accent" />
            <form onSubmit={handleSubmit} className="ct-form">
              <div className="ct-form-row">
                <div className={`ct-form-group ${focusedField === 'name' ? 'ct-focused' : ''}`}>
                  <label htmlFor="name" className="ct-label">// Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className={`ct-form-group ${focusedField === 'email' ? 'ct-focused' : ''}`}>
                  <label htmlFor="email" className="ct-label">// Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className={`ct-form-group ${focusedField === 'subject' ? 'ct-focused' : ''}`}>
                <label htmlFor="subject" className="ct-label">// Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div className={`ct-form-group ${focusedField === 'message' ? 'ct-focused' : ''}`}>
                <label htmlFor="message" className="ct-label">// Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell us about your project or inquiry..."
                  required
                />
              </div>

              <button type="submit" className="ct-submit-btn">
                <FiSend size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Offices Section - Dark Angled BG */}
      <section className="ct-offices-section">
        <div className="ct-container">
          <div className="ct-section-header ct-section-header--light">
            <span className="ct-mono-label ct-mono-label--green">// Our Offices</span>
            <h2 className="ct-section-title ct-section-title--light">Global <span>Locations</span></h2>
            <div className="ct-title-bar" />
          </div>

          <div className="ct-offices-grid">
            {offices.map((office, i) => (
              <div key={i} className="ct-office-card">
                <div className="ct-office-accent" />
                <div className="ct-office-content">
                  <div className="ct-office-index">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="ct-office-title">{office.title}</h3>
                  {office.name && <p className="ct-office-name">{office.name}</p>}
                  <div className="ct-office-details">
                    {office.address && (
                      <div className="ct-office-detail">
                        <div className="ct-detail-icon"><FiMapPin size={14} /></div>
                        <span>{office.address}</span>
                      </div>
                    )}
                    <div className="ct-office-detail">
                      <div className="ct-detail-icon"><FiPhone size={14} /></div>
                      <a href={`tel:${office.phone}`}>{office.phone}</a>
                    </div>
                    {office.fax && (
                      <div className="ct-office-detail">
                        <div className="ct-detail-icon"><FiPhone size={14} /></div>
                        <span>Fax: {office.fax}</span>
                      </div>
                    )}
                    <div className="ct-office-detail">
                      <div className="ct-detail-icon"><FiMail size={14} /></div>
                      <a href={`mailto:${office.email}`}>{office.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
