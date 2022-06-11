// TODO: Import the parent class
const Vehicle = require("./vehicle");

// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle {
  constructor(id, color, passengers) {
    const numberOfWheels = 4;
    const sound = "beep";

    super(id, numberOfWheels, sound);
    this.passengers = carPassengers;
  }

  useHorn() {
    console.log(`This car's sound is ${this.sound}.`);
  }

  checkPassengers() {
    if (carPassengers.length > 3) {
      console.log(
        `This car only seats 4 people. You have too many passengers!`
      );
    } else {
      console.log(`This car has ${4 - carPassengers.length} seat(s) remain.`);
    }
  }
}

const carPassengers = [
  "Aristotle",
  "Confucius",
  "Socrates",
  "Lao-Tzu",
  "Plato",
];

const car = new Car(15, "blue", carPassengers);

console.log("---CAR---");
car.printInfo();
car.useHorn();
car.checkPassengers();
