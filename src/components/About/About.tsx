/* eslint-disable max-len */

import {SectionHeader} from "components/common";
import "./About.scss";

const About = () => (
    <div id="about">
        <div className="about-content">
            <SectionHeader text="ABOUT ME" />

            <div className="about-content-body">
                <p className="about-content-paragraph">
                    <strong>Just who is this Devin Sit guy anyways?</strong> Well, I like to think that I’m primarily a <strong>problem solver</strong>. But it would also be fair to say that I’m a <strong>fast learner</strong> and a <strong>pragmatist</strong> — someone who can quickly pick up new technologies and apply them effectively in a logical and methodical manner.
                </p>

                <p className="about-content-paragraph">
                    But <em>you</em> probably care most that I’m a <span className="about-highlight">Full Spectrum Developer</span>. As such, I strive to build user experiences from the <strong>absolute ground up</strong> — from idea conception all the way to solution delivery — and I hit on the <strong>full spectrum</strong> of web and mobile development domains to get it done.
                </p>
            </div>
        </div>
    </div>
);

export default About;
