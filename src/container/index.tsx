import React, { PropTypes as t } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import styles from "./styles";

export const ENTER_TIMEOUT = 500;
export const EXIT_TIMEOUT = 300;

const AlertContainer = ({ position = "top-right", children, sheet: { classes } }: PropTypes) => {
	return (
		<div className={`${classes.container} ${classes[position]}`}>
			<ReactCSSTransitionGroup transitionName={classes} transitionEnterTimeout={ENTER_TIMEOUT} transitionLeaveTimeout={EXIT_TIMEOUT}>
				{children}
			</ReactCSSTransitionGroup>
		</div>
	);
};

export interface PropTypes {
	position: "top-right" | "top-left" | "bottom-right" | "bottom-left",
	children: any,
	sheet: any
};

export default styles(AlertContainer);