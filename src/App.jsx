import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import PaintProtection from './pages/PaintProtection'
import SolarFilms from './pages/SolarFilms'
import CustomCoatings from './pages/CustomCoatings'
import Electronics from './pages/Electronics'
import News from './pages/News'
import Distributors from './pages/Distributors'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/paint-protection" element={<PaintProtection />} />
            <Route path="/solar-films" element={<SolarFilms />} />
            <Route path="/custom-coatings" element={<CustomCoatings />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/news" element={<News />} />
            <Route path="/distributors" element={<Distributors />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </>
  )
}

export default App
