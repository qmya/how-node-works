//console.log(arguments);
//console.log(require("module").wrapper);

//module.export
const C = require("./test-module-1"); //import a clss calculator

const calc1 = new C();

console.log(calc1.add(2, 5));

//exports(short hands)
const calc2 = require("./test-module-2");
const { add, multiply, divide } = require("./test-module-2");
console.log(calc2.add(2, 5));
console.log(calc2.multiply(2, 5));

//cachings
