[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

# Learning Lerrna

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
