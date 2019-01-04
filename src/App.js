import {Component} from "preact";
import {About, Contact, Footer, Home, NavBar, Resume, Skills} from "components/";
import {initGoogleAnalytics} from "utils/userTracking";
import "./App.scss";

initGoogleAnalytics();

export default class App extends Component {
	render() {
		return (
			<div id="app">
                <NavBar />

                <div id="app-content">
                    <Home />
                    <About />
                    <Skills />
                    <Resume />
                    <Contact />
                    <Footer />
                </div>
			</div>
		);
	}
}
