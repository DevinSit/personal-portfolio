import {useCallback, useEffect, useMemo, useState} from "preact/hooks";
import classNames from "classnames";
import {Logo} from "components/common";
import {NAVBAR_ITEMS} from "utils/constants";
import {debounceWithLeading, scrollTo} from "utils/helpers";
import "./DesktopNavBar.scss";

// Handles transitioning the header from the 'docked' state at the very top of
// the page (where it doesn't have a drop shadow), to the 'scrolled' state
// where it does show a drop shadow.
const useTransitionOnScroll = () => {
    const [isScrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const onScroll = debounceWithLeading(() => {
                setScrolled(window.pageYOffset > 0);
            }, 25);

            window.addEventListener("scroll", onScroll);

            return () => window.removeEventListener("scroll", onScroll);
        }
    }, [setScrolled]);

    return isScrolled;
};

const DesktopNavBar = () => {
    const isScrolled = useTransitionOnScroll();
    const onNavClick = useCallback((id) => () => scrollTo(id), []);

    const navItems = useMemo(() => NAVBAR_ITEMS.map((navItem) => (
        <a key={navItem} className="navbar-nav-item" onClick={onNavClick(navItem)}>
            {navItem}
        </a>
    )), [onNavClick]);

    return (
        <div className={classNames("navbar-desktop", {"navbar-scrolled": isScrolled})}>
            <Logo onClick={onNavClick("home")} />

            <nav className="navbar-nav">
                {navItems}
            </nav>
        </div>
    );
};

export default DesktopNavBar;
