import {useCallback, useMemo, useState} from "preact/hooks";
import classNames from "classnames";
import {IconBack, IconExternalLink, IconFlip, IconGithub} from "assets/icons";
import {DankMemeClassifierImage, KubailsImage, TransitrImage} from "assets/projectImages";
import {SectionHeader} from "components/common";
import "./Projects.scss";

const PROJECTS_INFO = [
    {
        title: "Transitr",
        description: "Mobile app for finding OC Transpo bus arrival times using SMS instead of data.",
        reason: "Because I got tired of manually texting the bus service.",
        techStack: ["TypeScript", "React Native", "Redux + Redux Saga"],
        githubLink: "https://github.com/DevinSit/transitr",
        externalLink: "https://github.com/DevinSit/transitr/releases",
        image: TransitrImage
    },
    {
        title: "Kubails",
        description: "Opinionated framework for organizing and developing containerized services.",
        reason: "Because I wanted a better way for developing web apps.",
        techStack: ["Python", "Docker + Kubernetes", "Google Cloud Platform"],
        githubLink: "https://github.com/DevinSit/kubails",
        externalLink: null,
        image: KubailsImage
    },
    {
        title: "Dank Meme Classifier",
        description: "Web app for classifying memes as dank or not dank.",
        reason: "Because I wanted an ML project that was just a little out there.",
        techStack: ["JavaScript + React", "Python + Keras", "Google Cloud Platform"],
        githubLink: "https://github.com/DevinSit/dank-meme-classifier",
        externalLink: "https://dankmemeclassifier.com",
        image: DankMemeClassifierImage
    }
];

const FloatingAction = ({className, Icon, link = "", onClick}) => (
    link ? (
        <a
            className={classNames(className, "floating-action")}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
        >
            <Icon />
        </a>
    ) : (
        <button
            className={classNames(className, "floating-action")}
            onClick={onClick}
        >
            <Icon />
        </button>
    )
);

const TechStackListItem = ({item}) => (
    <li className="project-card-tech-stack-list-item">
        {item}
    </li>
);

const ProjectCard = ({
    title = "",
    description = "",
    reason = "",
    techStack = [],
    githubLink = "",
    externalLink = "",
    image = ""
}) => {
    const [isFlipped, setFlipped] = useState(false);

    const techStackList = useMemo(() => techStack.map((item) => (
        <TechStackListItem
            key={item}
            item={item}
        />
    )), [techStack]);

    const onFlip = useCallback(() => setFlipped(!isFlipped), [isFlipped, setFlipped]);

    return (
        <div className="project-card">
            <div className={classNames("project-card-inner", {"project-card--flipped": isFlipped})}>
                <div className="project-card-front">
                    <div className="project-card-image-container">
                        <img className="project-card-image" src={image} alt={title} />
                    </div>

                    <FloatingAction
                        className="project-card-flip-button"
                        Icon={IconFlip}
                        onClick={onFlip}
                    />

                    <div className="project-card-info">
                        <h3 className="project-card-title" onClick={onFlip}>{title}</h3>
                        <p className="project-card-description">{description}</p>
                    </div>
                </div>

                <div className="project-card-back">
                    <div className="project-card-back-section">
                        <h3 className="project-card-back-header">Why?</h3>

                        <ul className="project-card-back-list">
                            <li>{reason}</li>
                        </ul>
                    </div>

                    <div className="project-card-back-section">
                        <h3 className="project-card-back-header">Tech Stack</h3>

                        <ul className="project-card-back-list project-card-list-tech-stack">
                            {techStackList}
                        </ul>
                    </div>

                    <div className="project-card-back-navigation">
                        <button className="project-card-back-flip-button" onClick={onFlip}>
                            <IconBack />
                        </button>

                        <div className="project-card-external-navigation">
                            {
                                githubLink && (
                                    <FloatingAction
                                        className="project-card-navigation-button"
                                        Icon={IconGithub}
                                        link={githubLink}
                                    />
                                )
                            }

                            {
                                externalLink && (
                                    <FloatingAction
                                        className="project-card-navigation-button"
                                        Icon={IconExternalLink}
                                        link={externalLink}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const projectCards = useMemo(() => PROJECTS_INFO.map((project) => (
        <ProjectCard key={project.title} {...project} />
    )), []);

    return (
        <div id="projects">
            <div className="projects-content">
                <SectionHeader text="PROJECTS" />

                <div className="projects-body">
                    <p className="projects-paragraph">
                        A small collection of my favourite side projects.
                    </p>

                    <div className="projects-cards">
                        {projectCards}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
