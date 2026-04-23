import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import './Branches.css'

const factories = [
  {
    flag: '🇺🇸',
    region: 'USA HQ & Factory',
    address: '280 N Roosevelt Ave\nChandler, AZ 85226, USA',
    phone: '+1 866 312 9909',
    email: 'contact@reflektech.com',
    image: '/images/facility-chandler.png',
    since: '2013',
    size: '5,600 m² factory + warehouse',
    role: 'Head office, US manufacturing, and US & Canada distribution.',
    isHQ: true,
  },
  {
    flag: '🇨🇳',
    region: 'Ganzhou Factory',
    address: 'Ganzhou, Jiangxi Province, China',
    phone: '+86 400 828 7177',
    email: 'contact@reflektech.com',
    image: '/images/facility-ganzhou.png',
    since: '2025',
    size: '9,300 m² manufacturing',
    role: 'Clear PPF and window film manufacturing. Asia Pacific & China distribution.',
  },
  {
    flag: '🇨🇳',
    region: 'Suzhou Factory',
    address: 'Suzhou, Jiangsu Province, China',
    phone: '+86 400 828 7177',
    email: 'contact@reflektech.com',
    image: '/images/facility-suzhou.png',
    since: '2026',
    size: '11,150 m² manufacturing',
    role: "World's largest Color PPF facility. 4 coating lines and 2 extrusion lines.",
  },
]

const offices = [
  {
    flag: '🇺🇸',
    region: 'US East Coast D.O.',
    address: 'Oklahoma City, OK, USA',
    phone: '+1 866 312 9909',
    email: 'contact@reflektech.com',
    image: '/images/facility-okc.jpg',
    since: '2023',
    size: '5,000 m² warehouse',
    role: 'Storage and distribution for US & Canada East Coast.',
  },
  {
    flag: '🇳🇱',
    region: 'Europe & Central Asia D.O.',
    address: 'Marconistraat 70H\nGouda, ZH 2809PE, NL',
    phone: '+31 6 3458 3582',
    email: 'salesEU@reflektech.com',
    image: '/images/facility-gouda.jpg',
    since: '2016',
    size: '2,000 m² warehouse',
    role: 'Continental Europe, UK, and Turkey distribution.',
  },
  {
    flag: '🇲🇽',
    region: 'Latin America D.O.',
    address: 'Prol. Moctezuma 14, Villa Coyoacán\nCiudad de México, 04000, México',
    phone: '+52 55 5659 3985',
    email: 'ventas@reflektech.com',
    image: '/images/facility-mexico.jpg',
    since: '2025',
    size: '2,000 m² warehouse',
    role: 'Latin America and Caribbean distribution and sales management.',
  },
  {
    flag: '🇨🇳',
    region: 'East Asia D.O.',
    address: "Nan'an Ruizhi, No. 99 Shengtai Road\nNanjing, China",
    phone: '+86 400 828 7177',
    email: 'contact@reflektech.com',
    image: '/images/facility-nanjing.jpg',
    since: '2016',
    role: 'Asia Pacific & China distribution hub.',
  },
  {
    flag: '🇦🇪',
    region: 'Middle East & Africa D.O.',
    address: 'WH 36/D 06 ABA Avenue\nAl Quoz 2, Dubai, UAE',
    phone: '+971 50 555 4246',
    email: 'salesME@reflektech.com',
    image: '/images/facility-dubai.jpg',
    since: '2024',
    size: '1,200 m² warehouse',
    role: 'Middle East, Africa & Central Asia distribution.',
  },
  {
    flag: '🇮🇳',
    region: 'South Asia-Pacific B.O.',
    address: 'A 208 Dukes Galaxy Road No 13\nHyderabad 500 034, Telangana, India',
    phone: '+91 9 6775 05047',
    email: 'ktg@reflektech.com',
    image: '/images/facility-hyderabad.jpg',
    since: '2024',
    role: 'South Asia-Pacific distribution and sales management.',
  },
]

function OfficeCard({ o }) {
  return (
    <article className={`br-card${o.isHQ ? ' br-card--hq' : ''}`}>
      <div className="br-card-image">
        <img
          src={o.image}
          alt={`${o.region} office`}
          onError={(e) => { e.currentTarget.src = '/images/slider-6.jpg' }}
        />
        {o.isHQ && <span className="br-card-badge">HQ</span>}
        {o.since && <span className="br-card-since">Since {o.since}</span>}
      </div>
      <div className="br-card-body">
        <div className="br-card-head">
          <span className="br-card-flag" aria-hidden="true">{o.flag}</span>
          <h3 className="br-card-region">{o.region}</h3>
        </div>
        {o.size && <div className="br-card-size">{o.size}</div>}
        {o.role && <p className="br-card-role">{o.role}</p>}
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
  )
}

export default function Branches() {
  return (
    <>
      <PageHero
        title="Global Branches"
        subtitle="Three factories and six distribution offices — local expertise, worldwide reach"
        image="/images/slider-6.jpg"
      />

      {/* Intro */}
      <section className="br-intro-section">
        <div className="br-container">
          <span className="br-tag">GLOBAL NETWORK</span>
          <h2 className="br-intro-title">Find Your Nearest Branch</h2>
          <p className="br-intro-desc">
            Reflek Technologies operates three strategically positioned manufacturing
            facilities and six regional distribution offices, serving partners in 95+
            countries with local expertise and fast delivery.
          </p>
        </div>
      </section>

      {/* Factories */}
      <section className="br-gallery-section br-gallery-section--factories">
        <div className="br-container">
          <div className="br-section-header">
            <span className="br-tag">Manufacturing</span>
            <h2 className="br-section-title">Factories</h2>
            <p className="br-section-desc">
              Integrated coating, lamination, and extrusion lines across three world-class
              facilities — one in the USA, two in China.
            </p>
          </div>
          <div className="br-grid">
            {factories.map((f, i) => (
              <OfficeCard key={`factory-${i}`} o={f} />
            ))}
          </div>
        </div>
      </section>

      {/* Sales & Distribution */}
      <section className="br-gallery-section br-gallery-section--offices">
        <div className="br-container">
          <div className="br-section-header">
            <span className="br-tag">Sales &amp; Distribution</span>
            <h2 className="br-section-title">Distribution Offices</h2>
            <p className="br-section-desc">
              Factory-direct regional hubs across four continents — each one staffed with
              local sales, logistics, and technical support.
            </p>
          </div>
          <div className="br-grid">
            {offices.map((o, i) => (
              <OfficeCard key={`office-${i}`} o={o} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
