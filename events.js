const EventEmitter = require("events"); //to use events module we need to require event emitter class

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
