import React from "react";
import CodeExample from "../code-example";

import ex from "raw!./code.example";
import desc from "raw!./description.md";

const AlertContainerDemo = props => <CodeExample title={<code>AlertContainer</code>} codeText={ex} description={desc} {...props} />;

export default AlertContainerDemo;