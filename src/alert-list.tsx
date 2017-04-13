import React from "react";

import Container from "./container";
import Alert from "./alert-timer";
import { AlertPosition, Alert as AlertType } from "./types";

const AlertList = ({
	position,
	alerts,
	onDismiss,
	...props
} : PropTypes) => (
	<Container position={position}>
		{alerts.map(item => {
			const dismiss = onDismiss ? () => onDismiss(item) : null;

			const { message, id, ...alertProps } = item;

			return (
				<Alert key={id} {...props} {...alertProps} onDismiss={dismiss}>
					{message}
				</Alert>
			);
		})}
	</Container>
);

interface PropTypes {
	position: AlertPosition,
	alerts: AlertType[],
	onDismiss?: (alert: AlertType) => void
}

export default AlertList;
