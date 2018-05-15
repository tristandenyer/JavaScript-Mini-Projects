const getHello = require("./src/hello");

describe("hello world", () => {
  it("Should return Hello World", () => {
    const myString = getHello();
    expect(myString).toBe("Hello World");
  });
});
