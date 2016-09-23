import React, { Component } from "react";
import Notifier from "../src/alerts";

export default class NotifierGenerator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			alerts: [],
			timeout: 0,
			newMessage: "What an amazing world we live in"
		};
	}

	generate(type) {
		let newData = this.state.alerts.slice();
		newData.unshift({
			id: (new Date()).getTime(),
			type: type,
			headline: `Whoa! This is a${type === "info" ? "n" : ""} ${type} message.`,
			message: this.state.newMessage
		});

		this.setState({ alerts: newData });
	}

	clearAlerts() {
		this.setState({
			alerts: []
		});
	}

	onTimeoutChange({ target: { value } }) {
		this.setState({ timeout: (+value) * 1000 });
	}

	onNewMessageChange({ target: { value } }) {
		this.setState({ newMessage: value });
	}

	render() {
		const clearAllButton = this.state.alerts.length ? (
			<button className="btn btn-link" onClick={this.clearAlerts.bind(this)}>Clear all alerts</button>
		) : null;

		return (
			<div>
				<Notifier alerts={this.state.alerts} timeout={this.state.timeout} />
				<div className="form-group">
					<label htmlFor="new-message-control">Message</label>
					<textarea
						id="new-message-control"
						placeholder="Something happened, here are the deets"
						className="form-control"
						value={this.state.newMessage}
						onChange={this.onNewMessageChange.bind(this)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="timeout-control" className="control-label">Dismiss after</label>
					<div className="input-group">
						<input id="timeout-control" className="form-control" type="number" value={this.state.timeout / 1000} onChange={this.onTimeoutChange.bind(this)} />
						<span className="input-group-addon">seconds</span>
					</div>
				</div>
				<div className="form-group text-right">
					{clearAllButton}
					<div className="btn-group">
						{["info", "success", "warning", "danger"].map(type => (
							<button
								key={type} type="button"
								className={`btn btn-${type}`}
								onClick={this.generate.bind(this, type)}
							>
								generate {" "} {type}
							</button>
						))}
					</div>
				</div>
			</div>
		);
	}
}