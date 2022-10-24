/***** Ejercicio ********/
// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function verdadera() {
  return true;
}
// invoco a mi funcion y guardo su resultado en la constante
const siempreVerdadera = verdadera();
// muestro por consola
console.log(siempreVerdadera);
// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function damePromesa() {
  return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}
//- Una función generadora de índices pares automáticos
function* idsPares() {
  let id = 0
  while(true) {
      yield id += 2
  }
}
// invoco a la funcion y lo guardo en constante
const gen = idsPares();
// con el generetor utilizo el metodo .next y capturo su valor con value()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
