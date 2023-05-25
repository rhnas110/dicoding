// 4 konsep besar yang ada di FP. Yakni Pure Function, Immutability, Recursive, dan High-Order Function.

// Pure Function

// contoh
let PI = 3.14;
const _hitungLuasLingkaran = (jariJari) => {
  return PI * jariJari ** 2;
};
console.log(_hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah

console.log(_hitungLuasLingkaran(4)); // 80
// end of contoh ~impure function

// contoh pure function
const hitungLuasLingkaran = (jariJari) => {
  return 3.14 * jariJari ** 2;
};
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(8)); // 200.96
// end of contoh pure function

// bad
const _createPersonWithAge = (person, age) => {
  person.age = age;
  return person;
};

let person = {
  name: "Budi",
};

const _newPerson = _createPersonWithAge(person, 18);
console.log({
  person,
  _newPerson,
});
/**
* Output:
*  {
     person: { name: 'Bobo', age: 18 },
     newPerson: { name: 'Bobo', age: 18 }
   }
*/
// end of bad

// nice
person = {
  name: "Andi",
};
const createPersonWithAge = (person, age) => {
  return { ...person, age };
};
const newPerson = createPersonWithAge(person, 18);
console.log({
  person,
  newPerson,
});
/**
 * Output:
 *  {
 *    person: { name: 'Bobo' },
 *    newPerson: { name: 'Bobo', age: 18 }
 *  }
 */
// end of nice

// #end of Pure Function

// Immutability

// bad
const user1 = {
  firstName: "Harry",
  lastName: "Protter",
};

const renameLastNameUser = (newLastName, user) => {
  user.lastName = newLastName;
};

renameLastNameUser("Potter", user1);
// console.log(user1);
// end of bad

// nice
const user2 = {
  firstName: "Harry",
  lastName: "Protter",
};

const createUserWithLastName = (newLastName, user) => {
  return { ...user2, lastName: newLastName };
};

const newUser = createUserWithLastName("Potter", user2);
console.log(newUser);
// end of nice

// #end of Immutability

// Rekursif

// bad
const countDown = (start) => {
  do {
    console.log(start);
    start -= 1;
  } while (start > 0);
};
console.log(countDown(10));
// end of bad

// nice
const countDown2 = (start) => {
  console.log(start);
  if (start > 0) countDown2(start - 1);
};
console.log(countDown2(10));
// end of nice

// #end of Rekursif

// Higher-Order Function
const hello = () => {
  console.log("Hello!");
};

const say = (someFunction) => {
  someFunction();
};

const sayHello = () => {
  return () => {
    console.log("Hello!");
  };
};

hello();
say(hello);
sayHello()();

// contoh
const names = ["Harry", "Ron", "Jeff", "Thomas"];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if (!item) return newArray;
    return loopTrough(
      arr,
      action,
      [...newArray, action(arr[index])],
      index + 1
    );
  };

  return loopTrough(arr, action);
};

const newNames = arrayMap(names, (name) => `${name}!`);

console.log({
  names,
  newNames,
});

/**
 * output:
 * {
 *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * }
 */
// end of Higher-Order Function
