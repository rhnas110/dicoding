const fs = require("fs");

// Asynchronous readfile
const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

fs.readFile("todo.txt", "utf-8", fileReadCallback);

// Synchronous readfile
const data = fs.readFileSync("todo.txt", "UTF-8");
console.log(data, "synchronous");

// Latihan Filesystem
// Synchronous
const notes = fs.readFileSync("notes.txt", "utf-8");
console.log(notes, "synchronous");

// Asynchronous
const path = require("path");
fs.readFile(path.resolve(__dirname, "notes.txt"), "utf-8", fileReadCallback);
