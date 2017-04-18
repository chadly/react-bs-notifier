import React from "react";
import * as t from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import styles from "./styles";

export const ENTER_TIMEOUT = 500;
export const EXIT_TIMEOUT = 300;

const AlertContainer = ({
	position = "top-right",
	children,
	sheet: { classes }
}) => {
	return (
		<div className={`${classes.container} ${classes[position]}`}>
			<ReactCSSTransitionGroup
				transitionName={classes}
				transitionEnterTimeout={ENTER_TIMEOUT}
				transitionLeaveTimeout={EXIT_TIMEOUT}
			>
				{children}
			</ReactCSSTransitionGroup>
		</div>
	);
};

export const PropTypes = {
	position: t.oneOf(["top-right", "top-left", "bottom-right", "bottom-left"])
};

AlertContainer.propTypes = PropTypes;

export default styles(AlertContainer);
