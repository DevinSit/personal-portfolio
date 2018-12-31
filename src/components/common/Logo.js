import Preact from "preact";
import LogoIcon from "assets/Logo.svg";
import "./Logo.scss";

const Logo = ({className, onClick = () => {}}) => (
    <a className={className} onClick={onClick}>
        <img src={LogoIcon} className="logo" />
    </a>
);

export default Logo;
