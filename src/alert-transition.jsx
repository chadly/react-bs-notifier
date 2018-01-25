import React from "react";
import transitionStyles from "./transition-styles";
import { CSSTransition } from "react-transition-group";
import { ENTER_TIMEOUT, EXIT_TIMEOUT } from "./container";
import useSheet from "react-jss";

const AlertTransition = ({ classes, ...props }) => {
	delete props.classes; // if it is there (it may not be depending on which version of JSS is used)
	const timeout = { enter: ENTER_TIMEOUT, exit: EXIT_TIMEOUT };
	return <CSSTransition timeout={timeout} classNames={classes} {...props} />;
};

export default useSheet(transitionStyles)(AlertTransition);
