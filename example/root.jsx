import React, { Component } from "react";
import Notifier from "../src/alerts";

export default class NotifierGenerator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			alerts: [],
			timeout: 0
		};
	}

	generate(type) {
		let newData = this.state.alerts.slice();
		newData.unshift({
			id: (new Date()).getTime(),
			type: type,
			headline: "Whoa!",
			message: "This is an example " + type + " message."
		});

		this.setState({ alerts: newData });
	}

	render() {
		return (
			<div>
				<Notifier alerts={this.state.alerts} timeout={this.state.timeout} />
				<div className="form-inline">
					<label htmlFor="timeout-control" className="control-label">Dismiss after</label>
					{" "}
					<div className="input-group">
						<input id="timeout-control" className="form-control" type="number" value={this.state.timeout / 1000} onChange={({ target: { value } }) => this.setState({ timeout: (+value) * 1000 })} />
						<span className="input-group-addon">seconds</span>
					</div>
					{" "}
					<div className="btn-group">
						<button type="button" className="btn btn-info" onClick={this.generate.bind(this, "info")}>Generate Info</button>
						<button type="button" className="btn btn-success" onClick={this.generate.bind(this, "success")}>Generate Success</button>
						<button type="button" className="btn btn-warning" onClick={this.generate.bind(this, "warning")}>Generate Warning</button>
						<button type="button" className="btn btn-danger" onClick={this.generate.bind(this, "danger")}>Generate Danger</button>
					</div>
				</div>
			</div>
		);
	}
}