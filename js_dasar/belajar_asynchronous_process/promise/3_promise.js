function getUsers(isOffline) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = ["John", "Doe", "Aby"];

      if (isOffline) {
        reject(new Error("cannot retrieve users due offline"));
        return;
      }

      resolve(users);
    }, 3000);
  });
}

getUsers(true)
  .then((users) => console.log(users, "users"))
  .catch((error) => console.log(error.message, "error"));

// Mengubah Callback Menjadi Promise dengan Promisify
const { promisify } = require("util");
function getUsers2(isOffline, callback) {
  setTimeout(() => {
    const users = ["John", "Doe", "Aby"];
    if (isOffline) {
      return callback(new Error("cannot retrieve users due offline"), null);
    }

    callback(null, users);
  }, 3000);
}
const getUsersPromise = promisify(getUsers2);
getUsersPromise(false)
  .then((users) => console.log(users, "fa"))
  .catch((err) => console.log(err.message, "fa"));
getUsersPromise(true)
  .then((users) => console.log(users, "tr"))
  .catch((err) => console.log(err.message, "tr"));

const fs = require("fs");
const path = require("path");
const readFilePromise = promisify(fs.readFile);

readFilePromise(path.resolve(__dirname, "./data.txt"), "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));

//
function anagram(words) {
  const result = [];

  for (let word of words) {
    let temp = word.split("").sort().join("");
    // console.log(temp);
    if (result[temp]) {
      result[temp].push(word);
    } else {
      result[temp] = [word];
    }
  }

  return Object.values(result);
}

const list = [
  "kita",
  "atik",
  "tika",
  "aku",
  "kia",
  "makan",
  "kua",
  "ayam",
  "yaya",
  "yam",
  "yama",
  "maya",
];
console.log(anagram(list.sort()));
