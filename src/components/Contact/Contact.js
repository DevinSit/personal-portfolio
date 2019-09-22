import {Component} from "preact";
import {IconEmail, IconLinkedin} from "assets/icons";
import {SectionHeader} from "components/common";
import "./Contact.scss";

export default class Contact extends Component {
    render() {
        return (
            <div id="contact">
                <div className="contact-content">
                    <SectionHeader text="CONTACT" />

                    <div className="contact-body">
                        <p className="contact-paragraph">
                            <div>Like what you see?</div>
                            <div>Let's chat.</div>
                        </p>   

                        <div className="contact-info-container">
                            <div className="contact-info">
                                <img src={IconEmail} alt="email" />
                                <p className="contact-info-text">devin@devinsit.com</p>
                            </div>

                            <div className="contact-info">
                                <img src={IconLinkedin} alt="linkedin" />
                                <a 
                                    className="contact-info-text"
                                    href="https://www.linkedin.com/in/devin-sit/"
                                >
                                    linkedin.com/in/devin-sit
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
