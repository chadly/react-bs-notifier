import React, { Component } from "react";

class Collapse extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: !!this.props.open
		};
	}

	componentDidMount() {
		this.setState({
			open: true
		});
	}

	componentWillUnmount() {
		this.setState({
			open: false
		});
	}

	render() {
		return (
			<div {...this.props} style={{
				overflow: "hidden",
				maxHeight: this.state.open ? "999em" : "0",
				transition: ".25s height"
			}}>{this.props.children}</div>
		);
	}
}

const Alert = ({ type = "info", message, headline, onDismiss }) => {
	const css = "alert alert-dismissible alert-" + type;
	const headlineEl = headline ? <strong>{headline}&nbsp;</strong> : null;

	return (
		<div>
			<Collapse>
				<div style={{ margin: 2 }} className={css} >
					<button type="button" className="close" title="Dismiss" onClick={onDismiss}>&times;</button>
					{headlineEl}{message}
				</div>
			</Collapse>
		</div>
	);
};

export default Alert;