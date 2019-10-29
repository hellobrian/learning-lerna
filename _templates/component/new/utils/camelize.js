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

module.exports = camelize;
