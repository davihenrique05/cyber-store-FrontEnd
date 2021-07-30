import './header.css';
import { Link } from 'react-router-dom';
import * as Styled from '../button/button.styles';

const Hero = () => {
    return (

        <header>
            <article>
                <hr />
                <div className="button-container">
                    <Styled.Button customheight="100%" customwidth="30%" as={Link} to="/"> HOME </Styled.Button>
                    <Styled.Button customheight="100%" customwidth="30%" as={Link} to="/products"> PRODUCTS </Styled.Button>
                </div>
            </article>
            <img src="/images/CYBERLOGO.png" alt="Logo" />
            <article>
                <hr />
                <div className="button-container">
                    <Styled.Button customheight="100%" customwidth="30%" as={Link} to="/profile"> PROFILE </Styled.Button>
                    <Styled.Button customheight="100%" customwidth="30%" as={Link} to="/contact"> CONTACT-US </Styled.Button>
                </div>
            </article>
        </header >
    )
}

export default Hero;
