import React, { Component } from "react";
import { oneOf, string, func, bool, number } from "prop-types";

import Alert from "./alert";

import { ENTER_TIMEOUT, EXIT_TIMEOUT } from "./container";

export default class AlertTimer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.setupTimer(this.props.timeout, this.props.onDismiss);
	}

	componentDidUpdate(prevProps) {
		if (
			this.props.timeout != prevProps.timeout ||
			this.props.onDismiss != prevProps.onDismiss
		) {
			this.setupTimer(this.props.timeout, this.props.onDismiss);
		}
	}

	componentWillUnmount() {
		// need to clean up after ourselves
		this.setupTimer(/* passing nothing will clear the timer */);
	}

	setupTimer(timeout, onDismiss) {
		if (!timeout || !onDismiss) {
			// clear any timer we currently have
			clearTimeout(this.timer);
			this.timer = null;
			this.timerTimeout = null;
		} else {
			if (this.timer && this.timerTimeout != timeout) {
				// the timeout value has changed, setup a new timer
				clearTimeout(this.timer);
				this.timer = null;
			}

			// add new timer if we don't already have one
			if (!this.timer) {
				this.timer = setTimeout(
					this.dismissAlert.bind(this, onDismiss),
					timeout + ENTER_TIMEOUT + EXIT_TIMEOUT
				);
				this.timerTimeout = timeout;
			}
		}
	}

	dismissAlert(onDismiss) {
		// clear the timer if it hasn't fired yet
		clearTimeout(this.timer);

		// we don't need to keep track of any timers for this alert anymore
		this.timer = null;
		this.timerTimeout = null;

		// actually dismiss the alert
		onDismiss();
	}

	render() {
		const onDismiss = this.props.onDismiss
			? this.dismissAlert.bind(this, this.props.onDismiss)
			: null;
		return <Alert {...this.props} onDismiss={onDismiss} />;
	}
}

export const PropTypes = {
	type: oneOf(["info", "success", "warning", "danger"]),
	headline: string,
	onDismiss: func,
	dismissTitle: string,
	showIcon: bool,
	timeout: number
};

AlertTimer.propTypes = PropTypes;
