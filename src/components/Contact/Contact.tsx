import {SectionHeader} from "components/common";
import {IconEmail, IconGithub, IconLinkedin} from "components/icons";
import "./Contact.scss";

const ContactInfo = () => (
    <div className="contact-info-container">
        <div className="contact-info">
            <IconEmail />
            <p className="contact-info-text">devin@devinsit.com</p>
        </div>

        <div className="contact-info">
            <IconLinkedin />

            <a
                className="contact-info-text"
                href="https://www.linkedin.com/in/devin-sit/"
            >
                linkedin.com/in/devin-sit
            </a>
        </div>

        <div className="contact-info">
            <IconGithub />

            <a
                className="contact-info-text"
                href="https://github.com/DevinSit"
            >
                github.com/DevinSit
            </a>
        </div>
    </div>
);

const Contact = () => (
    <div id="contact">
        <div className="contact-content">
            <SectionHeader className="contact-section-header" text="CONTACT" />

            <div className="contact-body">
                <p className="contact-paragraph">
                    Like what you see? <br /> Let&apos;s chat.
                </p>

                <ContactInfo />
            </div>
        </div>
    </div>
);

export default Contact;
