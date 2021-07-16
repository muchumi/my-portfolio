import classes from './Home.module.css'
import profile from './../img/profile.jpg'

const Home = () => {
    return(
        <div className={classes.Home}>
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello, World! <br /> Welcome to my portfolio website.</h1>
                <p className={classes.Bio}>My names are <span>Wycliffe Muchumi</span>, a Software Developer <br /> who is passionate about building products <br />
                that positively impact the surrounding community and touch lives.</p>
                <h1 className={classes.Inspiration}>How it all started?</h1>
                <p className={classes.Details}>I have always been passionate about technology specifically web applications.<br /> Although without a clue or knowledge on where or <br /> how to start,all this changed when I joined JKUAT <br />
                as a BBIT undergraduate student in 2013.In my <br /> introduction to computer programming class, my interest <br /> in coding grew and saw me start building small website landing pages for fun.<br />
                This interest has now elevated me to where I am today. <br />
                Now I am proficient in <span>Python(Flask)</span> and <span>JavaScript ES6(React.JS)</span> <br /> which I use
                in building robust REST and RESTful APIs <br /> with inspiring UIs. ...Enjoy... !!!
                </p> 
            </div>
            <img className={classes.Image} src={profile} alt="profile"></img>
        </div>

    )
}

export default Home;