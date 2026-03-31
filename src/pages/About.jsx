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

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Leading manufacturer of high-performance finishes and coatings"
        image="https://reflektech.com/wp-content/uploads/2022/12/slider-1.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-text">
              <h2 className="section-title">Who We Are</h2>
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
              <img
                src="https://reflektech.com/wp-content/uploads/2022/12/Reflek-Building.png"
                alt="Reflek Technologies Building"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section about-strengths">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Our Strengths</h2>
          <p className="strengths-subtitle">What sets us apart in the industry</p>
          <div className="strengths-grid">
            {strengths.map((s, i) => (
              <div key={i} className="strength-card">
                <div className="strength-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-manufacturing">
            <h2 className="section-title">Manufacturing & Operations</h2>
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
      </section>
    </>
  )
}
