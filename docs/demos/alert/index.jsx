import React from "react";
import CodeExample from "../code-example";

import ex from "raw!./code.example";
import desc from "raw!./description.md";

const AlertDemo = props => <CodeExample title={<span>Inline <code>Alert</code></span>} codeText={ex} description={desc} {...props} noRender />;

export default AlertDemo;