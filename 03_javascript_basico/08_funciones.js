/************* Funciones  ************/

/********** 8.1 Introduccion a las funciones en JavaScript  ********/
// Qué son las funciones?
// son un bloque de codigo que se puede utilizar mas de una vez
const nom = "Maria Eugenia";

//cómo se declaran ?
// declaro a la funcion saludar
function saludar(nombre) { // recibe un parametro nombre
    console.log(`Hola ${nombre}`)
}

// cómo se utilizan ?
// invoco a la funcion
saludar(nom); // Hola Maria Eugenia

let nombre_2 = "Juan";
console.log(nombre_2); // Hola Juan

// nueva funcion despedir
function despedir(nombre) {
  nombre = "Diego"
  console.log(`Adiós ${nombre}`)
}
despedir(nombre_2); 
console.log(nombre_2); // Adios Juan

// nueva funcion saludarPersona
function saludarPersona(objeto) {
  objeto.apellido = "Villar"
  console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

let persona = { nombre: "Juan", apellido: "González" };
console.log(persona); // { nombre: 'Juan', apellido: 'González' }
saludarPersona(persona); // Hola Juan Villar
console.log(persona); // { nombre: 'Juan', apellido: 'Villar' }


saludar()

// funcion con parametro por defecto
function imprimeNumero(numero = 7) { // Parámetros por defecto
  console.log(numero)
}
imprimeNumero(); // 7

// funcion con spread operator en los params, cuando no se cuantos parametros tendre en total
function imprimir(...parametros) {
  console.log(parametros)
}
imprimir(1, 3, 9, 2, "hola", { id: 9 }); // [ 1, 3, 9, 2, 'hola', { id: 9 } ]

// otra funcion con spread operator en los params
function suma(...nums) {
  return nums.reduce((a, b) => a + b); // con el reduce voy a ir sumando todos los valores
}
const s = suma(1, 2, 3, 4, 9, 15, 16);
console.log(s); // 50

// Ambito de las variables
let variable = "hola"

function multiplicar(a = 0, b = 0) {
  // todo lo que defina dentro estara dentro del ambito de la funcion
  console.log(variable);
  let variable_interna = "adiós"
  console.log(variable_interna)
  return a * b
}
// no puuedo hacer console.log(variable_interna), no puedo acceder desde fuera de la funcion a una variable declarada dentro de la funcion
console.log(multiplicar(4, 9));
/*
hola
adiós
36
*/

/*********** 8.2 Funciones de tipo flecha y anonimas ********/
const array = [1, 5, 6, 2, 7, 12, 8, 92];

const array2 = array.map((valor) => valor * 2);
console.log(array2);// [ 2, 10, 12,   4, 14, 24, 16, 184]


// Como la arrow function tiene un solo segmento va sin las {} y con el return explicito
// const dobleDelValor = valor => {
//   return valor * 2
// }
const dobleDelValor = valor => valor * 2; // arrow function ANONIMA

console.log(doble(6)); // 12 hay HOISTING porque lo tengo declarado con function
console.log(dobleDelValor(6)); // 12 solo se puede acceder si antes ya fue declarada, no hay hoisting

const array3 = array.map(dobleDelValor);
console.log(array3); 

function doble(valor) {
  return valor * 2
}

/********** 8.3 Carga y sobrecarga de funciones ********/
function saludar() {
  hola()
}

function hola() {
  console.log("Hola! Soy la función hola()")
}

saludar(); // Hola! Soy la función hola()

/// 1. carga la funcion global()
/// 2. saludar() sobre la funcion global()
/// 3. hola() saludar() la funcion global()
/// termina con la funcion hola, y la saca del stack (de la pila)
/// 4. saludar() la funcion globalglobal()
/// termina con la funcion saludar y la saca del stack (la pila)
/// 5. funcion global()

/// Stack overflow -> en las funciones recursivas, que por un error queda en un loop infinito

// function recursivo() {
//     recursivo()
// }

// recursivo()

/********** 8.4 Funciones asincronas y promesas ********/
function miAsinc() {
  // Hace una llamada a una base de datos externa
  // Puede darnos algún error y tardar algo de tiempo
}

// la PROMISE tiene un CALLBACK que recibe dos parametros RESORLVE y REJECT
const miPromesa = new Promise((resolve, reject) => {
  const i = Math.floor(Math.random() * 2)
  // Si está todo correcto
  if (i !== 0) {
      resolve()
  } else {
      reject()
  }
})

// consumo la promesa, la ejecuto con .THEN(), si no se ejecuta de forma correcta tengo le REJECT que lo manejo (gestiono el error) con .CATCH() 
miPromesa
  .then(() => console.log("Se ha ejecutado de forma correcta"))
  .catch(() => console.log("ERROR"))
  .finally(() => console.log("Yo me ejecuto siempre")) // se ejecuta siempre, ya sea que tuve un resolve o un reject

// async await es otro modo de manejar las promesas

/***** 8.5 Funciones generadoras ********/
function* generaId() {
  let id = 0;
  while(true) {
    id++
    if (id === 10) {
        return id
    }
    yield id // Esperando hasta que se vuelva a llamar
  }
}

const gen = generaId();
// gen es un object GENERATOR por lo cual tengo le metodo .next(), nos devuelve un objeto y con .VALUE() accedemos a su valor
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

/***** Ejercicio ********/