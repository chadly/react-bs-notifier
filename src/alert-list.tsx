import React, { PropTypes as t } from "react";

import Container, { PropTypes } from "./container";
import Alert, { PropTypes as AlertPropTypes } from "./alert-timer";

const AlertList = ({
	position,
	alerts,
	onDismiss,
	...props
}) => (
	<Container position={position}>
		{alerts.map(item => {
			const dismiss = onDismiss ? () => onDismiss(item) : null;

			const { message, ...alertProps } = item;

			return (
				<Alert key={item.id} {...props} {...alertProps} onDismiss={dismiss}>
					{message}
				</Alert>
			);
		})}
	</Container>
);

interface PropTypes {
	alerts: 
}

interface Alert {
	id: any,
	type
}

AlertList.propTypes = {
	...ContainerPropTypes,
	alerts: t.arrayOf(t.shape({
		id: t.any.isRequired,
		type: AlertPropTypes.type,
		headline: AlertPropTypes.headline,
		message: t.oneOfType([t.string, t.node, t.object]).isRequired
	})).isRequired,
	onDismiss: t.func,
	timeout: AlertPropTypes.timeout
};

export default AlertList;
