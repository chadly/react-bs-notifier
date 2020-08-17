import React from "react";

import AlertListDemo from "./alert-list";
import AlertDemo from "./alert";
import AlertContainerDemo from "./alert-container";
import ThemedAlertDemo from "./themed";

const Demos = () => (
	<div>
		<p>
			Make sure to click the <em>expand</em> link next to each demo to view &
			edit the code.
		</p>

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
