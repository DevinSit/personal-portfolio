import {Component} from "preact";
import {IconNextSection} from "assets/icons";
import {Logo} from "components/common";
import {scrollTo} from "utils/helpers";
import "./Home.scss";

const TagLineCircle = () => (
    <div className="tag-line-container">
        <div className="tag-line-circle">
            <h3 className="sub-tag-line">One of a kind</h3>
            <h1 className="tag-line">Full Spectrum</h1>
            <h1 className="tag-line">Developer</h1>
        </div>
    </div>
);

export default class Home extends Component {
    onNextSectionClick = () => scrollTo("about");

	render() {
		return (
			<div id="home">
                <Logo className="home-logo" />

                <TagLineCircle />

                <a
                    className="home-next-section-nav-container"
                    onClick={this.onNextSectionClick}
                >
                    <img src={IconNextSection} className="home-next-section-nav" alt="next section" />
                </a>
			</div>
		);
	}
}
