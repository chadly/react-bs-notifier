# React Bootstrap Notifier

> A react component to show growl-like notifications using [bootstrap alerts](https://getbootstrap.com/docs/4.5/components/alerts/).

See a [live demo](https://chadly.github.io/react-bs-notifier/).

## Usage

```
npm install react-bs-notifier --save
```

To show a list of different types of alerts in the top right corner of the page:

```js
import React from "react";
import ReactDOM from "react-dom";
import { AlertList } from "react-bs-notifier";

const alerts = [{
	id: 1,
	type: "info",
	message: "Hello, world"
}, {
	id: 2,
	type: "success",
	message: "Oh, hai"
}]

ReactDOM.render((
	<AlertList alerts={alerts} />
), document.getElementById("myApp"));
```

Or to show a single inline-alert:

```js
import React from "react";
import ReactDOM from "react-dom";
import { Alert } from "react-bs-notifier";

ReactDOM.render((
	<Alert type="danger" headline="Error!">
		Holy cow, man!
	</Alert>
), document.getElementById("myApp"));
```

Or show alerts without creating an array (equivalent to first example):

```js
import React from "react";
import ReactDOM from "react-dom";
import { Alert, AlertContainer } from "react-bs-notifier";

ReactDOM.render((
	<AlertContainer>
		<Alert type="info">Hello, world</Alert>
		<Alert type="success">Oh, hai</Alert>
	</AlertContainer>
), document.getElementById("myApp"));
```

[Read the documentation](https://chadly.github.io/react-bs-notifier/) for more in-depth, interactive examples and live demos.

## Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

If you have a new feature or change you'd like to submit, please submit an issue first to talk about the change you want to make. When you are finished making your change, please make sure to also update the documentation. Once you clone this repo, you can run the docs & example app locally:

```
npm install
npm start
```

This will spin up a webpack dev server on port 1341. Open your browser to [localhost:1341](http://localhost:1341/) and any changes you make will build & refresh the page automatically.

### Linting

To run the linter:

```
npm run lint
```

This project uses [prettier for formatting](https://github.com/prettier/prettier) and will fail linting if the code doesn't conform to prettier's output. To automatically fix any formatting issues, run:

```
npm run lint -- --fix
```

Or, if you are using an editor that supports [ESLint](http://eslint.org/), just make sure to enable automatically fixing lint errors on save. E.g., in [Visual Studio Code](https://code.visualstudio.com/) with the [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), make sure this is in your `settings.json`:

```json
{
  "eslint.autoFixOnSave": true
}
```
