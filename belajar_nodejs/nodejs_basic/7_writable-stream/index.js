const fs = require("fs");

const writeableStream = fs.createWriteStream("example.txt");

writeableStream.write("Ini merupakan teks baris satu!\n");
writeableStream.write("Ini merupakan teks baris dua!\n");
writeableStream.end("Akhir dari writable stream!");

// Latihan Stream
const { resolve } = require("path");
const readableStream = fs.createReadStream(resolve(__dirname, "input.txt"), {
  highWaterMark: 15,
});

const writeInput = fs.createWriteStream(resolve(__dirname, "output.txt"));

readableStream.on("readable", () => {
  try {
    writeInput.write(`${readableStream.read()}\n`);
  } catch (error) {
    console.log(error);
  }
});

readableStream.on("end", () => {
  console.log("Read Done!");
  writeInput.end("Write Done");
});
