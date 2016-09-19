import React from "react";

const Alert = ({ item, onDismiss }) => {
	if (["success", "info", "warning", "danger"].indexOf(item.type) < 0) {
		item.type = "info";
	}

	const css = "alert alert-dismissible alert-" + item.type;
	const headline = item.headline ? <strong>{item.headline}&nbsp;</strong> : null;

	return (
		<div className={css}>
			<button type="button" className="close" title="Dismiss" onClick={() => onDismiss(item)}>&times;</button>
			{headline}{item.message}
		</div>
	);
};

export default Alert;