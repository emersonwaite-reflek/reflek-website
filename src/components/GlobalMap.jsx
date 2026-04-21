import { useEffect, useMemo, useState } from 'react'
import { geoEqualEarth, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import './GlobalMap.css'

const LOCATIONS = [
  {
    id: 'phx',
    city: 'Phoenix, AZ',
    country: 'USA',
    flag: '🇺🇸',
    type: 'hq',
    typeLabel: 'US HQ & Factory',
    coords: [-112.07, 33.45],
    since: 2003,
    size: '5,600 m²',
    role: 'Head office, US manufacturing, and US & Canada distribution.',
  },
  {
    id: 'okc',
    city: 'Oklahoma City, OK',
    country: 'USA',
    flag: '🇺🇸',
    type: 'do',
    typeLabel: 'US East Coast D.O.',
    coords: [-97.52, 35.47],
    since: 2023,
    size: '5,000 m²',
    role: 'Storage and distribution for US & Canada East Coast.',
  },
  {
    id: 'mex',
    city: 'Mexico City',
    country: 'Mexico',
    flag: '🇲🇽',
    type: 'do',
    typeLabel: 'LATAM D.O.',
    coords: [-99.13, 19.43],
    since: 2025,
    size: '2,000 m²',
    role: 'Office and storage. Latin America & Caribbean distribution and sales management.',
  },
  {
    id: 'gouda',
    city: 'Gouda',
    country: 'Netherlands',
    flag: '🇳🇱',
    type: 'do',
    typeLabel: 'Europe / Central Asia B.O.',
    coords: [4.71, 52.02],
    size: '2,000 m²',
    role: 'Warehouse in one of Europe\'s logistics hubs. Continental Europe, UK, Turkey distribution.',
  },
  {
    id: 'dubai',
    city: 'Dubai',
    country: 'UAE',
    flag: '🇦🇪',
    type: 'bo',
    typeLabel: 'Middle East & Africa B.O.',
    coords: [55.27, 25.20],
    since: 2024,
    size: '1,200 m²',
    role: 'Middle East, Africa & Central Asia distribution. Regional partner coordination.',
  },
  {
    id: 'nanjing',
    city: 'Nanjing',
    country: 'China',
    flag: '🇨🇳',
    type: 'factory',
    typeLabel: 'East Asia D.O. & Factory',
    coords: [118.80, 32.06],
    since: 2016,
    size: '9,300 m²',
    role: 'Global supply of Polarie-branded and Reflek Private Labelled China-manufactured products. Asia Pacific & China distribution.',
  },
  {
    id: 'ganzhou',
    city: 'Ganzhou',
    country: 'China',
    flag: '🇨🇳',
    type: 'factory',
    typeLabel: 'Clear PPF + WF Manufacturing Site',
    coords: [114.94, 25.83],
    since: 2025,
    role: 'Clear paint protection film and window film manufacturing.',
  },
  {
    id: 'suzhou',
    city: 'Suzhou',
    country: 'China',
    flag: '🇨🇳',
    type: 'factory',
    typeLabel: 'Color PPF Manufacturing Site',
    coords: [120.58, 31.30],
    since: 2026,
    role: 'Color paint protection film manufacturing.',
  },
  {
    id: 'hyd',
    city: 'Hyderabad',
    country: 'India',
    flag: '🇮🇳',
    type: 'bo',
    typeLabel: 'South Asia-Pacific B.O.',
    coords: [78.49, 17.39],
    since: 2024,
    role: 'South Asia-Pacific branch office and distribution center.',
  },
]

const TYPE_META = {
  hq:      { label: 'HQ & Factory',        color: '#7ab929', radius: 9 },
  factory: { label: 'Manufacturing',       color: '#7ab929', radius: 7 },
  do:      { label: 'Distribution Office', color: '#0a0a0a', stroke: '#7ab929', radius: 7 },
  bo:      { label: 'Branch Office',       color: '#0a0a0a', stroke: '#7ab929', radius: 5 },
}

const WIDTH = 900
const HEIGHT = 440

export default function GlobalMap() {
  const [active, setActive] = useState(LOCATIONS[0].id)
  const [countries, setCountries] = useState(null)
  const activeLoc = LOCATIONS.find((l) => l.id === active)

  useEffect(() => {
    let cancelled = false
    fetch('/world-110m.json')
      .then((r) => r.json())
      .then((topology) => {
        if (cancelled) return
        const geo = feature(topology, topology.objects.countries)
        setCountries(geo)
      })
    return () => { cancelled = true }
  }, [])

  const projection = useMemo(
    () => geoEqualEarth()
      .scale(165)
      .translate([WIDTH / 2, HEIGHT / 2])
      .center([10, 15]),
    []
  )

  const pathGen = useMemo(() => geoPath(projection), [projection])

  const project = (lonlat) => projection(lonlat) || [0, 0]

  return (
    <div className="gm-wrap">
      <div className="gm-map-col">
        <div className="gm-map">
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            role="img"
            aria-label="World map showing Reflek's global locations"
          >
            {countries?.features.map((f, i) => (
              <path
                key={i}
                d={pathGen(f)}
                fill="#1a1a1a"
                stroke="#2a2a2a"
                strokeWidth={0.5}
              />
            ))}

            {LOCATIONS.map((loc) => {
              const meta = TYPE_META[loc.type]
              const [x, y] = project(loc.coords)
              const isActive = loc.id === active
              return (
                <g
                  key={loc.id}
                  transform={`translate(${x}, ${y})`}
                  className="gm-marker-group"
                  onClick={() => setActive(loc.id)}
                  onMouseEnter={() => setActive(loc.id)}
                >
                  <circle
                    r={meta.radius + 6}
                    fill="#7ab929"
                    className="gm-marker-halo"
                    opacity={isActive ? 0.25 : 0.12}
                  />
                  <circle
                    r={meta.radius}
                    fill={meta.color}
                    stroke={meta.stroke || meta.color}
                    strokeWidth={meta.stroke ? 2.5 : 0}
                    className={`gm-marker ${isActive ? 'is-active' : ''}`}
                  />
                </g>
              )
            })}
          </svg>

          <div className="gm-legend">
            {Object.entries(TYPE_META).map(([key, m]) => (
              <div key={key} className="gm-legend-item">
                <span
                  className="gm-legend-dot"
                  style={{
                    background: m.color,
                    border: m.stroke ? `2px solid ${m.stroke}` : 'none',
                  }}
                />
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="gm-info-col">
        <div className="gm-info-card">
          <div className="gm-info-header">
            <span className="gm-info-flag" aria-hidden="true">{activeLoc.flag}</span>
            <div>
              <div className="gm-info-city">{activeLoc.city}</div>
              <div className="gm-info-country">{activeLoc.country}</div>
            </div>
          </div>
          <div className="gm-info-type">{activeLoc.typeLabel}</div>
          <div className="gm-info-meta">
            {activeLoc.size && <span>{activeLoc.size}</span>}
            {activeLoc.since && <span>Since {activeLoc.since}</span>}
          </div>
          <p className="gm-info-role">{activeLoc.role}</p>
        </div>

        <ul className="gm-list" role="list">
          {LOCATIONS.map((loc) => (
            <li key={loc.id}>
              <button
                type="button"
                className={`gm-list-item ${loc.id === active ? 'is-active' : ''}`}
                onClick={() => setActive(loc.id)}
                onMouseEnter={() => setActive(loc.id)}
              >
                <span className="gm-list-flag" aria-hidden="true">{loc.flag}</span>
                <span className="gm-list-text">
                  <span className="gm-list-city">{loc.city}</span>
                  <span className="gm-list-type">{loc.typeLabel}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
