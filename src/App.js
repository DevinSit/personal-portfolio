import {Component} from "preact";
import {Home} from "components/";
import "./App.scss";

export default class App extends Component {
	render() {
		return (
			<div id="app">
                <Home />
			</div>
		);
	}
}
