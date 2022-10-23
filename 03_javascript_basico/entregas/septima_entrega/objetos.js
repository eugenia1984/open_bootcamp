/************* Ejercicio 2 *********/

//Crea un archivo llamado objetos.js que contenga las siguientes líneas

// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const yo = {
  nombre: "maria",
  apellido: "Costa",
  edad: 38,
  altura: 1.62,
  erasDesarrollador: true
}

// Una variable que obtenga tu edad a partir del objeto anterior
const edad= yo.edad;
console.log(`Mi edad es: ${edad}`);

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const amigos = {};
// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
// const ordenadosPorEdad = amigos.sort((a, b) => a.edad - b.edad); 