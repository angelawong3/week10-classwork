const negator = require("./index");

describe("negator tests", () => {
  it("should return -1 when we give it 1 as a parameter", () => {
    const value = negator(1);

    expect(value).toBe(-1);
  });

  it("should return err when we give it a string as a parameter", () => {
    expect(() => {
      negator("cow");
    }).toThrow("Error, please provide a valid number");
  });
});
