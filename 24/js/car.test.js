const Car = require("./car");

describe("Car class", () => {
  describe("useHorn function", () => {
    it("should print beep when useHorn is called", () => {
      const mock = jest.spyOn(console, "log");

      const car = new Car(4, "blue", ["Mo"]);
      car.useHorn();

      expect(mock).toBeCalledWith("beep");
      mock.mockRestore();
    });
  });

  describe("checkPassengers function", () => {
    it("should print the remaining spaces as 2", () => {
      const mock = jest.spyOn(console, "log");
      const car = new Car(1, "red", ["Mo", "Hamed"]);

      car.checkPassengers();

      expect(mock).toBeCalledWith("There are 2 seats left");
    });
  });
});
