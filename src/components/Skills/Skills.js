import {Component} from "preact";
import classNames from "classnames";
import {SKILLS, SKILL_DESCRIPTIONS} from "./SkillsContent";
import style from "./Skills.scss";

export default class Skills extends Component {
    state = {
        selectedSkill: SKILLS[0]
    }

    onSkillSelected = (skill) => () => this.setState({selectedSkill: skill});

    render() {
        const {selectedSkill} = this.state;

        const selectedSkillDescription = SKILL_DESCRIPTIONS[selectedSkill];

        return (
            <div id={style.skills}>
                <Header />
                <ContentHeader />

                <div className={style.skillsContent}>
                    <SkillSelector
                        skills={SKILLS}
                        selectedSkill={selectedSkill}
                        onSkillSelected={this.onSkillSelected}
                    />

                    <SkillDescription
                        Description={selectedSkillDescription.description}
                        images={selectedSkillDescription.images}
                    />
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

const SkillSelector = ({skills, selectedSkill, onSkillSelected}) => (
    <div className={style.skillSelectorContainer}>
        <div className={style.skillSelector}>
            {
                skills.map((skill, index) => (
                    <SkillSelectorItem
                        text={skill}
                        selected={skill === selectedSkill}
                        onClick={onSkillSelected(skill)}
                    />
                ))
            }
        </div>
    </div>
);

const SkillSelectorItem = ({text = "", selected = false, onClick}) => (
    <a
        className={classNames(
            style.skillSelectorItem,
            {[style.selectedItem]: selected}
        )}
        onClick={onClick}
    >
        <span>{text}</span>
        {selected && <div className={style.selectedCircle} />}
    </a>
);

const SkillDescription = ({Description, images = []}) => (
    <div className={style.skillDescriptionContainer}>
        <p className={style.skillDescription}>
            {Description && <Description />}
        </p>

        <div className={style.skillImages}>
            {images.map((image) => <img src={image} className={style.skillImage} />)}
        </div>
    </div>
);
