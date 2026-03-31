import { FiHome, FiBriefcase, FiTruck, FiAnchor, FiArrowRight, FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './Services.css'

const applications = [
  {
    icon: <FiBriefcase />,
    title: 'Commercial',
    desc: 'Reduce building heat gain by up to 80% without altering visibility. Controls temperature imbalances between insulated and shaded areas for a more comfortable, energy-efficient workspace.',
    highlights: ['Up to 80% heat reduction', 'Glare & fatigue control', 'No renovation required'],
  },
  {
    icon: <FiHome />,
    title: 'Residential',
    desc: 'Reject up to 89% of infrared heat to lower energy costs year-round. Block up to 99% of UV radiation, protecting inhabitants and preventing furniture, flooring, and artwork from fading.',
    highlights: ['Up to 89% IR rejection', '99% UV block', 'Year-round energy savings'],
  },
  {
    icon: <FiTruck />,
    title: 'Automotive',
    desc: 'Up to 97% solar infrared rejection and 99% UV protection across all lines. Reduces cabin heat and air conditioning strain while maintaining optical clarity and driving safety.',
    highlights: ['Up to 97% IR rejection', '99% UV protection', 'Non-metallic options available'],
  },
  {
    icon: <FiAnchor />,
    title: 'Marine',
    desc: 'Formulated to resist saltwater corrosion in maritime environments. Preserves ocean views with high visible light transmission while cutting glare and UV exposure on the water.',
    highlights: ['Saltwater resistant', 'High VLT options', 'Glare reduction'],
  },
]

const stats = [
  { number: '97%', label: 'Max IR Rejection' },
  { number: '99%', label: 'UV Block' },
  { number: '80%', label: 'Max Heat Reduction' },
  { number: 'Lifetime', label: 'Automotive Warranty' },
]

export default function SolarFilms() {
  return (
    <>
      <PageHero
        title="Solar Films"
        subtitle="High-performance solar control window films for every application"
        image="https://reflektech.com/wp-content/uploads/2022/12/slider-1.jpg"
      />

      {/* Intro */}
      <section className="svc-section svc-section--white">
        <div className="svc-container">
          <div className="svc-intro">
            <span className="svc-section-label">// Solar Film Solutions</span>
            <h2 className="svc-section-title">Smarter <span>Glass</span> for Every Space</h2>
            <div className="svc-accent-bar" />
            <p className="svc-desc">
              Reflek Technologies manufactures a full range of solar control window films — from nano-ceramic
              automotive tints to spectrally selective architectural glass. Every product is engineered for
              maximum heat rejection, UV protection, and optical clarity, and produced at our facility in
              Chandler, Arizona.
            </p>
          </div>
        </div>
      </section>

      {/* Luxo Brand Section */}
      <section className="svc-section svc-section--gray">
        <div className="svc-container">
          <div className="svc-subbrand-block svc-subbrand-block--reverse">
            <div className="svc-subbrand-block__content">
              <span className="svc-section-label">// Our Premium Window Film Brand</span>
              <img
                src="https://static.wixstatic.com/media/637ea8_65fff5f7729b40e4b29075fec092ce58~mv2.png"
                alt="Luxo Performance Films"
                className="svc-subbrand-block__logo svc-subbrand-block__logo--bg"
              />
              <p className="svc-subbrand-block__tagline">PROTECTION WITHOUT COMPROMISE.</p>
              <p className="svc-desc">
                Luxo is Reflek's premium window film brand — covering automotive, residential, commercial,
                and marine applications. Built on a highly resistant PET base film and coated with precision
                nano-ceramic, metallic-sputtered, or spectrally selective materials, Luxo films deliver
                consistent solar control and 99% UV rejection across every product line. Made in the USA.
              </p>
              <a
                href="https://luxofilms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="svc-external-btn"
              >
                Visit Luxo Films <FiExternalLink size={14} />
              </a>
            </div>
            <div className="svc-subbrand-block__image">
              <img
                src="https://reflektech.com/wp-content/uploads/2022/12/slider-1.jpg"
                alt="Luxo Solar Films"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="svc-section svc-section--white">
        <div className="svc-container">
          <div className="svc-intro">
            <span className="svc-section-label">// Applications</span>
            <h2 className="svc-section-title">Solar Control for <span>Every Environment</span></h2>
            <div className="svc-accent-bar" />
          </div>
          <div className="svc-applications-grid">
            {applications.map((app, i) => (
              <div key={i} className="svc-app-card">
                <span className="svc-app-card__number">{String(i + 1).padStart(2, '0')}</span>
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

      {/* Stats */}
      <section className="svc-section svc-section--dark">
        <div className="svc-container">
          <div className="svc-intro">
            <span className="svc-section-label">// Performance Data</span>
            <h2 className="svc-section-title">Engineered for <span>Peak</span> Performance</h2>
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

      {/* CTA */}
      <section className="svc-section svc-section--gray">
        <div className="svc-container">
          <div className="svc-cta">
            <span className="svc-cta__label">// Get Started</span>
            <h3>Ready to upgrade your windows?</h3>
            <p>Contact us to find the right Luxo solar film for your application.</p>
            <Link to="/contact-us" className="svc-cta-btn">
              Get in Touch <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
