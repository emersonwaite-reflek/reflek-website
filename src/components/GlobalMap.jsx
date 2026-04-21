import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { geoEquirectangular, geoPath } from 'd3-geo'
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
    image: '/images/facility-chandler.png',
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
    type: 'do',
    typeLabel: 'East Asia D.O.',
    coords: [118.80, 32.06],
    offset: [-22, -18],
    since: 2016,
    size: '9,300 m²',
    role: 'Asia Pacific & China distribution hub. Global supply of Polarie-branded and Reflek Private Labelled products.',
  },
  {
    id: 'ganzhou',
    city: 'Ganzhou',
    country: 'China',
    flag: '🇨🇳',
    type: 'factory',
    typeLabel: 'Clear PPF + WF Manufacturing Site',
    coords: [114.94, 25.83],
    offset: [-20, 16],
    since: 2025,
    role: 'Clear paint protection film and window film manufacturing.',
    image: '/images/facility-ganzhou.png',
  },
  {
    id: 'suzhou',
    city: 'Suzhou',
    country: 'China',
    flag: '🇨🇳',
    type: 'factory',
    typeLabel: 'Color PPF Manufacturing Site',
    coords: [120.58, 31.30],
    offset: [24, 6],
    since: 2026,
    role: 'Color paint protection film manufacturing.',
    image: '/images/facility-suzhou.png',
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
  hq:      { label: 'US Headquarters',      color: '#7ab929', radius: 16.5, scale: 1.5, shape: 'factory' },
  factory: { label: 'Global Manufacturing', color: '#7ab929', radius: 11,   scale: 1,   shape: 'factory' },
  do:      { label: 'Distribution Office',  color: '#ffffff', stroke: '#7ab929', radius: 7, shape: 'circle' },
}

// Factory silhouette — sawtooth roof with chimney, centered at (0,0).
const FACTORY_PATH = 'M -10 7 L -10 0 L -5 -4 L -5 0 L 0 -4 L 0 0 L 5 -4 L 5 -8 L 8 -8 L 8 7 Z'

const WIDTH = 900
const HEIGHT = 440

const TT_MARGIN = 12
const TT_GAP = 16
const CLOSE_DELAY_MS = 160

