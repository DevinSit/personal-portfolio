import {Component} from "preact";
import Logo from "assets/Logo.svg";
import style from "./Header.scss";

export default class Header extends Component {
    onNavClick = (id) => () => {
        const element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    };

    render() {
        return (
            <header id={style.header}>
                <img src={Logo} className={style.logo} />
                <nav className={style.nav}>
                    <a
                        className={style.navItem}
                        onClick={this.onNavClick("aboutContainer")}
                    >
                        ABOUT
                    </a>
                    <a className={style.navItem}>SKILLS</a>
                    <a className={style.navItem}>RESUME</a>
                    <a className={style.navItem}>CONTACT</a>
                </nav>
            </header>
        );
    }
};
