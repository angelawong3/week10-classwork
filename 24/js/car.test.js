const Car = require("./car");

describe("Car Class", () => {
  describe("useHorn", () => {
    it("should print beep", () => {
      const mock = jest.spyOn(console, "log");
      const car = new Car(4, "blue", ["A", "B", "C", "D"]);

      car.useHorn();

      expect(mock).toBeCalledWith("beep");
      mock.mockRestore();
    });
  });

  describe("checkPassenger function", () => {
    it("should print the remaining as 2", () => {
      const mock = jest.spyOn(console, "log");
      const car = new Car(1, "red", ["Apple", "Orange"]);

      car.checkPassenger();

      expect(mock).toBeCalledWith("There are 2 seats left.");
    });
  });
});
