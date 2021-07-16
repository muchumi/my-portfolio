import classes from './NavBar.module.css'

const NavBar = () => {
    return(
        <div className={classes.NavBar}>
            <nav>
                <ul>
                    <li>
                        <a href="/"><i class="fas fa-home"></i> Home</a>
                    </li>
                    <li>
                        <a href="/about"><i class="fas fa-address-card"></i> About Me</a>
                    </li>
                    <li>
                        <a href="/skills"><i class="fas fa-tools"></i> Skills</a>
                    </li>
                    <li>
                        <a href="/skills"><i class="fas fa-project-diagram"></i> Projects</a>
                    </li>
                    <li>
                        <a href="/contact"><i class="fas fa-envelope"></i> <i class="fas fa-phone-square"></i> Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;