import React from 'react';
import './MockupA.css';

const MockupA = () => {
  return (
    <div className="ma-page">

      {/* ── NAV ── */}
      <nav className="ma-nav">
        <span className="ma-nav-logo">Reflek Technologies</span>
        <ul className="ma-nav-links">
          <li>Products</li>
          <li>Industries</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="ma-nav-cta">Get a Quote</button>
      </nav>

      {/* ── HERO ── */}
      <section className="ma-hero">
        <div className="ma-hero-left">
          <span className="ma-hero-label">ADVANCED SURFACE TECHNOLOGY</span>
          <h1 className="ma-hero-headline">
            Advanced{' '}
            <span className="ma-accent-word">Films</span>
            {' '}& Coatings.
          </h1>
          <p className="ma-hero-sub">
            Precision-engineered window films, paint protection, and specialty
            coatings. Made in the USA. Trusted across automotive, architectural,
            solar, and electronics industries.
          </p>
          <div className="ma-hero-actions">
            <button className="ma-btn-primary">Explore Products</button>
            <a className="ma-btn-link" href="#about">Learn about Reflek &rarr;</a>
          </div>
        </div>

        <div className="ma-hero-right">
          <div className="ma-hero-img-wrap">
            <img
              src="https://reflektech.com/wp-content/uploads/2022/12/slider-3.jpg"
              alt="Reflek film application"
              className="ma-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="ma-stats">
        <div className="ma-stats-inner">
          {[
            { value: '30+', label: 'Years in Production' },
            { value: '500+', label: 'Product SKUs' },
            { value: '60+', label: 'Countries Served' },
            { value: '100%', label: 'USA Manufactured' },
          ].map((stat, i) => (
            <div className="ma-stat-item" key={i}>
              <span className="ma-stat-value">{stat.value}</span>
              <span className="ma-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="ma-services">
        <div className="ma-section-header">
          <span className="ma-section-tag">WHAT WE MAKE</span>
          <h2 className="ma-section-title">Our Product Lines</h2>
          <p className="ma-section-sub">
            From architectural window film to specialty electronics coatings,
            every product is engineered for performance and durability.
          </p>
        </div>

        <div className="ma-cards">
          {[
            {
              letter: 'W',
              title: 'Window Films',
              desc: 'Solar control, safety, and decorative films for architectural and automotive glass.',
            },
            {
              letter: 'P',
              title: 'Paint Protection',
              desc: 'Urethane-based PPF that shields vehicle surfaces from road debris and UV degradation.',
            },
            {
              letter: 'S',
              title: 'Solar Films',
              desc: 'High-performance films that reduce heat gain while maximizing visible light transmission.',
            },
            {
              letter: 'E',
              title: 'Electronics Coatings',
              desc: 'Precision optical coatings and protective films engineered for electronic display applications.',
            },
          ].map((card, i) => (
            <div className="ma-card" key={i}>
              <div className="ma-card-icon">{card.letter}</div>
              <h3 className="ma-card-title">{card.title}</h3>
              <p className="ma-card-desc">{card.desc}</p>
              <span className="ma-card-link">Learn more &rarr;</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="ma-about" id="about">
        <div className="ma-about-left">
          <span className="ma-section-tag">WHO WE ARE</span>
          <h2 className="ma-about-title">
            Built in the USA.<br />Distributed Worldwide.
          </h2>
          <p className="ma-about-text">
            Reflek Technologies Corporation has been a trusted manufacturer of
            advanced films and coatings for over three decades. Our facility in
            the United States produces every product under strict quality controls,
            ensuring consistent performance from roll to roll.
          </p>
          <p className="ma-about-text">
            We work directly with distributors, installers, and OEM partners across
            more than 60 countries — providing not just product, but technical
            support, custom formulations, and co-branding options tailored to your
            market.
          </p>
          <a className="ma-btn-link" href="#contact">Contact our team &rarr;</a>
        </div>
        <div className="ma-about-right">
          <div className="ma-about-img-wrap">
            <img
              src="https://reflektech.com/wp-content/uploads/2022/12/slider-3.jpg"
              alt="Reflek manufacturing facility"
              className="ma-about-img"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ma-cta">
        <div className="ma-cta-inner">
          <span className="ma-section-tag">GET STARTED</span>
          <h2 className="ma-cta-title">Ready to work with Reflek?</h2>
          <p className="ma-cta-sub">
            Talk to our team about custom formulations, distributor pricing,
            and product samples.
          </p>
          <button className="ma-btn-primary">Request a Sample</button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ma-footer">
        <span className="ma-footer-copy">
          &copy; {new Date().getFullYear()} Reflek Technologies Corporation. All rights reserved.
        </span>
        <ul className="ma-footer-links">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Contact</li>
        </ul>
      </footer>

    </div>
  );
};

export default MockupA;
