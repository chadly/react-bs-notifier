import React from "react";


// Import optional react-icons library
import("react-icons/fa").then(fa => {
  const { FaCheck, FaExclamationCircle, FaExclamationTriangle, FaInfo } = fa;
}).catch(err => {
  const FaCheck = null;
});

const Icon = ({ type, className = "" }) => {
	const faType = iconType(type);

	if (faType) {
	  if (FaCheck) {
	    return <ReactIcon type={type} className={className} />
	  } else {
  		return <i className={`${faType} ${className}`} aria-hidden="true" />;
  }
	}

	return null;
};

const ReactIcon = ({ type, className = ""}) => {
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
