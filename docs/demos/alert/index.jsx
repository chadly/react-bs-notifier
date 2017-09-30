import React from "react";
import CodeExample from "../code-example";

import ex from "./code.example";
import desc from "./description.md";

const AlertDemo = props => (
	<CodeExample
		title={
			<span>
				Inline <code>Alert</code>
			</span>
		}
		codeText={ex}
		description={desc}
		{...props}
		noRender
	/>
);

export default AlertDemo;
