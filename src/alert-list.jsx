import React, { PropTypes as t } from "react";

import Container, { PropTypes as ContainerPropTypes } from "./container";
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

AlertList.propTypes = {
	...ContainerPropTypes,
	alerts: t.arrayOf(t.shape({
		id: t.any.isRequired,
		type: AlertPropTypes.type,
		headline: AlertPropTypes.headline,
		message: t.object.isRequired
	})).isRequired,
	onDismiss: t.func,
	timeout: AlertPropTypes.timeout
};

export default AlertList;