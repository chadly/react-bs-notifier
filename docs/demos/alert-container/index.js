import React from "react";
import CodeExample from "../code-example";

import ex from "./code.example";
import desc from "./description.md";

const AlertContainerDemo = props => (
	<CodeExample
		title={<code>AlertContainer</code>}
		codeText={ex}
		description={desc}
		{...props}
	/>
);

export default AlertContainerDemo;
