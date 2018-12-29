import {Component} from "preact";
import classNames from "classnames";
import {debounceWithLeading} from "utils/helpers";
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

    onNavClick = (id) => () => {
        const element = document.getElementById(id);
        const headerOffset = 80;  // The $header-height variable in styles/_dimens.scss
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementPosition = element.getBoundingClientRect().top - bodyRect;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({top: offsetPosition, behavior: "smooth"});

        // Update URL hash
        // Don't want to update window.location.hash by itself because that doesn't do smooth scroll
        if (history.pushState) {
            history.pushState(null, null, `#${id}`)
        } else {
            window.location.hash = `#${id}`;
        }
    };

    onScroll = debounceWithLeading(() => {
        this.setState({isScrolled: window.pageYOffset > 0});
    }, 25);

    render() {
        const {isScrolled} = this.state;

        return (
            <header id="navbar" className={classNames({"navbar-scrolled": isScrolled})}>
                <img src={Logo} className="navbar-logo" />
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
