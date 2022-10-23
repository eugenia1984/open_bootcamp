/***** Arrays ******/

/***** 6.1. Listas y métodos de mutacion de listas *****/
// Cómo trabajar con listas (arrays, arreglos, vectores...)
// guardan todo tipo de datos (number, string, boolean, object, null, undefined)
let array = [1, "hola", false, { id: 5 }, null, undefined];
console.log(array);

// Acceder a los valores de un array a través de su posición
// array[indice]  => 0, 1, 2, 3, 4, 5, ....
console.log(array[0]); // 1
console.log(array[1]); // "hola"
console.log(array[2]); // false 
console.log(array[3]); // {id: 5}

// Métodos para introducir nuevos valores en nuestros arrays
// .push() .unshift() => Mutan el valor de nuestro array
// Valores al final -> Push
array.push("final", 45, 100, false);
console.log(array); // 1, "hola", false, { id: 5 }, null, undefined, "final", 45, 100, false

// Valores al principio -> Unshift
array.unshift("inicio", 87, 99);
console.log(array); //  "inicio", 87, 99, 1, "hola", false, { id: 5 }, null, undefined, "final", 45, 100, false

// Métodos para eliminar valores en nuestros arrays
// .pop() .shift() => Mutan el valor del array
const array2 = [1, 3, "hola", false];
// Valores al final -> Pop
array2.pop();
console.log(array2); //  1, 3, 'hola'

// Valores al principio -> Shift
array2.shift();
console.log(array2); // 3, 'hola' 

// Método para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5, 6];
// Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2, 1);
console.log(array3); //   1, 2, 4, 5, 6 

// Añadir valores .splice(indice, 0, valores)
array3.splice(2, 0, "hola");
console.log(array3); // 1, 2, 'hola', 4, 5, 6

// Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, 3); // saco el hola y agrego el 3
console.log(array3); // 1, 2, 3, 4, 5, 6 

/****** 6.2 Concatenación y obtención de fragmentos de listas *********/
// Cómo unir dos listas .concat(lista2)
const lista1 = ["hola", 2, false, null]
const lista2 = ["adiós", 8, true, undefined]

console.log(lista1.concat(lista2));  // [ 'hola', 2, false, null, 'adiós', 8, true, undefined ]
console.log(lista1); // no muda la lista1 [ 'hola', 2, false, null ]

const lista3 = lista1.concat(lista2); 
console.log(lista3); // [ 'hola', 2, false, null, 'adiós', 8, true, undefined ]

// Cómo unir dos listas con el factor de propagación (spread operator)
console.log(...lista3); // hola 2 false null adiós 8 true undefined
const lista4 = [...lista1, ...lista2];
console.log(lista4);  // [ 'hola', 2, false, null, 'adiós', 8, true, undefined ]

// ERROR!! Mal entendido el concepto del factor de propagación
const lista5 = [lista1, lista2];
console.log(lista5); // [ [ 'hola', 2, false, null ], [ 'adiós', 8, true, undefined ] ]

// Cómo obtener una lista a partir de otra .slice()
const array5 = ["hola", 1, 2, 3, true, null, "adios"]
// NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
console.log(array5.slice(1, 4)); // [ 1, 2, 3 ]
const array6 = array5.slice(2, 5);
console.log(array5)  // [ 'hola', 1, 2, 3, true, null, 'adios' ]

const array7 = array5.slice(2, -2)
console.log(array7); // [ 2, 3, true ]

/******* 6.3 Métodos de iteración en listas *******/
const vocales = ["a", "e", "i", "o", "u2"];
// Iterar con un for (forma antigua y poco eficiente)
for(let index = 0; index < vocales.length; index++) {
  console.log(array[index]);
}

// Forma ES6, mas eficiente, con .forEach()
vocales.forEach( elemento => {
  console.log( elemento);
})

// Busqueda de un valor en una lista con .find()
// quiero buscar la "e" de vocales
const e = vocales.find(valor => {
  if (valor === "e") {
    return true;
  }
});
console.log(e);

const listaObj = [
  {nombre:"Leire", edad: 35},
  {nombre:"Eugenia", edad: 38},
  {nombre:"Sandra", edad: 24},
  {nombre:"Nora", edad: 3},
  {nombre:"Carlos", edad: 70}
]
// Quiero buscar la edad de Carlos
//const objeto = listaObj.find(o => {
//  if(o.nombre === "Carlos"){
//    return true;
//  }
//})
// simplificando con arrow function
const objeto = listaObj.find(o => o.nombre === "Carlos");
console.log(objeto.edad);
// utilizando el spread operator
const { edad } = listaObj.find(o => o.nombre === "Carlos");
console.log(edad);

/******** 6.4 Métodos avanzados, obtención de listas a partir de listas ******/
// .map() .filter() .reduce()
const ciudades = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"]
// accedemos a cada uno de los valores con el .forEach()
const val = ciudades.forEach(ciudad => {
  console.log(ciudad)
  return 4;
})
console.log(val)

// con un .map() voy a modificar los elementos del array y le agrego un indice adelatante (por eso utilizo el INDEX)
const newCiudades = ciudades.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newCiudades);
/*
[
  '1 - San Sebastián',
  '2 - Madrid',
  '3 - Barcelona',
  '4 - Alicante',
  '5 - Bilbao'
]
*/

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Analia", edad: 29}
]
// const personasMayores = listaObjetos.filter(obj => {
//     return (obj.edad > 30) ? true: false;
// })

// recorremos una lista de objetos usando .filter()
const personasMayores = listaObjetos.filter(obj => obj.edad > 30);
console.log(personasMayores); // [ { nombre: 'Leire', edad: 35 }, { nombre: 'Gorka', edad: 34 } ]

