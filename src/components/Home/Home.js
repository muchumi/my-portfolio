import classes from './Home.module.css'
import profile from './../img/profile.jpg'

const Home = () => {
    return(
        <div className={classes.Home}>
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello, World.</h1>
                <h1>Welcome to my website</h1>
            </div>
            <img className={classes.Image} src={profile} alt="profile"></img>
        </div>
    )
}

export default Home;