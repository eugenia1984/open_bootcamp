/******** Ejercicio 3 *******/
// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// La fecha de hoy
const fechaActual = new Date();
console.log(`Hoy es: ${fechaActual}`);

// La fecha de tu nacimiento
const nacimiento = new Date(1984, 8, 1);
console.log(`Mi fecha de nacimiento es: ${nacimiento}`);

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const hoyEsMasTarde = fechaActual > nacimiento;
console.log(`Hoy es más tarde que la fecha de mi nacimiento? ${hoyEsMasTarde}`);

// Una variable que contenga el día de tu nacimiento
const diaDeNacimiento = nacimiento.getDay();
console.log(`Mi dia de nacimiento es: ${diaDeNacimiento}`)

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesDeNacimiento = nacimiento.getMonth() + 1;
console.log(`Mi mes de nacimiento es: ${mesDeNacimiento}`)

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anioDeNacimiento = nacimiento.getFullYear() + 1;
console.log(`Mi año de nacimiento es: ${anioDeNacimiento}`)