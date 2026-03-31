import { FiShield, FiRefreshCw, FiStar, FiLayers, FiTool, FiArrowRight, FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './Services.css'

const features = [
  {
    icon: <FiShield />,
    title: 'Superior Protection',
    desc: 'Guards against rock chips, bug splatter, bird droppings, road tar, sap, and environmental damage — keeping paint factory-fresh.',
  },
  {
    icon: <FiRefreshCw />,
    title: 'Self-Healing Technology',
    desc: 'Engineered TPU layer automatically rebinds and heals minor scratches and swirls with heat, restoring a smooth paint-like finish.',
  },
  {
    icon: <FiStar />,
    title: 'Optical Clarity',
    desc: 'No orange peel texture. The high-gloss top coat provides crystal-clear protection that enhances rather than alters your paint.',
  },
  {
    icon: <FiLayers />,
    title: 'Advanced TPU Construction',
    desc: 'A sophisticated blend of hard and soft co-polymers delivers remarkable elasticity and long-term film integrity across all conditions.',
  },
  {
    icon: <FiTool />,
    title: 'Dry-Apply Technology',
    desc: 'Proprietary dry-apply system enables fast, clean installs with no disassembly required for most panels — reducing shop downtime.',
  },
]

const stats = [
  { number: '99%', label: 'UV Rejection' },
  { number: '12yr', label: 'Max Warranty' },
  { number: '85+', label: 'Color Options' },
  { number: '10mil', label: 'Max Thickness' },
]

export default function PaintProtection() {
  return (
    <>
      <PageHero
        title="Paint Protection"
        subtitle="Advanced polyurethane paint protection films engineered for lasting vehicle defense"
        image="https://reflektech.com/wp-content/uploads/2022/12/slider-3.jpg"
      />

      {/* Intro */}
      <section className="svc-section svc-section--white">
        <div className="svc-container">
          <div className="svc-intro">
            <span className="svc-section-tag">Paint Protection Film</span>
            <h2 className="svc-section-title">Engineered to <span>Protect</span></h2>
            <div className="svc-accent-bar" />
            <p className="svc-desc">
              Reflek Technologies manufactures premium paint protection films built around thermoplastic
              polyurethane (TPU) — a highly flexible and resilient material that sets the standard in PPF.
              From entry-level fleet protection to 12-year optical-grade films, every roll is produced
              at our facility in Chandler, Arizona, and backed by real manufacturer support.
            </p>
          </div>
        </div>
      </section>

      {/* FlexiShield Brand Section */}
      <section className="svc-section svc-section--gray">
        <div className="svc-container">
          <div className="svc-subbrand-block">
            <div>
              <span className="svc-section-tag">Our Premium PPF Brand</span>
              <div className="svc-subbrand-wordmark">FlexiShield</div>
              <span className="svc-subbrand-tagline">Coverage You Can Count On.</span>
              <p className="svc-desc">
                FlexiShield is Reflek's flagship paint protection film brand — available in clear PPF, color PPF,
                windshield film, and window tint. With 85+ gloss, metallic, color-flip, and textured finish
                options and warranties of up to 12 years, FlexiShield gives installers and vehicle owners
                the performance and confidence they need. Made in the USA.
              </p>
              <a
                href="https://www.flexishieldusa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="svc-external-btn"
              >
                Visit FlexiShield <FiExternalLink size={14} />
              </a>
            </div>
            <div className="svc-subbrand-image">
              <img
                src="https://static.wixstatic.com/media/637ea8_9c33c1d89448456c88964c2bf7d70902f000.jpg"
                alt="FlexiShield Color PPF"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="svc-section svc-section--white">
        <div className="svc-container">
          <div className="svc-intro">
            <span className="svc-section-tag">What Sets It Apart</span>
            <h2 className="svc-section-title">Built to <span>Last</span></h2>
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
      <section className="svc-section svc-section--gray">
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
      <section className="svc-section svc-section--white">
        <div className="svc-container">
          <div className="svc-cta-box">
            <span className="svc-section-tag">Get Started</span>
            <h3>Interested in FlexiShield?</h3>
            <p>Contact us to learn more about our paint protection solutions.</p>
            <Link to="/contact-us" className="svc-cta-btn">
              Get in Touch <FiArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
