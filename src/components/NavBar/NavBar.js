import {Component} from "preact";
import classNames from "classnames";
import {debounceWithLeading, scrollTo} from "utils/helpers";
import Logo from "assets/Logo.svg";
import "./NavBar.scss";

export default class NavBar extends Component {
    state = {
        isScrolled: false
    };

    componentDidMount() {
        if (window.location.hash) {
            this.onNavClick(window.location.hash.split("#")[1])();
        }

        window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scroll);
    }

    onNavClick = (id) => () => scrollTo(id);

    onScroll = debounceWithLeading(() => {
        this.setState({isScrolled: window.pageYOffset > 0});
    }, 25);

    render() {
        const {isScrolled} = this.state;

        return (
            <header id="navbar" className={classNames({"navbar-scrolled": isScrolled})}>
                <a onClick={this.onNavClick("home")}><img src={Logo} className="navbar-logo" /></a>
                <nav className="navbar-nav">
                    <a
                        className="navbar-nav-item"
                        onClick={this.onNavClick("about")}
                    >
                        ABOUT
                    </a>

                    <a
                        className="navbar-nav-item"
                        onClick={this.onNavClick("skills")}
                    >
                        SKILLS
                    </a>

                    <a
                        className="navbar-nav-item"
                        onClick={this.onNavClick("resume")}
                    >
                        RESUME
                    </a>

                    <a
                        className="navbar-nav-item"
                        onClick={this.onNavClick("contact")}
                    >
                        CONTACT
                    </a>
                </nav>
            </header>
        );
    }
};
