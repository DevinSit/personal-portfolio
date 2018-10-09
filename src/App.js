import {Component} from "preact";
import {Header, Home} from "components/";
import "./App.scss";

export default class App extends Component {
	render() {
		return (
			<div id="app">
                <Header />
                <Home />
			</div>
		);
	}
}
