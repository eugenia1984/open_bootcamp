/****** 2.1 Tipado en JS y tipos primitivos **********/
/* TIPADO INFERIDO
El tipo de la variable se define en el moemnto en que el interprete interpreta al variable, no es necesario como en Java definir el tipo de dato que alamcena la variable al declararla, antes de asignarle un valor
La ventaja: da mas libertad
La desventaja: el compilador no da error al asignar una variable de otro tipo (si necesitamos que una variable sea Number pero me llega un String no me va a advertir de ese error)
*/

/*** Tipos en JavaScript : Primitivos ***/
// Number: todos los numeros, ya sean enteros o decimales
let numero1 =1;

// String: cadena de caracteres.
let cadena ="Soy una cadena de caracteres";

// Boolean : pueden ser true o false
let verdadero = true;
let falso = false;
// se usa para evaluar condiciones
if (true) {
  console.log("cumple")
} else {
  console.log("no cumple")
}

// Null : se asigna a una variable un espacio vacio en memoria
let nulo = null;

// Undefined : la variable esta indefinido, no esta asignado a ningun lugar ne memoria.
let indefinido;

// null, undefined, false, 0 ==> Todas son Falsy
console.log(null === undefined)



/*** Tipos en JavaScript : Objetos ***/
// Pueden ser arrays (arreglos), objetos (objects) 


/****** 2.2 Declaracion de variables y escritura dinamica **********/

/****** 2.3 Notacion en JavaSCript **********/

/****** 2.4 Listas, Objetos y Fechas en JavaScript**********/