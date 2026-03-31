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

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <h2 className="section-title">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="6" value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">
                  <FiSend /> Send Message
                </button>
              </form>
            </div>

            <div className="contact-info">
              <h2 className="section-title">Our Offices</h2>
              <div className="offices-list">
                {offices.map((office, i) => (
                  <div key={i} className="office-card">
                    <h3>{office.title}</h3>
                    {office.name && <p className="office-name">{office.name}</p>}
                    {office.address && (
                      <div className="office-detail"><FiMapPin size={14} /> {office.address}</div>
                    )}
                    <div className="office-detail"><FiPhone size={14} /> <a href={`tel:${office.phone}`}>{office.phone}</a></div>
                    {office.fax && <div className="office-detail"><FiPhone size={14} /> Fax: {office.fax}</div>}
                    <div className="office-detail"><FiMail size={14} /> <a href={`mailto:${office.email}`}>{office.email}</a></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
