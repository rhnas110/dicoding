const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();
// console.log(myEventEmitter);

const makeCoffee = (name) => {
  console.log(`Kopi ${name} telah dibuat!`);
};
const makeBill = (price) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
};

const onCoffeeOrderedListener = ({ name, price }) => {
  makeCoffee(name);
  makeBill(price);
};

myEventEmitter.on("coffee-order", onCoffeeOrderedListener);
myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 12345 });

// Latihan events
const birthdayEventListener = ({ name = "Budi" }) => {
  console.log(`Happy birthday ${name}!`);
};

// TODO 2
const myEmitter = new EventEmitter();

// TODO 3
myEmitter.on("birthday", birthdayEventListener);

// TODO 4
myEmitter.emit("birthday", { name: "Dara" });
// without object
myEmitter.emit("birthday", "Dara");
