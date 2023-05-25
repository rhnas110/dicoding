// Array Map
["Harry", "Ron", "Jeff", "Thomas"].map((name) => {
  //   console.log(`${name}!`);
});

const newArray = ["Harry", "Ron", "Jeff", "Thomas"].map((name) => {
  return `${name}!`;
});

console.log(newArray);
// #end of Array Map

// Array Filter
const truthyArray = [1, "", "Hallo", 0, null, "Harry", 14].filter((item) =>
  Boolean(item)
);

console.log(truthyArray);

const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const eligibleForScholarshipStudents = students.filter(
  (student) => student.score > 85
);

console.log(eligibleForScholarshipStudents);
// #end of Array Filter

// Array Reduce
const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);
// #end of Array Reduce

// Array Some
const array = [1, 2, 3, 4, 5];
const even = array.some((element) => element % 2 === 0);

console.log(even);
// #end of Array Some

// Array Find
const findJames = students.find((student) => student.name === "James Bond");
console.log(findJames);
// #end of Array Find

// Array Sort
console.log(["March", "Jan", "Feb", "Dec"].sort());
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

console.log([1, 30, 4, 1000, 101, 121, 0].sort());
// output: [ 0, 1, 1000, 101, 121, 30, 4 ]

// contoh lain
const array1 = [1, 30, 4, 1000, 11];
console.log(array1.sort());

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);
// #end of Array Sort

// Array Every
const scores = [70, 85, 90];
const minimumScore = 65;

const examPassed = scores.every((score) => score >= minimumScore);
console.log(examPassed);
// #end of Array Every

// Array forEach
// cara imperatif
for (let i = 0; i < names.length; i++) {
  if (names[i] === "John" || names[i] === "Ron") continue; // Bisa!
  console.log(`Hello, ${names[i]}!`);
}
// end of cara imperatif

// cara deklaratif
names.forEach((name) => {
  //  if(name === 'John') // continue; // Tidak Bisa!
  console.log(`Hello, ${name}!`);
});
// end of cara deklaratif
// #end of Array forEach
