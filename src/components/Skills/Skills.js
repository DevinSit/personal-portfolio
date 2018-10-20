import {Component} from "preact";
import style from "./Skills.scss";

export default class Skills extends Component {
    render() {
        return (
            <div id={style.skillsContainer}>
                <Header />

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
            <h1>SKI</h1>
        </div>

        <div className={style.headerRight}>
            <h1>LLS</h1>
        </div>
    </div>
);

const SkillSelector = () => (
    <div className={style.skillSelector}>
        <p>So what exactly can a Full Spectrum Developer do?</p>
        <p>Let's take a look.</p>
    </div>
);

const SkillDescription = () => (
    <div className={style.skillDescription}>
        <h1>Frontend</h1>
    </div>
);
