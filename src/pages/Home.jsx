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
    <>
      {/* Hero Slider */}
      <section className="hero-slider">
        <div className="hero-content">
          <h1><span>Advanced</span> Film &amp; Coating Solutions</h1>
          <p>High-performance finishes and coatings for the construction and transportation industries.</p>
          <div className="hero-buttons">
            <Link to="/about-us" className="btn btn-primary">Learn More <FiArrowRight /></Link>
            <Link to="/contact-us" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
        <div className="hero-image-area">
          {slides.map((src, i) => (
            <div
              key={i}
              className={`hero-slide ${i === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className="slider-dots">
            {slides.map((_, i) => (
              <button key={i} className={`dot ${i === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Bar */}
      <section className="services-bar">
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <Link to={s.path} key={i} className="service-card" style={{ '--accent': s.color }}>
                <div className="service-icon">{s.icon}</div>
                <span className="service-title">{s.title}</span>
                <FiArrowRight className="service-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About & News */}
      <section className="section home-content">
        <div className="container">
          <div className="home-grid">
            <div className="home-about">
              <h2 className="section-title">About Us</h2>
              <img
                src="https://reflektech.com/wp-content/uploads/2022/12/Reflek-Building.png"
                alt="Reflek Technologies Building"
                className="about-image"
              />
              <p>
                Reflek Technologies Corporation is a major manufacturer and distributor of high-performance
                finishes and coatings for the construction and transportation industries. Our product portfolio
                is centered on integrated climatic technologies such as solar control window films, DC vacuum
                sputtering and specialized precision coatings, photovoltaics and flexible circuit applications.
              </p>
              <Link to="/about-us" className="btn btn-primary">
                Learn More <FiArrowRight />
              </Link>
            </div>

            <div className="home-news">
              <h2 className="section-title">Recent News</h2>
              <div className="news-list">
                {news.map((item, i) => (
                  <article key={i} className="news-card">
                    <h3>{item.title}</h3>
                    <time>{item.date}</time>
                    <p>{item.excerpt}</p>
                    <Link to="/news" className="read-more">Read More &rarr;</Link>
                  </article>
                ))}
              </div>
              <Link to="/news" className="btn btn-primary" style={{ marginTop: 16 }}>
                More News <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners-section">
        <div className="container">
          <div className="partners-strip">
            {partners.map((p, i) => (
              <div key={i} className="partner-logo">
                <img src={p.src} alt={p.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
