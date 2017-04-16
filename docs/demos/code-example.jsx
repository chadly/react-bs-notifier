import React from "react";
import ReactDOM from "react-dom";
import Playground from "component-playground";
import { Alert, AlertList, AlertContainer } from "../../src";
import useSheet from "react-jss";
import Markdown from "react-remarkable";

import "./code.css";

const CodeExample = ({ title, description, ...props }) => (
	<div>
		<h3>{title}</h3>
		<Playground
			scope={{ React, ReactDOM, Alert, AlertList, AlertContainer, useSheet }}
			noRender={false}
			theme="solarized dark"
			collapsableCode
			initiallyExpanded={false}
			{...props}
		/>
		<Markdown source={description} />
	</div>
);

export default CodeExample;
