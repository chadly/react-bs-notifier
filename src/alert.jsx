import React from "react";

const Alert = ({ type = "info", message, headline, onDismiss }) => {
	if (["success", "info", "warning", "danger"].indexOf(type) < 0) {
		type = "info";
	}

	const css = "alert alert-dismissible alert-" + type;
	const headlineEl = headline ? <strong>{headline}&nbsp;</strong> : null;

	return (
		<div className={css}>
			<button type="button" className="close" title="Dismiss" onClick={onDismiss}>&times;</button>
			{headlineEl}{message}
		</div>
	);
};

export default Alert;