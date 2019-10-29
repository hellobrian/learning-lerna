const { readdirSync } = require("fs");
const chalk = require("chalk");
const dasherize = require("./dasherize");

const nameExample = `

${chalk.underline("Example")}:

  ${chalk.green("✔ Button")}
  ${chalk.green("✔ button")}
  ${chalk.green("✔ PrimaryButton")}
  ${chalk.green("✔ primary-button")}`;

function validate(value) {
  if (value.length === 0) {
    return `Enter a valid name with length. ${nameExample}`;
  }

  const uppercase = value.split("").every(char => char === char.toUpperCase());
  if (uppercase) {
    return `Use CamelCase or snake-case for names. ${nameExample}`;
  }

  const getDirectories = source =>
    readdirSync(source, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

  const packageExists =
    getDirectories("./packages").filter(folder => folder === dasherize(value))
      .length > 0;
  if (packageExists) {
    return `${value} (${dasherize(value)}) already exists.`;
  }

  return true;
}

module.exports = validate;
