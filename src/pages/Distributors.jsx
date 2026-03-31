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

      {/* Intro section */}
      <section className="dist-intro-section">
        <div className="dist-intro-bg-hex" />
        <div className="container">
          <div className="dist-intro">
            <div className="dist-intro-icon-wrap">
              <div className="dist-intro-icon">
                <FiGlobe size={28} />
              </div>
            </div>
            <span className="dist-intro-label">// GLOBAL NETWORK</span>
            <h2 className="dist-intro-title">Our Global <span>Presence</span></h2>
            <p className="dist-intro-desc">
              Reflek Technologies operates distribution centers strategically located around the world to serve our growing network of dealers and partners.
            </p>
          </div>
        </div>
      </section>

      {/* Regions grid */}
      <section className="dist-grid-section">
        <div className="container">
          <div className="dist-grid">
            {regions.map((r, i) => {
              const isNew = r.type === 'Coming Soon'
              const isHQ = r.type === 'Factory Direct'
              return (
                <div
                  key={i}
                  className={`dist-region ${isNew ? 'dist-region--new' : ''} ${isHQ ? 'dist-region--hq' : ''}`}
                >
                  <div className="dist-region-inner">
                    {/* Ghost number */}
                    <span className="dist-region-number">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Header */}
                    <div className="dist-region-header">
                      <h3 className="dist-region-name">{r.name}</h3>
                      <span className={`dist-type-badge ${isNew ? 'dist-type-badge--teal' : ''}`}>
                        {r.type}
                      </span>
                    </div>

                    {/* Locations */}
                    {r.locations.map((loc, j) => (
                      <div key={j} className="dist-location">
                        <h4 className="dist-location-name">{loc.name}</h4>
                        <div className="dist-detail">
                          <span className="dist-detail-icon">
                            <FiMapPin size={14} />
                          </span>
                          <span>{loc.address}</span>
                        </div>
                        {loc.phone && (
                          <div className="dist-detail">
                            <span className="dist-detail-icon">
                              <FiPhone size={14} />
                            </span>
                            <a href={`tel:${loc.phone}`}>{loc.phone}</a>
                          </div>
                        )}
                        {loc.email && (
                          <div className="dist-detail">
                            <span className="dist-detail-icon">
                              <FiMail size={14} />
                            </span>
                            <a href={`mailto:${loc.email}`}>{loc.email}</a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Bottom gradient bar */}
                  <div className="dist-region-bottom-bar" />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
