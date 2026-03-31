import PageHero from '../components/PageHero'
import './News.css'

const articles = [
  {
    title: 'Global Expansion & New Innovations: Exciting News from Reflek Technologies',
    date: 'December 6, 2024',
    excerpt: 'Reflek Technologies Corporation announced a $10 million investment in a new 120,000 sq ft manufacturing facility in Ganzhou, China. The company operates a 60,000 sq ft facility in Chandler, Arizona, and produces over 10 million square feet of window film annually with revenues exceeding $50 million USD.',
    highlights: [
      'Fifth distribution center opening in Mexico City (mid-2025)',
      'New polyurethane extrusion line in Arizona (mid-2025)',
      'New brand "Polarie" for Asian, Middle Eastern, and Latin American markets',
      'Current production: 80,000+ rolls of paint protection film yearly',
    ],
  },
  {
    title: 'Reflek Technology Excites at FESPA Middle East 2024 in Dubai',
    date: 'February 1, 2024',
    excerpt: 'We were thrilled to showcase at FESPA Middle East 2024, held from January 29th to 31st at the Dubai Exhibition Centre, Expo City, Dubai, UAE. The event was a fantastic opportunity to present our FlexiShield Cosmetic PPF and connect with industry leaders from across the region.',
    highlights: [],
  },
  {
    title: 'Reflek Technology Makes a Splash at SEMA 2023',
    date: 'November 24, 2023',
    excerpt: "We're thrilled to have connected with so many passionate car enthusiasts and industry professionals at the SEMA Show 2023. It was an exciting opportunity to showcase our latest innovations in paint protection technology.",
    highlights: [],
  },
  {
    title: 'Reflek Showcases at CIAACE Beijing 2023',
    date: '2023',
    excerpt: 'Reflek Technologies presented its comprehensive product portfolio at CIAACE Beijing, one of the premier automotive aftermarket exhibitions in the Asia-Pacific region.',
    highlights: [],
  },
  {
    title: 'Automechanika Frankfurt Presentation',
    date: '2023',
    excerpt: "Reflek Technologies showcased at Automechanika Frankfurt, the world's leading trade fair for the automotive service industry, presenting our latest film and coating technologies to a global audience.",
    highlights: [],
  },
]

export default function News() {
  return (
    <>
      <PageHero
        title="News"
        subtitle="Latest updates from Reflek Technologies"
        image="https://reflektech.com/wp-content/uploads/2022/12/slider-2.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="news-page-grid">
            {articles.map((article, i) => (
              <article key={i} className={`news-article ${i === 0 ? 'featured' : ''}`}>
                <div className="news-article-content">
                  <time className="news-date">{article.date}</time>
                  <h2>{article.title}</h2>
                  <p>{article.excerpt}</p>
                  {article.highlights.length > 0 && (
                    <ul className="news-highlights">
                      {article.highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
