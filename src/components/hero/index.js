import './header.css';
import {Link} from 'react-router-dom';

const Hero = ()=>{
    return(    
 
            <header>
                <article>
                    <hr/>
                    <div className="button-container">
                        <Link className="nav-button" to="/"> HOME </Link>
                        <Link className="nav-button" to="/products"> PRODUCTS</Link>
                    </div>
                </article>
                <img src="/images/CYBERLOGO.png" alt="Logo"/>
                <article>
                    <hr/>
                    <div className="button-container">
                        <Link className="nav-button" to="/"> PROFILE</Link>
                        <Link className="nav-button" to="/contact">CONTACT-US </Link>
                    </div>
                </article>
            </header>
    )
}

export default Hero;
