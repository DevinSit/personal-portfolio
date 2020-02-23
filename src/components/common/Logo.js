import Preact from "preact";
import {IconLogo, IconLogoInverted} from "assets/icons";
import "./Logo.scss";

const Logo = ({className, inverted = false, onClick = () => {}}) => (
    <a className={className} onClick={onClick}>
        <img src={inverted ? IconLogoInverted : IconLogo} className="logo" alt="logo" />
    </a>
);

export default Logo;
