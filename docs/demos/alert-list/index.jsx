import React from "react";
import CodeExample from "../code-example";

import ex from "raw!./code.example";
import desc from "raw!./description.md";

const AlertListDemo = props => <CodeExample title={<code>AlertList</code>} codeText={ex} description={desc} {...props} />;

export default AlertListDemo;