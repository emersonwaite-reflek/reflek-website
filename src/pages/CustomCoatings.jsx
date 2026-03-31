import { FiLayers, FiCpu, FiShield, FiTarget, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './Services.css'

const capabilities = [
  { icon: <FiLayers />, title: 'Vacuum Sputtering', desc: 'State-of-the-art DC vacuum sputtering for precision thin-film deposition.' },
  { icon: <FiCpu />, title: 'Functional Interlayers', desc: 'Coatings for touch-enabled surfaces, protective films, and electronic components.' },
  { icon: <FiShield />, title: 'Protective Solutions', desc: 'Advanced coatings for industrial, commercial, and residential applications.' },
  { icon: <FiTarget />, title: 'Laminating Technologies', desc: 'Expert laminating processes for multi-layer product construction.' },
]

export default function CustomCoatings() {
  return (
    <>
      <PageHero
        title="Custom Coatings"
        subtitle="Specialized coating solutions powered by world-class R&D"
        image="https://reflektech.com/wp-content/uploads/2022/12/slider-2.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <h2 className="section-title">Specialized Coating Services</h2>
            <p className="service-desc">
              Reflek has invested years of research and development into creating many of the industry's
              leading manufacturing processes. Our state-of-the-art facilities in Phoenix, Arizona house
              world-class scientists, researchers, and engineers dedicated to delivering advanced, safe,
              and effective coating solutions.
            </p>
            <p className="service-desc">
              Our coatings and functional interlayers integrate into products including touch-enabled surfaces,
              protective films, electronic components, and security solutions. These specialized coatings
              function across manufacturing stages, often invisibly to end users.
            </p>
          </div>

          <div className="features-grid">
            {capabilities.map((c, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="service-cta">
            <h3>Need a custom coating solution?</h3>
            <p>We deliver customized solutions for industrial, commercial, and residential use.</p>
            <Link to="/contact-us" className="btn btn-primary">Contact Us <FiArrowRight /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
