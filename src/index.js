import {Component} from "preact";
import Test from "components/Test";
import "./style";

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Devin Sit</h1>
                <h2>Full Spectrum Developer</h2>
                <Test />
			</div>
		);
	}
}
