import React from "react";
import CodeExample from "../code-example";

import ex from "./code.example";
import desc from "./description.md";

const ThemedAlertDemo = props => (
	<CodeExample
		title={
			<span>
				Themed <code>Alert</code>
			</span>
		}
		code={ex}
		description={desc}
		noInline
		{...props}
	/>
);

export default ThemedAlertDemo;
