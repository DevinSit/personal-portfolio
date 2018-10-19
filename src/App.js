import {Component} from "preact";
import {About, NavBar, Home, Skills} from "components/";
import "./App.scss";

export default class App extends Component {
	render() {
		return (
			<div id="app">
                <NavBar />
                <Home />
                <About />
                <Skills />
			</div>
		);
	}
}
