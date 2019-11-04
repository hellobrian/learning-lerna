[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)]()

# Learning Lerna

Using this repo to learn lerna for managing a component library as a monorepo.

## Getting Started

Make sure you have `git` and `nvm` (node version manager) before starting.

```sh
git clone git@github.com:hellobrian/learning-lerna.git <your-monorepo-name>
cd <your-monorepo-name>
nvm install && nvm use
npm ci
npm run bootstrap
npm run dev
```

After running `npm run dev`, navigate to Storybook at: http://localhost:6006/

## Npm Scripts

> 👀 For a full list of npm scripts, see ./package.json

| npm/npx script                      | description                                                          |
| ----------------------------------- | -------------------------------------------------------------------- |
| `npm run bootstrap`                 | bootstrap the project with lerna                                     |
| `npm run dev`                       | run dev environment (storybook + bili)                               |
| `npm run create`                    | create boilerplate for a new package/component in packages directory |
| `npx lerna add icon --scope=button` | install local packages (install icon in button)                      |

## Creating new packages

Create a new package with `npm run create` assumes you are creating a new React component. Once scaffolding is done, you can customize the component structure as needed.

Components are built with:

-   React (`*.js`)
-   CSS Modules (`*.scss`)
-   Storybook (`*.stories.js`)

Also note:

-   Components are built out to ESM only. (CJS and UMD later if needed).
-   Builds are done via bili.js, which is pre-configured rollup.

### Development

All develpment is done through storybook.
The trick here is that each `*.stories.js` file will import `build/index.esm.js`.

From the root directory, we can run `npm run dev` script and storybook will update and rebuild the packages while you make changes to files in `src`.

## Resources

-   https://areknawo.com/full-blown-monorepo-setup-walkthrough/
-   [🔴 Setup a monorepo with Lerna 🐉](https://www.youtube.com/watch?v=pU87ufl2lDc) - [chantastic](https://www.youtube.com/channel/UCXpmUxvG37qpckRHdkstf5w)
-   [Running bili/rollup --watch with lerna](https://stackoverflow.com/a/55655749/2058360)
-   [Release management in Angular with Lerna (commitizen)](https://blog.angularindepth.com/release-management-in-angular-with-lerna-21b4ab417c59)

```

```
