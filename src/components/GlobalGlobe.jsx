import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'
import { geoOrthographic, geoPath, geoDistance, geoInterpolate } from 'd3-geo'
import { feature } from 'topojson-client'
import './GlobalGlobe.css'

/* ------------------------------------------------------------------
 * Location data
 * ------------------------------------------------------------------ */
const LOCATIONS = [
  { id: 'phx',     city: 'Phoenix, AZ',       country: 'USA',         flag: '🇺🇸', type: 'hq',      typeLabel: 'US HQ & Factory',              coords: [-112.07, 33.45], since: 2003, size: '5,600 m²',  role: 'Head office, US manufacturing, and US & Canada distribution.',                                         image: '/images/facility-chandler.png' },
  { id: 'okc',     city: 'Oklahoma City, OK', country: 'USA',         flag: '🇺🇸', type: 'do',      typeLabel: 'US East Coast D.O.',           coords: [-97.52, 35.47],  since: 2023, size: '5,000 m²',  role: 'Storage and distribution for US & Canada East Coast.',                                                image: '/images/facility-okc.jpg' },
  { id: 'mex',     city: 'Mexico City',       country: 'Mexico',      flag: '🇲🇽', type: 'do',      typeLabel: 'LATAM D.O.',                   coords: [-99.13, 19.43],  since: 2025, size: '2,000 m²',  role: 'Office and storage. Latin America & Caribbean distribution and sales management.',                    image: '/images/facility-mexico.jpg' },
  { id: 'gouda',   city: 'Gouda',             country: 'Netherlands', flag: '🇳🇱', type: 'do',      typeLabel: 'Europe / Central Asia D.O.',   coords: [4.71, 52.02],                size: '2,000 m²',  role: "Warehouse in one of Europe's logistics hubs. Continental Europe, UK, Turkey distribution.",           image: '/images/facility-gouda.jpg' },
  { id: 'dubai',   city: 'Dubai',             country: 'UAE',         flag: '🇦🇪', type: 'do',      typeLabel: 'Middle East & Africa D.O.',    coords: [55.27, 25.20],   since: 2024, size: '1,200 m²',  role: 'Middle East, Africa & Central Asia distribution. Regional partner coordination.',                     image: '/images/facility-dubai.jpg' },
  { id: 'nanjing', city: 'Nanjing',           country: 'China',       flag: '🇨🇳', type: 'do',      typeLabel: 'East Asia D.O.',               coords: [118.80, 32.06], offset: [-28, -22], since: 2016, size: '9,300 m²',  role: 'Asia Pacific & China distribution hub. Global supply of Polarie-branded and Reflek Private Labelled products.', image: '/images/facility-nanjing.jpg' },
  { id: 'ganzhou', city: 'Ganzhou',           country: 'China',       flag: '🇨🇳', type: 'factory', typeLabel: 'Clear PPF + WF Manufacturing', coords: [114.94, 25.83], offset: [-24, 20],  since: 2025,                    role: 'Clear paint protection film and window film manufacturing.',                                           image: '/images/facility-ganzhou.png' },
  { id: 'suzhou',  city: 'Suzhou',            country: 'China',       flag: '🇨🇳', type: 'factory', typeLabel: 'Color PPF Manufacturing',      coords: [120.58, 31.30], offset: [28, 8],    since: 2026,                    role: 'Color paint protection film manufacturing.',                                                           image: '/images/facility-suzhou.png' },
  { id: 'hyd',     city: 'Hyderabad',         country: 'India',       flag: '🇮🇳', type: 'do',      typeLabel: 'South Asia-Pacific D.O.',      coords: [78.49, 17.39],   since: 2024,                    role: 'South Asia-Pacific distribution office.',                                                              image: '/images/facility-hyderabad.jpg' },
]

const TYPE_META = {
  hq:      { label: 'US Headquarters',      color: '#7ab929', radius: 9,  shape: 'factory', scale: 1.5 },
  factory: { label: 'Global Manufacturing', color: '#7ab929', radius: 7,  shape: 'factory', scale: 1   },
  do:      { label: 'Distribution Office',  color: '#ffffff', stroke: '#7ab929', radius: 5, shape: 'circle' },
}

/* Supply-chain flows — each pair is rendered as an arched great-circle
   route with a flowing green signal. Curated so the graph reads as a
   manufacturing-to-distribution network without looking crowded. */
