import {useEffect} from "preact/hooks";
import {scrollTo} from "utils/helpers";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import "./NavBar.scss";

const useScrollToSectionOnLoad = () => {
    // Only needs to run once on load; other scrolls are handled explicitly.
    useEffect(() => {
        if (typeof window !== "undefined") {
            const section = window.location.hash;

            if (section) {
                // Remove the hash before trying to scroll.
                scrollTo(section.split("#")[1]);
            }
        }
    }, []);
};

const NavBar = () => {
    useScrollToSectionOnLoad();

    return (
        <header id="navbar">
            <DesktopNavBar />
            <MobileNavBar />
        </header>
    );
};

export default NavBar;
