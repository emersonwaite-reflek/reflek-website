import { Link } from 'react-router-dom'
import { FiZap, FiCheckCircle, FiUsers } from 'react-icons/fi'
import GlobalMap from '../components/GlobalGlobe'
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
            <span className="ab-hero-kicker">
              <span className="ab-hero-kicker-line" aria-hidden="true" />
              About Reflek
              <span className="ab-hero-kicker-line" aria-hidden="true" />
            </span>
            <h1 className="ab-hero-title">
              Global Reach.{' '}
              <span className="ab-hero-title-accent">Factory-Direct Precision.</span>
            </h1>
            <p className="ab-hero-sub">
              A centrally owned network of manufacturing and distribution hubs across
              four continents — serving partners in 95+ countries.
            </p>
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

      {/* ── Certifications ── */}
      <section className="ab-section ab-certs-section">
        <div className="ab-container">
          <div className="ab-section-header">
            <span className="ab-tag">Certificates &amp; Associations</span>
            <h2 className="ab-heading">Independently Verified</h2>
            <p className="ab-body ab-certs-intro">
              Reflek is one of only two US-based coatings manufacturers awarded the
              ISO 9001 quality standard for both manufacturing and distribution — and
              is a certified member of leading trade organizations and testing bodies.
            </p>
          </div>
          <div className="ab-certs-grid">
            {[
              { name: 'ISO 9001',    since: '2020', desc: 'Quality management — manufacturer & distributor', logo: '/images/cert-iso-9001.png' },
              { name: 'SEMA',        since: '2011', desc: 'Specialty Equipment Market Association',          logo: '/images/cert-sema.png' },
              { name: 'SGS',         since: '—',    desc: 'Third-party laboratory testing reports',          logo: '/images/cert-sgs.png' },
              { name: 'Intertek',    since: '—',    desc: 'Third-party laboratory testing reports',          logo: '/images/cert-intertek.png' },
              { name: 'IWFA & EWFA', since: '2025', desc: 'International & European Window Film Associations', logo: '/images/cert-iwfa.png' },
              { name: 'LEED',        since: '2017', desc: 'US Green Building Council',                        logo: '/images/cert-leed.png' },
              { name: 'NGA',         since: '2016', desc: 'National Glass Association',                       logo: '/images/cert-nga.png' },
              { name: 'ASID',        since: '2017', desc: 'American Society of Interior Designers',           logo: '/images/cert-asid.png' },
            ].map((c) => (
              <div key={c.name} className="ab-cert-card">
                <div className="ab-cert-logo-wrap">
                  <img src={c.logo} alt={c.name} className="ab-cert-logo" />
                </div>
                <div className="ab-cert-meta">
                  <span className="ab-cert-since">
                    {c.since !== '—' ? `Since ${c.since}` : 'Testing partner'}
                  </span>
                  <span className="ab-cert-desc">{c.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="ab-certs-footer">
            US Notarized Certificate of Origin available for every shipment. All original
            certificates can be provided on request.
          </p>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="ab-section ab-assoc-section">
        <div className="ab-container">
          <div className="ab-assoc-header">
            <span className="ab-tag">Brand Partners</span>
          </div>
          <div className="ab-assoc-logos">
            <div className="ab-assoc-logo ab-assoc-logo--flexi">
              <img src="/images/flexishield-logo.png" alt="FlexiShield" />
            </div>
            <div className="ab-assoc-logo ab-assoc-logo--luxo">
              <img src="/images/luxo-logo-trans.png" alt="Luxo Window Films" />
            </div>
            <div className="ab-assoc-logo ab-assoc-logo--shell">
              <img src="/images/shell-car-beauty-bk.png" alt="Shell Car Beauty" />
            </div>
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

      {/* ── Manufacturing: three strategically positioned facilities ── */}
      <section className="ab-section ab-section--white">
        <div className="ab-container">
          <div className="ab-section-header ab-mfg-header">
            <span className="ab-tag">Global Manufacturing Capacity</span>
            <h2 className="ab-heading">
              Three Strategically Positioned Facilities
            </h2>
            <p className="ab-body ab-mfg-intro">
              A high-end US production center for premium TPU paint protection and
              advanced window films, and two specialized facilities in China for
              commercial-grade PPF and color PPF — together covering every segment
              from entry-level commercial installations to flagship premium projects.
            </p>
          </div>

          <div className="ab-facilities">
            {[
              {
                city: 'Chandler, Arizona',
                country: 'USA',
                since: '2013',
                size: '60,000 sq ft (5,600 m²)',
                img: '/images/facility-chandler.png',
                alt: 'Reflek coating and lamination facility in Chandler, Arizona',
                desc: 'State-of-the-art coating and lamination facility at 280 N Roosevelt Ave. Home of premium TPU paint protection and advanced window films engineered for maximum clarity, durability, and long-term performance.',
              },
              {
                city: 'Ganzhou',
                country: 'China',
                since: '2025',
                size: '100,000 sq ft (9,300 m²)',
                img: '/images/facility-ganzhou.png',
                alt: 'Reflek manufacturing facility in Ganzhou, China',
                desc: "Specialized manufacturing for commercial-grade PPF and high-quality films. Combines Reflek's US technology with China's production scale — scalable, cost-efficient supply for volume markets.",
              },
              {
                city: 'Suzhou',
                country: 'China',
                since: '2026',
                size: '120,000 sq ft (11,150 m²)',
                img: '/images/facility-suzhou.png',
                alt: 'Reflek Color PPF manufacturing facility in Suzhou, China',
                desc: 'Fully dedicated to Color PPF. With 4 coating lines and 2 extrusion lines, this is the largest Color PPF manufacturing facility in the world — inaugurated in early 2026.',
              },
            ].map((f) => (
              <article key={f.city} className="ab-facility">
                <div className="ab-facility-image">
                  <img src={f.img} alt={f.alt} />
                </div>
                <div className="ab-facility-body">
                  <div className="ab-facility-meta">
                    <span className="ab-facility-country">{f.country}</span>
                    <span className="ab-facility-since">Since {f.since}</span>
                  </div>
                  <h3 className="ab-facility-city">{f.city}</h3>
                  <div className="ab-facility-size">{f.size}</div>
                  <p className="ab-facility-desc">{f.desc}</p>
                </div>
              </article>
            ))}
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
