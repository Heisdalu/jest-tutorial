const forEach = require("../mock.js");

test("mock function", () => {
  const mockCallback = jest.fn((x) => 10 + x);
  
  forEach([0, 1], mockCallback);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.results[1].value).toBe(11);

  console.log(mockCallback.mock.results[1].value);
});
