[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

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
       added: packages/my-new-component/lib/MyNewComponent.js
       added: packages/my-new-component/lib/index.js
       added: packages/my-new-component/package.json
       added: packages/my-new-component/lib/MyNewComponent.stories.js
       added: packages/my-new-component/lib/MyNewComponent.module.scss
       shell: lerna run build --scope=my-new-component
```

Your component folder should look like this:

```
packages/my-new-component
├── build
│   └── index.esm.js
├── lib
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

From the root directory, we can run `npm run dev` script and storybook will update and rebuild the packages while you make changes to `lib/index.js`.

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
    ├── lib
    │   └── button.js
    └── package.json
```

```sh
# install dependencies for react
npm i react react-dom parcel-bundler -D
```

## Resources

- https://areknawo.com/full-blown-monorepo-setup-walkthrough/ -->
