import './PageHero.css'

export default function PageHero({ title, subtitle, image, label }) {
  // Split title — last word gets the green underline accent
  const words = title ? title.split(' ') : []
  const lastWord = words.pop()
  const leadingWords = words.join(' ')

  return (
    <section className="page-hero">
      <div className="page-hero-inner container">

        {/* Left: text content */}
        <div className="page-hero-text">
          {label && (
            <span className="page-hero-label">{label}</span>
          )}
          <h1 className="page-hero-title">
            {leadingWords && <>{leadingWords} </>}
            <span className="accent">{lastWord}</span>
          </h1>
          {subtitle && (
            <p className="page-hero-subtitle">{subtitle}</p>
          )}
        </div>

        {/* Right: image with green offset border */}
        {image && (
          <div className="page-hero-image-wrap">
            <div className="page-hero-image-border" aria-hidden="true" />
            <img
              src={image}
              alt={title}
              className="page-hero-image"
            />
          </div>
        )}

      </div>

      {/* Bottom divider */}
      <div className="page-hero-divider" />
    </section>
  )
}
