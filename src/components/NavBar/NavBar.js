import {Component} from "preact";
import classNames from "classnames";
import {Logo} from "components/common";
import {debounceWithLeading, scrollTo} from "utils/helpers";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import "./NavBar.scss";

const NavBar = () => (
    <header id="navbar">
        <DesktopNavBar />
        <MobileNavBar />
    </header>
);

export default NavBar;
