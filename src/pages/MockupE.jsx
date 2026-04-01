import React from 'react';
import './MockupE.css';

const services = [
  {
    num: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="24" height="24" rx="0" stroke="#7ab929" strokeWidth="1.5" fill="none"/>
        <line x1="2" y1="10" x2="26" y2="10" stroke="#7ab929" strokeWidth="1"/>
        <line x1="14" y1="2" x2="14" y2="26" stroke="#7ab929" strokeWidth="1"/>
      </svg>
    ),
    title: 'Window Films',
    desc: 'High-performance solar, security, and decorative films for architectural and automotive glazing.',
  },
  {
    num: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 24 L14 4 L24 24" stroke="#7ab929" strokeWidth="1.5" fill="none"/>
        <line x1="7" y1="18" x2="21" y2="18" stroke="#7ab929" strokeWidth="1"/>
      </svg>
    ),
    title: 'Paint Protection Film',
    desc: 'Urethane-based PPF with self-healing technology. Protects against rock chips, abrasion, and UV.',
  },
  {
    num: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="10" stroke="#7ab929" strokeWidth="1.5" fill="none"/>
        <circle cx="14" cy="14" r="4" stroke="#7ab929" strokeWidth="1" fill="none"/>
        <line x1="14" y1="4" x2="14" y2="10" stroke="#7ab929" strokeWidth="1"/>
        <line x1="14" y1="18" x2="14" y2="24" stroke="#7ab929" strokeWidth="1"/>
      </svg>
    ),
    title: 'Specialty Coatings',
    desc: 'Anti-reflective, anti-fingerprint, hydrophobic, and EMI-shielding coatings for electronics and optics.',
  },
  {
    num: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="20" height="14" stroke="#7ab929" strokeWidth="1.5" fill="none"/>
        <line x1="4" y1="13" x2="24" y2="13" stroke="#7ab929" strokeWidth="1"/>
        <line x1="11" y1="8" x2="11" y2="22" stroke="#7ab929" strokeWidth="1"/>
      </svg>
    ),
    title: 'Solar Energy Films',
    desc: 'Wavelength-selective films engineered to maximise solar gain control in commercial buildings.',
  },
];

const stats = [
  { value: '30+', label: 'Years in Production' },
  { value: '99%', label: 'UV Rejection Rate' },
  { value: '500+', label: 'Product SKUs' },
];

const MockupE = () => {
  return (
    <div className="me-page">

      {/* ── NAV ── */}
      <nav className="me-nav">
        <span className="me-nav-logo">Reflek Technologies</span>
        <ul className="me-nav-links">
          <li>Products</li>
          <li>Industries</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="me-nav-cta">Get a Quote</button>
      </nav>

      {/* ── HERO ── */}
      <section className="me-hero">
        <div className="me-hero-grid-overlay" aria-hidden="true" />
        <div className="me-hero-inner">
          <div className="me-hero-left">
            <span className="me-hero-label">// REFLEK TECHNOLOGIES</span>
            <h1 className="me-hero-headline">
              Advanced Films<br />
              &amp; Coatings.
            </h1>
            <p className="me-hero-sub">
              Precision-engineered window films, paint protection film, and specialty
              coatings manufactured in Chandler, Arizona. Trusted across automotive,
              architectural, solar, and electronics industries worldwide.
            </p>
            <button className="me-btn-primary">Explore Products</button>
          </div>
          <div className="me-hero-right">
            <div className="me-hero-img-wrap">
              <img
                src="/images/slider-3.jpg"
                alt="Reflek film application"
                className="me-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="me-ticker">
        <div className="me-ticker-track">
          {[1, 2, 3].map((_, i) => (
            <span key={i} className="me-ticker-inner">
              <span className="me-ticker-item">99% UV Rejection</span>
              <span className="me-ticker-dot">·</span>
              <span className="me-ticker-item">Up to 97% IR Rejection</span>
              <span className="me-ticker-dot">·</span>
              <span className="me-ticker-item">Manufactured in Chandler, AZ</span>
              <span className="me-ticker-dot">·</span>
              <span className="me-ticker-item">30+ Years Experience</span>
              <span className="me-ticker-dot">·</span>
              <span className="me-ticker-item">500+ Product SKUs</span>
              <span className="me-ticker-dot">·</span>
              <span className="me-ticker-item">USA Manufactured</span>
              <span className="me-ticker-dot">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="me-services">
        <div className="me-section-header">
          <span className="me-section-label">// PRODUCT LINES</span>
          <h2 className="me-section-title">What We Manufacture</h2>
        </div>
        <div className="me-services-grid">
          {services.map((svc) => (
            <div className="me-service-card" key={svc.num}>
              <span className="me-card-num">{svc.num}</span>
              <div className="me-card-icon">{svc.icon}</div>
              <h3 className="me-card-title">{svc.title}</h3>
              <p className="me-card-desc">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="me-about">
        <div className="me-about-inner">
          <div className="me-about-left">
            <span className="me-section-label">// BY THE NUMBERS</span>
            {stats.map((s, i) => (
              <div className="me-stat-row" key={i}>
                <div className="me-stat-value">{s.value}</div>
                <div className="me-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="me-about-right">
            <span className="me-section-label">// ABOUT REFLEK</span>
            <h2 className="me-about-title">Built on Precision.<br />Driven by Performance.</h2>
            <p className="me-about-body">
              Reflek Technologies Corporation is a vertically integrated manufacturer of
              advanced films and coatings headquartered in Chandler, Arizona. Since our
              founding, we have developed proprietary processes for producing window films,
              paint protection film, anti-reflective coatings, and specialty optical films
              for demanding commercial and industrial applications.
            </p>
            <p className="me-about-body">
              Our ISO-certified manufacturing facility produces over 500 product SKUs,
              distributed across more than 60 countries. Every product is engineered to
              deliver measurable, repeatable performance — backed by rigorous in-house
              testing and three decades of coating expertise.
            </p>
            <div className="me-about-img-wrap">
              <img
                src="/images/slider-3.jpg"
                alt="Reflek manufacturing facility"
                className="me-about-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="me-cta">
        <div className="me-cta-inner">
          <span className="me-section-label">// GET STARTED</span>
          <h2 className="me-cta-title">Ready to Specify Reflek?</h2>
          <p className="me-cta-sub">
            Talk to our technical team about custom film solutions, bulk pricing,
            and OEM partnerships.
          </p>
          <button className="me-btn-primary">Request a Sample</button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="me-footer">
        <span className="me-footer-logo">Reflek Technologies Corporation</span>
        <span className="me-footer-copy">© 2026 · Chandler, AZ · All Rights Reserved</span>
      </footer>

    </div>
  );
};

export default MockupE;