const CONNECTIONS = [
  // North America — HQ feeds the domestic + LATAM hubs
  ['phx', 'okc'],
  ['phx', 'mex'],
  // Trans-Pacific + Trans-Atlantic backbones
  ['phx', 'nanjing'],
  ['phx', 'gouda'],
  // China factories feed the regional distribution hub
  ['ganzhou', 'nanjing'],
  ['suzhou', 'nanjing'],
  // Nanjing pushes product out through Asia / Middle East / Europe
  ['nanjing', 'hyd'],
  ['nanjing', 'dubai'],
  ['nanjing', 'gouda'],
]

// How far off the sphere surface the arc midpoint lifts, in pixels. Scales
// with the arc's great-circle length so long routes arch higher.
const ARC_MAX_LIFT = 70
const ARC_STEPS = 36

const FACTORY_PATH = 'M -10 7 L -10 0 L -5 -4 L -5 0 L 0 -4 L 0 0 L 5 -4 L 5 -8 L 8 -8 L 8 7 Z'

const WIDTH = 560
const HEIGHT = 560
const SPHERE_R = 240
const SPHERE_CX = WIDTH / 2
const SPHERE_CY = HEIGHT / 2

const TT_MARGIN = 12
const TT_GAP = 28    // leave room for the connector line
const CLOSE_DELAY_MS = 180

const INITIAL_ROTATION = [-18, -18, 0]
const IDLE_DEG_PER_S = 4.5            // passive spin speed

// Drag: pixel → degree conversion, plus a small threshold that gates clicks.
const DRAG_DEG_PER_PX = 0.4
const DRAG_THRESHOLD_PX = 4
const LAT_MAX = 80

// Inertia after a fling: exponential velocity decay toward zero.
// 0.94 ≈ velocity halves every ~11 frames (~180ms) — natural coast.
const INERTIA_FRICTION = 0.94
// Stop coasting when velocity drops below this many deg/frame.
const INERTIA_EPSILON = 0.015
// Sample this many ms of pointer history to compute release velocity.
const VELOCITY_SAMPLE_MS = 90
// If the pointer was stationary for longer than this before release, treat
// it as a deliberate stop and do NOT apply any fling inertia. Matches the
// feel of holding a real object still before letting go.
const STATIONARY_MS_BEFORE_RELEASE = 60

