import React from "react";
import { bootstrap } from "toetag";
import useSheet from "./jss-preset";

const styles = {
	innerAlert: {
		marginBottom: bootstrap.paddingBaseVertical,
		display: "inline-block",
		textAlign: "left"
	}
};

const Alert = ({
	type = "info",
	message,
	headline,
	onDismiss,
	sheet: { classes },
	...props
}) => {
	const css = `alert alert-dismissible alert-${type} ${classes.innerAlert}`;
	const headlineEl = headline ? <strong>{headline}&nbsp;</strong> : null;

	return (
		<div {...props}>
			<div className={css} >
				<button type="button" className="close" title="Dismiss" onClick={onDismiss}>&times;</button>
				{headlineEl}{message}
			</div>
		</div>
	);
};

export default useSheet(Alert, styles);