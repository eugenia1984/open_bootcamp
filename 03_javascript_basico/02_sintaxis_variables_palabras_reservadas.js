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

// [] -> listas, arreglos o arrays. En ingles se le dice square brackets
const ar = [1, 2, 3, 4]
console.log(ar[2])

// () -> Funciones
function suma(a, b) {
  return a + b;
}

// {} -> Llaves para objetos, funciones y estructuras de control. En ingles le dicen curly brackets.
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
// Lista - Array - Arreglo
// es un conjunto de variables, guarda de todo los tipos
const lista = [1, "hola", true, undefined, null, ["a", "e", "i", "o", "u"]];
// este modo es viejo de crear nuevos arrays, ahora es directamente con []
const lista2 = new Array(2, "chau")
const lista3 = new Array(5); // digo que v aa tener 5 items

// Objeto
// los objetos son representaciones de la vida real, tienen atributos y metodos
const rectangulo = {
  base: 5,
  altura: 2,
  estaLleno : true,
  // un metodo
  calcularPerimetro: function calcularPerimetro(base, altura) {
    return base * 2 + altura * 2;
  },
  // funcion constructora
  constructor: function rectangulo(base, altura, estaLleno) {
    this.base = base;
    this.altura = altura;
    this.estaLleno = true; // en este caso ya lo inciializo en true
  }
}
// si por alguna necesidad mis key tiene mas de una palabra y las quiero separa con - debo agregar las "", por ejemplo "esta-lleno"
// si bien movil es constante, si puedo modificar sus atributos
rectangulo.base = 8; // modifico el valor del atributo

// Fecha
// MomentJs es una de las librerias que te ayudan a trabajar con fechas
// declaro una nueva fecha, hay varios constructores
// en la fecha en que se crea
const ahora = new Date(); 
// usando milisegundos
const fecha_milis = new Date(10); // Thu Jan 01 1970 01:00:00
// usando un string, debe estar en ingles
const fecha_cadena = new Date("march 25 2020"); // Wed Mar 24 3030
// usando valores (año, mes, dia) tener en cuenta que enero es el mes 0
const fecha_valores = new Date(2022, 0, 15); // Sat Jan 15 2022
//
const dia = ahora.getDate(); 
const mes = ahora.getMonth() + 1;  // porque los meses empiezan en 0
const anio = ahora.getFullYear();

/****Ejercicio *****/
/*
Duración aproximada: 5min

Enunciado del ejercicio:
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/
const fecha_de_nacimiento = new Date(1984, 8, 11); // Sat Jan 15 2022
const libroFavorito = {
  titulo: "El tunel",
  autor: "Ernesto Sabato",
  fecha: new Date(2022, 9, 20),
  url: "https://www.ingenieria.unam.mx/dcsyhfi/material_didactico/Literatura_Hispanoamericana_Contemporanea/Autores_S/SABATO/El.pdf"
}
const Eugenia = ["Maria Eugenia", 38, true, fecha_de_nacimiento, libroFavorito];