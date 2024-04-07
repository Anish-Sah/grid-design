import { HashRouter, Routes, Route } from 'react-router-dom'
import {
  AboutPage,
  ContactPage,
  LandingPage,
  PortfolioPage,
  TeamPage,
} from './pages'
import ErrorPage from './pages/ErrorPage'
import { Footer, Navbar, NextButton, ScrollToTop } from './components'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/get-in-touch" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <NextButton />
      <Footer />
    </HashRouter>
  )
}

export default App
