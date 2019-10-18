module.exports = {
  input: "lib/index.js",
  output: {
    dir: "build",
    // format: ["cjs", "esm"],
    format: ["esm"],
    extractCSS: false
  }
};
