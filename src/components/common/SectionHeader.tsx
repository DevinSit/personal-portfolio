import classNames from "classnames";
import "./SectionHeader.scss";

interface SectionHeaderProps {
    className?: string;
    text: string;
}

interface SectionHeaderProps {
    className?: string;
    text: string;
}

const SectionHeader = ({className, text}: SectionHeaderProps) => (
    <h1 className={classNames(className, "section-header")}>{text}</h1>
);

export default SectionHeader;
