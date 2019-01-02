import {Component} from "preact";
import {Logo} from "components/common";
import {IconMenu} from "images/";
import {debounceWithLeading, scrollTo} from "utils/helpers";
import "./MobileNavBar.scss";

export default class MobileNavBar extends Component {
    onNavClick = (id) => () => scrollTo(id);

    render() {
        return (
            <div className="navbar-mobile">
                <nav className="navbar-nav">
                </nav>

                <button className="navbar-open-button">
                    <img src={IconMenu} alt="menu" />
                </button>
            </div>
        );
    }
};
