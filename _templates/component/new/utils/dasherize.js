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

  // replace spaces with dashes
  const handleSpaces = singleDashes.split(" ").join("-");

  // remove special characters but keep dashes
  const removeSpecialChars = handleSpaces
    .replace(/[^a-zA-Z]/g, " ")
    .trim()
    .split(" ")
    .join("-");

  return removeSpecialChars;
}

module.exports = dasherize;
