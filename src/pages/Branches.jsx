import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import './Branches.css'

const offices = [
  {
    flag: '🇺🇸',
    region: 'USA HQ & Factory',
    address: '280 N Roosevelt Ave\nChandler, AZ 85226, USA',
    phone: '+1 866 312 9909',
    email: 'contact@reflektech.com',
    image: '/images/facility-chandler.png',
    isHQ: true,
  },
  {
    flag: '🇳🇱',
    region: 'Europe & Central Asia',
    address: 'Marconistraat 70H\nGouda, ZH 2809PE, NL',
    phone: '+31 6 3458 3582',
    email: 'salesEU@reflektech.com',
    image: '/images/slider-2.jpg',
  },
  {
    flag: '🇲🇽',
    region: 'Latin America',
    address: 'Prol. Moctezuma 14, Villa Coyoacán\nCiudad de México, 04000, México',
    phone: '+52 55 5659 3985',
    email: 'ventas@reflektech.com',
    image: '/images/slider-3.jpg',
  },
  {
    flag: '🇨🇳',
    region: 'Asia Pacific & China',
    address: "Nan'an Ruizhi, No. 99 Shengtai Road\nNanjing, China",
    phone: '+86 400 828 7177',
    email: 'contact@reflektech.com',
    image: '/images/facility-ganzhou.png',
  },
  {
    flag: '🇦🇪',
    region: 'Middle East & Africa',
    address: 'WH 36/D 06 ABA Avenue\nAl Quoz 2, Dubai, UAE',
    phone: '+971 50 555 4246',
    email: 'salesME@reflektech.com',
    image: '/images/slider-4.jpg',
  },
  {
    flag: '🇮🇳',
    region: 'South Asia-Pacific',
    address: 'A 208 Dukes Galaxy Road No 13\nHyderabad 500 034, Telangana, India',
    phone: '+91 9 6775 05047',
    email: 'ktg@reflektech.com',
    image: '/images/slider-6.jpg',
  },
]

export default function Branches() {
  return (
    <>
      <PageHero
        title="Global Branches"
        subtitle="Six distribution offices — local expertise, worldwide reach"
        image="/images/slider-6.jpg"
      />

      {/* Intro */}
      <section className="br-intro-section">
        <div className="br-container">
          <span className="br-tag">GLOBAL NETWORK</span>
          <h2 className="br-intro-title">Find Your Nearest Branch</h2>
          <p className="br-intro-desc">
            Reflek Technologies operates six distribution offices across four continents,
            serving partners in 95+ countries with local expertise and fast delivery.
          </p>
        </div>
      </section>

      {/* Office gallery */}
      <section className="br-gallery-section">
        <div className="br-container">
          <div className="br-grid">
            {offices.map((o, i) => (
              <article key={i} className={`br-card${o.isHQ ? ' br-card--hq' : ''}`}>
                <div className="br-card-image">
                  <img src={o.image} alt={`${o.region} office`} />
                  {o.isHQ && <span className="br-card-badge">HQ</span>}
                </div>
                <div className="br-card-body">
                  <div className="br-card-head">
                    <span className="br-card-flag" aria-hidden="true">{o.flag}</span>
                    <h3 className="br-card-region">{o.region}</h3>
                  </div>
                  <div className="br-detail">
                    <FiMapPin size={14} className="br-detail-icon" />
                    <span style={{ whiteSpace: 'pre-line' }}>{o.address}</span>
                  </div>
                  <div className="br-detail">
                    <FiPhone size={14} className="br-detail-icon" />
                    <a href={`tel:${o.phone.replace(/\s/g, '')}`}>{o.phone}</a>
                  </div>
                  <div className="br-detail">
                    <FiMail size={14} className="br-detail-icon" />
                    <a href={`mailto:${o.email}`}>{o.email}</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
