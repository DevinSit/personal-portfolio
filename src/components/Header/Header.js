import Preact from "preact";
import Logo from "assets/Logo.svg";
import style from "./Header.scss";

const Header = () => (
    <header id={style.header}>
        <img src={Logo} className={style.logo} />
        <nav className={style.nav}>
            <a className={style.navItem}>ABOUT</a>
            <a className={style.navItem}>SKILLS</a>
            <a className={style.navItem}>RESUME</a>
            <a className={style.navItem}>CONTACT</a>
        </nav>
    </header>
);

export default Header;
