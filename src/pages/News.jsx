import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import './News.css'

const featured = {
  title: 'Global Expansion & New Innovations: Exciting News from Reflek Technologies',
  date: 'December 6, 2024',
  month: 'DEC 2024',
  excerpt:
    'Reflek Technologies announces a $10 million investment in a new 120,000 sq ft manufacturing facility in Ganzhou, China, alongside a new polyurethane extrusion line at our Chandler, Arizona campus. The company now produces over 10 million square feet of window film annually, with revenues exceeding $50 million USD and a new brand—Polarie—targeting Asian, Middle Eastern, and Latin American markets.',
  image: 'https://reflektech.com/wp-content/uploads/2022/12/slider-1.jpg',
  href: '#',
}

const articles = [
  {
    title: 'FlexiShield Cosmetic PPF Debuts at FESPA Middle East 2024',
    date: 'FEB 2024',
    excerpt:
      'Our FlexiShield Cosmetic paint protection film drew strong interest at the Dubai Exhibition Centre, with distributors from 14 countries placing first orders on the show floor.',
    image: 'https://reflektech.com/wp-content/uploads/2022/12/slider-3.jpg',
    href: '#',
  },
  {
    title: 'Reflek Technologies Makes a Splash at SEMA 2023',
    date: 'NOV 2023',
    excerpt:
      'We showcased the latest FlexiShield and Luxo product lines at SEMA 2023, connecting with car enthusiasts and professional installers from across North America.',
    image: 'https://reflektech.com/wp-content/uploads/2022/12/slider-4.jpg',
    href: '#',
  },
  {
    title: 'New Luxo Architectural Series Launches for Commercial Glazing',
    date: 'SEP 2023',
    excerpt:
      'The Luxo AR70 and AR50 series bring dual-reflective sputtered technology to high-rise commercial projects, offering SHGC values as low as 0.22 without sacrificing visible light.',
    image: 'https://reflektech.com/wp-content/uploads/2022/12/slider-5.jpg',
    href: '#',
  },
  {
    title: 'Reflek Presents at CIAACE Beijing 2023',
    date: 'APR 2023',
    excerpt:
      'Reflek Technologies exhibited its comprehensive automotive film portfolio at CIAACE Beijing, one of the premier aftermarket trade fairs in the Asia-Pacific region.',
    image: 'https://reflektech.com/wp-content/uploads/2022/12/slider-6.jpg',
    href: '#',
  },
  {
    title: 'FlexiShield PPF Earns ADAS-Safe Certification',
    date: 'MAR 2023',
    excerpt:
      'Independent testing confirms that FlexiShield Ultra and FlexiShield Matte do not interfere with forward-facing radar or camera ADAS systems—a key milestone for OEM partnerships.',
    image: 'https://reflektech.com/wp-content/uploads/2022/12/slider-2.jpg',
    href: '#',
  },
  {
    title: 'Automechanika Frankfurt: A Record Year for Reflek',
    date: 'SEP 2022',
    excerpt:
      'At Automechanika Frankfurt, Reflek displayed the full 2023 film roadmap to buyers from 28 countries, securing distribution agreements across Europe and the Middle East.',
    image: 'https://reflektech.com/wp-content/uploads/2022/12/slider-4.jpg',
    href: '#',
  },
]

export default function News() {
  const [email, setEmail] = useState('')

  function handleSubscribe(e) {
    e.preventDefault()
    setEmail('')
  }

  return (
    <>
      <PageHero
        title="News & Updates"
        subtitle="Product launches, company updates, and industry insights"
        image="https://reflektech.com/wp-content/uploads/2022/12/slider-3.jpg"
      />

      {/* ── Featured article ── */}
      <section className="nw-section nw-section--white">
        <div className="nw-container">
          <div className="nw-featured">
            <div className="nw-featured-image">
              <img src={featured.image} alt={featured.title} />
              <span className="nw-featured-badge">Featured</span>
            </div>
            <div className="nw-featured-body">
              <span className="nw-date-label">{featured.month}</span>
              <h2 className="nw-featured-title">{featured.title}</h2>
              <p className="nw-featured-excerpt">{featured.excerpt}</p>
              <a href={featured.href} className="nw-read-more nw-read-more--featured">
                Read More <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article grid ── */}
      <section className="nw-section nw-section--gray">
        <div className="nw-container">
          <div className="nw-grid-header">
            <span className="nw-tag">Latest Stories</span>
            <h2 className="nw-grid-heading">More from Reflek</h2>
          </div>
          <div className="nw-grid">
            {articles.map((a, i) => (
              <article key={i} className="nw-card">
                <div className="nw-card-image">
                  <img src={a.image} alt={a.title} />
                </div>
                <div className="nw-card-body">
                  <span className="nw-date-label">{a.date}</span>
                  <h3 className="nw-card-title">{a.title}</h3>
                  <p className="nw-card-excerpt">{a.excerpt}</p>
                  <a href={a.href} className="nw-read-more">
                    Read more <FiArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="nw-section nw-section--white nw-newsletter-section">
        <div className="nw-container">
          <div className="nw-newsletter">
            <FiMail className="nw-newsletter-icon" />
            <h2 className="nw-newsletter-heading">Stay up to date</h2>
            <p className="nw-newsletter-sub">
              Get product launches, trade show announcements, and industry news delivered to your inbox.
            </p>
            <form className="nw-newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                className="nw-email-input"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="nw-subscribe-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
