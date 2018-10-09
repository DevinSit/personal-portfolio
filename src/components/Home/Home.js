import {Component} from "preact";
import NextSection from "assets/NextSection.svg";
import style from "./Home.scss";

export default class Home extends Component {
	render() {
		return (
			<div className={style.homeContainer}>
                <TagLineCircle />
                <div className={style.nextSectionNavContainer}>
                    <img src={NextSection} className={style.nextSectionNav} />
                </div>
			</div>
		);
	}
}

const TagLineCircle = () => (
    <div className={style.tagLineContainer}>
        <div className={style.tagLineCircle}>
            <h3 className={style.subTagLine}>One of a kind</h3>
            <h1 className={style.tagLine}>Full Spectrum</h1>
            <h1 className={style.tagLine}>Developer</h1>
        </div>
    </div>
);
