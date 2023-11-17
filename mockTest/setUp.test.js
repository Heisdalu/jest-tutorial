let animals = ["elephants", "dog", "cats", "horses"];

beforeAll(() => {
  console.log("before all");
});
afterAll(() => {
  console.log("after all");
});

afterEach(() => {
  console.log("ater eact");
});

describe("setup and teardown testing", () => {
  beforeEach(() => {
    console.log("before each");
    animals = ["elephants", "dog", "cats", "horses"];
  });
  
  it("set up testing", () => {
    animals.push("fishes");
    expect(animals[animals.length - 1]).toBe("fishes");
  });
  it("add to the front", () => {
    animals.unshift("lizards");
    expect(animals[0]).toBe("lizards");
  });
});

describe("another testing", () => {
  it("add one to two", () => {
    console.log("anoyer");
    expect(1 + 1).toBe(2);
  });
});
