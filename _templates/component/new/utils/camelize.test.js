const camelize = require("./camelize");

describe("snake-case-string", () => {
  const string = "snake-case-string";
  const test = camelize(string);

  it("should camelize snake-case-string", () => {
    expect(test).toEqual("snakeCaseString");
  });

  it("should not have dashes", () => {
    expect(test.includes("-")).toBe(false);
  });

  it("should have not have a capitalized first letter", () => {
    const result = test.split("")[0];
    expect(result).not.toEqual(result.toUpperCase());
    expect(result).toEqual(result.toLowerCase());
  });

  it("camelizedString should have equal number of capital letters if given snake-case-string", () => {
    const dashes = string.split("").filter(str => str === "-").length;
    const capitals = test.split("").filter(str => str === str.toUpperCase())
      .length;
    expect(dashes).toEqual(capitals);
  });
});

describe("string with spaces", () => {
  const string = "string with spaces";
  const test = camelize(string);

  it("should camelize string with spaces", () => {
    expect(test).toEqual("stringWithSpaces");
  });

  it("should not have dashes", () => {
    expect(test.includes("-")).toBe(false);
  });

  it("should have not have a capitalized first letter", () => {
    const result = test.split("")[0];
    expect(result).not.toEqual(result.toUpperCase());
    expect(result).toEqual(result.toLowerCase());
  });
});
