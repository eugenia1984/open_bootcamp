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
// Hay tres formas de definir las variables: var(tienen un scoope global), let(tienen un scoope local, existen en el ambito dentro del cual son declaradas) y const(estas en realidad son constantes, no varian)
// Las variables pueden primero ser declaradas y luego asignarle el valor, o hacer ambas cosas juntas
let variable = 1;
console.log(`variable: ${variable}`); // 1
variable = 2; // modifico el dato que guarda (su valor)
console.log(`variable: ${variable}`); // 2
const hola = "Hola soy una constante";
// hola = "Chau"; me da error, no puedo redefinir una constante
// Las constantes deben declararse y asignarse el valor, todo al mismo tiempo

// Ejemplo con VAR
var variable2 = "Hola soy una variable VAR";

for (var i = 0; i < 3; i++) {
  var variable2 = "Soy la segunda variable"
}
// Mi ciclo for me va a cambiar al definicion de la cariable
console.log(variable2); //  "Soy la segunda variable"

// Ahora lo comparamos con LET
let variableLet = "Hola soy una variable LET";

for (var i = 0; i < 3; i++) {
    let variableLet = "Soy la segunda variable LET";
}
// No se me reescribe, ya que la otra existe sol odentro del for, pero no es buena practica nombrar a dos variables iguales, es mejor que dentro del for tenga otro nombre
console.log(variableLet);  // "Hola soy una variable LET";

// con typeof podemos saber de que tipo son
let numero3 = 3;
console.log(typeof numero3); // Number
let cadena2 = "Euge";
console.log(typeof cadena2); // String

/****** 2.3 Notacion en JavaSCript **********/

// ; -> Delimitar el final de una línea
const b = 4;
b + 4;

// [] -> listas, arreglos o arrays
const ar = [1, 2, 3, 4]
console.log(ar[2])

// () -> Funciones
function suma(a, b) {
  return a + b;
}

// {} -> Llaves para objetos, funciones y estructuras de control
const movil = {
  anchura: 5,
  altura: 10
}

// . -> Se utiliza en los objetos para acceder a los atributos se le dice DOT NOTATION
// movil.anchura
console.log(movil.anchura); // 5

if (true) {
  const constante2 = "hola" // si la condicion es true se ejecuta esta linea
}

/****** 2.4 Listas, Objetos y Fechas en JavaScript**********/