import { FiLayers, FiCpu, FiShield, FiTarget, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './Services.css'

const capabilities = [
  {
    icon: <FiLayers />,
    title: 'DC Vacuum Sputtering',
    desc: 'State-of-the-art DC vacuum sputtering chambers enable precision thin-film deposition at the atomic level — delivering repeatable, high-performance coatings for demanding applications.',
  },
  {
    icon: <FiCpu />,
    title: 'Functional Interlayers',
    desc: 'Engineered interlayer coatings for touch-enabled surfaces, protective films, and electronic components. These invisible functional layers integrate seamlessly across manufacturing stages.',
  },
  {
    icon: <FiShield />,
    title: 'Protective Solutions',
    desc: 'Advanced protective coatings for industrial, commercial, and residential applications — tailored to resist abrasion, corrosion, UV degradation, and chemical exposure.',
  },
  {
    icon: <FiTarget />,
    title: 'Laminating Technologies',
    desc: 'Expert laminating processes for multi-layer product construction, bonding dissimilar substrates with precision adhesive systems and controlled-environment application.',
  },
]

const stats = [
  { number: '20+', label: 'Years of R&D' },
  { number: '4', label: 'Core Processes' },
  { number: '100%', label: 'Custom Solutions' },
  { number: 'USA', label: 'Manufactured' },
]

export default function CustomCoatings() {
  return (
    <>
      <PageHero
        title="Custom Coatings"
        subtitle="Specialized coating solutions powered by world-class R&D"
        image="/images/slider-4.jpg"
      />

      {/* Intro */}
      <section className="svc-section svc-section--white">
        <div className="svc-container">
          <div className="svc-intro">
            <span className="svc-section-tag">Custom Coatings</span>
            <h2 className="svc-section-title">
              Specialized <span>Coating</span> Services
            </h2>
            <div className="svc-accent-bar" />
            <p className="svc-desc">
              Reflek has invested years of research and development into creating many of the industry's
              leading manufacturing processes. Our state-of-the-art facilities in Chandler, Arizona house
              world-class scientists, researchers, and engineers dedicated to delivering advanced, safe,
              and effective coating solutions.
            </p>
            <p className="svc-desc">
              Our coatings and functional interlayers integrate into products including touch-enabled surfaces,
              protective films, electronic components, and security solutions — often invisibly to end users,
              but critical to performance.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="svc-section svc-section--gray">
        <div className="svc-container">
          <div className="svc-intro">
            <span className="svc-section-tag">Core Capabilities</span>
            <h2 className="svc-section-title">Four <span>Pillars</span> of Expertise</h2>
            <div className="svc-accent-bar" />
          </div>
          <div className="svc-feature-grid">
            {capabilities.map((c, i) => (
              <div key={i} className="svc-feature-card">
                <div className="svc-feature-card__icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
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
            <span className="svc-section-tag">Get Started</span>
            <h3>Need a custom coating solution?</h3>
            <p>We deliver customized solutions for industrial, commercial, and residential applications.</p>
            <Link to="/contact-us" className="svc-cta-btn">
              Contact Us <FiArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
