import {Component} from "preact";
import Logo from "assets/Logo.svg";
import style from "./Home.scss";

const Header = () => (
    <header className={style.header}>
        <img src={Logo} className={style.logo} />
        <nav className={style.nav}>
            <a className={style.navItem}>ABOUT</a>
            <a className={style.navItem}>SKILLS</a>
            <a className={style.navItem}>RESUME</a>
            <a className={style.navItem}>CONTACT</a>
        </nav>
    </header>
);

export default class Home extends Component {
	render() {
		return (
			<div className={style.homeContainer}>
                <div className={style.home}>
                    <Header />
                </div>
			</div>
		);
	}
}
