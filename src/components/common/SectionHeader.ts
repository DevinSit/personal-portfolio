import classNames from "classnames";
import "./SectionHeader.scss";

const SectionHeader = ({className, text}) => (
    <h1 className={classNames(className, "section-header")}>{text}</h1>
);

export default SectionHeader;
