import React from "react";
import { TransitionGroup } from "react-transition-group";

import Container from "./container";
import Alert from "./alert-timer";
import AlertTransition from "./alert-transition";
import styles from "./container/styles";

const AlertList = ({ position, alerts, onDismiss, ...props }) => (
	<Container position={position}>
		<TransitionGroup>
			{alerts.map(item => {
				const dismiss = onDismiss ? () => onDismiss(item) : null;

				const { message, ...alertProps } = item;

				return (
					<AlertTransition key={item.id}>
						<Alert {...props} {...alertProps} onDismiss={dismiss}>
							{message}
						</Alert>
					</AlertTransition>
				);
			})}
		</TransitionGroup>
	</Container>
);

export default styles(AlertList);
