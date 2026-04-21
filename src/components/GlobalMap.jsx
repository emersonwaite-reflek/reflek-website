import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
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
    typeLabel: 'Europe / Central Asia D.O.',
    coords: [4.71, 52.02],
    size: '2,000 m²',
    role: 'Warehouse in one of Europe\'s logistics hubs. Continental Europe, UK, Turkey distribution.',
  },
  {
    id: 'dubai',
    city: 'Dubai',
    country: 'UAE',
    flag: '🇦🇪',
    type: 'do',
    typeLabel: 'Middle East & Africa D.O.',
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
    type: 'do',
    typeLabel: 'South Asia-Pacific D.O.',
    coords: [78.49, 17.39],
    since: 2024,
    role: 'South Asia-Pacific distribution office.',
  },
]

const TYPE_META = {
  hq:      { label: 'HQ & Factory',        color: '#7ab929', radius: 9 },
  factory: { label: 'Manufacturing',       color: '#7ab929', radius: 7 },
  do:      { label: 'Distribution Office', color: '#ffffff', stroke: '#7ab929', radius: 7 },
}

const WIDTH = 900
const HEIGHT = 440

const TT_MARGIN = 12
const TT_GAP = 22

export default function GlobalMap() {
  const [hoverId, setHoverId] = useState(null)
  const [pinnedId, setPinnedId] = useState(null)
  const [countries, setCountries] = useState(null)
  const [frameSize, setFrameSize] = useState({ w: 0, h: 0 })
  const [tipSize, setTipSize] = useState({ w: 0, h: 0 })

  const frameRef = useRef(null)
  const svgRef = useRef(null)
  const tipRef = useRef(null)

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

  // Track the frame's rendered size so we can reposition the tooltip on resize.
  useLayoutEffect(() => {
    if (!frameRef.current) return
    const el = frameRef.current
    const update = () => {
      const r = el.getBoundingClientRect()
      setFrameSize({ w: r.width, h: r.height })
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const projection = useMemo(
    () => geoEqualEarth()
      .scale(180)
      .translate([WIDTH / 2, HEIGHT / 2])
      .center([10, 15]),
    []
  )

  const pathGen = useMemo(() => geoPath(projection), [projection])
  const project = useCallback((lonlat) => projection(lonlat) || [0, 0], [projection])

  /**
   * Convert a marker's viewBox coordinates to pixel coordinates inside the frame.
   * Works regardless of preserveAspectRatio (meet / slice) because we use
   * the SVG's own getScreenCTM to ask the browser where the point actually lives.
   */
  const projectToFrame = useCallback((lonlat) => {
    const svg = svgRef.current
    const frame = frameRef.current
    if (!svg || !frame) return null
    const [vx, vy] = project(lonlat)
    const pt = svg.createSVGPoint()
    pt.x = vx; pt.y = vy
    const ctm = svg.getScreenCTM()
    if (!ctm) return null
    const screen = pt.matrixTransform(ctm)
    const frameRect = frame.getBoundingClientRect()
    return { x: screen.x - frameRect.left, y: screen.y - frameRect.top }
  }, [project])

  const activeId = hoverId || pinnedId
  const hoverLoc = LOCATIONS.find((l) => l.id === activeId)

  // Depend on frameSize so the tooltip recomputes on resize while a marker is hovered.
  const tipPos = useMemo(() => {
    if (!hoverLoc) return null
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    frameSize
    return projectToFrame(hoverLoc.coords)
  }, [hoverLoc, projectToFrame, frameSize])

  // Measure the tooltip so we can clamp its position inside the frame.
  useLayoutEffect(() => {
    if (!tipRef.current) return
    const el = tipRef.current
    const update = () => {
      const r = el.getBoundingClientRect()
      setTipSize((prev) =>
        prev.w === r.width && prev.h === r.height ? prev : { w: r.width, h: r.height }
      )
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [hoverLoc])

  // Compute clamped tooltip placement + arrow offset relative to its own box.
  const placement = useMemo(() => {
    if (!tipPos || !frameSize.w || !frameSize.h || !tipSize.w || !tipSize.h) return null

    const spaceAbove = tipPos.y
    const spaceBelow = frameSize.h - tipPos.y
    const needed = tipSize.h + TT_GAP + TT_MARGIN
    const below = spaceAbove < needed && spaceBelow >= needed
    // If neither side fits cleanly, fall back to the larger one.
    const forcedBelow = spaceAbove < needed && spaceBelow < needed
      ? spaceBelow > spaceAbove
      : below

    const top = forcedBelow
      ? Math.min(tipPos.y + TT_GAP, frameSize.h - tipSize.h - TT_MARGIN)
      : Math.max(TT_MARGIN, tipPos.y - TT_GAP - tipSize.h)

    const rawLeft = tipPos.x - tipSize.w / 2
    const maxLeft = Math.max(TT_MARGIN, frameSize.w - tipSize.w - TT_MARGIN)
    const left = Math.max(TT_MARGIN, Math.min(rawLeft, maxLeft))

    // Arrow X relative to the tooltip's own left edge — clamped so it stays inside.
    const arrowX = Math.max(16, Math.min(tipPos.x - left, tipSize.w - 16))

    return { left, top, below: forcedBelow, arrowX }
  }, [tipPos, frameSize, tipSize])

  return (
    <div className="gm-frame" ref={frameRef}>
      <div className="gm-map-inner">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          preserveAspectRatio="xMidYMid meet"
          className="gm-svg"
          role="img"
          aria-label="World map showing Reflek's global locations"
        >
          {countries?.features.map((f, i) => (
            <path
              key={i}
              d={pathGen(f)}
              fill="#ececec"
              stroke="#d8d8d8"
              strokeWidth={0.5}
            />
          ))}

          {LOCATIONS.map((loc) => {
            const meta = TYPE_META[loc.type]
            const [x, y] = project(loc.coords)
            const isActive = loc.id === hoverId
            return (
              <g
                key={loc.id}
                transform={`translate(${x}, ${y})`}
                className="gm-marker-group"
                onMouseEnter={() => setHoverId(loc.id)}
                onMouseLeave={() => setHoverId(null)}
                onClick={() => setPinnedId((cur) => (cur === loc.id ? null : loc.id))}
              >
                <circle
                  r={meta.radius + 10}
                  fill="transparent"
                />
                <circle
                  r={meta.radius + 6}
                  fill="#7ab929"
                  className="gm-marker-halo"
                  opacity={isActive ? 0.3 : 0.15}
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

        {hoverLoc && tipPos && (
          <div
            ref={tipRef}
            className={`gm-tooltip ${placement?.below ? 'is-below' : 'is-above'}`}
            style={{
              left: `${placement ? placement.left : tipPos.x - 140}px`,
              top: `${placement ? placement.top : tipPos.y - TT_GAP}px`,
              visibility: placement ? 'visible' : 'hidden',
              '--gm-arrow-x': `${placement ? placement.arrowX : 140}px`,
            }}
            role="tooltip"
          >
            <div className="gm-tt-header">
              <span className="gm-tt-flag" aria-hidden="true">{hoverLoc.flag}</span>
              <div>
                <div className="gm-tt-city">{hoverLoc.city}</div>
                <div className="gm-tt-country">{hoverLoc.country}</div>
              </div>
            </div>
            <div className="gm-tt-type">{hoverLoc.typeLabel}</div>
            <div className="gm-tt-meta">
              {hoverLoc.size && <span>{hoverLoc.size}</span>}
              {hoverLoc.since && <span>Since {hoverLoc.since}</span>}
            </div>
            <p className="gm-tt-role">{hoverLoc.role}</p>
            <Link
              to={`/contact-us?office=${hoverLoc.id}`}
              className="gm-tt-cta"
              onClick={(e) => e.stopPropagation()}
            >
              Contact this office →
            </Link>
          </div>
        )}
      </div>

      <div className="gm-legend">
        {Object.entries(TYPE_META).map(([key, m]) => (
          <div key={key} className="gm-legend-item">
            <span
              className="gm-legend-dot"
              style={{
                background: m.color,
                border: m.stroke ? `2px solid ${m.stroke}` : `2px solid ${m.color}`,
              }}
            />
            <span>{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
