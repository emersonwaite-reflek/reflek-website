import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiShield, FiSun, FiDroplet, FiCpu, FiArrowRight } from 'react-icons/fi'
import './Home.css'

const slides = [
  'https://reflektech.com/wp-content/uploads/2022/12/slider-1.jpg',
  'https://reflektech.com/wp-content/uploads/2022/12/slider-2.jpg',
  'https://reflektech.com/wp-content/uploads/2022/12/slider-3.jpg',
  'https://reflektech.com/wp-content/uploads/2022/12/slider-4.jpg',
  'https://reflektech.com/wp-content/uploads/2022/12/slider-6.jpg',
]

const services = [
  { icon: <FiShield />, title: 'Paint Protection', path: '/paint-protection', color: '#7ab929' },
  { icon: <FiSun />, title: 'Solar Films', path: '/solar-films', color: '#2bb5b2' },
  { icon: <FiDroplet />, title: 'Coatings', path: '/custom-coatings', color: '#666' },
  { icon: <FiCpu />, title: 'Electronics', path: '/electronics', color: '#4a9e3f' },
]

const news = [
  {
    title: 'Global Expansion & New Innovations: Exciting News from Reflek Technologies',
    date: 'December 6, 2024',
    excerpt: 'Reflek Technologies Corporation, a global leader in advanced film manufacturing, is proud to share key updates about its ongoing growth and innovation. With major expansions...',
  },
  {
    title: 'Reflek Technology Excites at FESPA Middle East 2024 in Dubai',
    date: 'February 1, 2024',
    excerpt: 'We were thrilled to showcase at FESPA Middle East 2024, held from January 29th to 31st at the Dubai Exhibition Centre, Expo City, Dubai, UAE.',
  },
  {
    title: 'Reflek Technology Makes a Splash at SEMA 2023',
    date: 'November 24, 2023',
    excerpt: "We're thrilled to have connected with so many passionate car enthusiasts and industry professionals at the SEMA Show 2023.",
  },
]

