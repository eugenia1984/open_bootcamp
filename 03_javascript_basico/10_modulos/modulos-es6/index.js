// import { suma, eleva, nombre } from './modulos/matematicas.js'
import * as moduloMatematicas from './modulos/matematicas.js'
import getAutor, { libro } from './modulos/literatura.js'
import axios from "axios";

const sum = moduloMatematicas.suma(4, 12)
console.log(sum)

const potencia = moduloMatematicas.eleva(2, 21)
console.log(potencia)

console.log(moduloMatematicas.nombre)

console.log(getAutor())
console.log(libro)

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) { // handle success
    console.log(response.data);
  })
  .catch(function (error) { // handle error
    console.log(error);
  })
  .finally(function () { // always executed
    console.log("Finalizado");
  });