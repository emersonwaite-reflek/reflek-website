import { FiShield, FiRefreshCw, FiStar, FiLayers, FiTool, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './Services.css'

const features = [
  {
    icon: <FiShield />,
    title: 'Superior Protection',
    desc: 'The top-coat guards against bug squirts, bird droppings, road tar, sap, and other outdoor impurities.',
  },
  {
    icon: <FiRefreshCw />,
    title: 'Self-Healing Technology',
    desc: 'FlexiShield features technology allowing it to recover from minor scratches and road damage.',
  },
  {
    icon: <FiStar />,
    title: 'Smooth Finish',
    desc: 'Avoids the "orange peel" texture while providing optimal clarity and protection.',
  },
  {
    icon: <FiLayers />,
    title: 'Advanced Adhesive',
    desc: 'Our formula prevents lifting or peeling issues found in earlier products.',
  },
  {
    icon: <FiTool />,
    title: 'Easy Installation',
    desc: 'The thermoplastic polyurethane material enables quick, straightforward application.',
  },
]

const stats = [
  { number: '99.9%', label: 'UV Protection' },
  { number: '10yr', label: 'Warranty Coverage' },
  { number: '8mil', label: 'Film Thickness' },
]

export default function PaintProtection() {
  return (
    <>
      <PageHero
        title="Paint Protection"
        subtitle="FlexiShield - One of the leading polyurethane paint protection films on the market"
        image="https://reflektech.com/wp-content/uploads/2022/12/slider-3.jpg"
      />

      {/* Intro Section */}
      <section className="svc-section svc-section--white">
        <div className="svc-container">
          <div className="svc-intro">
            <span className="svc-section-label">// Paint Protection Film</span>
            <h2 className="svc-section-title">
              FlexiShield <span>Paint Protection</span> Film
            </h2>
            <div className="svc-accent-bar" />
            <p className="svc-desc">
              Discovering scratches on a new vehicle is distressing for any owner. That's why we developed
              FlexiShield Paint Protection Film, one of the leading polyurethane paint protection films
              on the market. Nearly invisible, it provides lasting defense against road hazards and maintains
              vehicle appearance, giving you the feeling of driving a brand-new car every day for years to come.
            </p>
          </div>

          <div className="svc-features-grid">
            {features.map((f, i) => (
              <div key={i} className="svc-feature-card">
                <span className="svc-feature-card__number">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="svc-feature-card__icon">{f.icon}</div>
                <span className="svc-feature-card__label">// Feature {String(i + 1).padStart(2, '0')}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="svc-section svc-section--dark">
        <div className="svc-container">
          <div className="svc-intro">
            <span className="svc-section-label">// Performance Metrics</span>
            <h2 className="svc-section-title">
              Built for <span>Maximum</span> Defense
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
            <h3>Interested in FlexiShield?</h3>
            <p>Contact us to learn more about our paint protection solutions.</p>
            <Link to="/contact-us" className="svc-cta-btn">
              Get in Touch <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
