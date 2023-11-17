const fetchData = require("../async");
const func = require("../async");

describe("async testing", () => {
  it("Object equality test", () => {
    expect(1 + 2).toBe(3);
  });

  test("api testing", async () => {
    return expect(fetchData(1)).resolves.toBe("it worked");
    // try {
    //   const testFunc = await func(1);
    //   expect(testFunc).toBe("it worked");
    // } catch (e) {
    //   // If an error occurs, the test should pass

    //   expect(e.message).toMatch("it failed lol");
    // }
  });

  test("api testing if failed", async () => {
    // await expect(fetchData(-1)).rejects.toThrow("it failed lol");

    return fetchData().catch((e) => expect(e.message).toMatch("it failed lol"));
  });

  it("code block testing", async () => {
    expect.assertions(1)
    try {
      const testFunc = await func(1);
      expect(testFunc).toBe("it worked");
      
    } catch (e) {
      // If an error occurs, the test should pass
      expect(e.message).toMatch("it failed lol");
      
    }
  });
});
