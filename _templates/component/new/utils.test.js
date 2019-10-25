const {
  capitalize,
  camelize,
  dasherize,
  reactComponentName,
  reactFolderName
} = require("./stringUtils");

describe("dasherize", () => {
  const testNames = [
    "MyAwesomeComponent",
    "my-awesome-component",
    "MYAWESOMECOMPONENT",
    "myawesomecomponent",
    "mY-aWeSoMe-CoMpOnEnT",
    "-----mY-------aWeSoMe--------CoMpOnEnT-----"
  ];

  it("should return all lowercase characters", () => {
    testNames.forEach(testName => {
      const result = dasherize(testName).split("-");
      console.log({ result });
      result.forEach(char => {
        expect(char === char.toLowerCase());
      });
    });
  });
});
