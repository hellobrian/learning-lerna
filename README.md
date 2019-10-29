[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

> TODO:
>
> - setup cypress
> - IE11 browser compat
> - css variables
> - async/await? (bili might already handle this)
> - import json
> - import svg
> - how to publish packages?
> - semantic releases
> - conventional commits and changelogs
> - css reset
> - bili.js vs microbundle
> - Object.assign used in builds. Do I need to Polyfill? Or will app bundler? IE11 support?

# Learning Lerna

Using this repo to learn lerna for managing a component library as a monorepo.

## Usage

> Feel free to grab this repo to start your own component monorepo library.

```sh
# setup
git clone git@github.com:hellobrian/learning-lerna.git
cd learning-lerna
nvm install && nvm use
npm i

# bootstrap the project
npx lerna bootstrap

# run development mode (storybook + bili)
npm run dev

# create a new package
# example: npx lerna create button
npx run create

# Symlink together all Lerna packages that are dependencies of each other in the current Lerna repo.
npx lerna link

# install local packages (use close-icon in button)
npx lerna add close-icon --scope=button
```

### Creating new packages

> One component per package

```sh
# Create new package
npm run create
```

You'll be prompted to enter a component name and `hygen` will scaffold your new component.

```sh
> learning-lerna@1.0.0 create /Users/brhan/dev/learning-lerna
> hygen component new

✔ React component name: · MyNewComponent

Loaded templates: _templates
       added: packages/my-new-component/src/MyNewComponent.js
       added: packages/my-new-component/src/index.js
       added: packages/my-new-component/package.json
       added: packages/my-new-component/src/MyNewComponent.stories.js
       added: packages/my-new-component/src/MyNewComponent.module.scss
       shell: lerna run build --scope=my-new-component
```

Your component folder should look like this:

```
packages/my-new-component
├── build
│   └── index.esm.js
├── src
│   ├── MyNewComponent.js
│   ├── MyNewComponent.module.scss
│   ├── MyNewComponent.stories.js
│   └── index.js
└── package.json
```

Components are built with:

- React (`*.js`)
- CSS Modules (`*.scss`)
- Storybook (`*.stories.js`)

Also note:

- Components are built out to ESM only. (CJS and UMD later if needed).
- Builds are done via bili.js, which is pre-configured rollup.

### Development

All develpment is done through storybook.
The trick here is that each `*.stories.js` file will import `build/index.esm.js`.

From the root directory, we can run `npm run dev` script and storybook will update and rebuild the packages while you make changes to files in `src`.

<!-- ## Tutorial: Starting your own monorepo with lerna

```sh
# setup a new project
mkdir learning-lerna
cd learning-lerna
npm init -y
touch .gitignore
git init
echo node_modules > .gitignore
touch .nvmrc
echo stable > .nvmrc

# initialize lerna
npx lerna init
```

Your project should look like this.

```sh
.
├── lerna.json
├── package.json
└── packages

1 directory, 3 files
```

Create a button package. Follow the prompts in cli.

```sh
npx lerna create button
```

The packages directory looks something like this.

```sh
packages
└── button
    ├── README.md
    ├── __tests__
    │   └── button.test.js
    ├── src
    │   └── button.js
    └── package.json
```

```sh
# install dependencies for react
npm i react react-dom parcel-bundler -D
```
-->

## Resources

- https://areknawo.com/full-blown-monorepo-setup-walkthrough/
- [🔴 Setup a monorepo with Lerna 🐉](https://www.youtube.com/watch?v=pU87ufl2lDc) - [chantastic](https://www.youtube.com/channel/UCXpmUxvG37qpckRHdkstf5w)
