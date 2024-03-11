import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages'
import { Footer, Navbar, ScrollToTop } from './components'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
