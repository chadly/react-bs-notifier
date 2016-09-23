import { bootstrap } from "toetag";

export default {
	container: {
		position: "fixed",
		top: 0,
		right: 0,
		textAlign: "right",
		paddingTop: bootstrap.paddingBaseVertical,
		paddingRight: bootstrap.paddingBaseHorizontal,
		paddingLeft: bootstrap.paddingBaseHorizontal,
		zIndex: bootstrap.zindexNavbarFixed + 1
	},
	enter: {
		opacity: 0.01,
		transform: "translateX(-25%)",
		transition: ".25s ease-in",
	},
	enterActive: {
		opacity: 1,
		transform: "translateX(0)"
	},
	leave: {
		opacity: 1,
		transform: "translateX(0)",
		transition: ".25s ease-in"
	},
	leaveActive: {
		opacity: 0.01,
		transform: "translateX(25%)"
	}
};