// class Car {
//   constructor(brand, color, maxSpeed, chassisNumber) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     // this.chassisNumber = chassisNumber;
//     // set a random chassis number
//     this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
//   }
// }

// const car1 = new Car("Car", "White", 6969, "x-1");
// const car2 = new Car("Audi", "blue", 220, "a-1");
// const car3 = new Car("BMW", "black", 250);
// car3.chassisNumber = "Car-3";

// console.log(car1);
// console.log(car2);
// console.log(car3);

// getter and setter
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("John", "Doe");
console.log(user);
console.log(user.fullName);

user.fullName = "Fulan Fulanah";
console.log(user);
console.log(user.fullName);

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }
}

const car1 = new Car("BMW", "black", 1200);
console.log(car1.chassisNumber);
car1.chassisNumber = "BMW-1";
console.log(car1.chassisNumber);

// private property
car1._chassisNumber = "BMW-0";
console.log(car1._chassisNumber);
