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
    { nombre: "Amaia", edad: 29}
]
// const personasMayores = listaObjetos.filter(obj => {
//     return (obj.edad > 30) ? true: false;
// })

// recorremos una lista de objetos usando .filter()
const personasMayores = listaObjetos.filter(obj => obj.edad > 30);
console.log(personasMayores); // [ { nombre: 'Leire', edad: 35 }, { nombre: 'Gorka', edad: 34 } ]

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel")
console.log(nuevaLista);
/*
[
  { nombre: 'Leire', edad: 35 },
  { nombre: 'Gorka', edad: 34 },
  { nombre: 'Lucía', edad: 3 },
  { nombre: 'Amaia', edad: 29 }
]
*/

const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma)

/******** 6.5 Ordenación de listas y comparación entre dos listas ****/

/****** 6.6 Identificar si existe un valor en un array y objetos iterables *****/

/******** Ejercicio ********/
