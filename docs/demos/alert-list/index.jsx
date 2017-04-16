import React from "react";
import CodeExample from "../code-example";

import ex from "./code.example";
import desc from "./description.md";

const AlertListDemo = props => (
	<CodeExample
		title={<code>AlertList</code>}
		codeText={ex}
		description={desc}
		{...props}
	/>
);

export default AlertListDemo;
