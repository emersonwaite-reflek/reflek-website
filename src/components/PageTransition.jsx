import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function PageTransition({ children }) {
  const location = useLocation()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [fade, setFade] = useState('page-enter')

  useEffect(() => {
    setFade('page-exit')
    const timeout = setTimeout(() => {
      setDisplayChildren(children)
      window.scrollTo(0, 0)
      setFade('page-enter')
    }, 250)
    return () => clearTimeout(timeout)
  }, [location.pathname])

  return <div className={`page-transition ${fade}`}>{displayChildren}</div>
}
