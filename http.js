// http built in module allows us to create the web server

const https = require("http");
// console.log(https);

/*
 
const server = https.createServer((req,res)=>{
  res.write('Welcomne to home page')
  res.end()
})

server.listen(3000,()=>console.log("Server trying to listen on the port 3000"))
*/

// create server is the method, function which takes call back function in side the call back it takes , two parameters, request , response.  Read the main comment below written

const server = https.createServer((req, res) => {
  if (req.url === "/") {
    console.log(req.url);
    res.write("Welcomne to home page");
    res.end();
  } else if (req.url === "/about") {
    console.log(req.url);
    res.write("Welcomne to About page");
    res.end();
  } else {
    res.end(`<h1>Oops ! no Page</h1>`); // if the no url mathched then this line we are showing to the user
  }
});
server.listen(8080, () => console.log("firsr server started"));

/*


The `http` module in Node.js provides a set of functions and classes to create HTTP servers and make HTTP requests. Here are a few things that you can do with the `http` module:

1. Create an HTTP server: You can use the `http.createServer()` method to create an instance of an HTTP server. This server can listen for incoming HTTP requests and handle them appropriately.

2. Handle incoming requests: Once the server is created, you can define a request handler function that will be called whenever there is an incoming HTTP request. This function takes two parameters: `req` (the incoming request object) and `res` (the response object). You can use these objects to access and manipulate the request and response data.

3. Send HTTP responses: Using the `res` object, you can send an HTTP response back to the client. This can include setting the response status code, headers, and sending the response body.

Advantages of using the `http` module:

1. Built-in module: The `http` module is part of the Node.js core, which means it is automatically available when you install Node.js. You don't need to install any extra dependencies to use it.

2. High performance: The `http` module is designed to handle a large number of simultaneous connections efficiently. It uses an event-driven, non-blocking I/O model, which allows it to handle multiple requests at the same time without blocking the execution of other code.

Regarding the code snippet you provided (`const server = https.createServer((req,res)=>{...}`), it seems that you are using the `https` module instead of the `http` module. The `https` module is similar to the `http` module but specifically designed for creating HTTPS servers (HTTP over TLS/SSL). In this snippet, you are creating an HTTPS server that listens for incoming requests and responds with "hello world" for the root URL ('/') and "no page" for any other URL request.

*/
