class Car {
  // Member Visibility
  #chassisNumber = null;

  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    // bad use
    // this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    // nice use
    this.#chassisNumber = this.#generateChassisNumber();
  }

  get chassisNumber() {
    return this.#chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }

  // methods
  drive() {
    console.log(`${this.brand} ${this.color} is running`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }

  #generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}

class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }

  // methods
  send() {
    console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
  }

  sendLater(delay) {
    console.log(`Sending after ${delay} ms`);

    setTimeout(() => {
      this.send();
    }, delay);
  }

  saveAsDraft() {
    console.log(`Saving mail as draft`);
  }
}

const car = new Car("BMW", "black", 1200);
// console.log(car);
// car.drive();
// car.turn("left");
// car.reverse();

const mail = new Mail("Budi", "Andi", "Hello", "How are u");
// mail.send();
// mail.sendLater(5000);
// mail.saveAsDraft();

// Private field
// car.chassisNumber = "test";
// car.#chassisNumber = "test";
console.log(car.#chassisNumber);
