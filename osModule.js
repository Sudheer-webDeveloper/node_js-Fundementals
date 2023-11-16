const os = require('os')
// os is a built in module gives lot of methods and useful properties to interact with operating system and server 

const userName = os.userInfo()
console.log("The userName is ",userName)  // userInfo() is the object inside the object there is some useful properties like our uid, gid,username, homedir , shell

 console.log(`the screen uptime is ${os.uptime()} seconds`)

const currentOS= {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()

}

console.log(currentOS.name)
console.log(currentOS.release)
console.log(currentOS.totalMem)
console.log(currentOS.freeMem)

console.log(currentOS)