export default function GlobalGlobe() {
  const [hoverId, setHoverId] = useState(null)
  const [countries, setCountries] = useState(null)
  const [frameSize, setFrameSize] = useState({ w: 0, h: 0 })
  const [tipSize, setTipSize] = useState({ w: 0, h: 0 })
  const [rotation, setRotation] = useState(INITIAL_ROTATION)
  const [isDragging, setIsDragging] = useState(false)

  const frameRef = useRef(null)
  const svgRef = useRef(null)
  const tipRef = useRef(null)
  const closeTimerRef = useRef(null)
  const rafRef = useRef(null)
  const lastTsRef = useRef(0)

  // Rotation source of truth — the render reads this every frame.
  const baseRotationRef = useRef([...INITIAL_ROTATION])
  // True while a marker tooltip is open — pauses the idle spin.
  const pausedRef = useRef(false)
  // Drag bookkeeping.
  const dragStartRef = useRef(null)
  const didDragRef = useRef(false)
  // Recent pointer samples [{t, x, y}] — used to compute release velocity.
  const dragHistoryRef = useRef([])
  // Inertial velocity (degrees/frame) after a fling, decays via friction.
  const inertiaRef = useRef({ lon: 0, lat: 0 })
  // Was the first move predominantly horizontal? If not, we release the drag
  // and let the page scroll take over (prevents trap on mobile).
  const dragAxisLockedRef = useRef(null)  // null | 'x' | 'y-reject'

  /* ----------------------------------------------------------------
   * Tooltip open/close.
   * ---------------------------------------------------------------- */
  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  const scheduleClose = useCallback(() => {
    cancelClose()
    closeTimerRef.current = setTimeout(() => {
      setHoverId(null)
      pausedRef.current = false
    }, CLOSE_DELAY_MS)
  }, [cancelClose])

  const openMarker = useCallback((id) => {
    cancelClose()
    setHoverId(id)
    // Stop the idle spin while a card is visible — nothing moves unless the
    // user drags. The globe does NOT auto-rotate to face the marker.
    pausedRef.current = true
  }, [cancelClose])

  const closeTooltip = useCallback(() => {
    cancelClose()
    setHoverId(null)
    pausedRef.current = false
  }, [cancelClose])

  useEffect(() => () => cancelClose(), [cancelClose])

  // Tap outside a marker/tooltip to close (mobile).
  useEffect(() => {
    if (!hoverId) return
    const onDocDown = (e) => {
      const inTooltip = tipRef.current?.contains(e.target)
      const inMarker = e.target.closest?.('.gg-marker-group')
      if (!inTooltip && !inMarker) {
        setHoverId(null)
        pausedRef.current = false
      }
    }
    document.addEventListener('pointerdown', onDocDown)
    return () => document.removeEventListener('pointerdown', onDocDown)
  }, [hoverId])

  /* Countries topology. */
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

  /* Frame size. */
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

  /* ----------------------------------------------------------------
   * Animation loop — idle rotation only. No parallax, no mouse-follow.
   * ---------------------------------------------------------------- */
  useEffect(() => {
    const tick = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts
      const dt = (ts - lastTsRef.current) / 1000
      lastTsRef.current = ts

      // Inertia coast after a fling — dominates while velocity is non-zero.
      const iv = inertiaRef.current
      if (iv.lon !== 0 || iv.lat !== 0) {
        baseRotationRef.current[0] += iv.lon
        baseRotationRef.current[1] = Math.max(
          -LAT_MAX,
          Math.min(LAT_MAX, baseRotationRef.current[1] + iv.lat)
        )
        iv.lon *= INERTIA_FRICTION
        iv.lat *= INERTIA_FRICTION
        if (Math.abs(iv.lon) < INERTIA_EPSILON) iv.lon = 0
        if (Math.abs(iv.lat) < INERTIA_EPSILON) iv.lat = 0
      } else if (!pausedRef.current && !dragStartRef.current) {
        // Idle passive rotation when nothing else is moving the globe.
        baseRotationRef.current[0] += IDLE_DEG_PER_S * dt
      }

      const [lon, lat, roll] = baseRotationRef.current
      setRotation([lon, lat, roll])

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      lastTsRef.current = 0
    }
  }, [])

  /* ----------------------------------------------------------------
   * Click-and-drag to rotate. Pointer events cover mouse + touch.
   * ---------------------------------------------------------------- */
  const onPointerDown = useCallback((e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    // Don't capture pointer immediately on touch — wait until we've decided
    // this is actually a horizontal drag (not a vertical page scroll).
    // For mouse, capture right away since touch-action doesn't restrict.
    if (e.pointerType === 'mouse') {
      frameRef.current?.setPointerCapture?.(e.pointerId)
    }
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      lon: baseRotationRef.current[0],
      lat: baseRotationRef.current[1],
      pointerId: e.pointerId,
      pointerType: e.pointerType,
    }
    didDragRef.current = false
    dragAxisLockedRef.current = e.pointerType === 'mouse' ? 'x' : null
    dragHistoryRef.current = [{ t: e.timeStamp, x: e.clientX, y: e.clientY }]
    // Stop any ongoing inertia on a new press.
    inertiaRef.current = { lon: 0, lat: 0 }
    setIsDragging(true)
  }, [])

  const onPointerMove = useCallback((e) => {
    const ds = dragStartRef.current
    if (!ds || ds.pointerId !== e.pointerId) return
    const dx = e.clientX - ds.x
    const dy = e.clientY - ds.y

    // For touch: decide on first real move whether this is a horizontal drag
    // or a vertical scroll. If vertical, bail and let the browser scroll.
    if (dragAxisLockedRef.current === null) {
      if (Math.abs(dx) + Math.abs(dy) < DRAG_THRESHOLD_PX) return
      if (Math.abs(dy) > Math.abs(dx) * 1.3) {
        // Mostly vertical → the browser should handle this as a scroll.
        dragAxisLockedRef.current = 'y-reject'
        dragStartRef.current = null
        setIsDragging(false)
        return
      }
      dragAxisLockedRef.current = 'x'
      frameRef.current?.setPointerCapture?.(e.pointerId)
    }

    if (!didDragRef.current && (Math.abs(dx) + Math.abs(dy)) > DRAG_THRESHOLD_PX) {
      didDragRef.current = true
    }

    if (didDragRef.current) {
      baseRotationRef.current[0] = ds.lon + dx * DRAG_DEG_PER_PX
      // On touch we only rotate longitude (vertical gesture is for scroll).
      if (ds.pointerType === 'mouse') {
        baseRotationRef.current[1] = Math.max(
          -LAT_MAX,
          Math.min(LAT_MAX, ds.lat - dy * DRAG_DEG_PER_PX)
        )
      }
    }

    // Track recent samples so we can compute release velocity for inertia.
    const h = dragHistoryRef.current
    h.push({ t: e.timeStamp, x: e.clientX, y: e.clientY })
    const cutoff = e.timeStamp - VELOCITY_SAMPLE_MS
    while (h.length > 2 && h[0].t < cutoff) h.shift()
  }, [])

  const onPointerUp = useCallback((e) => {
    const ds = dragStartRef.current
    if (!ds || ds.pointerId !== e.pointerId) return

    const h = dragHistoryRef.current
    // Only coast if the user actually dragged AND the pointer was still in
    // motion at the moment of release. If they held still (no new samples
    // for ≥ STATIONARY_MS_BEFORE_RELEASE) before letting go, velocity is 0.
    const lastSampleAge = h.length ? e.timeStamp - h[h.length - 1].t : Infinity
    const shouldFling = didDragRef.current
      && h.length >= 2
      && lastSampleAge < STATIONARY_MS_BEFORE_RELEASE

    if (shouldFling) {
      const first = h[0]
      const last = h[h.length - 1]
      const dtMs = Math.max(1, last.t - first.t)
      const framesPerMs = 60 / 1000
      const velX = ((last.x - first.x) / dtMs) * DRAG_DEG_PER_PX / framesPerMs
      const velY = ((last.y - first.y) / dtMs) * DRAG_DEG_PER_PX / framesPerMs
      inertiaRef.current = {
        lon: velX,
        lat: ds.pointerType === 'mouse' ? -velY : 0,
      }
    }

    frameRef.current?.releasePointerCapture?.(e.pointerId)
    dragStartRef.current = null
    dragAxisLockedRef.current = null
    dragHistoryRef.current = []
    setIsDragging(false)
  }, [])

  /* Projection rebuilds on every rotation tick. */
  const projection = useMemo(
    () =>
      geoOrthographic()
        .translate([SPHERE_CX, SPHERE_CY])
        .scale(SPHERE_R)
        .rotate(rotation)
        .clipAngle(90),
    [rotation]
  )
  const pathGen = useMemo(() => geoPath(projection), [projection])

  /* Marker state. For locations that cluster (China trio) we keep two
     coordinates: the anchor dot on the sphere surface at the real geo
     position (gx, gy) and the marker itself shifted by a pixel offset
     (mx, my) so it doesn't overlap its neighbors. A leader line connects
     the two. Locations without an offset have mx=gx, my=gy. */
  const markerState = useCallback((loc) => {
    const center = [-rotation[0], -rotation[1]]
    const dist = geoDistance(loc.coords, center)
    const visible = dist < Math.PI / 2 - 0.01
    const [gx, gy] = projection(loc.coords) || [0, 0]
    const [dx, dy] = loc.offset || [0, 0]
    return { visible, gx, gy, mx: gx + dx, my: gy + dy, dist }
  }, [projection, rotation])

  /* Convert viewBox coords to frame pixels for positioning DOM elements. */
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

  const hoverLoc = LOCATIONS.find((l) => l.id === hoverId)

  const tipPos = useMemo(() => {
    if (!hoverLoc) return null
    // Tooltip should attach to the marker the user actually sees/clicks,
    // which is the offset position (mx, my) — not the anchor dot.
    const { mx, my } = markerState(hoverLoc)
    return viewBoxToFrame(mx, my)
  }, [hoverLoc, markerState, viewBoxToFrame])

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

  /* Tooltip placement + connector geometry. */
  const placement = useMemo(() => {
    if (!tipPos || !frameSize.w || !frameSize.h || !tipSize.w || !tipSize.h) return null

    const spaceRight = frameSize.w - tipPos.x
    const spaceLeft = tipPos.x
    const needed = tipSize.w + TT_GAP + TT_MARGIN
    const onLeft = spaceRight < needed && spaceLeft >= needed
    const tooltipOnLeft = spaceRight < needed && spaceLeft < needed
      ? spaceLeft > spaceRight
      : onLeft

    const left = tooltipOnLeft
      ? Math.max(TT_MARGIN, tipPos.x - TT_GAP - tipSize.w)
      : Math.min(tipPos.x + TT_GAP, frameSize.w - tipSize.w - TT_MARGIN)

    const rawTop = tipPos.y - tipSize.h / 2
    const maxTop = Math.max(TT_MARGIN, frameSize.h - tipSize.h - TT_MARGIN)
    const top = Math.max(TT_MARGIN, Math.min(rawTop, maxTop))

    // Where the connector line meets the card: the edge facing the marker,
    // at the marker's own Y (clamped inside the card height).
    const cardEdgeX = tooltipOnLeft ? left + tipSize.w : left
    const cardEdgeY = Math.max(top + 16, Math.min(tipPos.y, top + tipSize.h - 16))

    return { left, top, tooltipOnLeft, cardEdgeX, cardEdgeY }
  }, [tipPos, frameSize, tipSize])

  const spherePath = useMemo(() => pathGen({ type: 'Sphere' }), [pathGen])

  /* Build smooth arched connectors between each connected pair as single
     quadratic Béziers. The control point offsets perpendicular to the
     chord in the direction away from the globe center, which gives a
     predictably smooth arc no matter where the two endpoints sit on
     the sphere — no kinks, no weird bends near the view center.

     Before drawing, we still sample the great circle to make sure no
     intermediate point is on the back hemisphere; if the great-circle
     arc would wrap around the back we skip the connector entirely
     instead of drawing a straight cut across the front. */
  const arcs = useMemo(() => {
    if (!countries) return []
    const byId = Object.fromEntries(LOCATIONS.map((l) => [l.id, l]))
    const result = []
    const center = [-rotation[0], -rotation[1]]

    for (const [fromId, toId] of CONNECTIONS) {
      const a = byId[fromId]
      const b = byId[toId]
      if (!a || !b) continue

      // Both endpoints must be on the front hemisphere.
      if (geoDistance(a.coords, center) >= Math.PI / 2 - 0.01) continue
      if (geoDistance(b.coords, center) >= Math.PI / 2 - 0.01) continue

      // Great-circle visibility guard: if any intermediate sample is on
      // the back hemisphere, the true arc wraps around — don't draw a
      // straight chord pretending to be it.
      const interp = geoInterpolate(a.coords, b.coords)
      let hiddenMid = false
      for (let i = 1; i < ARC_STEPS; i++) {
        if (geoDistance(interp(i / ARC_STEPS), center) >= Math.PI / 2 - 0.01) {
          hiddenMid = true
          break
        }
      }
      if (hiddenMid) continue

      // Terminate the arc at the VISIBLE marker position (mx,my), which for
      // offset locations (Nanjing/Ganzhou/Suzhou) is the standoff dot rather
      // than the real projection. That way the connection visually hits the
      // same dot the user clicks. The dashed leader line still bridges back
      // to the geographic anchor, so geography reads cleanly too.
      const aState = markerState(a)
      const bState = markerState(b)
      const { mx: ax, my: ay } = aState
      const { mx: bx, my: by } = bState
      if (isNaN(ax) || isNaN(bx)) continue

      const arcLen = geoDistance(a.coords, b.coords)
      const lift = ARC_MAX_LIFT * Math.min(1, arcLen / (Math.PI / 2))

      // Midpoint of the chord, then push the control point outward from
      // the sphere center. This creates a smooth quadratic that always
      // reads as arching away from the globe.
      const midX = (ax + bx) / 2
      const midY = (ay + by) / 2
      const dx = midX - SPHERE_CX
      const dy = midY - SPHERE_CY
      const r = Math.sqrt(dx * dx + dy * dy) || 1
      // Extra lift factor accounts for the fact that a quadratic Bézier
      // reaches only half the control-point distance at its apex.
      const controlLift = lift * 2
      const ctrlX = midX + (dx / r) * controlLift
      const ctrlY = midY + (dy / r) * controlLift

      const d = `M ${ax.toFixed(2)},${ay.toFixed(2)} Q ${ctrlX.toFixed(2)},${ctrlY.toFixed(2)} ${bx.toFixed(2)},${by.toFixed(2)}`
      result.push({ id: `${fromId}-${toId}`, d, arcLen })
    }
    return result
  }, [markerState, projection, rotation, countries])

  return (
    <div
      className={`gg-frame ${isDragging ? 'is-dragging' : ''}`}
      ref={frameRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div className="gg-atmosphere" aria-hidden="true" />

      <svg
        ref={svgRef}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
        className="gg-svg"
        role="img"
        aria-label="Interactive 3D globe showing Reflek's global locations"
      >
        <defs>
          <radialGradient id="gg-ocean" cx="38%" cy="32%" r="72%">
            <stop offset="0%" stopColor="#f4f7f0" />
            <stop offset="55%" stopColor="#e3eadd" />
            <stop offset="100%" stopColor="#c7d3b9" />
          </radialGradient>
          <radialGradient id="gg-rim" cx="50%" cy="50%" r="50%">
            <stop offset="85%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(17,32,8,0.28)" />
          </radialGradient>
          <radialGradient id="gg-glint" cx="30%" cy="20%" r="40%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <clipPath id="gg-sphere-clip">
            <path d={spherePath || ''} />
          </clipPath>
        </defs>

        <path d={spherePath} fill="url(#gg-ocean)" />

        <g clipPath="url(#gg-sphere-clip)">
          {countries?.features.map((f, i) => (
            <path
              key={i}
              d={pathGen(f)}
              fill="#ffffff"
              stroke="#c7d3b9"
              strokeWidth={0.4}
              className="gg-country"
            />
          ))}
        </g>

        <path d={spherePath} fill="url(#gg-rim)" pointerEvents="none" />
        <path d={spherePath} fill="url(#gg-glint)" pointerEvents="none" />

        {/* ── Supply-chain arcs ──
            AnimatePresence handles the enter/exit opacity transitions:
            1s fade-in on mount (when both endpoints rotate into view),
            0.5s fade-out on unmount (when either endpoint rotates away). */}
        <g className="gg-arcs" clipPath="url(#gg-sphere-clip)" pointerEvents="none">
          <AnimatePresence>
            {arcs.map((arc) => (
              <motion.g
                key={arc.id}
                className="gg-arc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1,   ease: 'easeOut' } }}
                exit   ={{ opacity: 0, transition: { duration: 0.5, ease: 'easeIn'  } }}
              >
                {/* Faint continuous track — shows the whole route */}
                <path d={arc.d} className="gg-arc-track" />
                {/* Two flowing signals moving in opposite directions so the
                    route reads as bidirectional logistics, not a one-way feed. */}
                <path d={arc.d} className="gg-arc-flow gg-arc-flow--forward" />
                <path d={arc.d} className="gg-arc-flow gg-arc-flow--reverse" />
              </motion.g>
            ))}
          </AnimatePresence>
        </g>

        {/* ── Leader lines + anchor dots for offset markers (rendered before
            marker groups so markers sit on top). Fade matches their markers. ── */}
        <AnimatePresence>
          {LOCATIONS.filter((l) => l.offset).map((loc) => {
            const { visible, gx, gy, mx, my } = markerState(loc)
            if (!visible) return null
            return (
              <motion.g
                key={`leader-${loc.id}`}
                className="gg-leader"
                pointerEvents="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1,   ease: 'easeOut' } }}
                exit   ={{ opacity: 0, transition: { duration: 0.5, ease: 'easeIn'  } }}
              >
                <line
                  x1={gx} y1={gy} x2={mx} y2={my}
                  stroke="#7ab929"
                  strokeWidth={1}
                  strokeDasharray="2 2"
                  opacity={0.6}
                />
                <circle cx={gx} cy={gy} r={2} fill="#7ab929" />
              </motion.g>
            )
          })}
        </AnimatePresence>

        {/* ── Location markers — fade in/out as they rotate on/off the
            visible hemisphere so they match the arc transitions. ── */}
        <AnimatePresence>
          {LOCATIONS.map((loc) => {
            const meta = TYPE_META[loc.type]
            const { visible, mx, my } = markerState(loc)
            if (!visible) return null
            const isActive = loc.id === hoverId
            return (
              <motion.g
                key={loc.id}
                transform={`translate(${mx}, ${my})`}
                className="gg-marker-group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1,   ease: 'easeOut' } }}
                exit   ={{ opacity: 0, transition: { duration: 0.5, ease: 'easeIn'  } }}
                onPointerEnter={(e) => {
                  // Touch synthesizes enter/leave around taps — skip, or the
                  // card flashes open→close→open between pointerenter, the
                  // auto pointerleave on lift, and the final click.
                  if (e.pointerType !== 'mouse') return
                  if (!dragStartRef.current) openMarker(loc.id)
                }}
                onPointerLeave={(e) => {
                  if (e.pointerType !== 'mouse') return
                  scheduleClose()
                }}
                onClick={(e) => {
                  if (didDragRef.current) { e.stopPropagation(); return }
                  openMarker(loc.id)
                }}
              >
                <circle r={meta.radius + 10} fill="transparent" />
                <circle
                  r={meta.radius + 6}
                  fill="#7ab929"
                  className="gg-marker-halo"
                  opacity={isActive ? 0.35 : 0.18}
                />
                {meta.shape === 'factory' ? (
                  <path
                    d={FACTORY_PATH}
                    transform={`scale(${(meta.scale ?? 1) * 0.75})`}
                    fill={meta.color}
                    className={`gg-marker ${isActive ? 'is-active' : ''}`}
                  />
                ) : (
                  <circle
                    r={meta.radius}
                    fill={meta.color}
                    stroke={meta.stroke || meta.color}
                    strokeWidth={meta.stroke ? 2 : 0}
                    className={`gg-marker ${isActive ? 'is-active' : ''}`}
                  />
                )}
              </motion.g>
            )
          })}
        </AnimatePresence>
      </svg>

      {/* Connector overlay SVG — renders above the globe but below the tooltip. */}
      {hoverLoc && tipPos && placement && (
        <svg
          className="gg-connector"
          width={frameSize.w}
          height={frameSize.h}
          viewBox={`0 0 ${frameSize.w} ${frameSize.h}`}
          aria-hidden="true"
        >
          <defs>
            <filter id="gg-line-glow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <line
            x1={tipPos.x}
            y1={tipPos.y}
            x2={placement.cardEdgeX}
            y2={placement.cardEdgeY}
            stroke="#7ab929"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.85"
            filter="url(#gg-line-glow)"
          />
          <circle
            cx={placement.cardEdgeX}
            cy={placement.cardEdgeY}
            r="3"
            fill="#7ab929"
            filter="url(#gg-line-glow)"
          />
        </svg>
      )}

      {hoverLoc && tipPos && (
        <div
          ref={tipRef}
          className={`gg-tooltip ${placement?.tooltipOnLeft ? 'is-left' : 'is-right'}`}
          style={{
            left: `${placement ? placement.left : tipPos.x + TT_GAP}px`,
            top: `${placement ? placement.top : tipPos.y - 100}px`,
            visibility: placement ? 'visible' : 'hidden',
          }}
          role="tooltip"
          onPointerEnter={(e) => { if (e.pointerType === 'mouse') cancelClose() }}
          onPointerLeave={(e) => { if (e.pointerType === 'mouse') scheduleClose() }}
        >
          <div className="gg-tt-inner">
            <button
              type="button"
              className="gg-tt-close"
              onClick={closeTooltip}
              aria-label="Close"
            >
              <FiX />
            </button>
            {hoverLoc.image && (
              <div className="gg-tt-image">
                <img
                  src={hoverLoc.image}
                  alt={`${hoverLoc.city} facility`}
                  onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
                />
              </div>
            )}
            <div className="gg-tt-header">
              <span className="gg-tt-flag" aria-hidden="true">{hoverLoc.flag}</span>
              <div>
                <div className="gg-tt-city">{hoverLoc.city}</div>
                <div className="gg-tt-country">{hoverLoc.country}</div>
              </div>
            </div>
            <div className="gg-tt-type">{hoverLoc.typeLabel}</div>
            <div className="gg-tt-meta">
              {hoverLoc.size && <span>{hoverLoc.size}</span>}
              {hoverLoc.since && <span>Since {hoverLoc.since}</span>}
            </div>
            <p className="gg-tt-role">{hoverLoc.role}</p>
            <Link
              to={`/contact-us?office=${hoverLoc.id}`}
              className="gg-tt-cta"
              onClick={(e) => e.stopPropagation()}
            >
              Contact this office →
            </Link>
          </div>
        </div>
      )}

      <div className="gg-legend">
        {Object.entries(TYPE_META).map(([key, m]) => (
          <div key={key} className="gg-legend-item">
            {m.shape === 'factory' ? (
              <svg className="gg-legend-icon" viewBox="-11 -9 22 18" aria-hidden="true">
                <path d={FACTORY_PATH} fill={m.color} />
              </svg>
            ) : (
              <span
                className="gg-legend-dot"
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

      <div className="gg-hint" aria-hidden="true">
        <span className="gg-hint-dot" />
        Click & drag to spin — tap a location for details
      </div>
    </div>
  )
}
