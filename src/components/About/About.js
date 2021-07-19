import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'

const About = () => {
    return(
        <div className={classes.Container}>
            <PageHeader title={'About Me'} />
            <div className={classes.AboutMe} id="about">
                <p className={classes.AboutMeDetails}>
                    I am a Software Developer based in Nairobi, Kenya who is looking for an entry-level role where I 
                    can bring my gained skills and <br /> grow them as I move under mentorship of senior Engineers.I love 
                    working on projects that get me out of my comfort zone as learning <br /> new technologies is as vital 
                    as the Oxygen I breath.My aura is made up of a great learning attitude, higly motivated with a 
                    humble <br /> spirit that accepts being guided and corrected. 
                </p> 
            </div>
        </div>
       
    );
}

export default About;