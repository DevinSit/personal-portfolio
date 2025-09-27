import {useCallback, useMemo, useState} from "react";
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

const ContentHeader = ({skill}: {skill: string}) => (
    <div className={classNames("skills-header", "skills-content-header")}>
        <div className={classNames("skills-header-left", "skills-content-header-left")}>
            <p className="skills-selector-description">
                So what exactly can this{" "}
                <span className="skills-highlight">Full Stack Developer</span> do?
            </p>
            <p className="skills-selector-description">Let&apos;s take a look.</p>
        </div>

        <div className={classNames("skills-header-right", "skills-content-header-right")}>
            <h2 className="skills-description-header">{skill}</h2>
        </div>
    </div>
);

interface SkillsSelectorItemProps {
    text?: string;
    selected?: boolean;
    onClick: () => void;
}

const SkillsSelectorItem = ({text = "", selected = false, onClick}: SkillsSelectorItemProps) => (
    <a
        className={classNames("skills-selector-item", {"skills-selector-item--selected": selected})}
        onClick={onClick}
    >
        <span>{text}</span>
        {selected && <div className="skills-selector-item-circle" />}
    </a>
);

interface SkillsSelectorProps {
    skills: string[];
    selectedSkill: string;
    onSkillSelected: (skill: string) => () => void;
}

const SkillsSelector = ({skills, selectedSkill, onSkillSelected}: SkillsSelectorProps) => {
    const skillSelectors = useMemo(
        () =>
            skills.map((skill) => (
                <SkillsSelectorItem
                    key={skill}
                    text={skill}
                    selected={skill === selectedSkill}
                    onClick={onSkillSelected(skill)}
                />
            )),
        [skills, selectedSkill, onSkillSelected]
    );

    return (
        <div className="skills-selector-container">
            <div className="skills-selector">{skillSelectors}</div>
        </div>
    );
};

interface SkillDescriptionProps {
    Description: React.ComponentType;
    logos?: React.ComponentType<{className?: string}>[];
}

const SkillDescription = ({Description, logos = []}: SkillDescriptionProps) => {
    const skillLogos = useMemo(
        () => logos.map((Logo, index) => <Logo key={index} className="skills-logo" />),
        [logos]
    );

    return (
        <div className="skills-description-container">
            <p className="skills-description">
                <Description />
            </p>

            <div className="skills-logos">{skillLogos}</div>
        </div>
    );
};

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
    const onSkillSelected = useCallback(
        (skill: string) => () => setSelectedSkill(skill),
        [setSelectedSkill]
    );

    const selectedSkillDescription =
        SKILL_DESCRIPTIONS[selectedSkill as keyof typeof SKILL_DESCRIPTIONS];

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
                    logos={selectedSkillDescription.logos}
                />
            </div>
        </div>
    );
};

export default Skills;
