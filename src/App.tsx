import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages'
import ErrorPage from './pages/ErrorPage'
import { Footer, Navbar, ScrollToTop } from './components'

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
