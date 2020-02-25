import {useCallback, useMemo, useState} from "preact/hooks";
import classNames from "classnames";
import {SKILLS, SKILL_DESCRIPTIONS} from "./skillsContent";
import "./Skills.scss";

const Header = () => (
    <div className="skills-header">
        <div className="skills-header-left">
            <h1 className="skills-header-text">SKI</h1>
        </div>

        <div className="skills-header-right">
            <h1 className="skills-header-text">LLS</h1>
        </div>
    </div>
);

const ContentHeader = ({skill}) => (
    <div className={classNames("skills-header", "skills-content-header")}>
        <div className={classNames("skills-header-left", "skills-content-header-left")}>
            <p className="skills-selector-description">
                So what exactly can a <span className="skills-highlight">Full Spectrum Developer</span> do?
            </p>
            <p className="skills-selector-description">Let&apos;s take a look.</p>
        </div>

        <div className={classNames("skills-header-right", "skills-content-header-right")}>
            <h2 className="skills-description-header">{skill}</h2>
        </div>
    </div>
);

const SkillsSelectorItem = ({text = "", selected = false, onClick}) => (
    <a
        className={classNames(
            "skills-selector-item",
            {"skills-selector-item--selected": selected}
        )}
        onClick={onClick}
    >
        <span>{text}</span>
        {selected && <div className="skills-selector-item-circle" />}
    </a>
);

const SkillsSelector = ({skills, selectedSkill, onSkillSelected}) => {
    const skillSelectors = useMemo(() => skills.map((skill) => (
        <SkillsSelectorItem
            key={skill}
            text={skill}
            selected={skill === selectedSkill}
            onClick={onSkillSelected(skill)}
        />
    )), [skills, selectedSkill, onSkillSelected]);

    return (
        <div className="skills-selector-container">
            <div className="skills-selector">
                {skillSelectors}
            </div>
        </div>
    );
};

const SkillDescription = ({Description, images = []}) => {
    const skillLogos = useMemo(() => images.map((image, index) => (
        <img
            key={index}
            src={image}
            className="skills-image"
            alt="skill logo"
        />
    )), [images]);

    return (
        <div className="skills-description-container">
            <p className="skills-description">
                <Description />
            </p>

            <div className="skills-images">
                {skillLogos}
            </div>
        </div>
    );
};

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
    const onSkillSelected = useCallback((skill) => () => setSelectedSkill(skill), [setSelectedSkill]);

    const selectedSkillDescription = SKILL_DESCRIPTIONS[selectedSkill];

    return (
        <div id="skills">
            <Header />
            <ContentHeader skill={selectedSkill} />

            <div className="skills-content">
                <SkillsSelector
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
