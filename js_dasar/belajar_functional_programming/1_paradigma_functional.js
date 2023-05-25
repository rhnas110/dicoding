// kode imperatif || "how to solve"
const names = ["Harry", "Mike", "John", "Ron"];
const newNameWithExcMark = [];

for (let i = 0; i < names.length; i++) {
  newNameWithExcMark.push(`${names[i]}!`);
}
console.log(newNameWithExcMark);
// #end of kode imperatif || "how to solve"

// kode deklaratif || "what to solve"
const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log(newNamesWithExcMark);
// #end of kode deklaratif || "what to solve"
