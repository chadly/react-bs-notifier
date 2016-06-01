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

### Options

You can pass an `onDismiss` callback to the component to override what happens when an item is dismissed. You can also pass `timeout` in milliseconds to dismiss the item automatically.

```js
React.render(<Notifier alerts={alerts} onDismiss={myDismissFunc} timeout={1500} />, document.getElementById("myApp"));

function myDismissFunc(item) {
	console.log(item);
}
```

Instead of dismissing the notification, the component will call the `myDismissFunc`. This is a useful way to call an action to integrate this component into a [flux application](https://facebook.github.io/flux/).
