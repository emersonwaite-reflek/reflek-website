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

const stats = [
  { number: '89%', label: 'IR Heat Rejection' },
  { number: '99.9%', label: 'UV Block' },
  { number: '73%', label: 'Visible Light Transmission' },
  { number: '65%', label: 'Solar Rejection' },
]

export default function SolarFilms() {
  return (
    <>
      <PageHero
        title="Solar Films"
        subtitle="Luxo Window Films - Advanced solar control for every environment"
        image="https://reflektech.com/wp-content/uploads/2022/12/slider-1.jpg"
      />

      {/* Intro Section */}
      <section className="svc-section svc-section--white">
        <div className="svc-container">
          <div className="svc-intro">
            <span className="svc-section-label">// Solar Film Solutions</span>
            <h2 className="svc-section-title">
              Luxo <span>Solar Film</span> Solutions
            </h2>
            <div className="svc-accent-bar" />
            <p className="svc-desc">
              Our comprehensive range of solar films delivers exceptional performance across commercial,
              residential, automotive, and marine applications. Each product is engineered for maximum
              heat rejection, UV protection, and optical clarity.
            </p>
          </div>

          <div className="svc-applications-grid">
            {applications.map((app, i) => (
              <div key={i} className="svc-app-card">
                <span className="svc-app-card__number">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="svc-app-card__header">
                  <div className="svc-feature-card__icon">{app.icon}</div>
                  <div className="svc-app-card__title-group">
                    <span className="svc-app-card__label">// Application {String(i + 1).padStart(2, '0')}</span>
                    <h3>{app.title}</h3>
                  </div>
                </div>
                <p>{app.desc}</p>
                <div className="svc-highlights">
                  {app.highlights.map((h, j) => (
                    <span key={j} className="svc-highlight-tag">{h}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="svc-section svc-section--dark">
        <div className="svc-container">
          <div className="svc-intro">
            <span className="svc-section-label">// Performance Data</span>
            <h2 className="svc-section-title">
              Engineered for <span>Peak</span> Performance
            </h2>
          </div>
          <div className="svc-stats-row">
            {stats.map((s, i) => (
              <div key={i} className="svc-stat">
                <div className="svc-stat__number">{s.number}</div>
                <div className="svc-stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="svc-section svc-section--gray">
        <div className="svc-container">
          <div className="svc-cta">
            <span className="svc-cta__label">// Get Started</span>
            <h3>Ready to upgrade your windows?</h3>
            <p>Contact us to find the right solar film for your needs.</p>
            <Link to="/contact-us" className="svc-cta-btn">
              Get in Touch <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
