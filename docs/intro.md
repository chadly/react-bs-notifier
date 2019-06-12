```
npm install react-bs-notifier --save
```

and then

```js
import { AlertList, Alert, AlertContainer } from "react-bs-notifier";
```

This package exports three components, `AlertList`, `Alert`, & `AlertContainer`. Depending on your use-case, one or a combination of these components might work better for you.

These components makes use of [Bootstrap](https://getbootstrap.com/) & either [Font Awesome](http://fontawesome.io/) or [React Icons](https://www.npmjs.com/package/react-icons), but do not take direct dependencies on either. It assumes the CSS classes are available for Font Awesome (e.g. just include the stylesheets), or that the React Icons module has been added to your project. If bootstrap isn't available, the component won't look like much. If Font Awesome or React Icons isn't available, it just won't add the icons to the alerts.
