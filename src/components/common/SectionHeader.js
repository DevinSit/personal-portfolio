import Preact from "preact";
import style from "./SectionHeader.scss";

const SectionHeader = ({text}) => (
    <h1 className={style.sectionHeader}>{text}</h1>
);

export default SectionHeader;
