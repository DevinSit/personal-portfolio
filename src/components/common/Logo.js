import Preact from "preact";
import classNames from "classnames";
import {IconLogo, IconLogoInverted} from "assets/icons";
import "./Logo.scss";

const Logo = ({className, inverted = false, onClick = () => {}}) => (
    <a className={classNames(className, "logo")} onClick={onClick}>
        {inverted ? <IconLogoInverted /> : <IconLogo />}
    </a>
);

export default Logo;
