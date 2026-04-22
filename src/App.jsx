import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import PaintProtection from './pages/PaintProtection'
import SolarFilms from './pages/SolarFilms'
import CustomCoatings from './pages/CustomCoatings'
import Electronics from './pages/Electronics'
import News from './pages/News'
import Branches from './pages/Branches'
import Contact from './pages/Contact'
import MockupA from './pages/MockupA'
import MockupB from './pages/MockupB'
import MockupC from './pages/MockupC'
import MockupD from './pages/MockupD'
import MockupE from './pages/MockupE'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Mockup previews — standalone, no navbar/footer */}
        <Route path="/mockup-a" element={<MockupA />} />
        <Route path="/mockup-b" element={<MockupB />} />
        <Route path="/mockup-c" element={<MockupC />} />
        <Route path="/mockup-d" element={<MockupD />} />
        <Route path="/mockup-e" element={<MockupE />} />

        {/* Main site */}
        <Route path="/*" element={
          <>
            <Navbar />
            <main style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/paint-protection" element={<PaintProtection />} />
                <Route path="/solar-films" element={<SolarFilms />} />
                <Route path="/custom-coatings" element={<CustomCoatings />} />
                <Route path="/electronics" element={<Electronics />} />
                <Route path="/news" element={<News />} />
                <Route path="/branches" element={<Branches />} />
                <Route path="/distributors" element={<Branches />} />
                <Route path="/contact-us" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
