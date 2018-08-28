const getHeader = require("./src/headers");

describe("Object assignment in header.", () => {
  it("Should return a valid dynamic UUID and URL.", () => {
    const data = getHeader;
    expect(data.headers.Authorization.length).toBe(36);
    expect(data.url).toContain('https');
    expect(data.url).toContain('@boriscoder')
  });
});
