const dasherize = require("./dasherize");

describe("camelCaseString", () => {
  const string = "camelCaseString";
  const test = dasherize(string);

  it("should dasherize the string", () => {
    expect(test).toEqual("camel-case-string");
  });

  it("should return all lowercase", () => {
    const result = test.split("").every(str => str === str.toLowerCase());
    expect(result).toBe(true);
  });
});

describe("CapitalizedCamelString", () => {
  const string = "CapitalizedCamelString";
  const test = dasherize(string);

  it("should dasherize the string", () => {
    expect(test).toEqual("capitalized-camel-string");
  });

  it("should return all lowercase", () => {
    const result = test.split("").every(str => str === str.toLowerCase());
    expect(result).toBe(true);
  });
});

describe("string with spaces", () => {
  const string = "string with spaces";
  const test = dasherize(string);

  it("should replace spaces with dashes", () => {
    expect(test).toEqual("string-with-spaces");
  });
});

describe("string---with---lotsa---dashes", () => {
  const string = "string---with---lotsa---dashes";
  const test = dasherize(string);

  it("should return single dashes between the words", () => {
    expect(test).toEqual("string-with-lotsa-dashes");
  });
});

describe("$*(@#$----string-with-special-chars----(92*(*!", () => {
  const string = "$*(@#$----string-with-special-chars----(92*(*!";
  const test = dasherize(string);

  it("should clean up string", () => {
    expect(test).toEqual("string-with-special-chars");
  });
});
