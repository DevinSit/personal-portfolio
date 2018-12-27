import {Component} from "preact";
import {SectionHeader} from "components/common";
import style from "./About.scss";

export default class About extends Component {
	render() {
		return (
			<div id={style.about}>
                <div className={style.aboutContent}>
                    <SectionHeader text="ABOUT ME" />

                    <div className={style.body}>
                        <p className={style.paragraph}>
                            <span className={style.bold}>Just who is this Devin Sit guy anyways?</span> Well, one could say that I’m a <span className={style.bold}>student</span> at the University of Ottawa studying Software Engineering. One could also say that I’m a <span className={style.bold}>fast learner</span> and a <span className={style.bold}>pragmatist</span> — someone who can quickly pick up new technologies and apply them effectively in a logical and methodical manner.
                        </p>

                        <p className={style.paragraph}>
                            But <span className={style.italic}>you</span> probably care most that I’m a <span className={style.highlight}>Full Spectrum Developer</span>. As such, I strive to build user experiences from the absolute ground up — from idea conception all the way to solution delivery — and I hit on the full spectrum of web and mobile development domains to get it done.
                        </p>
                    </div>
                </div>
			</div>
		);
	}
}
