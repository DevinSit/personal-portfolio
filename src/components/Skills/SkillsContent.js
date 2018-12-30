import SkillImages from "assets/skillImages";

const FrontendSkillDescription = () => (
    <span>
        Ah, frontend development — my bread and butter; what first got me into web development and what I've gone on to become rather comfortable with. These days, I'm heavily into using <strong>React</strong> and <strong>Redux</strong> with <strong>Sass</strong> to build <strong>Single Page Applications</strong>. Molding Flexbox and React components to my whim, I've come to really enjoy building beautiful, interactive interfaces from scratch.
    </span>
);

export const SKILLS = [
    "FRONTEND", "BACKEND", "MOBILE", "DESIGN", "DEVOPS", "CLOUD", "DATA"
];

export const SKILL_DESCRIPTIONS = {
    FRONTEND: {
        description: FrontendSkillDescription,
        images: [SkillImages.ReactLogo, SkillImages.ReduxLogo, SkillImages.SassLogo]
    },
    BACKEND: {},
    MOBILE: {},
    DESIGN: {},
    DEVOPS: {},
    CLOUD: {},
    DATA: {}
};
