import React from "react";
import transitionStyles from "./transition-styles";
import { CSSTransition } from "react-transition-group";
import { ENTER_TIMEOUT, EXIT_TIMEOUT } from "./container";
import useSheet from "react-jss";

const timeout = { enter: ENTER_TIMEOUT, exit: EXIT_TIMEOUT };

const AlertTransition = ({ sheet: { classes }, ...props }) =>
	props && props.children ? (
		<CSSTransition timeout={timeout} classNames={classes} {...props} />
	) : null;

export default useSheet(transitionStyles)(AlertTransition);
