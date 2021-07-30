import './header.css';
import Home from "../../pages/home";
import ProductsPage from "../../pages/product";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ContactPage from "../../pages/contact/contact";

const Hero = ()=>{
    return(    
        <Router>
            <header>
                <article>
                    <hr/>
                    <div className="button-container">
                        <Link className="nav-button" to="/index"> HOME </Link>
                        <Link className="nav-button" to="/products"> PRODUCTS</Link>
                    </div>
                </article>
                <img src="/images/CYBERLOGO.png" alt="Logo"/>
                <article>
                    <hr/>
                    <div className="button-container">
                        <Link className="nav-button" to="/index"> PROFILE</Link>
                        <Link className="nav-button" to="/contact">CONTACT-US </Link>
                    </div>
                </article>
            </header>

            <Route path="/index" exact component={Home} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/contact" component={ContactPage}/>
        </Router>

    )
}

export default Hero;
