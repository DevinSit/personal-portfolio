import classNames from "classnames";
import {IconLogo, IconLogoInverted} from "components/icons";
import "./Logo.scss";

interface LogoProps {
    className?: string;
    inverted?: boolean;
    onClick?: () => void;
}

const Logo = ({className, inverted = false, onClick = () => {}}: LogoProps) => (
    <a className={classNames(className, "logo")} onClick={onClick}>
        {inverted ? <IconLogoInverted /> : <IconLogo />}
    </a>
);

export default Logo;
