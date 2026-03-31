import { FiCheck, FiAward, FiSettings, FiUsers, FiGlobe, FiLayers } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import './About.css'

const strengths = [
  { icon: <FiAward />, title: 'Strong R&D Team', desc: 'Continuous innovation through dedicated research and development.' },
  { icon: <FiSettings />, title: 'State-of-the-Art Manufacturing', desc: 'Advanced production facilities with exclusive processes.' },
  { icon: <FiGlobe />, title: 'Global Distribution', desc: 'Well-established distribution network reaching customers worldwide.' },
  { icon: <FiLayers />, title: 'Flexible Structure', desc: 'Agile corporate structure enabling rapid response to market needs.' },
  { icon: <FiUsers />, title: '30+ Years Experience', desc: 'Design and engineering team with over 30 years of combined expertise.' },
  { icon: <FiCheck />, title: 'Quality Assurance', desc: 'Rigorous testing for solar control performance, clarity, and durability.' },
]

const stats = [
  { value: '30+', label: 'Years Experience' },
  { value: '500+', label: 'Products Delivered' },
  { value: '50+', label: 'Countries Served' },
  { value: '100%', label: 'Quality Tested' },
]

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Leading manufacturer of high-performance finishes and coatings"
        image="https://reflektech.com/wp-content/uploads/2022/12/slider-3.jpg"
      />

      {/* Who We Are - White background */}
      <section className="about-section about-section--white">
        <div className="container">
          <div className="about-intro">
            <div className="about-text">
              <span className="about-label">// About Reflek</span>
              <h2 className="about-title">Who We <span>Are</span></h2>
              <p>
                Reflek Technologies Corporation is a major manufacturer and distributor of high-performance
                finishes and coatings for the construction and transportation industries. Our product portfolio
                is centered on integrated climatic technologies such as solar control window films, DC vacuum
                sputtering and specialized precision coatings, photovoltaics and flexible circuit applications.
              </p>
              <p>
                We maintain the highest quality standards in the industry while delivering personalized
                customer service and support. Our design and engineering team brings over 30 years of
                combined experience in creating practical solutions.
              </p>
            </div>
            <div className="about-image-wrapper">
              <div className="about-image-frame">
                <img
                  src="https://reflektech.com/wp-content/uploads/2022/12/Reflek-Building.png"
                  alt="Reflek Technologies Building"
                />
                {/* Geometric corner accents */}
                <div className="about-image-corner about-image-corner--tl" />
                <div className="about-image-corner about-image-corner--br" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Dark angled section */}
      <section className="about-section about-section--dark">
        <div className="container">
          <div className="about-stats">
            {stats.map((s, i) => (
              <div key={i} className="about-stat">
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-label">// {s.label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Geometric decorations */}
        <div className="about-dark-geo about-dark-geo--1" />
        <div className="about-dark-geo about-dark-geo--2" />
      </section>

      {/* Our Strengths - Light gray background */}
      <section className="about-section about-section--light">
        <div className="container">
          <div className="about-section-header">
            <span className="about-label">// Our Strengths</span>
            <h2 className="about-title">What Sets Us <span>Apart</span></h2>
            <p className="about-section-subtitle">Industry-leading capabilities that drive our success</p>
          </div>
          <div className="strengths-grid">
            {strengths.map((s, i) => (
              <div key={i} className="strength-card">
                <div className="strength-icon-hex">
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing - White background */}
      <section className="about-section about-section--white">
        <div className="container">
          <div className="about-manufacturing">
            <span className="about-label">// Operations</span>
            <h2 className="about-title">Manufacturing & <span>Operations</span></h2>
            <div className="about-manufacturing-content">
              <div className="about-manufacturing-bar" />
              <div className="about-manufacturing-text">
                <p>
                  Production occurs at our state-of-the-art production facility located in Chandler, Arizona.
                  All products undergo rigorous quality control testing for solar control performance, clarity, and durability.
                </p>
                <p>
                  We serve diverse markets including architectural, automotive, marine, safety and security, and
                  paint protection applications. We provide professional services including industrial sputtering,
                  coating, adhesives, and laminating.
                </p>
                <p>
                  As a full-service provider, we offer integral design, manufacturing, and installation services
                  as a complete package from project inception through completion.
                </p>
              </div>
            </div>
            <a href="/contact" className="about-cta">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
