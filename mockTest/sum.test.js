const { sum, remove } = require("../sum");
// const remove = require("../sum");

describe("Add and Subtract", () => {
  it("Test for null", () => {
    expect(sum(2, 3)).toEqual(5);
    expect(remove(2, 3)).toEqual(-1);
    // const ree = 7;
    // expect(ree).toBeDefined();
    // expect(ree).not.toBeNull();
    // expect("3").toBeTruthy();
    // expect(7).toBeGreaterThanOrEqual(4);
    // expect(0.6).toBeLessThanOrEqual(1);

    // // used in floating number
    // expect(0.1 + 0.2).toBeCloseTo(0.3);

    // //strings
    // expect([1, 2, 34]).toContain(34);
    // expect(() => {
    //   throw new Error("I am okay");
    // }).toThrowError(/^I am okay$/);
  });

  it("Check if objects are the same on strict", () => {
    const obj1 = { a: 1, b: 2, c: 1, 1: 100 };
    const obj2 = { b: 2, a: 1, c: 1, 1: 100 };

    expect(obj1).toStrictEqual(obj2);
  });
});

//.toEqual
//.toBE m
