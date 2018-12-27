import {Component} from "preact";
import {About, Home, NavBar, Resume, Skills} from "components/";
import "./App.scss";

export default class App extends Component {
	render() {
		return (
			<div id="app">
                <NavBar />
                <Home />
                <About />
                <Skills />
                <Resume />
			</div>
		);
	}
}
