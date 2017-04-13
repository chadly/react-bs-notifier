import React, { Component } from "react";

import Alert, { PropTypes as AlertPropTypes } from "./alert";
import { AlertType, DismissFunc }from "./types";

import { ENTER_TIMEOUT, EXIT_TIMEOUT } from "./container";

export default class AlertTimer extends Component<PropTypes, any> {
	timer: number;
	timerTimeout: number;

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.setupTimer(
			this.props.timeout,
			this.props.onDismiss
		);
	}

	componentWillReceiveProps({ timeout, onDismiss } : PropTypes) {
		this.setupTimer(
			timeout,
			onDismiss
		);
	}

	componentWillUnmount() {
		// need to clean up after ourselves
		this.setupTimer(/* passing nothing will clear the timer */);
	}

	setupTimer(timeout?: number, onDismiss?: DismissFunc) {
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

	dismissAlert(onDismiss: DismissFunc) {
		// clear the timer if it hasn't fired yet
		clearTimeout(this.timer);

		// we don't need to keep track of any timers for this alert anymore
		this.timer = null;
		this.timerTimeout = null;

		// actually dismiss the alert
		onDismiss();
	}

	render() {
		const onDismiss: DismissFunc = this.props.onDismiss ? this.dismissAlert.bind(this, this.props.onDismiss) : null;
		return <Alert {...this.props} onDismiss={onDismiss} />;
	}
}

interface PropTypes extends AlertPropTypes {
	timeout?: number
};