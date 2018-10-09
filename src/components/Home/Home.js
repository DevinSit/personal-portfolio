import {Component} from "preact";
import style from "./Home.scss";

export default class Home extends Component {
	render() {
		return (
			<div className={style.homeContainer}>
                <div className={style.home}>
                </div>
			</div>
		);
	}
}
