import './PageHero.css'

export default function PageHero({ title, subtitle, image }) {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: image ? `url(${image})` : undefined }}
    >
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
