import React, { Children, cloneElement } from "react";
import { oneOf } from "prop-types";
import { TransitionGroup } from "react-transition-group";
import AlertTransition from "./alert-transition";

import { createUseStyles } from "react-jss";
import { bootstrap } from "toetag";
import transitionStyles from "./transition-styles";

export const ENTER_TIMEOUT = 500;
export const EXIT_TIMEOUT = 300;

const AlertContainer = ({ position = "top-right", children }) => {
	const classes = useStyles();

	return (
		<div className={`${classes.container} ${classes[position]}`}>
			<TransitionGroup>
				{Children.map(children, child =>
					child ? (
						<AlertTransition key={child.props.id}>
							{cloneElement(child)}
						</AlertTransition>
					) : null
				)}
			</TransitionGroup>
		</div>
	);
};

export const useStyles = createUseStyles({
	container: {
		position: "fixed",
		paddingTop: bootstrap.paddingBaseVertical,
		paddingRight: bootstrap.paddingBaseHorizontal,
		paddingBottom: bootstrap.paddingBaseVertical,
		paddingLeft: bootstrap.paddingBaseHorizontal,
		zIndex: bootstrap.zindexNavbarFixed + 1
	},
	"top-right": {
		top: 0,
		right: 0,
		textAlign: "right"
	},
	"top-left": {
		top: 0,
		left: 0
	},
	"bottom-right": {
		bottom: 0,
		right: 0,
		textAlign: "right"
	},
	"bottom-left": {
		bottom: 0,
		left: 0
	},
	...transitionStyles
});

export const PropTypes = {
	position: oneOf(["top-right", "top-left", "bottom-right", "bottom-left"])
};

AlertContainer.propTypes = PropTypes;

export default AlertContainer;
