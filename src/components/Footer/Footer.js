import "./Footer.scss";

const Footer = () => (
    <div id="footer">
        <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Devin Sit
        </p>
    </div>
);

export default Footer;
