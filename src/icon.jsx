import React from "react";

const Icon = ({ type, className = "" }) => {
	const faType = iconType(type);

	if (faType) {
		return <i className={`${faType} ${className}`} aria-hidden="true" />;
	}

	return null;
};

function iconType(type) {
	switch (type) {
		case "warning":
			return "fa fa-warning";

		case "info":
			return "fa fa-info";

		case "success":
			return "fa fa-check";

		case "danger":
			return "fa fa-exclamation-circle";
	}
}

export default Icon;
