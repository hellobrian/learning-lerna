// packages
const chalk = require("chalk");

// utils
const dasherize = require("./utils/dasherize");
const validate = require("./utils/validate");

function reactComponentName(str) {
  return camelize(str)
    .split("")
    .map((char, index) => (index === 0 ? char.toUpperCase() : char))
    .join("");
}

const doneMessage = value => {
  const folder = chalk.green(dasherize(value));
  const component = chalk.green(reactComponentName(value));
  const tree = `./packages/${folder}
  ├── build
  │   └── index.esm.js
  ├── package.json
  └── src
      ├── ${component}.js
      ├── ${component}.module.scss
      ├── ${component}.stories.js
      └── index.js`;
  console.log(
    `\n${chalk.green("✔")} Creating new component: ${component} (${folder})`
  );
  console.log(`\n${tree}\n`);
};

module.exports = {
  prompt: ({ prompter, args }) => {
    return new Promise((resolve, reject) => {
      prompter
        .prompt({
          type: "input",
          name: "name",
          validate,
          message: `Name your new component:`
        })
        .then(
          ({ name }) => {
            const value = dasherize(name);
            doneMessage(value);
            resolve({
              reactComponentName: reactComponentName(value),
              reactFolderName: dasherize(value)
            });
          },
          reject => {
            console.log("Goodbye!");
          }
        );
    });
  }
};
