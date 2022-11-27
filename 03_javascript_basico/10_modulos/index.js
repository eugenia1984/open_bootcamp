// Formas de importar/exportar módulos
// 1. CommonJS - require
// 2. Import ES6 - import

// 1. CommonJS - require
// const moduloMatematicas = require("./modulos/matematicas.js")
// const factorial = moduloMatematicas.factorial;
// const { factorial, suma } = moduloMatematicas;
// const suma = moduloMatematicas.suma;
// console.log(moduloMatematicas.suma)
// 2. Import ES6 - import
// import * as moduloMatematicas from "./modulos/matematicas.js";
// aprovecho la desestructuracion

const { factorial, suma } = require("./modulos/matematicas.js");

const fact = factorial(5)
console.log(fact)

const sum = suma(12, 90)
console.log(sum)