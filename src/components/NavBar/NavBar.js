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
