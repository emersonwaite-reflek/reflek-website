import './MockupD.css'

const stats = [
  { value: '30+',  label: 'Years in Production' },
  { value: '500+', label: 'Product SKUs' },
  { value: '60+',  label: 'Countries Served' },
  { value: '100%', label: 'USA Manufactured' },
]

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Paint Protection Film',
    desc: 'Self-healing, optically clear TPU film that guards vehicle surfaces from rock chips, scratches, and UV degradation — preserving finish for the long haul.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
    title: 'Solar Control Films',
    desc: 'DC magnetron sputtered window films that reject solar heat, cut glare, and block UV — engineered for architectural and automotive glass.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Custom Coatings',
    desc: 'Precision coatings engineered for demanding industrial use — anti-reflective, hydrophobic, conductive, and beyond. Formulated to your specification.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Electronics Films',
    desc: 'Ultra-thin functional films for flexible circuits, photovoltaic cells, and advanced display applications — manufactured to exacting tolerances.',
  },
]

export default function MockupD() {
  return (
    <div className="md-page">

      {/* ── TOP ACCENT BORDER ── */}
      <div className="md-top-border" aria-hidden="true" />

      {/* ── NAV ── */}
      <nav className="md-nav">
        <a href="/" className="md-nav-logo">
          Reflek<span className="md-nav-logo-accent">.</span>
        </a>
        <ul className="md-nav-links">
          <li><a href="#">Products</a></li>
          <li><a href="#">Industries</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <a href="#contact" className="md-nav-cta">Get a Quote</a>
      </nav>

      {/* ── HERO ── */}
      <section className="md-hero">
        <div className="md-hero-left">
          <span className="md-hero-eyebrow">Manufactured in the USA</span>
          <h1 className="md-hero-headline">
            Advanced Films &amp;&nbsp;<span className="md-accent">Coatings</span>
            <br />Built to Last.
          </h1>
          <p className="md-hero-sub">
            Reflek Technologies Corporation manufactures high-performance
            protective films and precision coatings for the construction,
            transportation, and electronics industries — trusted in 60+ countries.
          </p>
          <div className="md-hero-actions">
            <a href="#services" className="md-btn-primary">Explore Products</a>
            <a href="#about" className="md-btn-outline">About Reflek</a>
          </div>
        </div>

        <div className="md-hero-right">
          <div className="md-hero-img-wrap">
            <img
              src="https://reflektech.com/wp-content/uploads/2022/12/slider-2.jpg"
              alt="Reflek Technologies film manufacturing"
              className="md-hero-img"
            />
            <div className="md-hero-img-overlay" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="md-stats">
        <div className="md-stats-inner">
          {stats.map((s, i) => (
            <div className="md-stat" key={i}>
              <span className="md-stat-value">{s.value}</span>
              <span className="md-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="md-services" id="services">
        <div className="md-services-inner">
          <div className="md-section-header">
            <span className="md-section-tag">What We Make</span>
            <h2 className="md-section-title">Our Core Product Lines</h2>
            <p className="md-section-sub">
              Every product is precision-engineered for performance, durability,
              and consistency — from roll to roll, batch to batch.
            </p>
          </div>

          <div className="md-services-grid">
            {services.map((svc, i) => (
              <div className="md-service-card" key={i}>
                <div className="md-service-icon" aria-hidden="true">
                  {svc.icon}
                </div>
                <h3 className="md-service-title">{svc.title}</h3>
                <p className="md-service-desc">{svc.desc}</p>
                <a href="#" className="md-service-link">Learn more &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="md-about" id="about">
        <div className="md-about-inner">
          <div className="md-about-content">
            <span className="md-section-tag">About Reflek</span>
            <h2 className="md-section-title">
              A USA Manufacturer Behind<br />
              the World's Best Films
            </h2>
            <p className="md-about-body">
              Reflek Technologies Corporation is a major manufacturer and
              distributor of high-performance finishes and coatings for the
              construction and transportation industries. Our product portfolio
              centers on integrated climatic technologies — solar control window
              films, DC vacuum sputtering, specialized precision coatings,
              photovoltaics, and flexible circuit applications.
            </p>
            <p className="md-about-body">
              We combine decades of materials science expertise with rigorous
              quality standards to deliver products that perform under the most
              demanding real-world conditions — from the desert to the Arctic.
            </p>
            <a href="#" className="md-btn-outline md-about-cta">Our Story &rarr;</a>
          </div>

          <div className="md-about-media">
            <div className="md-about-img-wrap">
              <img
                src="https://reflektech.com/wp-content/uploads/2022/12/slider-2.jpg"
                alt="Reflek Technologies USA manufacturing facility"
                className="md-about-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="md-cta" id="contact">
        <div className="md-cta-inner">
          <span className="md-section-tag">Get Started</span>
          <h2 className="md-cta-headline">
            Partner with a World-Class<br />Film Manufacturer
          </h2>
          <p className="md-cta-sub">
            Whether you're a distributor, installer, or OEM partner — our team
            is ready to develop the right film or coating solution for your
            application.
          </p>
          <a href="#" className="md-btn-primary">Contact Our Team</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="md-footer">
        <div className="md-footer-inner">
          <span className="md-footer-logo">
            Reflek<span className="md-nav-logo-accent">.</span>
          </span>
          <span className="md-footer-copy">
            &copy; {new Date().getFullYear()} Reflek Technologies Corporation.
            All rights reserved.
          </span>
          <ul className="md-footer-links">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </footer>

    </div>
  )
}
