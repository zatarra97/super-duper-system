import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resetta la posizione di scroll in cima ad ogni cambio di rotta
const ScrollToTop: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname, location.search])

  return null
}

export default ScrollToTop


