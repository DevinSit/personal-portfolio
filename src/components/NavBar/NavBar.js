import {Component} from "preact";
import Logo from "assets/Logo.svg";
import style from "./NavBar.scss";

export default class NavBar extends Component {
    onNavClick = (id) => () => {
        const element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    };

    render() {
        return (
            <header id={style.navbar}>
                <img src={Logo} className={style.logo} />
                <nav className={style.nav}>
                    <a
                        className={style.navItem}
                        onClick={this.onNavClick("aboutContainer")}
                    >
                        ABOUT
                    </a>

                    <a
                        className={style.navItem}
                        onClick={this.onNavClick("skillsContainer")}
                    >
                        SKILLS
                    </a>

                    <a className={style.navItem}>RESUME</a>
                    <a className={style.navItem}>CONTACT</a>
                </nav>
            </header>
        );
    }
};
