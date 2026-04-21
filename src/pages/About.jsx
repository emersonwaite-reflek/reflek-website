import { Link } from 'react-router-dom'
import { FiZap, FiCheckCircle, FiUsers } from 'react-icons/fi'
import GlobalMap from '../components/GlobalMap'
import './About.css'

const stats = [
  { value: '3', label: 'Global Manufacturing Sites' },
  { value: '6', label: 'Global Distribution Centers' },
  { value: '30+', label: 'Years in Business' },
  { value: '95+', label: 'Countries Served' },
]

const values = [
  {
    letter: 'I',
    icon: <FiZap />,
    title: 'Innovation',
    desc: 'We continuously invest in R&D and proprietary processes to stay ahead of industry demands, bringing new film technologies to market faster than anyone else.',
  },
  {
    letter: 'Q',
    icon: <FiCheckCircle />,
    title: 'Quality',
    desc: 'Every roll that leaves our Chandler facility passes rigorous solar control, clarity, and durability testing. We never ship product that doesn\'t meet our own standards.',
  },
  {
    letter: 'P',
    icon: <FiUsers />,
    title: 'Partnership',
    desc: 'We treat distributors and installers as long-term partners—providing training, marketing support, and dedicated account management so both sides grow together.',
  },
]

export default function About() {
  return (
    <>
      {/* ── Hero: text above, interactive map below (no overlap) ── */}
      <section className="ab-hero">
        <div className="ab-hero-text">
          <div className="ab-hero-text-inner">
            <span className="ab-hero-eyebrow">About Reflek</span>
            <h1 className="ab-hero-title">
              Global Reach.{' '}
              <span className="ab-hero-title-accent">Factory-Direct Precision.</span>
            </h1>
            <p className="ab-hero-sub">
              A centrally owned network of manufacturing and distribution hubs across
              four continents — serving partners in 95+ countries.
            </p>
            <div className="ab-hero-chips">
              <span className="ab-hero-chip"><strong>3</strong> Factories</span>
              <span className="ab-hero-chip"><strong>6</strong> Distribution Centers</span>
              <span className="ab-hero-chip"><strong>30+</strong> Years</span>
              <span className="ab-hero-chip"><strong>95+</strong> Countries</span>
            </div>
          </div>
        </div>
        <div className="ab-hero-map-wrap">
          <GlobalMap />
        </div>
        <div className="ab-hero-hint" aria-hidden="true">
          <span className="ab-hero-hint-dot" />
          Hover or tap any location — click to contact that office
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="ab-section ab-section--white">
        <div className="ab-container">
          <div className="ab-mission">
            <div className="ab-mission-text">
              <span className="ab-tag">Our Mission</span>
              <h2 className="ab-heading">
                High-Performance Films,<br />Built to Last
              </h2>
              <p className="ab-body">
                Reflek Technologies Corporation is a leading manufacturer and distributor of
                high-performance window films, paint protection films, and precision coatings for
                the construction and transportation industries. Founded in Chandler, Arizona,
                Reflek has been engineering advanced film solutions since the early 1990s.
              </p>
              <p className="ab-body">
                Our product portfolio spans solar control window films, DC vacuum-sputtered
                metallised films, polyurethane paint protection films, and flexible circuit
                substrates. With over 30 years in the business and distribution reaching more
                than 95 countries, we pair deep manufacturing expertise with a genuine commitment
                to every partner in our network.
              </p>
            </div>
            <div className="ab-mission-image">
              <img
                src="/images/reflek-building.jpg"
                alt="Reflek Technologies headquarters in Chandler, Arizona"
              />
              <div className="ab-image-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="ab-section ab-stats-section">
        <div className="ab-container">
          <div className="ab-stats">
            {stats.map((s, i) => (
              <div key={i} className="ab-stat">
                <span className="ab-stat-value">{s.value}</span>
                <span className="ab-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Associations ── */}
      <section className="ab-section ab-assoc-section">
        <div className="ab-container">
          <div className="ab-assoc-header">
            <span className="ab-tag">Industry Memberships &amp; Partners</span>
          </div>
          <div className="ab-assoc-logos">
            {[
              { src: '/images/3.jpg', alt: 'SIMA — Specialty Films Association' },
              { src: '/images/5.jpg', alt: 'ASID — American Society of Interior Designers' },
              { src: '/images/6.jpg', alt: 'NGA — National Glass Association' },
              { src: '/images/1.jpg', alt: 'Luxo Window Films' },
              { src: '/images/2-1.jpg', alt: 'FlexiShield' },
            ].map((logo, i) => (
              <div key={i} className="ab-assoc-logo">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="ab-section ab-section--gray">
        <div className="ab-container">
          <div className="ab-section-header">
            <span className="ab-tag">Our Values</span>
            <h2 className="ab-heading">What Drives Us</h2>
          </div>
          <div className="ab-values-grid">
            {values.map((v, i) => (
              <div key={i} className="ab-value-card">
                <div className="ab-value-icon">{v.letter}</div>
                <h3 className="ab-value-title">{v.title}</h3>
                <p className="ab-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manufacturing ── */}
      <section className="ab-section ab-section--white">
        <div className="ab-container">
          <div className="ab-manufacturing">
            <div className="ab-manufacturing-image">
              <img
                src="/images/slider-6.jpg"
                alt="Reflek production line in Chandler, Arizona"
              />
            </div>
            <div className="ab-manufacturing-text">
              <span className="ab-tag">Manufacturing</span>
              <h2 className="ab-heading">Made in Chandler, Arizona</h2>
              <p className="ab-body">
                Our 60,000 sq ft production campus in Chandler, AZ is where every Reflek,
                FlexiShield, and Luxo-branded product begins its life. The facility houses
                multi-lane slit-and-rewind lines, DC magnetron sputtering chambers, adhesive
                lamination equipment, and a dedicated quality-control lab.
              </p>
              <p className="ab-body">
                We produce over 10 million square feet of finished film annually and
                stock more than 500 SKUs ready for same-week shipment. A second polyurethane
                extrusion line is currently being commissioned, expanding our paint protection
                film capacity to meet growing global demand.
              </p>
              <ul className="ab-mfg-list">
                <li>DC vacuum sputtering &amp; precision coating</li>
                <li>Adhesive lamination &amp; extrusion</li>
                <li>In-house solar performance &amp; clarity testing</li>
                <li>ISO-compliant quality management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ab-section ab-section--gray ab-cta-section">
        <div className="ab-container">
          <div className="ab-cta">
            <h2 className="ab-cta-heading">Ready to Partner?</h2>
            <p className="ab-cta-sub">
              Whether you're a distributor, installer, or OEM—let's build something together.
            </p>
            <Link to="/contact-us" className="ab-btn">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
