### `AlertList` Props

The `AlertList` component will render an array of `alerts` into one of the corners of the page. It takes the following `props`:

---

#### `alerts`

These are the alerts that the component should render. It expects an object with fields `id` & `message` with an optional `type` & `headline`.

Hint: if you don't have anything good to make an `id` out of, try using: `new Date()).getTime()`

If no `headline` is specified, only the message will show up in the alert.

The supported values for `type` are one of _info_, _warning_, _danger_, or _success_. If no `type` is specified, it is assumed to be _info_.

The `message` can be plain text or any arbitrary React component. Please note though that although the `message` can accept arbitrary content, the height animation on the alerts is static and based on the assumption that the content won't exceed `20em` vertically. You probably want to avoid putting anything that long in an alert which overlaps your UI anyway as opposed to linking to more detail.

---

#### `position`

The corner in which alerts appear. One of _top-right_ (default), _top-left_, _bottom-right_, _bottom-left_.

---

#### `timeout`

An optional timeout (in milliseconds) before alerts are automatically dismissed. If not specified, an alert will not be dismissed until the user dismisses it. If a timeout is specified but no `onDismiss` function, it is equivalent to specifying no timeout. There is no timeout by default.

---

#### `onDismiss`

When a user clicks the &times; icon to dismiss the alert, this function will be called. The function is optional. If no `onDismiss` function is specified, the component will not render a close button for the alert and it will be undismissable by the user. The dismiss function will receive the `alert` that was dismissed as its sole argument.

---

#### `showIcon`

A boolean value which indicates whether or not the alert type icon should be rendered. It is `true` by default.

---

#### `dismissTitle`

The title text for the dismiss-alert button. By default, it is _Dismiss_.

---

### `Alert` Props

An `Alert` component by itself will render an alert inline. It takes the following `props`:

#### `type`

An optional type for the alert. The supported values for `type` are one of _info_, _warning_, _danger_, or _success_. If no `type` is specified, it is assumed to be _info_.

---

#### `headline`

An optional larger headline text to show in the alert. If no `headline` is specified, only the child content will show up in the alert.

---

#### `onDismiss`

When a user clicks the &times; icon to dismiss the alert, this function will be called. The function is optional. If no `onDismiss` function is specified, the component will not render a close button for the alert and it will be undismissable by the user. The `onDismiss` function is called with no arguments.

---

#### `showIcon`

A boolean value which indicates whether or not the alert type icon should be rendered. It is `true` by default.

---

#### `dismissTitle`

The title text for the dismiss-alert button. By default, it is _Dismiss_.

---

#### `timeout`

An optional timeout (in milliseconds) before this alert will be automatically dismissed. If not specified, an alert will not be dismissed until the user dismisses it. If a timeout is specified but no `onDismiss` function, it is equivalent to specifying no timeout. There is no timeout by default.

---

### `AlertContainer` Props

The `AlertContainer` will render it's child `Alert`s in one of the corners of the page. It takes the following `props`:

---

#### `position`

The corner in which alerts appear. One of _top-right_ (default), _top-left_, _bottom-right_, _bottom-left_.