const partners = [
  { src: 'https://reflektech.com/wp-content/uploads/2022/12/1.jpg', alt: 'Luxo Window Films' },
  { src: 'https://reflektech.com/wp-content/uploads/2022/12/2-1.jpg', alt: 'FlexShield' },
  { src: 'https://reflektech.com/wp-content/uploads/2022/12/3.jpg', alt: 'Partner 3' },
  { src: 'https://reflektech.com/wp-content/uploads/2022/12/4.jpg', alt: 'Partner 4' },
  { src: 'https://reflektech.com/wp-content/uploads/2022/12/5.jpg', alt: 'ASID' },
  { src: 'https://reflektech.com/wp-content/uploads/2022/12/6.jpg', alt: 'NGA' },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(s => (s + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="m4-page">
      {/* Hero */}
      <section className="m4-hero">
        <div className="m4-hero__slider">
          {slides.map((src, i) => (
            <div key={i} className={`m4-hero__slide ${i === currentSlide ? 'm4-hero__slide--active' : ''}`}>
              <img src={src} alt={`Reflek slide ${i + 1}`} />
            </div>
          ))}
        </div>

        <div className="m4-hero__geo-overlay">
          <div className="m4-hero__geo-shape m4-hero__geo-shape--1" />
          <div className="m4-hero__geo-shape m4-hero__geo-shape--2" />
          <div className="m4-hero__geo-shape m4-hero__geo-shape--3" />
          <div className="m4-hero__geo-shape m4-hero__geo-shape--4" />
          <div className="m4-hero__geo-shape m4-hero__geo-shape--5" />
        </div>

        <div className="m4-hero__content">
          <span className="m4-hero__tag">Reflek Technologies</span>
          <h1 className="m4-hero__headline">
            Advanced Films &{' '}
            <span className="m4-hero__headline-accent">Coatings</span>
            <br />
            for a Better World
          </h1>
          <p className="m4-hero__sub">
            High-performance protective films and precision coatings engineered
            for the construction and transportation industries.
          </p>
          <Link to="/about-us" className="m4-hero__cta">
            Discover More <FiArrowRight />
          </Link>
        </div>

        <div className="m4-hero__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`m4-hero__dot ${i === currentSlide ? 'm4-hero__dot--active' : ''}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="m4-hero__counter">
          <span className="m4-hero__counter-current">
            {String(currentSlide + 1).padStart(2, '0')}
          </span>{' '}
          / {String(slides.length).padStart(2, '0')}
        </div>
      </section>

      {/* Services */}
      <section className="m4-services">
        <div className="m4-services__inner">
          <p className="m4-section-label">// What We Do</p>
          <h2 className="m4-section-title">
            Our Core <span>Solutions</span>
          </h2>
          <div className="m4-services__grid">
            {services.map((s, i) => (
              <Link to={s.path} key={i} className="m4-service-card" style={{ '--card-color': s.color }}>
                <span className="m4-service-card__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="m4-service-card__icon" style={{ background: s.color }}>
                  {s.icon}
                </div>
                <h3 className="m4-service-card__title">{s.title}</h3>
                <span className="m4-service-card__link">
                  Learn More <FiArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="m4-about">
        <div className="m4-about__inner">
          <div className="m4-about__left">
            <p className="m4-section-label">// About Reflek</p>
            <h2 className="m4-section-title">
              Engineering the <span>Future</span> of Protective Films
            </h2>
            <p className="m4-about__text">
              Reflek Technologies Corporation is a major manufacturer and distributor of high-performance
              finishes and coatings for the construction and transportation industries. Our product portfolio
              is centered on integrated climatic technologies such as solar control window films, DC vacuum
              sputtering and specialized precision coatings, photovoltaics and flexible circuit applications.
            </p>
            <div className="m4-about__stats">
              <div>
                <div className="m4-about__stat-num">50+</div>
                <div className="m4-about__stat-label">Countries</div>
              </div>
              <div>
                <div className="m4-about__stat-num">200+</div>
                <div className="m4-about__stat-label">Products</div>
              </div>
              <div>
                <div className="m4-about__stat-num">15+</div>
                <div className="m4-about__stat-label">Years</div>
              </div>
            </div>
            <Link to="/about-us" className="m4-hero__cta" style={{ marginTop: 40 }}>
              Learn More <FiArrowRight />
            </Link>
          </div>
          <div className="m4-about__right">
            <div className="m4-about__geo-accent" />
            <div className="m4-about__image-wrapper">
              <img
                src="https://reflektech.com/wp-content/uploads/2022/12/slider-2.jpg"
                alt="Reflek Technologies Building"
              />
            </div>
            <div className="m4-about__image-border" />
          </div>
        </div>
      </section>

      {/* News */}
      <section className="m4-news">
        <div className="m4-news__inner">
          <div className="m4-news__header">
            <div className="m4-news__header-left">
              <p className="m4-section-label">// Latest Updates</p>
              <h2 className="m4-section-title">
                News & <span>Insights</span>
              </h2>
            </div>
            <Link to="/news" className="m4-news__view-all">
              View All News <FiArrowRight />
            </Link>
          </div>
          <div className="m4-news__grid">
            {news.map((item, i) => (
              <article key={i} className="m4-news-card">
                <span className="m4-news-card__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="m4-news-card__body">
                  <p className="m4-news-card__date">{item.date}</p>
                  <h3 className="m4-news-card__title">{item.title}</h3>
                  <p className="m4-news-card__excerpt">{item.excerpt}</p>
                </div>
                <div className="m4-news-card__bar" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="m4-partners">
        <div className="m4-partners__inner">
          <p className="m4-section-label">// Trusted Partners</p>
          <div className="m4-partners__grid">
            {partners.map((p, i) => (
              <div key={i} className="m4-partner-logo">
                <img src={p.src} alt={p.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
