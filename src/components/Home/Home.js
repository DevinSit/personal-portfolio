import {Logo} from "components/common";
import {IconNextSection} from "components/icons";
import {scrollTo} from "utils/helpers";
import "./Home.scss";

const TagLineCircle = () => (
    <div className="tag-line-container">
        <div className="tag-line-circle">
            <h3 className="tag-line">I solve <em>lots</em></h3>
            <h3 className="tag-line">of problems</h3>
            <h1 className="sub-tag-line">Full Spectrum Developer</h1>
        </div>
    </div>
);

const Home = () => {
    const onNextSectionClick = () => scrollTo("about");

    return (
        <div id="home">
            <Logo className="home-logo" />

            <TagLineCircle />

            <a
                className="home-next-section-nav-container"
                onClick={onNextSectionClick}
            >
                <IconNextSection className="home-next-section-nav" />
            </a>
        </div>
    );
};

export default Home;
