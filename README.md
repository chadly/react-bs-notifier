# React Bootstrap Notifier

> A react component to show growl-like notifications using [bootstrap alerts](http://getbootstrap.com/components/#alerts).

See a [live example](http://chadly.github.io/react-bs-notifier/).

## Install

```
npm install react-bs-notifier --save
```

## Usage

```js
var React = require("react");
var Notifier = require("react-bs-notifier");

var alerts = [{
	type: "info",
	message: "This is an information message."
}, {
	type: "warning",
	message: "This is a warning message!"
}, {
	type: "danger",
	headline: "Woah!",
	message: "This is a danger message!"
}, {
	type: "success",
	headline: "Good job!",
	message: "This is a success message!"
}];

React.render(<Notifier alerts={alerts} />, document.getElementById("myApp"));
```
