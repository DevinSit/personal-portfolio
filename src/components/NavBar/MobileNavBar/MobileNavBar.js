import {Component} from "preact";
import classNames from "classnames";
import {Logo} from "components/common";
import {IconMenu} from "images/";
import {debounceWithLeading, scrollTo} from "utils/helpers";
import "./MobileNavBar.scss";

export default class MobileNavBar extends Component {
    state = {
        menuOpen: false
    }

    onNavClick = (id) => () => scrollTo(id);
    onMenuClick = () => this.setState({menuOpen: !this.state.menuOpen});

    render() {
        const {menuOpen} = this.state;

        return (
            <div className="navbar-mobile">
                <nav className="navbar-nav">
                </nav>

                <div className={classNames("circle", {"circle-expand": menuOpen})}></div>

                <button className="navbar-open-button" onClick={this.onMenuClick}>
                    <img src={IconMenu} alt="menu" />
                </button>
            </div>
        );
    }
};
