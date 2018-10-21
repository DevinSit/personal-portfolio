import {Component} from "preact";
import classNames from "classnames";
import SkillImages from "assets/skillImages";
import Logo from "assets/Logo.svg";
import style from "./Skills.scss";

const SKILLS = [
    "FRONTEND", "BACKEND", "MOBILE", "DESIGN", "DEVOPS", "CLOUD", "DATA"
];

export default class Skills extends Component {
    render() {
        return (
            <div id={style.skills}>
                <Header />
                <ContentHeader />

                <div className={style.skillsContent}>
                    <SkillSelector />
                    <SkillDescription />
                </div>
            </div>
        );
    }
}

const Header = () => (
    <div className={style.header}>
        <div className={style.headerLeft}>
            <h1 className={style.headerText}>SKI</h1>
        </div>

        <div className={style.headerRight}>
            <h1 className={style.headerText}>LLS</h1>
        </div>
    </div>
);

const ContentHeader = () => (
    <div className={classNames(style.header, style.contentHeader)}>
        <div className={classNames(style.headerLeft, style.contentHeaderLeft)}>
            <p className={style.skillSelectorDescription}>
                So what exactly can a <span>Full Spectrum Developer</span> do?
            </p>
            <p className={style.skillSelectorDescription}>Let's take a look.</p>
        </div>

        <div className={classNames(style.headerRight, style.contentHeaderRight)}>
            <h2 className={style.skillDescriptionHeader}>FRONTEND</h2>
        </div>
    </div>
);

const SkillSelector = () => (
    <div className={style.skillSelectorContainer}>
        <ul className={style.skillSelector}>
            {SKILLS.map((skill, index) => <SkillSelectorItem text={skill} selected={index === 0}/>)}
        </ul>
    </div>
);

const SkillSelectorItem = ({text = "", selected = false}) => (
    <li
        className={classNames(
            style.skillSelectorItem,
            {[style.selectedItem]: selected}
        )}
    >
        <span>{text}</span>
        {selected && <div className={style.selectedCircle} />}
    </li>
);

class SkillDescription extends Component {
    render() {
        return (
            <div className={style.skillDescriptionContainer}>
                <p className={style.skillDescription}>
                    Ah, frontend development — my bread and butter; what first got me into web development and what I've gone on to become rather comfortable with. These days, I'm heavily into using <span className={style.highlight}>React</span> and <span className={style.highlight}>Redux</span> with <span className={style.highlight}>Sass</span> to build <span className={style.highlight}>Single Page Applications</span>. Molding Flexbox and React components to my whim, I've come to really enjoy building beautiful, interactive interfaces from scratch.
                </p>

                <div className={style.skillImages}>
                    <img src={SkillImages.ReactLogo} className={style.skillImage} />
                    <img src={SkillImages.ReduxLogo} className={style.skillImage} />
                    <img src={SkillImages.SassLogo} className={style.skillImage} />
                </div>
            </div>
        );
    }
}
