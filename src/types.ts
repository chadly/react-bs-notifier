export type AlertPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";
export type AlertType = "info" | "success" | "warning" | "danger";

export interface Alert {
	id: any,
	type: AlertType,
	headline: string,
	message: any
}