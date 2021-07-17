import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'
import html from './../img/html.png'
import css from './../img/css.jpg'
import jquery from './../img/jquery.png'
import javascript from './../img/javascript.png'
import react from './../img/react.png'
import python from './../img/python.png'
import flask from './../img/flask.png'
import postgresql from './../img/postgresql.png'
import docker from './../img/docker.png'

const backendSkills = 
<ul>
    <li><span>BACKEND SKILLS</span></li>
    <li>Python(FLASK) - Comfortable</li>
    <li>Test Driven Development - Pytest</li>
    <li>C++(RESTBED) - (Learning)</li>
</ul>

const frontendSkills =
<ul>
    <li><span>FRONTEND SKILLS</span></li>
    <li>HTML5</li>
    <li>CSS</li>
    <li>Bootstrap 4.0</li>
    <li>JQuery</li>
    <li>JavaScript(ES5 & ES6)</li>
    <li>React Library</li>
</ul>
const otherSkills = 
<ul>
    <li><span>OTHER SKILLS</span></li>
    <li>JSON</li>
    <li>Docker</li>
    <li>Nginx Server</li>
    <li>Heroku</li>
    <li>Digital Ocean</li>
</ul>
const developmentTools = 
<ul>
    <li><span>DEVELOPMENT TOOLS</span></li>
    <li>Git</li>
    <li>Visual Studio Code</li>
</ul>

const totalSkills = [backendSkills, frontendSkills, otherSkills, developmentTools];

const Skills = () => {
    return(
        <div className={classes.Skills}>
            <PageHeader title={'Skills'}/>
            <div className={classes.SkillsSection}>
                <div className={classes.SkillsDetails}>
                    <p>
                        I am a life long learner and enjoy learning new technologies! 
                        The mentioned below are some of the programming languages, frameworks, <br /> 
                        libraries and developmemt tools that I am comfortable with:-
                    </p>
                </div>
                <div className={classes.Container}>
                    {totalSkills.map(skills => {
                        return(
                            <div className = {classes.List}>
                                {skills}
                            </div>
                        )
                    })}
                </div>
            </div>
            <PageHeader title={'Tech Stack'}/>
            <div className={classes.TechStack}>
                <img src={html} alt="HTML5"/>
                <img src={css} alt="CSS"/>
                <img src={jquery} hspace="20" alt="JQuery"/>
                <img src={javascript} hspace="20" alt="JavaScript"/>
                <img src={react} hspace="20" alt="React"/>
                <img src={python} hspace="20" alt="Python"/>
                <img src={flask} hspace="20" alt="Flask"/>
                <img src={postgresql} hspace="20" alt="Postgresql"/>
                <img src={docker} hspace="20" alt="Docker"/>
            </div>
        </div>
    );
}

export default Skills;