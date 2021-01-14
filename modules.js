//console.log(arguments);
//console.log(require("module").wrapper);

//module.export
const C = require("./test-module-1"); //import a clss calculator

const calc1 = new C();

console.log(calc1.add(2, 5));

//exports
