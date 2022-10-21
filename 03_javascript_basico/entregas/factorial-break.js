/***** Ejercicio *****/
// Duración aproximada: 5min
// Enunciado del ejercicio: Crea el siguiente archivos JS:
// factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let factorial_de_10 = 10;
let i = factorial_de_10-1;

while(factorial_de_10){
    factorial_de_10 *= i;
    i--;
    if (i <= 1) break;
}
console.log(`El factorial de 10 es: ${factorial_de_10}`);