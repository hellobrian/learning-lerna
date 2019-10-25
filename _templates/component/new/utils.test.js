const {
  capitalize,
  camelize,
  dasherize,
  reactComponentName,
  reactFolderName
} = require("./utils");

describe("dasherize", () => {
  const testNames = [
    "MyAwesomeComponent",
    "my-awesome-component",
    "MYAWESOMECOMPONENT",
    "myawesomecomponent",
    "mY-aWeSoMe-CoMpOnEnT",
    "-----mY-------aWeSoMe--------CoMpOnEnT-----"
  ];

  xit("should return all lowercase characters", () => {
    testNames.forEach(testName => {
      const result = dasherize(testName).split("-");
      console.log(dasherize(testName));
      result.forEach(char => {
        expect(char === char.toLowerCase());
      });
    });
  });
});

describe("camelize", () => {
  it("should camelize snake-case strings", () => {
    const result = camelize("snake-case-string");
    console.log({ result });
    expect(result).toEqual("snakeCaseString");
  });
});
