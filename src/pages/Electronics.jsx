import { FiCpu, FiZap, FiCheckCircle, FiTrendingUp, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './Services.css'

const strengths = [
  {
    icon: <FiTrendingUp />,
    title: 'Cutting-Edge Technology',
    desc: 'Ongoing commitment to the latest technologies and manufacturing processes.',
  },
  {
    icon: <FiCheckCircle />,
    title: 'Quality Control',
    desc: 'Deep understanding of advanced materials and rigorous quality control methodologies.',
  },
  {
    icon: <FiZap />,
    title: 'Innovation Culture',
    desc: 'Highly trained team combined with a culture of openness to innovation.',
  },
]

export default function Electronics() {
  return (
    <>
      <PageHero
        title="Electronics"
        subtitle="Precision components for advanced electronics and demanding industrial applications"
        image="https://reflektech.com/wp-content/uploads/2022/12/slider-6.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <div className="service-intro-icon">
              <FiCpu size={40} />
            </div>
            <h2 className="section-title">Electronics Division</h2>
            <p className="service-desc">
              Reflek is a trusted supporter of designers and original equipment manufacturers, delivering
              high-quality, reliable products with consistent, timely delivery. We offer an extensive
              product portfolio supported by broad manufacturing capabilities and cutting-edge technological
              processes for precision components, advanced electronics, and other highly demanding industrial
              applications.
            </p>
          </div>

          <div className="features-grid features-grid-3">
            {strengths.map((s, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="service-cta">
            <h3>Partner with us for your electronics needs</h3>
            <p>Reliable, high-quality precision components with consistent delivery.</p>
            <Link to="/contact-us" className="btn btn-primary">Get in Touch <FiArrowRight /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
