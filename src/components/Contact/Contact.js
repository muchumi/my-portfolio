import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import classes from './Contact.module.css'

const handleURL = (url) => {
    return () => window.open(url, "_blank")
}
const Contact = () => {
    return(
        <div className={classes.Contact} id="contact">
            <ul>
                <li><FaGithub color='white' size='30px' style={{padding: '1%'}} onClick={handleURL('https://github.com/muchumi')} /></li>
                <li><FaLinkedin color="white" size='30px' style={{padding: '1%'}} onClick={handleURL('https://www.linkedin.com/in/wycliffe-muchumi-809015163/')}/></li>
                <li><FaTwitter color="white" size='30px' style={{padding: '1%'}} onClick={handleURL('https://twitter.com/Muchumi_KE')}/></li>
                <li><FaInstagram color="white" size='30px' style={{padding: '1%'}} onClick={handleURL('https://www.instagram.com/muchumi_ke/')}/></li>
            </ul>
        </div>
    );
}

export default Contact;