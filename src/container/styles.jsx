import { bootstrap } from "toetag";
import useSheet from "react-jss";

const MAGICAL_MAX_HEIGHT = "20em";

export default useSheet({
	container: {
		position: "fixed",
		paddingTop: bootstrap.paddingBaseVertical,
		paddingRight: bootstrap.paddingBaseHorizontal,
		paddingBottom: bootstrap.paddingBaseVertical,
		paddingLeft: bootstrap.paddingBaseHorizontal,
		zIndex: bootstrap.zindexNavbarFixed + 1
	},
	"top-right": {
		top: 0,
		right: 0,
		textAlign: "right"
	},
	"top-left": {
		top: 0,
		left: 0
	},
	"bottom-right": {
		bottom: 0,
		right: 0,
		textAlign: "right"
	},
	"bottom-left": {
		bottom: 0,
		left: 0
	},
	enter: {
		opacity: 0.01,
		transform: "translateX(-25%)",
		maxHeight: 0,
		overflow: "hidden",
		transition: ".25s ease-in"
	},
	enterActive: {
		opacity: 1,
		transform: "translateX(0)",
		maxHeight: MAGICAL_MAX_HEIGHT
	},
	leave: {
		opacity: 1,
		transform: "translateX(0)",
		maxHeight: MAGICAL_MAX_HEIGHT,
		overflow: "hidden",
		transition: ".25s ease-out"
	},
	leaveActive: {
		opacity: 0.01,
		transform: "translateX(25%)",
		maxHeight: 0
	}
});
