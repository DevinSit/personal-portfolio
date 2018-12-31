import {Component} from "preact";
import {IconEmail, IconLinkedIn} from "images/";
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
                            <div>Interested in what you see?</div>
                            <div>Let's chat.</div>
                        </p>   

                        <div className="contact-info-container">
                            <div className="contact-info">
                                <img src={IconEmail} alt="email" />
                                <p>devin@devinsit.com</p>
                            </div>

                            <div className="contact-info">
                                <img src={IconLinkedIn} alt="linkedin" />
                                <p>linkedin.com/in/devin-sit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
