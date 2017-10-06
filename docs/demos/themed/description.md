To customize the theme of an `Alert`, wrap it in a [react-jss](https://github.com/cssinjs/react-jss) higher-order component
or provide it with a `sheet` prop shaped like the one react-jss provides:
```
classes: {
    [className]: String
}
```

Use [jss-compose](https://github.com/cssinjs/jss-compose) to include (or not include) any bootstrap classes (see example and source).