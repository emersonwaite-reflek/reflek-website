import { FiLayers, FiCpu, FiShield, FiTarget, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './Services.css'

const capabilities = [
  { icon: <FiLayers />, title: 'Vacuum Sputtering', desc: 'State-of-the-art DC vacuum sputtering for precision thin-film deposition.' },
  { icon: <FiCpu />, title: 'Functional Interlayers', desc: 'Coatings for touch-enabled surfaces, protective films, and electronic components.' },
  { icon: <FiShield />, title: 'Protective Solutions', desc: 'Advanced coatings for industrial, commercial, and residential applications.' },
  { icon: <FiTarget />, title: 'Laminating Technologies', desc: 'Expert laminating processes for multi-layer product construction.' },
]

const stats = [
  { number: '20+', label: 'Years of R&D' },
  { number: '4', label: 'Core Processes' },
  { number: '100%', label: 'Custom Solutions' },
]

export default function CustomCoatings() {
  return (
    <>
      <PageHero
        title="Custom Coatings"
        subtitle="Specialized coating solutions powered by world-class R&D"
        image="https://reflektech.com/wp-content/uploads/2022/12/slider-4.jpg"
      />

      {/* Intro Section */}
      <section className="svc-section svc-section--white">
        <div className="svc-container">
          <div className="svc-intro">
            <span className="svc-section-label">// Custom Coatings</span>
            <h2 className="svc-section-title">
              Specialized <span>Coating</span> Services
            </h2>
            <div className="svc-accent-bar" />
            <p className="svc-desc">
              Reflek has invested years of research and development into creating many of the industry's
              leading manufacturing processes. Our state-of-the-art facilities in Phoenix, Arizona house
              world-class scientists, researchers, and engineers dedicated to delivering advanced, safe,
              and effective coating solutions.
            </p>
            <p className="svc-desc">
              Our coatings and functional interlayers integrate into products including touch-enabled surfaces,
              protective films, electronic components, and security solutions. These specialized coatings
              function across manufacturing stages, often invisibly to end users.
            </p>
          </div>

          <div className="svc-features-grid">
            {capabilities.map((c, i) => (
              <div key={i} className="svc-feature-card">
                <span className="svc-feature-card__number">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="svc-feature-card__icon">{c.icon}</div>
                <span className="svc-feature-card__label">// Capability {String(i + 1).padStart(2, '0')}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="svc-section svc-section--dark">
        <div className="svc-container">
          <div className="svc-intro">
            <span className="svc-section-label">// By the Numbers</span>
            <h2 className="svc-section-title">
              World-Class <span>Manufacturing</span>
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
            <h3>Need a custom coating solution?</h3>
            <p>We deliver customized solutions for industrial, commercial, and residential use.</p>
            <Link to="/contact-us" className="svc-cta-btn">
              Contact Us <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
