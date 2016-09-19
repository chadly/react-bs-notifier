import React from "react";
import ReactDOM from "react-dom";
import AlertsNotifier from "../src/alerts";

const Root = () => (
	<AlertsNotifier alerts={[{
		message: "You better check your bucket",
		type: "warning"
	}]}
	/>
);

ReactDOM.render(<Root />, document.getElementById("exampleApp"));