const fs = require("fs");

const readableStream = fs.createReadStream("article.txt", {
  highWaterMark: 15,
});

readableStream.on("readable", () => {
  try {
    // console.log(`${readableStream.read()}`);
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    console.log(error);
  }
});

readableStream.on("end", () => {
  console.log("Done");
});
