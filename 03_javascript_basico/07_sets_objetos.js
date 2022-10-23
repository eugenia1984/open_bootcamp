/***** Sets y Objetos ****/

/***** 7.1 Trabajando con Sets  ****/
// Sets o conjuntos (en castellano)
const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", { id: 5 }, "hola"]

const miSet = new Set(array)

console.log(array)
console.log(miSet)

// .add()
miSet.add(9)
console.log(miSet)
miSet.add(4)
console.log(miSet)

// .delete()
miSet.delete("hola")
console.log(miSet)

// .clear()
// miSet.clear()
// console.log(miSet)

// .has()
// console.log(array.includes(2))
console.log(miSet.has(40))

// .size
console.log(miSet.size)

miSet.forEach(valor => {
    console.log(valor)
})

const it_miSet = miSet.values()
console.log(it_miSet)

const ar_miSet = [ ...miSet ]
console.log(ar_miSet[1])

/***** 7.2 Objetos en JavaScript ****/
// Trabajando con Objetos
const obj = {
  id: 4,
  nombre: "Juan",
  apellido: "González",
  isDeveloper: false,
  libros_favoritos: ["El método", "El código de la manifestación"],
  "4-juegos": [1, 2, 3, 4]
}

console.log(obj.id)
console.log(obj["4-juegos"])

const prop = "isDeveloper"
console.log(obj[prop])

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Iñigo"
console.log(obj2.nombre)
console.log(obj.nombre)

let val1 = 4
let val2 = val1

val2 = 6
console.log(val1)
console.log(val2)

//////////////

const obj3 = { ...obj }

console.log(obj.nombre)
console.log(obj3.nombre)

obj3.nombre = "Gorka"

console.log(obj.nombre)
console.log(obj3.nombre)

/////////////
// Cómo ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
  { titulo: "Lo que el viento se llevó", anyo: 1939 },
  { titulo: "Titanic", anyo: 1997 },
  { titulo: "Moana", anyo: 2016 },
  { titulo: "El efecto mariposa", anyo: 2004 },
  { titulo: "TED", anyo: 2012 }
]

console.log(listaPeliculas)
// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL

listaPeliculas.sort((a, b) => a.anyo - b.anyo)

console.log(listaPeliculas)

/***** 7.3 Fechas en JavaScript ****/
const fecha = new Date()

console.log(fecha)

// Atención - Los meses inicializan en 0 (0 - Enero, 11 - Diciembre)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192)

console.log(fecha2)

const fecha3 = new Date(-10000000000000) // Milisegundos
console.log(fecha3)

const fecha4 = new Date("October 13, 1979 12:15:15")
console.log(fecha4)

console.log(fecha < fecha2)

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192)
console.log(fecha5)

console.log(fecha2 === fecha5) // ERROR - No se pueden comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()) // OK - Esta es la forma de comparar la igualdad entre fechas

/////// Obtener el día, el mes y el año de una fecha
// Obtener el día .getDate()
console.log(fecha2.getDate())

// Obtener el mes .getMonth() (0 - Enero, 11 - Diciembre)
console.log(fecha2.getMonth() + 1)

// Obtener el año .getFullYear()
console.log(fecha2.getFullYear())

console.log(fecha2)

// .toLocaleDateString
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("en-US"))

/***** 7.4 Uso de la consola en JavaSript ****/

/***** Ejercicio 1 ****/

/***** Ejercicio 2 ****/

/***** Ejercicio 3 ****/

/***** Ejercicio 4 ****/