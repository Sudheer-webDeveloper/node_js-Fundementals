const EventEmitter= require('events')

//In Node.js, the EventEmitter module is a built-in module that provides an implementation of the observer pattern. It allows you to create custom events and register event listeners to handle those events. Here are the key points to understand about the EventEmitter module

// Creating an instance: Once imported, you can create an instance of the EventEmitter class using the new keyword:

const customEmitter= new EventEmitter()

// rules 
// 1) first will be on then only emit can be possible

// 2) with one on() event , we can execute how many functions we want


// 3) When we are emiting an event the event name must be same at emitting okay
customEmitter.on('AnyEvent', ()=>{
    console.log("I am an event")
})

// On() takes 2 parameters same like eventListeners one is event name , second is callback()

// to Execute an event we use any name here we are just using AnyEvent we can use any name 

//If you want an event listener to be executed only once, you can use the once() method instead of on().This ensures that the event listener is automatically unregistered after being triggered once.

// we can also pass arguments inside the callback
customEmitter.on('AnyEvent', (name, id)=>{
  console.log(`I am an second event with Argemnets name: ${name} , id:${id}`)
})


customEmitter.on('AnyEvent', (error) => {
    console.error('An error occurred:', error);
  });
  // if any error this on() wil handle

customEmitter.emit('AnyEvent' ,'sudheer', 9676)

//   These are the basic concepts of using the EventEmitter module in Node.js. It is a powerful tool for creating event-driven architectures and facilitating communication between different parts of your application.

