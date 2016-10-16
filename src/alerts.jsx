import React, { Component, PropTypes as t } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Alert from "./alert";
import styles from "./alerts.styles";
import useSheet from "./jss-preset";

const ENTER_TIMEOUT = 500;
const EXIT_TIMEOUT = 300;

const ReactBsNotifier = ({
	position = "top-right",
	alerts,
	onDismiss,
	showIcon,
	dismissTitle,
	dismiss,
	sheet: { classes }
}) => {
	return (
		<div className={`${classes.container} ${classes[position]}`}>
			<ReactCSSTransitionGroup transitionName={classes} transitionEnterTimeout={ENTER_TIMEOUT} transitionLeaveTimeout={EXIT_TIMEOUT}>
				{alerts.map((item, idx) => <Alert key={item.id || idx} type={item.type} headline={item.headline} message={item.message} {...{ showIcon, dismissTitle, dismiss }} onDismiss={() => onDismiss(item)} />)}
			</ReactCSSTransitionGroup>
		</div>
	);
};

class ReactBsNotifierStateContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dismissedAlerts: []
		};
	}

	dismiss = item => {
		if (this.props.onDismiss) {
			// if callback specified, call it
			this.props.onDismiss(item);
		} else {
			// if no callback for dismissal, just update our state
			let newData = this.state.dismissedAlerts.slice();
			newData.push(item);
			this.setState({ dismissedAlerts: newData });
		}
	}

	render() {
		let alerts = [];

		for (var i = 0; i < this.props.alerts.length; i++) {
			if (this.state.dismissedAlerts.indexOf(this.props.alerts[i]) < 0) {
				const alert = this.props.alerts[i];
				alerts.push(alert);

				if (this.props.timeout) {
					setTimeout(() => this.dismiss(alert), this.props.timeout + ENTER_TIMEOUT + EXIT_TIMEOUT);
				}
			}
		}

		return <ReactBsNotifier {...this.props} alerts={alerts} onDismiss={this.dismiss} sheet={this.props.sheet} />;
	}
}

ReactBsNotifierStateContainer.propTypes = {
	position: t.oneOf(["top-right", "top-left", "bottom-right", "bottom-left"]),
	alerts: t.array.isRequired,
	onDismiss: t.func,
	timeout: t.number
};

export default useSheet(ReactBsNotifierStateContainer, styles, { meta: __filename });