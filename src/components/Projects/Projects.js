import {useMemo, useState} from "preact/hooks";
import classNames from "classnames";
import {SectionHeader} from "components/common";
import "./Projects.scss";

const PROJECTS_INFO = [
    {
        title: "Transitr",
        description: "Mobile app for finding OC Transpo bus arrival times using SMS instead of data."
    },
    {
        title: "Transitr",
        description: "Mobile app for finding OC Transpo bus arrival times using SMS instead of data."
    },
    {
        title: "Transitr",
        description: "Mobile app for finding OC Transpo bus arrival times using SMS instead of data."
    }
];

const Projects = () => {
    const projectCards = useMemo(() => PROJECTS_INFO.map((project) => <ProjectCard {...project} />));

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

const ProjectCard = ({title, description}) => {
    const [isFlipped, setFlipped] = useState(false);

    return (
        <div className="project-card" onClick={() => setFlipped(!isFlipped)}>
            <div className={classNames("project-card-inner", {"project-card--flipped": isFlipped})}>
                <div className="project-card-front">
                    <div className="project-card-image"></div>

                    <div className="project-card-info">
                        <h3 className="project-card-title">{title}</h3>
                        <p className="project-card-description">{description}</p>
                    </div>
                </div>

                <div className="project-card-back">
                    <p>TEST</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
