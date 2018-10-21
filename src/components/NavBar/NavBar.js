import {Component} from "preact";
import Logo from "assets/Logo.svg";
import style from "./NavBar.scss";

export default class NavBar extends Component {
    componentDidMount() {
        if (window.location.hash) {
            this.onNavClick(window.location.hash.split("#")[1])();
        }
    }

    onNavClick = (id) => () => {
        const element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});

        // Update URL hash
        // Don't want to update window.location.hash by itself because that doesn't do smooth scroll 
        if (history.pushState) {
            history.pushState(null, null, `#${id}`)
        } else {
            window.location.hash = `#${id}`;
        }
    };

    render() {
        return (
            <header id={style.navbar}>
                <img src={Logo} className={style.logo} />
                <nav className={style.nav}>
                    <a
                        className={style.navItem}
                        onClick={this.onNavClick("about")}
                    >
                        ABOUT
                    </a>

                    <a
                        className={style.navItem}
                        onClick={this.onNavClick("skills")}
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
