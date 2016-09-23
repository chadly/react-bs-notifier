# React Bootstrap Notifier

> A react component to show growl-like notifications using [bootstrap alerts](http://getbootstrap.com/components/#alerts).

See a [live example](http://chadly.github.io/react-bs-notifier/).

## Install

```
npm install react-bs-notifier --save
```

## Usage

```js
import React from "react";
import ReactDOM from "react-dom";
import Notifier from "react-bs-notifier";

var alerts = [{
	type: "info",
	id: "info123",
	message: "This is an information message."
}, {
	type: "warning",
	id: "warning456",
	message: "This is a warning message!"
}, {
	type: "danger",
	headline: "Whoa!",
	message: "This is a danger message!"
}, {
	type: "success",
	headline: "Good job!",
	message: "This is a success message!"
}, {
	type: "success",
	headline: "Good job!",
	message: <span style={{color: 'pink'}}>This is a ping message for some reason!</span>
}];

ReactDOM.render(<Notifier alerts={alerts} timeout={3000} />, document.getElementById("myApp"));
```

### Options

#### `position`

The corner in which alerts appear.
One of `"top-right"` (default), `"top-left"`, `"bottom-right"`, `"bottom-left"`.

#### `alerts`

These are the alerts that the component should render. It expects an object with properties `type` & `message` with an optional (but strongly recommended) `id` & `headline`. `id` isn't required but strongly encouraged as it will fix some janky issues with how the alerts animate in & out. If no `id` is specified, the component will fall back to using the array index of the alert as the component key.

The supported values for `type` are one of _info_, _warning_, _danger_, or _success_.

##### Note

While `message` can accept arbitrary content,
the height animation on the alerts is static
and based on the assumption that the content won't exceed 20em vertically.
You probably want to avoid putting anything that long in an alert which overlaps your UI anyway
as opposed to linking to more detail, or in the case of a stack trace simply logging it to the console. 

#### `timeout`

An optional timeout (in milliseconds) before alerts are automatically dismissed. If not specified, an alert will not be dismissed until the user dismisses it. There is no timeout by default.

#### `onDismiss`

You can pass an `onDismiss` callback to the component to override what happens when an item is dismissed. By default, if no `onDismiss` function is specified, the component will manage what alerts are dismissed as part of its internal state.

```js
React.render(<Notifier alerts={alerts} onDismiss={myDismissFunc} timeout={1500} />, document.getElementById("myApp"));

function myDismissFunc(item) {
	console.log(item);
}
```

Instead of dismissing the notification, the component will call the `myDismissFunc`. This is a useful way to call an action to integrate this component into a [redux application](http://redux.js.org/).

## Running Example Locally

If you clone this repo, you can run the example app locally:

```
npm install
npm start
```

This will spin up a webpack dev server on port 1341. Open your browser to [localhost:1341](http://localhost:1341/) and any changes you make will build & refresh the page automatically.

## Deploying Example to Github Pages

Run `npm run build --production` and commit the resulting `example/index.html` & `example/build.js.*` files to the `gh-pages` branch.