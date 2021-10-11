import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Sidebar from './components/Sidebar/Sidebar'
import Testimonials from './components/Testimonials/Testimonials'
import './App.scss'
import { useState } from 'react'

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Hero />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </div>
      
    </div>
  );
}

export default App;
 