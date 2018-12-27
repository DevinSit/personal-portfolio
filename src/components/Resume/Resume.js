import {Component} from "preact";
import {SectionHeader} from "components/common";
import "./Resume.scss";

export default class Resume extends Component {
    render() {
        return (
            <div id="resume">
                <div className="resume-content">
                    <SectionHeader text="RESUME" />

                    <div className="resume-body">
                        <p className="resume-paragraph">
                            Want to learn a bit more about my experience? Need something to go?
                        </p>   
                        
                        <button className="resume-download">
                            DOWNLOAD RESUME
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
