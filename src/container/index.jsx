import React, { Children, cloneElement } from "react";
import { oneOf } from "prop-types";
import { TransitionGroup } from "react-transition-group";
import AlertTransition from "../alert-transition";
import styles from "./styles";

export const ENTER_TIMEOUT = 500;
export const EXIT_TIMEOUT = 300;

const AlertContainer = ({ position = "top-right", children, classes }) => {
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

export const PropTypes = {
	position: oneOf(["top-right", "top-left", "bottom-right", "bottom-left"])
};

AlertContainer.propTypes = PropTypes;

export default styles(AlertContainer);
