import { FiMapPin, FiPhone, FiMail, FiGlobe } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import './Distributors.css'

const regions = [
  {
    name: 'North America',
    type: 'Factory Direct',
    locations: [
      {
        name: 'Reflek Technologies Corp.',
        address: '280 N Roosevelt Ave, Chandler, AZ 85226',
        phone: '+1 866 312 9909',
        email: 'contact@reflektech.com',
        flag: 'Factory Direct',
      },
    ],
  },
  {
    name: 'Europe',
    type: 'Distribution Center',
    locations: [
      { name: 'Amsterdam Distribution Center', address: 'Amsterdam, Netherlands', flag: 'Distribution' },
    ],
  },
  {
    name: 'Asia Pacific',
    type: 'Distribution Center',
    locations: [
      { name: 'Shanghai Distribution Center', address: 'Shanghai, China', flag: 'Distribution' },
    ],
  },
  {
    name: 'Middle East',
    type: 'Distribution Center',
    locations: [
      { name: 'Dubai Distribution Center', address: 'Dubai, UAE', flag: 'Distribution' },
    ],
  },
  {
    name: 'Latin America',
    type: 'Coming Soon',
    locations: [
      { name: 'Mexico City Distribution Center', address: 'Mexico City, Mexico (Opening mid-2025)', flag: 'Coming Soon' },
    ],
  },
]

export default function Distributors() {
  return (
    <>
      <PageHero
        title="Distributors"
        subtitle="Global distribution network serving 5,000+ dealers worldwide"
        image="https://reflektech.com/wp-content/uploads/2022/12/slider-1.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="dist-intro">
            <div className="dist-intro-icon"><FiGlobe size={36} /></div>
            <h2 className="section-title">Our Global Presence</h2>
            <p>Reflek Technologies operates distribution centers strategically located around the world to serve our growing network of dealers and partners.</p>
          </div>

          <div className="dist-grid">
            {regions.map((r, i) => (
              <div key={i} className="dist-region">
                <div className="dist-region-header">
                  <h3>{r.name}</h3>
                  <span className="dist-type">{r.type}</span>
                </div>
                {r.locations.map((loc, j) => (
                  <div key={j} className="dist-card">
                    <h4>{loc.name}</h4>
                    <div className="dist-detail"><FiMapPin size={14} /> {loc.address}</div>
                    {loc.phone && <div className="dist-detail"><FiPhone size={14} /> <a href={`tel:${loc.phone}`}>{loc.phone}</a></div>}
                    {loc.email && <div className="dist-detail"><FiMail size={14} /> <a href={`mailto:${loc.email}`}>{loc.email}</a></div>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
