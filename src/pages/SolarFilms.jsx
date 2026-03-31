import { FiHome, FiBriefcase, FiTruck, FiAnchor, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './Services.css'

const applications = [
  {
    icon: <FiBriefcase />,
    title: 'Commercial',
    desc: 'Window film solutions applied to interior windows control imbalances between insulated and shaded areas for a more pleasant, distributed indoor temperature. Reduces glare and fatigue without expensive renovation.',
    highlights: ['Temperature control', 'Glare reduction', 'Cost-effective'],
  },
  {
    icon: <FiHome />,
    title: 'Residential',
    desc: 'Luxo Residential Films reject up to 89% of infrared heat, lowering energy expenses. Block up to 99.9% of harmful UV radiation, protecting inhabitants and preventing furniture fading.',
    highlights: ['89% IR heat rejection', '99.9% UV block', 'Energy savings'],
  },
  {
    icon: <FiTruck />,
    title: 'Automotive',
    desc: 'Rejects up to 89% of solar infrared rays and 60% of overall cabin heat, reducing air conditioning strain while maintaining optical clarity and driving safety.',
    highlights: ['89% IR rejection', '60% heat reduction', 'Optical clarity'],
  },
  {
    icon: <FiAnchor />,
    title: 'Marine',
    desc: 'Luxo Marine Line resists saltwater corrosion in maritime environments, offering 65% solar rejection with up to 73% visible light transmission, preserving ocean views while reducing glare.',
    highlights: ['Saltwater resistant', '65% solar rejection', '73% VLT'],
  },
]

export default function SolarFilms() {
  return (
    <>
      <PageHero
        title="Solar Films"
        subtitle="Luxo Window Films - Advanced solar control for every environment"
        image="https://reflektech.com/wp-content/uploads/2022/12/slider-3.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <h2 className="section-title">Luxo Solar Film Solutions</h2>
            <p className="service-desc">
              Our comprehensive range of solar films delivers exceptional performance across commercial,
              residential, automotive, and marine applications. Each product is engineered for maximum
              heat rejection, UV protection, and optical clarity.
            </p>
          </div>

          <div className="applications-grid">
            {applications.map((app, i) => (
              <div key={i} className="application-card">
                <div className="application-header">
                  <div className="feature-icon">{app.icon}</div>
                  <h3>{app.title}</h3>
                </div>
                <p>{app.desc}</p>
                <div className="application-highlights">
                  {app.highlights.map((h, j) => (
                    <span key={j} className="highlight-tag">{h}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="service-cta">
            <h3>Ready to upgrade your windows?</h3>
            <p>Contact us to find the right solar film for your needs.</p>
            <Link to="/contact-us" className="btn btn-primary">Get in Touch <FiArrowRight /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
