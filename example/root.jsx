import React, { Component } from "react";
import Notifier from "../src/alerts";

export default class NotifierGenerator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			alerts: []
		};
	}

	generate(type) {
		let newData = this.state.alerts.slice();
		newData.push({
			type: type,
			headline: "Woah!",
			message: "This is an example " + type + " message."
		});

		this.setState({ alerts: newData });
	}

	render() {
		return (
			<div>
				<Notifier alerts={this.state.alerts} />
				<div className="btn-group">
					<button type="button" className="btn btn-info" onClick={this.generate.bind(this, 'info')}>Generate Info</button>
					<button type="button" className="btn btn-success" onClick={this.generate.bind(this, 'success')}>Generate Success</button>
					<button type="button" className="btn btn-warning" onClick={this.generate.bind(this, 'warning')}>Generate Warning</button>
					<button type="button" className="btn btn-danger" onClick={this.generate.bind(this, 'danger')}>Generate Danger</button>
				</div>
			</div>
		);
	}
}