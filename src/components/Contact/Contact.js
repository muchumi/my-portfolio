import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import classes from './Contact.module.css'

const handleURL = (url) => {
    return () => window.open(url, "_blank")
}
const Contact = () => {
    return(
        <div className={classes.Contact} id="contact">
            <div className={classes.ContactIcons}>
                <FaGithub color='white' size='30px' style={{padding: '1%'}} onClick={handleURL('https://github.com/muchumi')} />
                <FaLinkedin color="white" size='30px' style={{padding: '1%'}} onClick={handleURL('https://www.linkedin.com/in/wycliffe-muchumi-809015163/')}/>
                <FaTwitter color="white" size='30px' style={{padding: '1%'}} onClick={handleURL('https://twitter.com/Muchumi_KE')}/>
                <FaInstagram color="white" size='30px' style={{padding: '1%'}} onClick={handleURL('https://www.instagram.com/muchumi_ke/')}/>
            </div>
        </div>
    );
}

export default Contact;