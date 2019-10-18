[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
> TODO: 
>- setup jest
>- setup cypress
>- IE11 browser compat
>  - css variables
>  - async/await? (bili might already handle this)
>- import json
>- import svg
>- how to publish packages?
>  - semantic releases
>  - conventional commits and changelogs


# Learning Lerna

Using this repo to learn lerna for managing a component library as a monorepo.

## Usage

Follow this usage section to grab this repo and start using it for your own component library monorepo.

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
npx lerna create <package>
```

### Creating new packages

We want each component to be its own package.
Components are built with: 

- React
- CSS Modules
- SCSS

Components are built out to ESM, but CJS and UMD is possible.
Builds are done via bili.js, which is pre-configured rollup. 

Create a new package using lerna:

```sh
# example: npx lerna create button
npx lerna create <package>
```

Once it's done, edit the files to match this file structure:
```
packages/button
├── README.md
├── __tests__
│   └── button.test.js
├── build
│   └── index.esm.js
├── lib
│   ├── index.js
│   ├── index.module.scss
│   └── index.stories.js
└── package.json
```

### Development

All develpment is done through storybook.
The trick here is that each `*.stories.js` file will import `build/index.esm.js`.

From the root directory, we can run `npm run dev` script and storybook will update and rebuild the packages while you make changes to `lib/index.js`.


## Tutorial: Starting your own monorepo with lerna

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

- https://areknawo.com/full-blown-monorepo-setup-walkthrough/
