import classes from './Home.module.css'
import profile from './../img/profile.jpg'

const Home = () => {
    return(
        <div className={classes.Home}>
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello, World! <br /> Welcome to my portfolio website.</h1>
                <p className={classes.Bio}>My names are <span>Wycliffe Muchumi</span>, a Software Developer <br /> who is passionate about building products <br />
                that positively impact the surrounding community and touch lives.</p>
                <h1 className={classes.Inspiration}>How did it start?</h1>
                <p className={classes.Details}>I have always been passionate about programming.<br /> Although without a clue or knowledge on where or <br /> how to start,all this changed when I joined JKUAT <br />
                as a BBIT undergraduate student in 2013.In my <br /> introduction to C programming language class, my interest <br /> in coding grew with great enthusiasm and my passion <br /> elevated me to where I am today.
                Now am a guru in two stacks <br />
                mainly, <span>Python(Flask)</span> and <span>JavaScript ES6(React.JS)</span> <br /> that I use
                in building robust REST and RESTful APIs.
                </p> 
            </div>
            <img className={classes.Image} src={profile} alt="profile"></img>
        </div>
    )
}

export default Home;