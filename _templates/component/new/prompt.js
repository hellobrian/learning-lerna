const { reactComponentName, reactFolderName } = require("./stringUtils");

module.exports = {
  prompt: ({ prompter }) => {
    return new Promise((resolve, reject) => {
      prompter
        .prompt([
          {
            type: "input",
            name: "name",
            message: `React component name:`
          }
        ])
        .then(({ name }) => {
          resolve({
            reactComponentName: reactComponentName(name),
            reactFolderName: reactFolderName(name)
          });
        });
    });
  }
};
