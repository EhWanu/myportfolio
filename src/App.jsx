import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Sidebar from './components/Sidebar/Sidebar'
import Testimonials from './components/Testimonials/Testimonials'
import './App.scss'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
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
 