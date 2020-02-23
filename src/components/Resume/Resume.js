import {SectionHeader} from "components/common";
import "./Resume.scss";

const Resume = () => (
    <div id="resume">
        <div className="resume-content">
            <SectionHeader text="RESUME" />

            <div className="resume-body">
                <p className="resume-paragraph">
                    Want to learn a bit more about my experience? <br className="resume-paragraph-break" /> Need something to go?
                </p>

                <a
                    className="resume-download"
                    href="/assets/DevinSit_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    VIEW RESUME
                </a>
            </div>
        </div>
    </div>
);

export default Resume;
