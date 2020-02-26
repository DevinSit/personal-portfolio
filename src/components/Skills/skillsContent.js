/* eslint-disable max-len */

import * as SkillLogos from "./skillLogos";

const FrontendDescription = () => (
    <span>
        Ah, frontend development — my bread and butter; what first got me into web development and what I&apos;ve gone on to become rather comfortable with. These days, I&apos;m heavily into using <strong>React</strong> and <strong>Redux</strong> with <strong>Sass</strong> to build <strong>Single Page Applications</strong>. <br /><br />

        Molding Flexbox and React components to my whim, I&apos;ve come to really enjoy building beautiful, interactive interfaces from scratch.
    </span>
);

const BackendDescription = () => (
    <span>
        A great frontend is only as useful as its backend, so it&apos;s quite handy that I can work on both halves. As any strong JavaScript developer, I can comfortably throw together APIs using <strong>Node</strong> and <strong>Express</strong>, but I&apos;ve also worked extensively with <strong>Python</strong> and <strong>Flask</strong> to build machine learning based services. <br /> <br />

        Additionally, I&apos;ve dabbled in the <strong>Ruby on Rails</strong> world and come to love that batteries-included experience. And with <strong>Postgres</strong> as my go-to database, I can whip together some very robust APIs to back just about any interface.
    </span>
);

const MobileDescription = () => (
    <span>
        Although I&apos;m primarily a web developer, I&apos;ve also done my fair share of <strong>Android</strong> development -- both natively with <strong>Java</strong> and most recently with <strong>React Native</strong>. iOS development, however, is not something I&apos;ve looked into yet; although React Native should make that a bit easier :) <br /><br />

        Being able to work in the cross-platform set of <strong>web</strong> and <strong>native mobile</strong> means that I can ensure the highest quality user experience possible.
    </span>
);

const DesignDescription = () => (
    <span>
        Now here&apos;s something you don&apos;t see every day: a strong developer who can also <strong>design</strong>! Albeit, I wouldn&apos;t say my app designs are particularly ground-breaking or novel, but I like to think they&apos;re at least somewhat <strong>appealing to the eye</strong>, with a focus on <strong>usability</strong>. <br /><br />

        This is definitely an area that I&apos;m <strong>constantly improving</strong> in; I&apos;m always on the hunt for new design inspiration and seeing what I can adopt that works best from other applications. And when I do, my design tool of choice is definitely <strong>Figma</strong>.
    </span>
);

const DevopsDescription = () => (
    <span>
        One of the big buzzwords du jour, the DevOps tooling arena is one place I&apos;ve hedged quite a few bets on. I&apos;ve combined my strong dev experience with some new ops experience to be able to develop, deploy, and monitor apps end-to-end. This means things like <strong>Linux</strong>, some flavour of <strong>CI/CD</strong>, <strong>Docker</strong>/<strong>Kubernetes</strong>, and <strong>Google Cloud Platform</strong> are staples of my workflow. <br /><br />

        That last one is particularly noteworthy since I&apos;m both a <strong>Google Cloud Certified</strong> <a href="https://www.credential.net/c5ek34qs?key=c1b6062f2b855942f6201ab308fb10415aa3069bfcd7d4198db54541a601ef72">Professional Cloud Architect</a> <em>and</em> <a href="https://www.credential.net/h49ok4lg?key=23d7a8c6baed86e7438bf41d5242f029851270d36f4063c8b3306ffd7951267b">Associate Cloud Engineer</a>. Fun stuff.
    </span>
);

const DataDescription = () => (
    <span>
        A duo of buzzwords to eclipse even DevOps, the fields of <strong>data science</strong> and <strong>machine learning</strong> are certainly en vogue. My experience here comes more so from building <strong>APIs</strong>, <strong>apps</strong>, and <strong>tooling</strong> around machine learning models, and less so from actually building the models themselves. <br /><br />

        However, that doesn&apos;t mean that I don&apos;t have a strong understanding of the <strong>data science process</strong>, and a rudimentary ability to build models with frameworks like <strong>Keras</strong> or <strong>Scikit-Learn</strong>.
    </span>
);

export const SKILLS = ["FRONTEND", "BACKEND", "MOBILE", "DESIGN", "DEVOPS", "DATA"];

export const SKILL_DESCRIPTIONS = {
    FRONTEND: {
        description: FrontendDescription,
        logos: [SkillLogos.LogoReact, SkillLogos.LogoRedux, SkillLogos.LogoSass]
    },
    BACKEND: {
        description: BackendDescription,
        logos: [SkillLogos.LogoNode, SkillLogos.LogoPython, SkillLogos.LogoRuby]
    },
    MOBILE: {
        description: MobileDescription,
        logos: [SkillLogos.LogoAndroid, SkillLogos.LogoReact]
    },
    DESIGN: {
        description: DesignDescription,
        logos: [SkillLogos.LogoFigma]
    },
    DEVOPS: {
        description: DevopsDescription,
        logos: [SkillLogos.LogoDocker, SkillLogos.LogoKubernetes, SkillLogos.LogoGoogleCloud]
    },
    DATA: {
        description: DataDescription,
        logos: [SkillLogos.LogoKeras, SkillLogos.LogoScikitLearn]
    }
};
