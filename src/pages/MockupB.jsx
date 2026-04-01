import './MockupB.css'

const services = [
  {
    num: '01',
    name: 'Paint Protection Films',
    description:
      'Self-healing, optically clear urethane films engineered to guard automotive and architectural surfaces against scratches, chips, and environmental contaminants. Applied by certified installers worldwide.',
  },
  {
    num: '02',
    name: 'Solar Control Films',
    description:
      'DC magnetron sputtered solar films that reject up to 99% of UV radiation and significantly reduce solar heat gain — lowering energy costs while preserving natural light in commercial and residential glazing.',
  },
  {
    num: '03',
    name: 'Custom Precision Coatings',
    description:
      'Formulated-to-spec coatings for industrial and specialty applications. Our in-house chemists develop proprietary solutions for anti-reflective, anti-fog, hydrophobic, and decorative requirements.',
  },
  {
    num: '04',
    name: 'Electronics & Flex Circuits',
    description:
      'Thin-film materials engineered for photovoltaic, flexible circuit, and display applications. Designed to strict dimensional tolerances for integration into next-generation electronic devices.',
  },
]

export default function MockupB() {
  return (
    <div className="mb-page">

      {/* ── HERO ── */}
      <section className="mb-hero">
        <div className="mb-hero__inner">
          <div className="mb-hero__text-col">
            <hr className="mb-rule" />
            <h1 className="mb-hero__display">
              Advanced Films<br />
              &amp; Coatings for a{' '}
              <span className="mb-accent">Better</span><br />
              World.
            </h1>
            <hr className="mb-rule" />
            <div className="mb-hero__footer">
              <p className="mb-hero__sub">
                Reflek Technologies Corporation — manufacturer of high-performance
                protective films, solar coatings, and precision industrial laminates.
                Headquartered in the USA. Distributed in 50+ countries.
              </p>
              <a href="#services" className="mb-cta-btn" aria-label="Explore our services">
                <span className="mb-cta-btn__arrow">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="mb-hero__image-col">
            <img
              src="/images/slider-3.jpg"
              alt="Reflek Technologies manufacturing facility"
              className="mb-hero__img"
            />
          </div>
        </div>
      </section>

      {/* ── MARQUEE TICKER ── */}
      <div className="mb-ticker" aria-hidden="true">
        <div className="mb-ticker__track">
          {[0, 1, 2].map((i) => (
            <span key={i} className="mb-ticker__set">
              <span>Paint Protection</span>
              <span className="mb-ticker__dot">·</span>
              <span>Solar Films</span>
              <span className="mb-ticker__dot">·</span>
              <span>Custom Coatings</span>
              <span className="mb-ticker__dot">·</span>
              <span>Electronics</span>
              <span className="mb-ticker__dot">·</span>
              <span>Manufactured in USA</span>
              <span className="mb-ticker__dot">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="mb-services" id="services">
        <div className="mb-services__inner">
          <div className="mb-services__header">
            <span className="mb-eyebrow">What We Make</span>
            <h2 className="mb-services__title">Our Products</h2>
          </div>
          <div className="mb-services__list">
            {services.map((s, i) => (
              <div key={i} className="mb-service-row">
                <span className="mb-service-row__num">{s.num}</span>
                <h3 className="mb-service-row__name">{s.name}</h3>
                <p className="mb-service-row__desc">{s.description}</p>
                {i < services.length - 1 && <hr className="mb-rule mb-rule--light" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE HIGHLIGHT ── */}
      <section className="mb-feature">
        <div className="mb-feature__overlay" />
        <div className="mb-feature__content">
          <span className="mb-eyebrow mb-eyebrow--white">Since 2006</span>
          <h2 className="mb-feature__headline">
            Engineered for<br />
            the <span className="mb-accent">Extremes.</span>
          </h2>
          <p className="mb-feature__body">
            From the desert heat of the Middle East to the frozen infrastructure of
            Northern Europe — Reflek films and coatings perform where others fail.
            Our DC vacuum sputtering lines and precision lamination equipment run
            24/7, producing rolls that ship to certified distributors across six continents.
          </p>
          <div className="mb-feature__stats">
            <div className="mb-feature__stat">
              <span className="mb-feature__stat-num">50<span className="mb-accent">+</span></span>
              <span className="mb-feature__stat-label">Countries</span>
            </div>
            <div className="mb-feature__stat">
              <span className="mb-feature__stat-num">200<span className="mb-accent">+</span></span>
              <span className="mb-feature__stat-label">Products</span>
            </div>
            <div className="mb-feature__stat">
              <span className="mb-feature__stat-num">15<span className="mb-accent">+</span></span>
              <span className="mb-feature__stat-label">Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="mb-cta-strip">
        <div className="mb-cta-strip__inner">
          <div className="mb-cta-strip__text">
            <span className="mb-eyebrow mb-eyebrow--dim">Get in Touch</span>
            <h2 className="mb-cta-strip__headline">
              Ready to work with<br />
              Reflek Technologies?
            </h2>
          </div>
          <a href="mailto:sales@reflektech.com" className="mb-cta-strip__btn">
            Contact Us &#8594;
          </a>
        </div>
      </section>

    </div>
  )
}