export default function GlobalMap() {
  const [hoverId, setHoverId] = useState(null)
  const [countries, setCountries] = useState(null)
  const [frameSize, setFrameSize] = useState({ w: 0, h: 0 })
  const [tipSize, setTipSize] = useState({ w: 0, h: 0 })

  const frameRef = useRef(null)
  const svgRef = useRef(null)
  const tipRef = useRef(null)
  const closeTimerRef = useRef(null)

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  const scheduleClose = useCallback(() => {
    cancelClose()
    closeTimerRef.current = setTimeout(() => setHoverId(null), CLOSE_DELAY_MS)
  }, [cancelClose])

  const openMarker = useCallback((id) => {
    cancelClose()
    setHoverId(id)
  }, [cancelClose])

  useEffect(() => () => cancelClose(), [cancelClose])

  // Touch/tap outside the marker or tooltip closes the tooltip — matters on
  // mobile where there's no mouseleave to close it after tap-to-open.
  useEffect(() => {
    if (!hoverId) return
    const onDocDown = (e) => {
      const inTooltip = tipRef.current?.contains(e.target)
      const inMarker = e.target.closest?.('.gm-marker-group')
      if (!inTooltip && !inMarker) setHoverId(null)
    }
    document.addEventListener('pointerdown', onDocDown)
    return () => document.removeEventListener('pointerdown', onDocDown)
  }, [hoverId])

  useEffect(() => {
    let cancelled = false
    fetch('/world-110m.json')
      .then((r) => r.json())
      .then((topology) => {
        if (cancelled) return
        const geo = feature(topology, topology.objects.countries)
        geo.features = geo.features.filter(
          (f) => f.id !== '010' && f.properties?.name !== 'Antarctica'
        )
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
    () => geoEquirectangular()
      .scale(143)
      .translate([WIDTH / 2, HEIGHT / 2 + 40])
      .center([10, 10]),
    []
  )

  const pathGen = useMemo(() => geoPath(projection), [projection])
  const project = useCallback((lonlat) => projection(lonlat) || [0, 0], [projection])

  /**
   * Convert viewBox coordinates (either a [lon,lat] pair or a raw [x,y])
   * to pixel coordinates inside the frame, respecting the SVG's actual
   * preserveAspectRatio transform via getScreenCTM.
   */
  const viewBoxToFrame = useCallback((vx, vy) => {
    const svg = svgRef.current
    const frame = frameRef.current
    if (!svg || !frame) return null
    const pt = svg.createSVGPoint()
    pt.x = vx; pt.y = vy
    const ctm = svg.getScreenCTM()
    if (!ctm) return null
    const screen = pt.matrixTransform(ctm)
    const frameRect = frame.getBoundingClientRect()
    return { x: screen.x - frameRect.left, y: screen.y - frameRect.top }
  }, [])

  const markerViewBox = useCallback((loc) => {
    const [gx, gy] = project(loc.coords)
    const [dx, dy] = loc.offset || [0, 0]
    return { gx, gy, mx: gx + dx, my: gy + dy }
  }, [project])

  const hoverLoc = LOCATIONS.find((l) => l.id === hoverId)

  // Depend on frameSize so the tooltip recomputes on resize while a marker is hovered.
  const tipPos = useMemo(() => {
    if (!hoverLoc) return null
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    frameSize
    const { mx, my } = markerViewBox(hoverLoc)
    return viewBoxToFrame(mx, my)
  }, [hoverLoc, markerViewBox, viewBoxToFrame, frameSize])

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

          {/* Leader lines + anchor dots (rendered first so markers sit on top) */}
          {LOCATIONS.filter((l) => l.offset).map((loc) => {
            const { gx, gy, mx, my } = markerViewBox(loc)
            return (
              <g key={`leader-${loc.id}`} className="gm-leader" pointerEvents="none">
                <line
                  x1={gx} y1={gy} x2={mx} y2={my}
                  stroke="#7ab929"
                  strokeWidth={1}
                  strokeDasharray="2 2"
                  opacity={0.55}
                />
                <circle
                  cx={gx} cy={gy}
                  r={2}
                  fill="#7ab929"
                />
              </g>
            )
          })}

          {LOCATIONS.map((loc) => {
            const meta = TYPE_META[loc.type]
            const { mx, my } = markerViewBox(loc)
            const isActive = loc.id === hoverId
            return (
              <g
                key={loc.id}
                transform={`translate(${mx}, ${my})`}
                className="gm-marker-group"
                onMouseEnter={() => openMarker(loc.id)}
                onMouseLeave={scheduleClose}
                onClick={() => openMarker(loc.id)}
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
                {meta.shape === 'factory' ? (
                  <path
                    d={FACTORY_PATH}
                    transform={meta.scale !== 1 ? `scale(${meta.scale})` : undefined}
                    fill={meta.color}
                    className={`gm-marker ${isActive ? 'is-active' : ''}`}
                  />
                ) : (
                  <circle
                    r={meta.radius}
                    fill={meta.color}
                    stroke={meta.stroke || meta.color}
                    strokeWidth={meta.stroke ? 2.5 : 0}
                    className={`gm-marker ${isActive ? 'is-active' : ''}`}
                  />
                )}
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
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            {hoverLoc.image && (
              <div className="gm-tt-image">
                <img src={hoverLoc.image} alt={`${hoverLoc.city} facility`} />
              </div>
            )}
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
            {m.shape === 'factory' ? (
              <svg className="gm-legend-icon" viewBox="-11 -9 22 18" aria-hidden="true">
                <path d={FACTORY_PATH} fill={m.color} />
              </svg>
            ) : (
              <span
                className="gm-legend-dot"
                style={{
                  background: m.color,
                  border: m.stroke ? `2px solid ${m.stroke}` : `2px solid ${m.color}`,
                }}
              />
            )}
            <span>{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
