import React from "react";
import transitionStyles from "./transition-styles";
import { CSSTransition } from "react-transition-group";
import { ENTER_TIMEOUT, EXIT_TIMEOUT } from "./container";
import { createUseStyles } from "react-jss";

const AlertTransition = props => {
	const classes = useStyles();

	const timeout = { enter: ENTER_TIMEOUT, exit: EXIT_TIMEOUT };
	return <CSSTransition timeout={timeout} classNames={classes} {...props} />;
};

const useStyles = createUseStyles(transitionStyles);

export default AlertTransition;
