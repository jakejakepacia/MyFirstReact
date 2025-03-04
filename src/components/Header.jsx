import './Header.css';
import {Link} from 'react-scroll'
import '../App' 
export default function Header() {
    return(
        <>
        <header className="header">
            <h1 className="logoSite">CJDP</h1>
            <nav>
                <ul className="nav-list">
                    <li>
                    <Link to="introduction" smooth={true} offset={200} duration={500}>About Me</Link>
                    </li>
                   <li>
                   <Link to="introductiontwo" smooth={true} offset={200} duration={500}>Expertise</Link>
                   </li>
                    
                 <li>Work Experience</li>
                </ul>
            </nav>
        </header>
     
       
        </>
    )
}

