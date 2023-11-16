// FS_Solution_promise.js

// solution 1
// const { readFile } = require("fs");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./forFS/first.txt")
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error));

//In solution 1
// This is the solution for the call back , by using promise we can get rid of the call back hell
// But writing promise everytime and repeating it also a painful to resolve it we have to use async and await i think

//solution 2
// const { readFile } = require("fs");
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// const start = async () => {
//   try {
//     const first = await getText("./forFS/first.txt");
//     console.log(first);
//     const second = await getText("./forFS/second.txt");
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

//In solution 2 we are using async await instead of writing promises , .then chains
//once the first promise is resolved , setteled then only it go's second one
// compare the solution-1 and solution-2 getTExt(){} carefully

// solution 3
// In solution 3 we are reading the file as well as writing the file
// There is a package called util in that util there is a method called promisify , it returns  a promise , we no need to write promise also , which is so crazy less work

// const { readFile } = require("fs");
// const util = require('util');
// const readFilePromise = util.promisify(readFile)

// // that means this util.promisify is creating a promise in the name of readFile

// const start = async () => {
//   try {
//     const first = await readFilePromise("./forFS/first.txt",'utf8');
//     console.log(first);
//     const second = await readFilePromise("./forFS/second.txt",'utf8');
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

//Solution 3 ----> writing a file

// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// // that means this util.promisify is creating a promise in the name of readFile

// const start = async () => {
//   try {
//     const first = await readFilePromise("./forFS/first.txt", "utf8");
//     console.log(first);
//     const second = await readFilePromise("./forFS/second.txt", "utf8");
//     console.log(second);
//     await writeFilePromise(
//       "./forFs/mainFS.txt",
//       `This is The Main: ${first}, ${second}`,
//       { flag: "a" }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();






// Main solution 4
// In solution four we no need to write the util promisify method also, simply converting the fS methods into promises direaclty
const { readFile, writeFile } = require("fs").promises;

// that means this util.promisify is creating a promise in the name of readFile

const start = async () => {
  try {
    const first = await readFile("./forFS/first.txt", "utf8");
    console.log(first);
    const second = await readFile("./forFS/second.txt", "utf8");
    console.log(second);
    await writeFile(
      "./forFs/mainFS.txt",
      `This is The Main: ${first}, ${second}`,
      { flag: "a" }
    );
  } catch (error) {
    console.log(error);
  }
};

start();


// keep in mind it is our own intrest we can use any solution  method to implement this logic