import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import WorkDetail from './Pages/WorkDetail/WorkDetail'
import './App.css'
import NotFound from './Pages/NotFound/NotFound'
import { ThemeConfig } from "flowbite-react";
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import GA4 from './Components/GA4'



const AppContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/:slug" element={<WorkDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

const App: React.FC = () => {
  // Measurement ID di Google Analytics 4 per bekboard.it
  const GA4_MEASUREMENT_ID = 'G-6XLWD36R97'

  return (
    <Router>
      <ThemeConfig dark={false} />
      <GA4 measurementId={GA4_MEASUREMENT_ID} />
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}

export default App