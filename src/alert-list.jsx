import React, { Component, PropTypes as t } from "react";

import Container, { ENTER_TIMEOUT, EXIT_TIMEOUT, PropTypes as ContainerPropTypes } from "./container";
import Alert, { PropTypes as AlertPropTypes } from "./alert";

const AlertList = ({
	position,
	alerts,
	onDismiss,
	...props
}) => (
	<Container position={position}>
		{alerts.map(item => {
			const dismiss = onDismiss ? () => onDismiss(item) : null;

			const { message, ...alertProps } = item;

			return (
				<Alert key={item.id} {...props} {...alertProps} onDismiss={dismiss}>
					{message}
				</Alert>
			);
		})}
	</Container>
);

class AlertListWithTimers extends Component {
	constructor(props) {
		super(props);
		this.timers = {};
	}

	componentDidMount() {
		if (this.props.alerts) {
			this.setupTimers(
				this.props.alerts,
				this.props.timeout,
				this.props.onDismiss,
				this.timers
			);
		}
	}

	componentWillReceiveProps({ alerts, timeout, onDismiss }) {
		if (alerts) {
			this.setupTimers(
				alerts,
				timeout,
				onDismiss,
				this.timers
			);
		}
	}

	componentWillUnmount() {
		// need to clean up after ourselves
		this.setupTimers(/* passing nothing will clear all the timers */);
	}

	setupTimers(alerts, timeout, onDismiss, timers) {
		if (!timeout || !onDismiss) {
			// clear any timers we currently have
			for (const alertId in timers) {
				const timer = timers[alertId];
				clearTimeout(timer);
				delete timers[alertId];
			}
		} else {
			// add timers we don't have yet for any new alerts
			alerts.forEach(alert => {
				if (!timers[alert.id]) {
					// if there is no timer setup yet for this alert, set one up

					timers[alert.id] = setTimeout(
						this.dismissAlert.bind(this, timers, onDismiss, alert),
						timeout + ENTER_TIMEOUT + EXIT_TIMEOUT
					);
				}
			});

			// clear any timers we have for alerts that are no longer here
			for (const alertId in timers) {
				const exists = alerts.filter(a => a.id == alertId).length > 0;

				if (!exists) {
					const timer = timers[alertId];
					clearTimeout(timer);
					delete timers[alertId];
				}
			}
		}
	}

	dismissAlert(timers, onDismiss, alert) {
		// clear the timer if it hasn't fired yet
		clearTimeout(timers[alert.id]);

		// we don't need to keep track of any timers for this alert anymore
		delete timers[alert.id];

		// actually dismiss the alert
		onDismiss(alert);
	}

	render() {
		const onDismiss = this.props.onDismiss ? this.dismissAlert.bind(this, this.timers, this.props.onDismiss) : null;
		return <AlertList {...this.props} onDismiss={onDismiss} />;
	}
}

AlertListWithTimers.propTypes = {
	...ContainerPropTypes,
	alerts: t.arrayOf(t.shape({
		id: t.any.isRequired,
		type: AlertPropTypes.type,
		headline: t.string,
		message: t.string
	})).isRequired,
	onDismiss: t.func,
	timeout: t.number
};

export default AlertListWithTimers;