// quiero la lista sin Miguel
const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel")
console.log(nuevaLista);
/*
[
  { nombre: 'Leire', edad: 35 },
  { nombre: 'Gorka', edad: 34 },
  { nombre: 'Lucía', edad: 3 },
  { nombre: 'Analia', edad: 29 }
]
*/

// .reduce()
// se obtiene un valor un objeto, algo a partir de una lista
// su callback acepta hasta 4 params:
// 1 - el valor inicial, es el que va a ser nuestro valor que ira acumulando
// 2 - el valor actual
// 3 - el indice
// 4 - el array original
// se usa para concatenar distintos arrays
const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur;
})
console.log(suma)

/******** 6.5 Ordenación de listas y comparación entre dos listas ****/
// .sort() -> MODIFICA EL ARRAY
// recibe un callback con dos parammetros:
// param1: elemento actual
// param2: elemnto posterior
const array9 = [2, 5, 9, 15, 1, 2, 0, 4];
console.log(array9);

array9.sort((a, b) => {
  if (a < b) {
    return +11568;
  } else if (a > b) {
    return -153697;
  } else { // a === b
    return 0;
  }
})

console.log(array9);

// Ordenar únicamente arrays numéricos, utilizando ...
// a - b -> de menor a mayor
// b - a -> de mayor a menor
const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546]
arrayNumerico.sort((a, b) => b - a)
console.log(arrayNumerico);

// Interesante en arrays de objetos
const listaObjetos2 = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29}
]

// listaObjetos.sort((a, b) => {
//     if (a.edad < b.edad) {
//         return -1
//     } else if (a.edad > b.edad) {
//         return +1
//     } else {
//         return 0
//     }
// })
listaObjetos2.sort((a, b) => a.edad - b.edad);
console.log(listaObjetos2);

// Cómo podemos comparar listas
// .every() dice si TODOS los componentes de la lista cumplen con la condicion
// acepta dos params..
// ... el valor
// ... el indice
const primerArray = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];
// const resultado = primerArray.every(valor => {
//     return (valor > 0)? true: false;
// })
const resultado = primerArray.every(valor => valor > 0);
console.log(resultado); // false porque tengo numeros negativos

/// Comparacion de listas
const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];
console.log(ar1 === ar2); // false no se pueden comparar asi los arrays

const compararArrays = (array_1, array_2) => {
  // si no tienen la misma cantidad de eleentos que ya me de el false y ni las compare
  if (array_1.length !== array_2.length) return false;
  const res = array_1.every((valor, i) => valor === array_2[i]);
  return res;
}

console.log(compararArrays(ar1, ar2)); // true
const ar3 = [1, 2, 3, 9];
console.log(compararArrays(ar1, ar3)); // false

/****** 6.6 Identificar si existe un valor en un array y objetos iterables *****/
// .some(), si alguno cunple con la condicion
const arrays = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2];

const res = arrays.some(valor => valor < -10);
console.log(res); // false

const existe = arrays.some(valor => valor === 9);
console.log(existe); // true

// se puede usar con listas de objetos
const listaObjetos3 = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29}
]

const existeJuan = listaObjetos3.some(persona => persona.nombre === "Juan");
console.log(existeJuan); // false

// Cómo obtener una lista a partir de un OBJETO ITERABLE
const str = "Hola soy Euge"
console.log(str[5])
// el metodo .from es del array
const ar_str = Array.from(str);
console.log(ar_str); // ["H","o","l","a"," ","s","o","y"," ","E","u","g","e"]

const set = new Set([2, 3, "hola", 4]);
const ar_set = Array.from(set);
console.log(ar_set); // [2, 3, "hola", 4]

// obtenemos un iterable de todos los keys()
const keys = array.keys();
console.log(keys); // es un objeto de tipo ITERATOR

const ar_keys = Array.from(keys);
console.log(ar_keys); // 0 1 2 3 4 5 6 7 8 9 10 


/******** Ejercicio ********/
// Crea un archivo JS que contenga las siguientes líneas
// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaDeCompra = ["Banana", "Manzana", "Naranja", "Tomate", "Lechuga", "Cebolla"];
console.log(`- Mi lista de Compra: ${listaDeCompra}`);
//  Modifica la lista de la compra y añádele "Aceite de Girasol"
// con el metodo .push() lo agrego al final modificando mi array
listaDeCompra.push("Aceite de Girasol");
console.log(`- Mi nueva lista de compra es: ${listaDeCompra}`);
// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
// con el metodo .pop() voy a modificar el array eliminando el ultimo elemento
listaDeCompra.pop();
console.log(`- Mi nueva lista de compra sin el ultimo item: ${listaDeCompra}`)
// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [
  {
    titulo: "Coco",
    director: ["Adrián Molina", "Lee Unkrich"],
    fecha: new Date (2017, 0, 1)
  },
  {
    titulo: "Hotel Transylvania",
    director: "Genndy Tartakovsky",
    fecha: new Date (2012, 0, 1)
  },
  {
    titulo: "He's Just Not That Into You",
    director: "Ken Kwapis",
    fecha: new Date (2009, 0, 1)
  }
]

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasNuevas = peliculasFavoritas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))
console.log(`- Peliculas desde 2010: ${peliculasNuevas}`);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directoresAgregados = []
const directores = peliculasFavoritas.map((pelicula) => {
  return pelicula.director;
});
console.log(`- Los directores son: ${directores}`);
// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculasFavoritas.map(pelicula => {
  return pelicula.titulo;
});
console.log(`- Los titulos son: ${titulos}`)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directoresYTitulos = directores.concat(titulos);
console.log(`- directores y titulos: ${directoresYTitulos}`);
// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directoresTitulosSpreadOperator = [...directores, ...titulos];
console.log(`- directores y titulos con spread operator: ${directoresTitulosSpreadOperator}`);