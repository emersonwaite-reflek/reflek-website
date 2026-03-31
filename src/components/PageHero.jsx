import './PageHero.css'

export default function PageHero({ title, subtitle, image }) {
  // Split title to make last word green accent
  const words = title.split(' ')
  const lastWord = words.pop()
  const leadingWords = words.join(' ')

  return (
    <section
      className="page-hero"
      style={{ backgroundImage: image ? `url(${image})` : undefined }}
    >
      <div className="page-hero-overlay" />

      {/* Geometric decorative shapes */}
      <div className="page-hero-geo page-hero-geo--1" />
      <div className="page-hero-geo page-hero-geo--2" />
      <div className="page-hero-geo page-hero-geo--3" />
      <div className="page-hero-geo page-hero-geo--4" />

      <div className="container page-hero-content">
        <span className="page-hero-label">// {title}</span>
        <h1>
          {leadingWords ? <>{leadingWords} <span>{lastWord}</span></> : <span>{lastWord}</span>}
        </h1>
        {subtitle && <p>{subtitle}</p>}
        <div className="page-hero-accent-bar" />
      </div>

      {/* Angled bottom edge */}
      <div className="page-hero-angle" />
    </section>
  )
}
