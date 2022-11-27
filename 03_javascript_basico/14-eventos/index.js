const num1 = 4
const num2 = 8
const saludo = "Saludo desde JavaScript!"
const d = document

console.log(num1 * num2)
console.log(saludo)

// accedo al elemento del DOM que tiene como id "parrafo"
const parrafo = d.getElementById("parrafo")
// lo muestro en consola
console.log("innerHTML: ", parrafo.innerHTML)
console.log(parrafo)