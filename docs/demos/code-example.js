import React from "react";
import ReactDOM from "react-dom";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import theme from "prism-react-renderer/themes/vsDark";

import { Alert, AlertList, AlertContainer } from "../../src";
import { createUseStyles } from "react-jss";
import Markdown from "react-remarkable";

const CodeExample = ({ title, description, ...props }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<h3 className={classes.title}>{title}</h3>

			<LiveProvider
				scope={{
					React,
					ReactDOM,
					Alert,
					AlertList,
					AlertContainer,
					createUseStyles
				}}
				theme={theme}
				{...props}
			>
				<div className="mb-5">
					<LivePreview />
				</div>

				<LiveError className="alert alert-danger" />

				<div className={classes.code}>
					<LiveEditor />
				</div>
			</LiveProvider>

			<Markdown source={description} />
		</div>
	);
};

const useStyles = createUseStyles({
	root: {
		composes: "my-5"
	},
	title: {
		composes: "mb-3"
	},
	example: {
		composes: ["row", "my-5"]
	},
	code: {
		composes: "my-5",
		maxHeight: 500,
		overflowY: "scroll"
	}
});

export default CodeExample;
