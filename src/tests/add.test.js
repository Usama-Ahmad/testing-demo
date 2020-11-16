const add = require("../utils/helperFunctions");
describe("Add Helper Function", () => {
  test("add function", () => {
    expect(add(2, 8)).toBe(10);
  });
  test("add function negative values", () => {
    expect(add(-2, 8)).toBe(6);
  });
});
