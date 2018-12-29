import {Component} from "preact";
import {scrollTo} from "utils/helpers";
import NextSection from "assets/NextSection.svg";
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
                <TagLineCircle />

                <a
                    className="home-next-section-nav-container"
                    onClick={this.onNextSectionClick}
                >
                    <img src={NextSection} className="home-next-section-nav" />
                </a>
			</div>
		);
	}
}
