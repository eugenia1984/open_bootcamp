/********* Gestion de errores *******/

/*********** 9.1 Errores en JavaScript *********/
const miFuncion = val => {
  if (typeof val === "number") {
      return 2 * val
  }
  throw new Error("El valor debe ser de tipo número")
}

// const elDoble = miFuncion("a1a")
const numero = "8";

try {
  // Código que puede fallar
  console.log("Está ejecutándose de manera correcta")
  const doble = miFuncion(numero)
  console.log(doble)
} catch (e) { // capturo el error
  // En caso de fallar, quiero que ejecutes
  console.error(`El valor de e es: ${e}`)
  console.error("ERROR!")
} finally { // se ejecuta siempre, tenga errores o no 
  console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno")
}

/*
Está ejecutándose de manera correcta
El valor de e es: Error: El valor debe ser de tipo número
Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno
ERROR!
*/

// Algunos de los errores mas comunes:
// InternalError : como el ejercicio de recursividad que genera un loop infinito
// SyntaxError: por errores de sintaxis
// TypeError; una funcion espera un boolean y le pasamos un number, por ejemplo
// RangeError : accedemos a una posicon fuera del rango, por ejemplo tengo un array de 10 elementos y quiero ir al index 1o
// ReferenceError: cuand quiero acceder a alguna variable que todavia no esta definida

// Referencia de MDN
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error

/*********** 9.2 Gestion de logs en Nodejs *********/
// con npm init -y inicializo un nuevo proyecto  
// lo ven en sesion-09-gestion-errores
// utilice la libreria winston para tener un buen manejo de los logs
// https://www.npmjs.com/package/winston
// instalacion -> npm i winston
// format -> tiene varios formatos para trabajar: json, gechas, formatos customizados, etc
// transports  -> todas las acciones que se van a ejecutar cada vez que haya un log. Se pueden guardar en ficheros, se puede hacer una llamada a una APi, etc.

// Los console mas utilizados
console.log("Hola estoy saliendo por pantalla");
console.info("Hola, esto es un mensaje informativo");
console.warn("Esto es un mensaje de advertencia");
console.error("Esto es un mensaje de error");
console.debug("Esto es un mensjae de debug");

/*********** Ejercicio *********/
// Crea un nuevo proyecto de Node
// Instala la dependencia Winston
//  En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
// Registra el error en un archivo a través de un try...catch