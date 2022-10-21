/***** Ejercicio *****/
/*
Duración aproximada: 5min
Enunciado del ejercicio: Crea el archivo JS:
- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
*/
const factorial_a_calcular = 10;
let factorial = 1;
for(let i = factorial_a_calcular; i > 0 ; i--) {
  factorial*=i;
}
console.log(`El factorial de ${factorial_a_calcular} es: ${factorial}`);