import React from "react";
import { AlertType } from "../types";

const Icon = ({ type, className = "" }: IconPropTypes) => {
	const faType = iconType(type);

	if (faType) {
		return <i className={`${faType} ${className}`} aria-hidden="true"></i>;
	}

	return null;
};

function iconType(type: AlertType) {
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

interface IconPropTypes {
	type: AlertType,
	className?: string
}

export default Icon;