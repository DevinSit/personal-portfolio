import {Component} from "preact";
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
	render() {
		return (
			<div id="home">
                <TagLineCircle />

                <div className="home-next-section-nav-container">
                    <img src={NextSection} className="home-next-section-nav" />
                </div>
			</div>
		);
	}
}
