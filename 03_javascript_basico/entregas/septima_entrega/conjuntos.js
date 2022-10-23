/******* Ejercicio 1 ******/

// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// Un nuevo Set con los nombres de tu familia
let familia = ["carlos", "Analia", "Aguatin", "Andres", "Eugenia"];
const miSet = new Set(familia);
console.log(miSet); // Set(5) { 'carlos', 'Analia', 'Aguatin', 'Andres', 'Eugenia' }

// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familia.push("Eugenia");
console.log(familia); // [ 'carlos', 'Analia', 'Aguatin', 'Andres', 'Eugenia', 'Eugenia' ]
const miSet2 = new Set(familia);
console.log(miSet2); // Set(5) { 'carlos', 'Analia', 'Aguatin', 'Andres', 'Eugenia' }

// Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miSet.add("javaScript");
console.log(miSet);
/*
Set(6) {
  'carlos',
  'Analia',
  'Aguatin',
  'Andres',
  'Eugenia',
  'javaScript'
}
*/