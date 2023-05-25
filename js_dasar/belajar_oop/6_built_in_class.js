// Date Constructor
const date = new Date();

const timeInJakarta = date.toLocaleString("id-ID", {
  timeZone: "Asia/Jakarta",
});

const timeInTokyo = date.toLocaleString("ja-JP", {
  timeZone: "Asia/Tokyo",
});

const timeInMakassar = date.toLocaleString("id-ID", {
  timeZone: "Asia/Makassar",
});

console.log(timeInJakarta);
console.log(timeInTokyo);
console.log(timeInMakassar);
// #end of Date Constructor

// Array Constructor
class UniqueArray extends Array {
  constructor(...args) {
    // make sure args is unique before passing it to super
    const uniqueValue = args.filter(
      (item, index) => args.indexOf(item) === index
    );

    super(...uniqueValue);
  }

  push(item) {
    // make sure only unique item is added
    if (!this.includes(item)) {
      super.push(item);
    }
  }
}

const someArray = new UniqueArray("a", "b", "c", "a");
console.log(someArray); // ['a', 'b', 'c']
someArray.push("d");
console.log(someArray); // ['a', 'b', 'c', 'd']
someArray.push("a");
console.log(someArray); // ['a', 'b', 'c', 'd']
someArray.push("e");
console.log(someArray); // ['a', 'b', 'c', 'd', 'e']
someArray.pop();
console.log(someArray);
// #end of Array Constructor

// class Car {}
// const car = new Car();
// console.log(typeof Car);

function car({ brand, maxSpeed, wheelCount }) {
  this.brand = brand;
  this.maxSpeed = maxSpeed;
  this.wheelCount = wheelCount;
}

const myCar = new car({ brand: "Toyota", maxSpeed: 200, wheelCount: 4 });
console.log(myCar);
