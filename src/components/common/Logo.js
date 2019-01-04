import Preact from "preact";
import LogoInvertedIcon from "assets/LogoInverted.svg";
import LogoIcon from "assets/Logo.svg";
import "./Logo.scss";

const Logo = ({className, inverted = false, onClick = () => {}}) => (
    <a className={className} onClick={onClick}>
        {
            inverted ? (
                <img src={LogoInvertedIcon} className="logo" alt="logo" />
            ) : (
                <img src={LogoIcon} className="logo" alt="logo" />
            )
        }
    </a>
);

export default Logo;
