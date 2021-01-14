const EventEmitter = require("events"); //to use events module we need to require event emitter class
const http = require("http");
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

//creating an instance of class
//const myEmitter = new EventEmitter();
const myEmitter = new Sales();
//these observers that observers the emitters
myEmitter.on("newSale", () => {
  console.log("There was a new Sale");
}); //.on is just like we are clicking on a button
//these observers that observers the emitters
myEmitter.on("newSale", () => {
  console.log("Costumer name: Qandeel ");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in the stock.`);
});

//let we want to emit an event by the of "newSale"
//this is object that emits the emitters
myEmitter.emit("newSale", 9); //emit is just like we are clicking on a button
////////////////////////////////////////
//const server = createServer();
const server = http.createServer(); //another way of creating server
//if you see an "on" in the node project it means you are listening to the event
server.on("request", (req, res) => {
  console.log("Request recieved");
  console.log(req.url);
  res.end("Request recieved");
});

//We can listener multiple times to the event
server.on("request", (req, res) => {
  console.log("Another Request 😀");
});

//We can also listen to the close event
//this event is fired when the server is closed
server.on("close", () => {
  console.log("Server is close");
});

//We can also listen to the START the server
//this event is fired when the server is STARTED
//127.0.0.1 = localhost
server.listen(8000, "127.0.0.1", () => {
  console.log("The server is running on localhost port 8000");
});
