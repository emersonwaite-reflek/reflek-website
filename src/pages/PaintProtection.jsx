import { FiShield, FiRefreshCw, FiStar, FiLayers, FiTool } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './Services.css'

const features = [
  {
    icon: <FiShield />,
    title: 'Superior Protection',
    desc: 'The top-coat guards against bug squirts, bird droppings, road tar, sap, and other outdoor impurities.',
  },
  {
    icon: <FiRefreshCw />,
    title: 'Self-Healing Technology',
    desc: 'FlexiShield features technology allowing it to recover from minor scratches and road damage.',
  },
  {
    icon: <FiStar />,
    title: 'Smooth Finish',
    desc: 'Avoids the "orange peel" texture while providing optimal clarity and protection.',
  },
  {
    icon: <FiLayers />,
    title: 'Advanced Adhesive',
    desc: 'Our formula prevents lifting or peeling issues found in earlier products.',
  },
  {
    icon: <FiTool />,
    title: 'Easy Installation',
    desc: 'The thermoplastic polyurethane material enables quick, straightforward application.',
  },
]

export default function PaintProtection() {
  return (
    <>
      <PageHero
        title="Paint Protection"
        subtitle="FlexiShield - One of the leading polyurethane paint protection films on the market"
        image="https://reflektech.com/wp-content/uploads/2022/12/slider-4.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="service-intro">
            <h2 className="section-title">FlexiShield Paint Protection Film</h2>
            <p className="service-desc">
              Discovering scratches on a new vehicle is distressing for any owner. That's why we developed
              FlexiShield Paint Protection Film, one of the leading polyurethane paint protection films
              on the market. Nearly invisible, it provides lasting defense against road hazards and maintains
              vehicle appearance, giving you the feeling of driving a brand-new car every day for years to come.
            </p>
          </div>

          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="service-cta">
            <h3>Interested in FlexiShield?</h3>
            <p>Contact us to learn more about our paint protection solutions.</p>
            <Link to="/contact-us" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
