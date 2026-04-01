import './MockupC.css'

const productImages = [
  {
    src: '/images/slider-1.jpg',
    alt: 'Reflek Paint Protection Film',
  },
  {
    src: '/images/slider-3.jpg',
    alt: 'Reflek Solar Control Films',
  },
  {
    src: '/images/slider-4.jpg',
    alt: 'Reflek Precision Coatings',
  },
]

const partnerLogos = [
  'FlexiShield',
  'Luxo Films',
  'SolarGuard',
  'ClearVision',
  'AutoPro Films',
  'GlazeTech',
]

const services = [
  {
    iconBg: '#7ab929',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Paint Protection Film',
    desc: 'Self-healing, optically clear TPU films that guard vehicle surfaces from rock chips, scratches, and environmental damage — preserving finish for years.',
  },
  {
    iconBg: '#2bb5b2',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    desc: 'DC magnetron sputtered window films that reject solar heat, reduce glare, and block UV — engineered for architectural and automotive applications.',
  },
  {
    iconBg: '#7ab929',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    title: 'Custom Coatings',
    desc: 'Specialized precision coatings tailored for demanding industrial environments — from anti-reflective and hydrophobic to conductive functional films.',
  },
  {
    iconBg: '#2bb5b2',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Electronics Films',
    desc: 'Ultra-thin functional films for flexible circuits, photovoltaic cells, and advanced display applications — manufactured to exacting tolerances.',
  },
]

export default function MockupC() {
  return (
    <div className="mc-page">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="mc-hero">
        <div className="mc-hero__inner">
          <span className="mc-hero__badge">Manufactured in the USA</span>

          <h1 className="mc-hero__heading">
            Advanced Films &amp; Coatings<br />
            <span className="mc-hero__heading-accent">for a Better World</span>
          </h1>

          <p className="mc-hero__sub">
            Reflek Technologies Corporation manufactures high-performance protective
            films and precision coatings for the construction and transportation
            industries — trusted by installers in over 50 countries.
          </p>

          <div className="mc-hero__actions">
            <a href="#services" className="mc-btn mc-btn--primary">Explore Products</a>
            <a href="#about" className="mc-btn mc-btn--outline">About Reflek</a>
          </div>
        </div>

        {/* Product image strip */}
        <div className="mc-hero__strip">
          {productImages.map((img, i) => (
            <div key={i} className="mc-hero__strip-img">
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────── */}
      <section className="mc-trust">
        <div className="mc-trust__inner">
          <p className="mc-trust__label">Trusted by installers worldwide</p>
          <div className="mc-trust__logos">
            {partnerLogos.map((name, i) => (
              <div key={i} className="mc-trust__logo-box">
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────── */}
      <section className="mc-services" id="services">
        <div className="mc-services__inner">
          <p className="mc-eyebrow">What We Do</p>
          <h2 className="mc-section-title">Our Core Solutions</h2>

          <div className="mc-services__grid">
            {services.map((s, i) => (
              <div key={i} className="mc-service-card">
                <div className="mc-service-card__icon" style={{ background: s.iconBg }}>
                  {s.icon}
                </div>
                <h3 className="mc-service-card__title">{s.title}</h3>
                <p className="mc-service-card__desc">{s.desc}</p>
                <a href="#" className="mc-service-card__link">Learn more &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────── */}
      <section className="mc-about" id="about">
        <div className="mc-about__inner">
          <div className="mc-about__image-col">
            <img
              src="/images/slider-2.jpg"
              alt="Reflek Technologies manufacturing facility"
              className="mc-about__img"
            />
          </div>

          <div className="mc-about__content-col">
            <p className="mc-eyebrow">About Reflek</p>
            <h2 className="mc-section-title">
              Engineering the Future of Protective Films
            </h2>
            <p className="mc-about__text">
              Reflek Technologies Corporation is a major manufacturer and distributor
              of high-performance finishes and coatings for the construction and
              transportation industries. Our product portfolio is centered on integrated
              climatic technologies — including solar control window films, DC vacuum
              sputtering, specialized precision coatings, photovoltaics, and flexible
              circuit applications. We combine decades of materials science expertise
              with rigorous quality standards to deliver products that perform under
              the most demanding real-world conditions.
            </p>

            <div className="mc-about__stats">
              <div className="mc-about__stat">
                <span className="mc-about__stat-num">50+</span>
                <span className="mc-about__stat-label">Countries Served</span>
              </div>
              <div className="mc-about__stat">
                <span className="mc-about__stat-num">200+</span>
                <span className="mc-about__stat-label">Products</span>
              </div>
              <div className="mc-about__stat">
                <span className="mc-about__stat-num">15+</span>
                <span className="mc-about__stat-label">Years of Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────── */}
      <section className="mc-cta">
        <div className="mc-cta__inner">
          <p className="mc-cta__overline">Ready to work together?</p>
          <h2 className="mc-cta__heading">
            Partner with a World-Class Film Manufacturer
          </h2>
          <p className="mc-cta__sub">
            Whether you're a distributor, installer, or OEM partner — our team is
            ready to develop the right film or coating solution for your application.
          </p>
          <a href="#" className="mc-btn mc-btn--white-outline">Contact Our Team &rarr;</a>
        </div>
      </section>

    </div>
  )
}
