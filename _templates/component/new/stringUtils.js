function dasherize(str) {
  return str.replace(/[A-Z]/g, function(char, index) {
    return (index !== 0 ? "-" : "") + char.toLowerCase();
  });
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

module.exports = {
  capitalize,
  camelize,
  dasherize,
  reactComponentName,
  reactFolderName
};
