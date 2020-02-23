import {useCallback, useMemo, useState} from "preact/hooks";
import classNames from "classnames";
import {SKILLS, SKILL_DESCRIPTIONS} from "./skillsContent";
import style from "./Skills.scss";

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

const ContentHeader = ({skill}) => (
    <div className={classNames(style.header, style.contentHeader)}>
        <div className={classNames(style.headerLeft, style.contentHeaderLeft)}>
            <p className={style.skillSelectorDescription}>
                So what exactly can a <span>Full Spectrum Developer</span> do?
            </p>
            <p className={style.skillSelectorDescription}>Let's take a look.</p>
        </div>

        <div className={classNames(style.headerRight, style.contentHeaderRight)}>
            <h2 className={style.skillDescriptionHeader}>{skill}</h2>
        </div>
    </div>
);

const SkillSelector = ({skills, selectedSkill, onSkillSelected}) => {
    const skillSelectors = useMemo(() => skills.map((skill) => (
        <SkillSelectorItem
            key={skill}
            text={skill}
            selected={skill === selectedSkill}
            onClick={onSkillSelected(skill)}
        />
    )), [skills]);

    return (
        <div className={style.skillSelectorContainer}>
            <div className={style.skillSelector}>
                {skillSelectors}
            </div>
        </div>
    );
};

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

const SkillDescription = ({Description, images = []}) => {
    const skillLogos = useMemo(() => images.map((image) => (
        <img src={image} className={style.skillImage} alt="skill logo" />
    )), [images]);

    return (
        <div className={style.skillDescriptionContainer}>
            <p className={style.skillDescription}>
                <Description />
            </p>

            <div className={style.skillImages}>
                {skillLogos}
            </div>
        </div>
    );
};

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
    const onSkillSelected = useCallback((skill) => () => setSelectedSkill(skill));

    const selectedSkillDescription = SKILL_DESCRIPTIONS[selectedSkill];

    return (
        <div id={style.skills}>
            <Header />
            <ContentHeader skill={selectedSkill} />

            <div className={style.skillsContent}>
                <SkillSelector
                    skills={SKILLS}
                    selectedSkill={selectedSkill}
                    onSkillSelected={onSkillSelected}
                />

                <SkillDescription
                    Description={selectedSkillDescription.description}
                    images={selectedSkillDescription.images}
                />
            </div>
        </div>
    );
};

export default Skills;
