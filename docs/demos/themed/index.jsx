import React from "react";
import CodeExample from "../code-example";

import ex from "raw!./code.example";
import desc from "raw!./description.md";

const ThemedAlertDemo = props => <CodeExample title={<span>Themed <code>Alert</code></span>} codeText={ex} description={desc} {...props} noRender={false} />;

export default ThemedAlertDemo;