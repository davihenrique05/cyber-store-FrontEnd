import SocialLink from "../../components/contacts-socials";

import './contacts.css';
function ContactPage (){

    return(
        <article className="contact-container">
            <h2> Contact-us</h2>
            <p> Send us an email about your problem <label>costumer@cyberstore.com.br</label></p>
            <br/>

            <SocialLink src="./images/mail_black_24dp.svg" span="E-mail"/>
            <SocialLink src="./images/facebook_black_24dp.svg" span="Facebook"/>
            <SocialLink src="./images/github.png" span="Repositório"/>
        </article>
    )
}

export default ContactPage;