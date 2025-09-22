import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import WorkDetail from './Pages/WorkDetail/WorkDetail'
import Animation from './Pages/Animation/Animation'
import './App.css'
import NotFound from './Pages/NotFound/NotFound'
import { ThemeConfig } from "flowbite-react";
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'



const AppContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/:slug" element={<WorkDetail />} />
      <Route path="/animation" element={<Animation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <ThemeConfig dark={false} />
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}

export default App