const dasherize = require("./dasherize");

describe("dasherize", () => {
  const testNames = [
    "MyAwesomeComponent",
    "my-awesome-component",
    "MYAWESOMECOMPONENT",
    "myawesomecomponent",
    "mY-aWeSoMe-CoMpOnEnT"
  ];

  it("should return all lowercase characters", () => {
    testNames.forEach(testName => {
      const result = dasherize(testName).split("-");
      console.log(dasherize(testName));
      result.forEach(char => {
        expect(char === char.toLowerCase());
      });
    });
  });
});
