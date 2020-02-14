import {Component} from "preact";
import classNames from "classnames";
import {Logo} from "components/common";
import {debounceWithLeading, scrollTo} from "utils/helpers";
import "./MobileNavBar.scss";

export default class MobileNavBar extends Component {
    state = {
        menuOpen: false
    }

    onNavClick = (id) => () => {
        scrollTo(id);
        this.setState({menuOpen: false});
    };

    onMenuClick = () => this.setState({menuOpen: !this.state.menuOpen});

    render() {
        const {menuOpen} = this.state;

        return (
            <div className="navbar-mobile">
                <nav className={classNames("navbar-nav", {"navbar-nav--visible": menuOpen})}>
                    <Logo
                        className="navbar-logo"
                        inverted={true}
                        onClick={this.onNavClick("home")}
                    />

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
                        onClick={this.onNavClick("skills")}
                    >
                        PROJECTS
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

                <div
                    className={
                        classNames("menu-background", {"menu-background--expand": menuOpen}
                    )}
                ></div>

                <button
                    className={classNames(
                        "navbar-open-button", "hamburger--spin", {"is-active": menuOpen}
                    )}
                    onClick={this.onMenuClick}
                    aria-label="Open Menu"
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        );
    }
};
