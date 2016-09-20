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

export default Collapse;