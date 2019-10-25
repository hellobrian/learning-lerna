const { readdirSync } = require("fs");

function dasherize(str) {
  // replace all capital letters with lowercase letters
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
  const camelizedWithDashes = str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(
    word,
    index
  ) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  });

  return camelizedWithDashes
    .split("-")
    .filter(char => char !== "-")
    .join("")
    .replace(/\s+/g, "");
}

function reactComponentName(str) {
  return camelize(str)
    .split("")
    .map((char, index) => (index === 0 ? char.toUpperCase() : char))
    .join("");
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
