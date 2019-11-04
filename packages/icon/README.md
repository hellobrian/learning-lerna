# Icon

## Contributing

```sh
npm run build:icon-manifest
```

Rebuild `icon-manifest.json` used in:

-   icon.stories.js: provides select options for `name` prop
-   index.js: provides propTypes for `name` prop
-   runs on all `npm run build` scripts

## Usage

-   Recommended: use `name` prop to render one of the icons listed in svg folder.
-   Passing an .svg file to src prop allows you to use any icon with `Icon` component but you cannot edit much about the CSS like `fill`.
