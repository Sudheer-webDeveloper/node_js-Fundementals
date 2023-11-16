const sayHi = require('./function')
const names = require('./variable')
const {john , peter} = require('./variable')



console.log(names)

console.log(sayHi)

sayHi(names.john)
sayHi("hi ra mavaa")
sayHi(names.peter)
sayHi(peter)