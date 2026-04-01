import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import './Distributors.css'

const regions = [
  {
    name: 'North America',
    address: '280 N Roosevelt Ave, Chandler AZ 85226',
    phone: '+1 (866) 312-9909',
    email: 'contact@reflektech.com',
  },
  {
    name: 'Europe',
    address: 'Marconistraat 70H, Gouda 2809PE, NL',
    phone: '+31 6 3458 3582',
    email: 'salesEU@reflektech.com',
  },
  {
    name: 'Middle East & Africa',
    address: 'WH 36/D 06 ABA Avenue, Al Qouz 02, Dubai, UAE',
    phone: '+971 50 555 4246',
    email: 'salesME@reflektech.com',
  },
]

export default function Distributors() {
  return (
    <>
      <PageHero
        title="International Distributors"
        subtitle="Authorized Reflek distribution partners worldwide"
        image="/images/slider-6.jpg"
      />

      {/* Intro */}
      <section className="dist-intro-section">
        <div className="dist-container">
          <span className="dist-tag">GLOBAL NETWORK</span>
          <h2 className="dist-intro-title">Find a Distributor Near You</h2>
          <p className="dist-intro-desc">
            Reflek Technologies maintains an authorized distribution network spanning 60+ countries,
            ensuring local expertise and fast delivery for every market we serve.
          </p>
        </div>
      </section>

      {/* Region cards */}
      <section className="dist-cards-section">
        <div className="dist-container">
          <div className="dist-grid">
            {regions.map((r, i) => (
              <div key={i} className="dist-card">
                <div className="dist-card-icon">
                  <FiMapPin size={18} />
                </div>
                <h3 className="dist-card-name">{r.name}</h3>
                <div className="dist-detail">
                  <FiMapPin size={14} className="dist-detail-icon" />
                  <span>{r.address}</span>
                </div>
                <div className="dist-detail">
                  <FiPhone size={14} className="dist-detail-icon" />
                  <a href={`tel:${r.phone}`}>{r.phone}</a>
                </div>
                <div className="dist-detail">
                  <FiMail size={14} className="dist-detail-icon" />
                  <a href={`mailto:${r.email}`}>{r.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a distributor CTA */}
      <section className="dist-cta-section">
        <div className="dist-container">
          <div className="dist-cta-box">
            <h3 className="dist-cta-title">Interested in becoming a distributor?</h3>
            <p className="dist-cta-desc">
              We're always looking to grow our global network with qualified partners. Reach out to
              learn about our distributor program, margins, and support resources.
            </p>
            <a href="/contact" className="dist-cta-btn">Contact Us →</a>
          </div>
        </div>
      </section>
    </>
  )
}
