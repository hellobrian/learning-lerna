const { readdirSync } = require("fs");

function dasherize(str) {
  // replace all capital letters with lowercase letter
  // and prepend each lowercase letter with dash
  const lowerCaseWithDashes = str.replace(/[A-Z]/g, function(char, index) {
    return (index !== 0 ? "-" : "") + char.toLowerCase();
  });

  // return single dashes between words
  const singleDashes = lowerCaseWithDashes
    .split("-")
    .filter(char => char !== "")
    .join("-");

  return singleDashes;
}

function capitalize(str) {
  if (typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

function reactComponentName(str) {
  // camelize string AND remove dashes
  const camelString = camelize(str.replace(/-/g, ""));

  // return capitalized string
  return capitalize(camelString);
}

function reactFolderName(str) {
  return dasherize(str).toLowerCase();
}

function keepLettersAndDashes(str) {
  return str.replace(/[^a-zA-Z-]/g, "");
}

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

module.exports = {
  camelize,
  capitalize,
  dasherize,
  getDirectories,
  keepLettersAndDashes,
  reactComponentName,
  reactFolderName
};
