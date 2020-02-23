import {useCallback, useMemo, useState} from "preact/hooks";
import classNames from "classnames";
import {Logo} from "components/common";
import {NAVBAR_ITEMS} from "utils/constants";
import {scrollTo} from "utils/helpers";
import "./MobileNavBar.scss";

const MobileNavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const onMenuClick = useCallback(() => setMenuOpen(!isMenuOpen), [isMenuOpen, setMenuOpen]);

    const onNavClick = useCallback((id) => () => {
        scrollTo(id);
        setMenuOpen(false);
    }, [setMenuOpen]);

    const navItems = useMemo(() => NAVBAR_ITEMS.map((navItem) => (
        <a key={navItem} className="navbar-nav-item" onClick={onNavClick(navItem)}>
            {navItem}
        </a>
    )), [onNavClick]);

    return (
        <div className="navbar-mobile">
            <nav className={classNames("navbar-nav", {"navbar-nav--visible": isMenuOpen})}>
                <Logo
                    className="navbar-logo"
                    inverted={true}
                    onClick={onNavClick("home")}
                />

                {navItems}
            </nav>

            <div
                className={
                    classNames("menu-background", {"menu-background--expand": isMenuOpen}
                )}
            />

            <button
                className={classNames(
                    "navbar-open-button", "hamburger--spin", {"is-active": isMenuOpen}
                )}
                onClick={onMenuClick}
                aria-label="Open Menu"
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner" />
                </span>
            </button>
        </div>
    );
};

export default MobileNavBar;
