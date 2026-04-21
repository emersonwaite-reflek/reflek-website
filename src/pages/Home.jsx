import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiShield, FiSun, FiDroplet, FiCpu, FiArrowRight } from 'react-icons/fi'
import './Home.css'

const slides = [
  '/images/slider-1.jpg',
  '/images/slider-2.jpg',
  '/images/slider-3.jpg',
  '/images/slider-4.jpg',
  '/images/slider-6.jpg',
]

const services = [
  {
    icon: <FiShield />,
    title: 'Paint Protection',
    desc: 'Military-grade PPF films that guard against scratches, chips, and UV damage.',
    path: '/paint-protection',
  },
  {
    icon: <FiSun />,
    title: 'Solar Films',
    desc: 'High-performance window films that reduce heat, glare, and energy costs.',
    path: '/solar-films',
  },
  {
    icon: <FiDroplet />,
    title: 'Custom Coatings',
    desc: 'Precision-engineered specialty coatings for industrial and commercial use.',
    path: '/custom-coatings',
  },
  {
    icon: <FiCpu />,
    title: 'Electronics',
    desc: 'Flexible circuit and photovoltaic film solutions for modern electronics.',
    path: '/electronics',
  },
]

const news = [
  {
    date: 'December 6, 2024',
    title: 'Global Expansion & New Innovations: Exciting News from Reflek Technologies',
    excerpt:
      'Reflek Technologies Corporation, a global leader in advanced film manufacturing, is proud to share key updates about its ongoing growth and innovation across 60+ countries.',
  },
  {
    date: 'February 1, 2024',
    title: 'FlexiShield Debuts Next-Gen PPF at FESPA Middle East 2024 in Dubai',
    excerpt:
      'Our FlexiShield team showcased breakthrough self-healing paint protection film at FESPA Middle East 2024, held at the Dubai Exhibition Centre, Expo City.',
  },
  {
    date: 'November 24, 2023',
    title: 'Luxo Films & Reflek Make a Splash at SEMA Show 2023',
    excerpt:
      "We connected with passionate car enthusiasts and industry professionals at SEMA 2023, unveiling Luxo's new ceramic solar series and FlexiShield's matte PPF lineup.",
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(s => (s + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="home-page">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="home-hero">
        <div className="home-hero__left">
          <span className="home-mono-tag">Advanced Surface Technology</span>

          <h1 className="home-hero__headline">
            Advanced Films &amp; Coatings for a Better{' '}
            <span className="home-accent">
              World
              <span className="home-accent__underline" />
            </span>
          </h1>

          <p className="home-hero__sub">
            High-performance protective films and precision coatings engineered
            for the construction and transportation industries — made in the USA,
            distributed worldwide.
          </p>

          <div className="home-hero__actions">
            <Link to="/about-us" className="home-btn-primary">
              Discover More
            </Link>
            <Link to="/products" className="home-btn-text">
              View Products <FiArrowRight />
            </Link>
          </div>
        </div>

        <div className="home-hero__right">
          <div className="home-slider">
            <div className="home-slider__frame">
              {slides.map((src, i) => (
                <div
                  key={i}
                  className={`home-slider__slide${i === currentSlide ? ' home-slider__slide--active' : ''}`}
                >
                  <img src={src} alt={`Reflek slide ${i + 1}`} />
                </div>
              ))}
            </div>

            <div className="home-slider__dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`home-slider__dot${i === currentSlide ? ' home-slider__dot--active' : ''}`}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────── */}
      <section className="home-stats">
        <div className="home-container">
          <div className="home-stats__grid">
            {[
              { num: '3', label: 'Global Manufacturing Sites' },
              { num: '6', label: 'Global Distribution Centers' },
              { num: '30+', label: 'Years' },
              { num: '95+', label: 'Countries' },
            ].map((s, i) => (
              <div key={i} className="home-stats__item">
                <div className="home-stats__num">{s.num}</div>
                <div className="home-stats__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section className="home-services">
        <div className="home-container">
          <span className="home-mono-tag">What We Make</span>
          <h2 className="home-section-title">Our Core Solutions</h2>

          <div className="home-services__grid">
            {services.map((s, i) => (
              <Link to={s.path} key={i} className="home-service-card">
                <div className="home-service-card__icon">
                  {s.icon}
                </div>
                <h3 className="home-service-card__title">{s.title}</h3>
                <p className="home-service-card__desc">{s.desc}</p>
                <span className="home-service-card__link">
                  Learn more <FiArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ────────────────────────────── */}
      <section className="home-about">
        <div className="home-container">
          <div className="home-about__inner">
            <div className="home-about__left">
              <span className="home-mono-tag">About Reflek</span>
              <h2 className="home-section-title home-section-title--sm">
                Built in the USA.<br />Distributed Worldwide.
              </h2>
              <p className="home-about__text">
                Reflek Technologies Corporation is a major manufacturer and distributor
                of high-performance finishes and coatings for the construction and
                transportation industries. Our product portfolio is centered on integrated
                climatic technologies including solar control window films, DC vacuum
                sputtering, specialized precision coatings, and flexible circuit applications.
              </p>
              <p className="home-about__text">
                With over three decades of expertise, our products protect and enhance
                surfaces across residential, commercial, and automotive markets. We operate
                with a commitment to quality, innovation, and environmental responsibility.
              </p>

              <div className="home-about__inline-stats">
                <div className="home-about__inline-stat">
                  <span className="home-about__inline-num">30yr</span>
                  <span className="home-about__inline-label">Industry Leader</span>
                </div>
                <div className="home-about__inline-stat">
                  <span className="home-about__inline-num">60+</span>
                  <span className="home-about__inline-label">Countries Served</span>
                </div>
                <div className="home-about__inline-stat">
                  <span className="home-about__inline-num">USA</span>
                  <span className="home-about__inline-label">Manufactured</span>
                </div>
              </div>

              <Link to="/about-us" className="home-btn-primary" style={{ marginTop: '32px' }}>
                Learn More
              </Link>
            </div>

            <div className="home-about__right">
              <div className="home-about__image-wrap">
                <img
                  src="/images/Reflek-768x431.png"
                  alt="Reflek Technologies headquarters in Chandler, Arizona"
                />
                <div className="home-about__image-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUB-BRANDS ───────────────────────────────── */}
      <section className="home-brands">
        <div className="home-container">
          <span className="home-mono-tag">Our Brands</span>
          <h2 className="home-section-title">Premium Sub-Brands</h2>

          <div className="home-brands__grid">
            <div className="home-brand-card">
              <div className="home-brand-card__header">
                <h3 className="home-brand-card__name">
                  <em>FlexiShield</em>
                </h3>
                <span className="home-brand-card__tag">Paint Protection Film</span>
              </div>
              <p className="home-brand-card__desc">
                FlexiShield is Reflek's premium paint protection film brand, engineered
                with self-healing technology and optical clarity. Designed for automotive
                enthusiasts and fleet operators who demand the highest standard of surface
                protection against rock chips, scratches, and environmental contaminants.
              </p>
              <Link to="/paint-protection" className="home-brand-card__link">
                Visit FlexiShield <FiArrowRight />
              </Link>
            </div>

            <div className="home-brand-card">
              <div className="home-brand-card__header">
                <h3 className="home-brand-card__name">
                  <em>Luxo Films</em>
                </h3>
                <span className="home-brand-card__tag">Solar Window Films</span>
              </div>
              <p className="home-brand-card__desc">
                Luxo Films delivers high-performance solar control and decorative window
                films for residential, commercial, and automotive applications. With superior
                heat rejection, UV blocking, and glare reduction, Luxo products create
                comfortable, energy-efficient environments without compromising natural light.
              </p>
              <Link to="/solar-films" className="home-brand-card__link">
                Visit Luxo Films <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ASSOCIATIONS ─────────────────────────────── */}
      <section className="home-assoc">
        <div className="home-container">
          <span className="home-mono-tag">Industry Memberships &amp; Partners</span>
          <div className="home-assoc__logos">
            {[
              { src: '/images/3.jpg', alt: 'SIMA — Specialty Films Association' },
              { src: '/images/5.jpg', alt: 'ASID — American Society of Interior Designers' },
              { src: '/images/6.jpg', alt: 'NGA — National Glass Association' },
              { src: '/images/1.jpg', alt: 'Luxo Window Films' },
              { src: '/images/2-1.jpg', alt: 'FlexiShield' },
            ].map((logo, i) => (
              <div key={i} className="home-assoc__logo">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWS ─────────────────────────────────────── */}
      <section className="home-news">
        <div className="home-container">
          <div className="home-news__header">
            <div>
              <span className="home-mono-tag">Latest News</span>
              <h2 className="home-section-title home-section-title--no-mb">From the Lab</h2>
            </div>
            <Link to="/news" className="home-btn-text">
              View All News <FiArrowRight />
            </Link>
          </div>

          <div className="home-news__grid">
            {news.map((item, i) => (
              <article key={i} className="home-news-card">
                <span className="home-news-card__date">{item.date}</span>
                <h3 className="home-news-card__title">{item.title}</h3>
                <p className="home-news-card__excerpt">{item.excerpt}</p>
                <Link to="/news" className="home-news-card__link">
                  Read more <FiArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="home-cta">
        <div className="home-container home-cta__inner">
          <h2 className="home-cta__headline">
            Ready to Protect What Matters?
          </h2>
          <p className="home-cta__sub">
            Talk to our team about custom film and coating solutions tailored
            to your industry — from automotive to architecture.
          </p>
          <Link to="/contact" className="home-btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  )
}
