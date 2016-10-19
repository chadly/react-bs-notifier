```
npm install react-bs-notifier --save
```

and then

```js
import { AlertList, Alert, AlertContainer } from "react-bs-notifier";
```

This package exports three components, `AlertList`, `Alert`, & `AlertContainer`. Depending on your use-case, one or a combination of these components might work better for you.

These components makes use of [Bootstrap](https://getbootstrap.com/) & [Font Awesome](http://fontawesome.io/), but do not take direct dependencies on either. It assumes the CSS classes are available (e.g. just include the stylesheets). If bootstrap isn't available, the component won't look like much. If font awesome isn't available, it just won't add the icons to the alerts.