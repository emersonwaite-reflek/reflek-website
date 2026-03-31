import { FiCpu, FiZap, FiCheckCircle, FiTrendingUp, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './Services.css'

const strengths = [
  {
    icon: <FiTrendingUp />,
    title: 'Cutting-Edge Technology',
    desc: 'Ongoing commitment to the latest technologies and manufacturing processes.',
  },
  {
    icon: <FiCheckCircle />,
    title: 'Quality Control',
    desc: 'Deep understanding of advanced materials and rigorous quality control methodologies.',
  },
  {
    icon: <FiZap />,
    title: 'Innovation Culture',
    desc: 'Highly trained team combined with a culture of openness to innovation.',
  },
]

const stats = [
  { number: '100%', label: 'Quality Assurance' },
  { number: '24/7', label: 'Production Capacity' },
  { number: '50+', label: 'OEM Partners' },
]

export default function Electronics() {
  return (
    <>
      <PageHero
        title="Electronics"
        subtitle="Precision components for advanced electronics and demanding industrial applications"
        image="https://reflektech.com/wp-content/uploads/2022/12/slider-6.jpg"
      />

      {/* Intro Section */}
      <section className="svc-section svc-section--white">
        <div className="svc-container">
          <div className="svc-intro">
            <div className="svc-intro-icon">
              <FiCpu size={32} />
            </div>
            <span className="svc-section-label">// Electronics Division</span>
            <h2 className="svc-section-title">
              Electronics <span>Division</span>
            </h2>
            <div className="svc-accent-bar" />
            <p className="svc-desc">
              Reflek is a trusted supporter of designers and original equipment manufacturers, delivering
              high-quality, reliable products with consistent, timely delivery. We offer an extensive
              product portfolio supported by broad manufacturing capabilities and cutting-edge technological
              processes for precision components, advanced electronics, and other highly demanding industrial
              applications.
            </p>
          </div>

          <div className="svc-features-grid svc-features-grid--3">
            {strengths.map((s, i) => (
              <div key={i} className="svc-feature-card">
                <span className="svc-feature-card__number">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="svc-feature-card__icon">{s.icon}</div>
                <span className="svc-feature-card__label">// Strength {String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="svc-section svc-section--dark">
        <div className="svc-container">
          <div className="svc-intro">
            <span className="svc-section-label">// Capabilities</span>
            <h2 className="svc-section-title">
              Precision <span>Manufacturing</span> at Scale
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
            <span className="svc-cta__label">// Partner With Us</span>
            <h3>Partner with us for your electronics needs</h3>
            <p>Reliable, high-quality precision components with consistent delivery.</p>
            <Link to="/contact-us" className="svc-cta-btn">
              Get in Touch <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
