import React, { PropTypes as t } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import styles from "./styles";
import { AlertPosition } from "../types";

export const ENTER_TIMEOUT = 500;
export const EXIT_TIMEOUT = 300;

const AlertContainer = ({
	position = "top-right",
	children,
	sheet: { classes }
}: PropTypes) => {
	return (
		<div className={`${classes.container} ${classes[position]}`}>
			<ReactCSSTransitionGroup transitionName={classes} transitionEnterTimeout={ENTER_TIMEOUT} transitionLeaveTimeout={EXIT_TIMEOUT}>
				{children}
			</ReactCSSTransitionGroup>
		</div>
	);
};

interface PropTypes {
	position: AlertPosition,
	children: any,
	sheet: any
};

export default styles(AlertContainer);