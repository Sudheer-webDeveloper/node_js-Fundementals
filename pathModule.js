const path = require('path')

// console.log(path) // this gives the whole path module methods

console.log("Seperator Property",path.sep) // seperator is one of the method there in the path builtin module in node 

//
const filePath = path.join('/content','forPathModule','path.txt')
console.log("filepath for path.txt file is",filePath) // it creates a path to the path.txt to enter directly to that path ///content/forPathModule/path.txt

//
const base = path.basename(filePath)
console.log("base name",base) //path.txt ---> this gives the basefile of the specific path

//


console.log("Current directory is",__dirname) // it gives the current directory which file we are
//  Users/sudheertalapudi/Desktop/Main Files/NODE.JS/FOR node intro , fs, os mod



//
const absolutePath = path.resolve(__dirname, 'content','forPathModule','path.txt')  // resolve method will give the absoulte path to the path.txt file  based on the directory , we have to give them in the string form.

console.log(absolutePath) //the absolute path for path.txt file from our current directory is  
// /Users/sudheertalapudi/Desktop/Main Files/NODE.JS/FOR node intro , fs, os module/content/forPathModule/path.txt
