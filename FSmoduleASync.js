//FSmoduleASync.js
//forFS_ASYNC

// this is a asynchronus fs module where it takes a 2 pareameters , one is path, second is the callback function () {}, callback function takes 2 parameters ,one is error , second is result

const { readFile, writeFile } = require("fs");

// Like this we have to read file in asynchronus fs module

readFile("./forFS_ASYNC/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;
  console.log("first file is", first); // returns output ---> first file is hello ASync first
});

// what if i want to read second file same reapeat ,,for third file same repeat it leads to a callback hell

// this is the process to read, write to exsisting file , create file and append the values in it , keep in mind both read , write file will take callback function , but this is going to callback hell, there is a solutin for this promises , async , but in this file we see by using call back see below


readFile("./forFS_ASYNC/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;
  readFile("./forFS_ASYNC/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;

    writeFile(
      "./forFS_ASYNC/createNew-async.txt",
      `Again new file appending ${(first, second)}`,
      { flag: "a" },
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log("The result is ", first, second);
      }
    );
  });
});
