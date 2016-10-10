import React from "react";
import { bootstrap } from "toetag";
import Icon from "./icon";
import useSheet from "./jss-preset";

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
	message,
	headline,
	onDismiss,
	sheet: { classes },
	showIcon = true,
	...props
}) => {
	const css = `alert alert-dismissible alert-${type} ${classes.innerAlert}`;

	return (
		<div {...props}>
			<div className={css} >
				<button type="button" className="close" title="Dismiss" onClick={onDismiss}>&times;</button>

				{showIcon ? <Icon className={classes.icon} type={type} /> : null}
				<div className={classes.msgContainer}>
					{headline ? <h4 className={classes.headline}>{headline}</h4> : null}
					<div className={classes.body}>{message}</div>
				</div>
			</div>
		</div>
	);
};

export default useSheet(Alert, styles);