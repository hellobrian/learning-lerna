const chalk = require("chalk");
const {
  reactComponentName,
  reactFolderName,
  keepLettersAndDashes,
  getDirectories
} = require("./utils");

const doneMessage = value => {
  const folder = chalk.green(reactFolderName(value));
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
          validate: function(value) {
            const length = value.length > 0;
            const packageExists =
              getDirectories("./packages").filter(
                folder => folder === reactFolderName(value)
              ).length > 0;

            if (!length) {
              return "Please enter a valid name with length";
            }

            if (packageExists) {
              return `${value} (${reactFolderName(value)}) already exists`;
            }

            return true;
          },
          message: `Name your new component:`
        })
        .then(({ name }) => {
          const value = keepLettersAndDashes(name);
          doneMessage(value);
          resolve({
            reactComponentName: reactComponentName(value),
            reactFolderName: reactFolderName(value)
          });
        });
    });
  }
};
