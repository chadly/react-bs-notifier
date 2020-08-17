import React from "react";
import { createUseStyles } from "react-jss";

import { bootstrap } from "toetag";
import Icon from "./icon";
import transitionStyles from "../transition-styles";

const Alert = ({
	type = "info",
	children,
	headline,
	onDismiss,
	dismissTitle = "Dismiss",
	showIcon = true,
	classes: classOverrides
}) => {
	let classes = useStyles();
	classes = { ...classes, ...classOverrides };

	const isDismissable = !!onDismiss;
	const css = `${isDismissable ? classes.dismissable : ""} ${classes[type]} ${
		classes.alert
	}`;
	const dismiss = isDismissable ? (
		<button
			type="button"
			className={classes.close}
			title={dismissTitle}
			onClick={onDismiss}
		>
			×
		</button>
	) : null;

	return (
		<div>
			{/* this classless container div is used by the transition group above... don't delete it */}
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

const useStyles = createUseStyles({
	...transitionStyles,
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
		composes: "alert-warning"
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
});

export default Alert;
