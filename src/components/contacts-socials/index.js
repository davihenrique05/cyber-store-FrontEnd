import './socials.css';

function SocialLink(props) {

    return (
        <>
            <div className="link-container" href="#">
                <img src={props.src} alt={`Icone para ${props.span}`}></img>
                <span>{props.span}</span>
            </div>
        </>
    )
}

export default SocialLink;