// coming to fs module there is a many methods where we can read , write inside the files wether it can be synchonously and asynchronusly


// const fs = require('fs')
// console.log(fs) // this gives the methods there in fs module

// this is a synchronus fs module example

const {readFileSync, writeFileSync}= require('fs')

const first = readFileSync('./forFS/first.txt','utf8')
// readFileSync() takes 2 parameters one is path , which path is has to read , and the second is encoding parameter like utf-8

//This line of code is using the `readFileSync` function from the Node.js `fs` module to read the contents of a file called "first.txt". The file path `./forFS/first.txt` specifies the location of the file relative to the current working directory.
// The second argument `'utf8'` is the encoding parameter. It specifies the character encoding for the file, which in this case is UTF-8. UTF-8 is a widely-used encoding that can represent almost all characters from all human languages. It is necessary to specify the encoding because files can be written in different character encodings, and we need to read the file using the same encoding in order to correctly interpret the characters in the file.
// In summary, `utf8` is the encoding parameter that indicates the file is encoded using UTF-8, and it is necessary to specify it here to ensure that the file's contents are read correctly.


const second = readFileSync('./forFS/second.txt','utf8')
console.log("reading the first , second file---->",first,second)  // output helo first hello second


//writeFileSync('./forFS/createFile.txt',`I am writing first , second txt files : ${first} , ${second} `) // writeFileSync will create a file and write the things how ever we give , if creates a file if the file is not Present , if file is present then it simply write it ,, but we have to give directory -- path at where we have to write or create a file to write the value in it

// keep in mind it will over ride the values , info there in that file once we run FSmodule.js file , so if we want to append to exsisting file without changing the info in that file then we use {flag:'a'} to append



writeFileSync('./forFS/createFile.txt',`I am writing first , second txt files : ${first} , ${second}`,{ flag: 'a'})
 // writeFileSync() function takes 2 parameters one is the file path , second is what data have to append 
// .... By adding a flag it will append the data without changing the data in the file ..simply not override the values there in that file




// console.log(first,second)