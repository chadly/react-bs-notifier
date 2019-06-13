import React from "react";

// Import optional react-icons library
let FontAwesome;

try {
  FontAwesome = require("react-icons/fa");
} catch (err) {
  FontAwesome = false;
};

const Icon = ({ type, className = "" }) => {
	const faType = iconType(type);

	if (faType) {
	  if (FontAwesome) {
	    return <ReactIcon type={type} className={className} />
	  } else {
  		return <i className={`${faType} ${className}`} aria-hidden="true" />;
  }
	}

	return null;
};

const ReactIcon = ({ type, className = ""}) => {
  const {
    FaCheck, 
    FaExclamationCircle, 
    FaExclamationTriangle, 
    FaInfo } = FontAwesome;

  switch (type) {
    case "warning":
      return <FaExclamationTriangle className={className} aria-hidden="true" />;
    
    case "info":
      return <FaInfo className={className} aria-hidden="true" />;
    
    case "success":
      return <FaCheck className={className} aria-hidden="true" />;
    
    case "danger":
      return <FaExclamationCircle className={className} aria-hidden="true" />;
    
    default:
      return null;    
  }
}

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
