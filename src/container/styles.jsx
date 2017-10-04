import { bootstrap } from "toetag";
import useSheet from "react-jss";
import transitionStyles from "../transition-styles";

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
	...transitionStyles
});
