
import './App.css'
import MyIntroduction from './components/MyIntroduction'
import Footer from './components/Footer'
import Demo from './components/Demo'
import { Link, Element, animateScroll as scroll } from 'react-scroll';

function App() {
  return (
    <>
      <header className="header">
            <h1 className="logoSite">CJDP</h1>
           <nav>
                    <ul className="nav-list">
                        <li>
                        <Link to="introduction" smooth={true} offset={-100} duration={500}>About Me</Link>
                        </li>
                       <li>
                       <Link to="introductiontwo" smooth={true} offset={-100} duration={500}>Expertise</Link>
                       </li>
                       <li>
                       <Link to="demo" smooth={true} offset={-100} duration={500}>Work Experience</Link>
                       </li>
                    </ul>
                </nav>
            </header>
         
      <Element name='introduction'>
      <MyIntroduction />
      </Element>
      <Element name='introductiontwo'>
      <MyIntroduction />
      </Element>
      <Element name='demo'>
         <Demo />
      </Element>
  
      <Footer />
    </>
  )
}

export default App
