export default {
	container: {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
		padding: 5,
		zIndex: 9999
	},
	enter: {
		opacity: 0.01,
		transition: "opacity .25s ease-in"
	},
	enterActive: {
		opacity: 1,
	},
	leave: {
		opacity: 1,
		transition: "opacity .25s ease-in"
	},
	leaveActive: {
		opacity: 0.01
	}
};