var React = require("react");
require("./styles.less");

var AlertsNotifier = React.createClass({
	propTypes: {
		alerts: React.PropTypes.array.isRequired
	},
	getInitialState: function () {
		return {
			shownAlerts: this.props.alerts
		};
	},
	dismiss: function(item) {
		//remove from shown alerts here OR call onDismiss if prop set
		var index = this.state.shownAlerts.indexOf(item);

		if (index >= 0) {
			var newData = this.state.shownAlerts.slice(); //copy the array
			newData.splice(index, 1); //remove element
			this.setState({ shownAlerts: newData }); //update state
		}
	},
	render: function () {
		if (this.state.shownAlerts.length < 1) {
			return null;
		}

		var i = -1;

		return (
			<div className="alert-notifier-container">
				{this.state.shownAlerts.map(function (item) {
					i++;

					if (["success", "info", "warning", "danger"].indexOf(item.type) < 0) {
						item.type = "info";
					}

					var css = "alert alert-dismissible alert-" + item.type;
					var headline = item.headline ? <strong>{item.headline}&nbsp;</strong> : null;

					return (
						<div className={css} key={i}>
							<button type="button" className="close" title="Dismiss" onClick={this.dismiss.bind(this, item)}>&times;</button>
							{headline}{item.message}
						</div>
					);
				}.bind(this))}
			</div>
		);
	}
});

module.exports = AlertsNotifier;
