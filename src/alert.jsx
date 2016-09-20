import React from "react";
import Collapse from "./collapse";

const Alert = ({ type = "info", message, headline, onDismiss }) => {
	const css = "alert alert-dismissible alert-" + type;
	const headlineEl = headline ? <strong>{headline}&nbsp;</strong> : null;

	return (
		<div>
			<Collapse>
				<div style={{ margin: 2 }} className={css} >
					<button type="button" className="close" title="Dismiss" onClick={onDismiss}>&times;</button>
					{headlineEl}{message}
				</div>
			</Collapse>
		</div>
	);
};

export default Alert;