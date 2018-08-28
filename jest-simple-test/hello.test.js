const getHello = require("./src/hello");

describe("Hello World", () => {
  it("Should return Hello World", () => {
    const myString = getHello();
    expect(myString).toBe("Hello World");
  });
});
