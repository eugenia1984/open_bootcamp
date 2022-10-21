/***** Ejercicio *****/
/*
Duración aproximada: 5min
Enunciado del ejercicio: Crea el siguiente archivos JS:
- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
*/
let factorial_de_diez = 10;
let resultado = 1;
while (factorial_de_diez > 1) { 
  resultado *= factorial_de_diez; 
  factorial_de_diez--; 
}

console.log(`El factorail de 10 es : ${resultado}`); 