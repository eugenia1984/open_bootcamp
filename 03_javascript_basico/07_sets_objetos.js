/***** Sets y Objetos ****/

/***** 7.1 Trabajando con Sets  ****/
// Sets o conjuntos
// son similares a los arrays, pero se comportan diferentes
// es un conjunto no ordenado, de valores unicos (no tiene elementos repetidos)
const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", { id: 5 }, "hola"]
const miSet = new Set(array); // no voy a tener el "hola" duplicado
console.log(array); // [ 1, 2, 3, 4, 5, 6, 1, 2, 5, 'hola', { id: 5 }, 'hola' ]
console.log(miSet); //  Set(8) { 1, 2, 3, 4, 5, 6, 'hola', { id: 5 } }

// .add() para agregar un elemento
miSet.add(9)
console.log(miSet); // Set(9) { 1, 2, 3, 4, 5, 6, 'hola', { id: 5 }, 9 }
miSet.add(4); // como el 4 ya lo tenia, no voy a ver dos 4
console.log(miSet); // Set(9) { 1, 2, 3, 4, 5, 6, 'hola', { id: 5 }, 9 }

// .delete() para eliminar un elemento
miSet.delete("hola");
console.log(miSet); // Set(8) { 1, 2, 3, 4, 5, 6, { id: 5 }, 9 }

// .clear() para eliminar todos los valores
// miSet.clear()
// console.log(miSet)

// .has() es similar al metodo includes() del array -> console.log(array.includes(2))
console.log(miSet.has(40)); // false porque no tiene a 40 como elemento

// .size
console.log(miSet.size); // 8

// para iterar los elementos
miSet.forEach(valor => {
  console.log(valor)
})
/*
1
2
3
4
5
6
{ id: 5 }
9
*/

// con un objeto ITERATOR a traves del .values()
const it_miSet = miSet.values();
console.log(it_miSet); // [Set Iterator] 

// por spread operator (factor de propagacion)
const ar_miSet = [ ...miSet ];
console.log(ar_miSet[1]); // 2

/******* 7.2 Objetos en JavaScript ******/

// Trabajando con Objetos
// defino un objeto entre {}, tiene pares key:value
// si la key tiene mas de una palabra va entre ""
const obj = {
  id: 4,
  nombre: "Maria Eugenia",
  apellido: "Costa",
  isDeveloper: false,
  libros_favoritos: ["El método", "El código de la manifestación"],
  "4-juegos": [1, 2, 3, 4]
}

console.log(obj.id); // 4
console.log(obj["4-juegos"]); // [ 1, 2, 3, 4 ] en vez de usar dot notation utilizo los []

const prop = "isDeveloper"; //accedo al value de una key
console.log(obj[prop]); // false

const obj2 = obj; // no copia solo el valor como un duplicado en el objeto, sino que ambos objeto apuntan al mismo sitio de la memoria, el cambio que hago en uno se ve en el otro
console.log(obj2);

obj2.nombre = "Iñigo"
console.log(obj2.nombre); // Iñigo
console.log(obj.nombre); // Iñigo. Al asignar un objeto en otro, modifico la referencia en memoria, si cambio algo del objeto duplicado lo voy a cambiar en el objeto original

// los elementos primitivos, como los number, si hacen copia y los almecenan en otro espacio de memoria
let val1 = 4;
let val2 = val1;

val2 = 6;
console.log(val1); // 4
console.log(val2); // 6

//////////////

const obj3 = { ...obj }; // con spread operator no se asigna en dos objetos el mismo espacio en memoria

console.log(obj.nombre); // Iñigo
console.log(obj3.nombre); // Iñigo

obj3.nombre = "Gorka";
console.log(obj.nombre); // Iñigo
console.log(obj3.nombre); // Gorka

/////////////
// Cómo ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
  { titulo: "Lo que el viento se llevó", anyo: 1939 },
  { titulo: "Titanic", anyo: 1997 },
  { titulo: "Moana", anyo: 2016 },
  { titulo: "El efecto mariposa", anyo: 2004 },
  { titulo: "TED", anyo: 2012 }
]

console.log(listaPeliculas);
/*
[
  { titulo: 'Lo que el viento se llevó', anyo: 1939 },
  { titulo: 'Titanic', anyo: 1997 },
  { titulo: 'Moana', anyo: 2016 },
  { titulo: 'El efecto mariposa', anyo: 2004 },
  { titulo: 'TED', anyo: 2012 }
]
*/

// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL - para ordenar
listaPeliculas.sort((a, b) => a.anyo - b.anyo); // ordeno las peliculas por el año
console.log(listaPeliculas);
/*
[
  { titulo: 'Lo que el viento se llevó', anyo: 1939 },
  { titulo: 'Titanic', anyo: 1997 },
  { titulo: 'El efecto mariposa', anyo: 2004 },
  { titulo: 'TED', anyo: 2012 },
  { titulo: 'Moana', anyo: 2016 }
]
*/

// si lo quiero ordenar por titulo
listaPeliculas.sort((a, b) => a.titulo - b.titulo); 

/******* 7.3 Fechas en JavaScript ******/
const fecha = new Date(); // instancio la fecha actual
console.log(fecha); // 2022-10-23T19:05:30.601Z

// Atención - Los meses inicializan en 0 (0 - Enero, 11 - Diciembre)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192);
console.log(fecha2); // 1987-11-20T04:23:52.192Z

const fecha3 = new Date(-10000000000000); // Milisegundos desde el 1 de Enero de 1970
console.log(fecha3); // 1653-02-10T06:13:20.000Z

const fecha4 = new Date("October 13, 1979 12:15:15");
console.log(fecha4); // 1979-10-13T15:15:15.000Z

console.log(fecha < fecha2); // false

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192); // los dos primeros son obligatorios, el resto es opcional
console.log(fecha5); //  1987-11-20T04:23:52.192Z

console.log(fecha2 === fecha5) // ERROR - No se pueden comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()) // OK - Esta es la forma de comparar la igualdad entre fechas

/////// Obtener el día, el mes y el año de una fecha
// Obtener el día .getDate()
console.log(fecha2.getDate()); // 20

// Obtener el mes .getMonth() (0 - Enero, 11 - Diciembre)
console.log(fecha2.getMonth() + 1); // 11

// Obtener el año .getFullYear()
console.log(fecha2.getFullYear()); // 1987
console.log(fecha2); // 1987-11-20T04:23:52.192Z

// .toLocaleDateString
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("en-US")); // 11/20/1987

/***** 7.4 Uso de la consola en JavaSript ****/
// about: blank -> para poder utilizar JS en el navegador
// F12, inspeccionar, herramientas para desarrolladores > consola
// para que salga un cartel pidiendo un dato, y lo guardo en la constante edad
const edad = Number(prompt("Cual es tu edad?"));
console.log(edad); // puedo acceder al valor introducido, ingrasa como un STRING, por eso lo castee a un Number

/******* Ejercicio 1 ******/
// esta dentro de entregas > septima_entrega > conjuntos.js

/***** Ejercicio 2 ****/
// esta dentro de entregas > septima_entrega > objetos.js

/***** Ejercicio 3 ****/

/***** Ejercicio 4 ****/