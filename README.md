# rocketact-plugin-bundle-with-banner

To Bundle with the banner which is in `package.json` config.

```bash
npm install --save-dev rocketact-plugin-bundle-with-banner
or
yarn add -D rocketact-plugin-bundle-with-banner
```

## default banner value

```
/*! name version date */
```

## custom banner value

`package.json`

```
"bannerOptions": {
  "banner": "hello world"
}
```

Other banner Options doc [https://webpack.js.org/plugins/banner-plugin/](https://webpack.js.org/plugins/banner-plugin/)
