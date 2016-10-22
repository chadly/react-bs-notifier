import React, { Component, PropTypes as t } from "react";

import { bootstrap } from "toetag";
import Icon from "./icon";

import { ENTER_TIMEOUT, EXIT_TIMEOUT } from "./container";

import useSheet from "react-jss-preset-civicsource";

const styles = {
	innerAlert: {
		marginBottom: bootstrap.paddingBaseVertical,
		display: "inline-block",
		textAlign: "left"
	},
	msgContainer: {
		display: "inline-block"
	},
	icon: {
		verticalAlign: "top",
		fontSize: bootstrap.fontSizeH4,
		paddingRight: bootstrap.paddingLargeHorizontal,
		opacity: 0.2
	},
	headline: {
		margin: 0,
		marginBottom: bootstrap.paddingBaseVertical
	},
	body: {
		maxWidth: "40em"
	}
};

const Alert = ({
	type = "info",
	children,
	headline,
	onDismiss,
	dismissTitle = "Dismiss",
	sheet: { classes },
	showIcon = true
}) => {
	const isDismissable = !!onDismiss;
	const css = `alert ${isDismissable ? "alert-dismissible" : ""} alert-${type} ${classes.innerAlert}`;
	const dismiss = isDismissable ? <button type="button" className="close" title={dismissTitle} onClick={onDismiss}>&times;</button> : null;

	return (
		<div> {/* this outer div is important so the alerts stack on top of one another... don't delete it */}
			<div className={css}>
				{dismiss}

				{showIcon ? <Icon className={classes.icon} type={type} /> : null}
				<div className={classes.msgContainer}>
					{headline ? <h4 className={classes.headline}>{headline}</h4> : null}
					<div className={classes.body}>{children}</div>
				</div>
			</div>
		</div>
	);
};

class AlertTimer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.setupTimer(
			this.props.timeout,
			this.props.onDismiss
		);
	}

	componentWillReceiveProps({ timeout, onDismiss }) {
		this.setupTimer(
			timeout,
			onDismiss
		);
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
		const onDismiss = this.props.onDismiss ? this.dismissAlert.bind(this, this.props.onDismiss) : null;
		return <Alert {...this.props} onDismiss={onDismiss} />;
	}
}

export const PropTypes = {
	type: t.oneOf(["info", "success", "warning", "danger"]),
	headline: t.string,
	onDismiss: t.func,
	dismissTitle: t.string,
	showIcon: t.bool,
	timeout: t.number
};

AlertTimer.propTypes = PropTypes;

export default useSheet(AlertTimer, styles);