const { readdirSync } = require("fs");
const dasherize = require("./utils/dasherize");
const camelize = require("./utils/camelize");

function capitalize(str) {
  if (typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
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
