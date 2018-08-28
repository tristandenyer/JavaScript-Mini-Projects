const getSum = require("./src/sum");

describe("Add up two numbers.", () => {
  it("Should return 4.", () => {
    const myString = getSum(2, 2);
    expect(myString).toBe(4);
  });
});
