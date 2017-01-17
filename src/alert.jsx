import React from "react";

import { bootstrap } from "toetag";
import Icon from "./icon";

import useSheet from "react-jss";

const styles = {
	alert: {
		composes: "alert",
		marginBottom: bootstrap.paddingBaseVertical,
		display: "inline-block",
		textAlign: "left"
	},
	info: {
		composes: "alert-info"
	},
	success: {
		composes: "alert-success"
	},
	warning: {
		composes: "alert-warning",
	},
	danger: {
		composes: "alert-danger"
	},
	dismissable: {
		composes: "alert-dismissable"
	},
	close: {
		composes: "close"
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
	containerComponent: Container = "div",
	type = "info",
	children,
	headline,
	onDismiss,
	dismissTitle = "Dismiss",
	sheet: { classes },
	showIcon = true
}) => {
	const isDismissable = !!onDismiss;
	const css = `${isDismissable ? classes.dismissable : ""} ${classes[type]} ${classes.alert}`;
	const dismiss = isDismissable ? <button type="button" className={classes.close} title={dismissTitle} onClick={onDismiss}>&times;</button> : null;

	return (
		<Container> {/* this classless container is used by the transition group above... don't delete it */}
			<div className={css}>
				{dismiss}

				{showIcon ? <Icon className={classes.icon} type={type} /> : null}
				<div className={classes.msgContainer}>
					{headline ? <h4 className={classes.headline}>{headline}</h4> : null}
					<div className={classes.body}>{children}</div>
				</div>
			</div>
		</Container>
	);
};

export default useSheet(styles)(Alert);