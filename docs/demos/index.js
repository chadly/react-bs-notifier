import React from "react";

import AlertListDemo from "./alert-list";
import AlertDemo from "./alert";
import AlertContainerDemo from "./alert-container";
import ThemedAlertDemo from "./themed";

const Demos = () => (
	<div>
		<p>You can view and edit the code for each demo inline.</p>

		<AlertListDemo />
		<hr />

		<AlertDemo />
		<hr />

		<AlertContainerDemo />
		<hr />

		<ThemedAlertDemo />
		<hr />
	</div>
);

export default Demos;
