var React = require("react");
var Notifier = require("react-bs-notifier");

var NotifierGenerator = React.createClass({
	getInitialState: function () {
		return {
			alerts: []
		};
	},
	generate: function(type) {
		var newData = this.state.alerts.slice();
		newData.push({
			type: type,
			headline: "Woah!",
			message: "This is an example " + type + " message."
		});

		this.setState({ alerts: newData });
	},
	render: function () {
		return (
			<div>
				<Notifier alerts={this.state.alerts} />
				<div className="btn-group">
					<button type="button" className="btn btn-info" onClick={this.generate.bind(this, 'info')}>Generate Info</button>
					<button type="button" className="btn btn-success" onClick={this.generate.bind(this, 'success')}>Generate Success</button>
					<button type="button" className="btn btn-warning" onClick={this.generate.bind(this, 'warning')}>Generate Warning</button>
					<button type="button" className="btn btn-danger" onClick={this.generate.bind(this, 'danger')}>Generate Danger</button>
				</div>
			</div>
		);
	}
});

module.exports = NotifierGenerator;
