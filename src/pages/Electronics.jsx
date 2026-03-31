import { FiSun, FiZap, FiCpu, FiEye, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './Services.css'

const features = [
  {
    icon: <FiSun />,
    title: 'Photovoltaics',
    desc: 'Thin-film coatings and interlayers for photovoltaic modules — optimizing light transmission, anti-reflection performance, and long-term durability under outdoor conditions.',
  },
  {
    icon: <FiCpu />,
    title: 'Flexible Circuit Applications',
    desc: 'Precision-coated substrates and functional layers for flexible printed circuits, enabling bend-tolerant electronics across wearable, medical, and consumer product categories.',
  },
  {
    icon: <FiZap />,
    title: 'EMI Shielding',
    desc: 'Conductive thin-film coatings that provide electromagnetic interference shielding for sensitive electronics — balancing attenuation performance with optical and structural requirements.',
  },
  {
    icon: <FiEye />,
    title: 'Optical Coatings',
    desc: 'Anti-reflective, hard-coat, and spectrally selective optical coatings for lenses, displays, and sensor windows — engineered for specific transmission and reflectance profiles.',
  },
]

const stats = [
  { number: '100%', label: 'Quality Assurance' },
  { number: '24/7', label: 'Production Capacity' },
  { number: '50+', label: 'OEM Partners' },
  { number: '20+', label: 'Years Experience' },
]

export default function Electronics() {
  return (
    <>
      <PageHero
        title="Electronics"
        subtitle="Precision components for advanced electronics and demanding industrial applications"
        image="https://reflektech.com/wp-content/uploads/2022/12/slider-6.jpg"
      />

      {/* Intro */}
      <section className="svc-section svc-section--white">
        <div className="svc-container">
          <div className="svc-intro">
            <span className="svc-section-tag">Electronics Division</span>
            <h2 className="svc-section-title">
              Precision Films for <span>Electronics</span>
            </h2>
            <div className="svc-accent-bar" />
            <p className="svc-desc">
              Reflek is a trusted partner for designers and original equipment manufacturers, delivering
              high-quality, reliable products with consistent, timely delivery. We offer an extensive
              product portfolio supported by broad manufacturing capabilities and cutting-edge technological
              processes for precision components, advanced electronics, and other highly demanding industrial
              applications.
            </p>
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="svc-section svc-section--gray">
        <div className="svc-container">
          <div className="svc-intro">
            <span className="svc-section-tag">Application Areas</span>
            <h2 className="svc-section-title">Where Our <span>Technology</span> Works</h2>
            <div className="svc-accent-bar" />
          </div>
          <div className="svc-feature-grid">
            {features.map((f, i) => (
              <div key={i} className="svc-feature-card">
                <div className="svc-feature-card__icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="svc-section svc-section--white">
        <div className="svc-container">
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
          <div className="svc-cta-box">
            <span className="svc-section-tag">Partner With Us</span>
            <h3>Ready to work with us?</h3>
            <p>Reliable, high-quality precision components with consistent delivery for OEM partners worldwide.</p>
            <Link to="/contact-us" className="svc-cta-btn">
              Get in Touch <FiArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
