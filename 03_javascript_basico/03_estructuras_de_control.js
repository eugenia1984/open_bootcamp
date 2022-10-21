/******* 03 - ESTRUCTURAS DE CONTROL ******/

/***** 3.1 Bifurcaciones: if, else, switch *****/
// Bifurcaciones if...else, si cumple con la primer condicion ejecuta el bloque de codigo dentro del if, sino para al bloque de codigo del else y ejecuta ese
// Hacemos un ejemplo simulando un cajero, para ver acorde a nuestro saldo si podemos sacar plata
let saldo = 50;
let efectivo = 100;

if (efectivo < saldo) {
  console.log("Puedes sacar dinero")
}

if (efectivo < saldo) {
  console.log("Puedes sacar dinero")
} else {
  console.log("Saldo insuficiente")
}

// If else + if else
let nota = 200;

if (nota === 5) {
  console.log("Enhorabuena, has obtenido un sobresaliente");
} else if (nota === 4) {
  console.log("Buen trabajo, pero podrías haberlo hecho mejor");
} else if (nota === 3) {
  console.log("Has obtenido un suficiente");
} else if (nota === 2) {
  console.log("No has aprobado por poco");
} else if (nota === 1) {
  console.log("No has estudiado nada, trabaja un poquito más para la próxima");
} else {
  console.log("Error, introduce una nota entre el 1 y el 5");
}

// Sentencias Switch
nota = 3;

switch (nota) {
  case 5:
    console.log("Buen trabajo, ¡sobresaliente!");
    break;
  case 4:
    console.log("Buen trabajo, pero podrías haberlo hecho mejor");
    break;
  case 3:
    console.log("Has obtenido un suficiente");
    break;
  case 2:
    console.log("No has aprobado por poco");
    break;
  case 1:
    console.log("No has estudiado nada, trabaja un poquito más para la próxima");
    break;
  default:
    console.log("Error")
    break;
}

/***** 3.2 Comparaciones en JavaScript *****/

// Igualdad
if (5 == 5) {
  console.log("5 es igual a 5")
}

if (5 === 5) {
  console.log("5 es muy igual a 5")
}

let a = 5;
console.log(typeof a)
let b = "5";
console.log(typeof b)

// == sólo compara el valor
// === compara el valor y el tipo
if (a == b) {
  console.log("a es igual a b - Débil")
}

if (a === b) {
  console.log("a es igual a b - Fuerte")
}

let c = 4;
let d = "4";

if (c != d) {
  console.log("c es diferente a d - Débil")
}

if (c !== d) {
  console.log("c es diferente a d - Fuerte")
}

// Comparaciones mayor que y menor que
let max = 10;
let min = 5;

if (max > min) {
  console.log("max es mayor que min")
}
if (max >= 10) {
  console.log("max es mayor o igual que min")
}

if (min < max) {
  console.log("min es menor que max")
}

if (min <= max) {
  console.log("min es menor o igual que max")
}

/***** 3.3 Bucles for y While *****/

// Bucles FOR
// i = i + 1
// i += 1
// i++

for (let i = 0; i < 10; i++) {
  console.log(i) // Esto es el bucle
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i] * 2)
}

// Estructura for...of
for (let valor of lista) {
  console.log(valor)
}

// Estructura forEach
lista.forEach(valor => {
  console.log(valor)
})

// Estructura for...in
let persona = {
  nombre: "Gorka",
  apellido: "Villar",
  edad: 34,
  isDeveloper: true
}
console.log(persona.nombre)

let prop = "edad";
console.log(persona[prop])

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad])
}

// Bucles WHILE
let i = 0;
let maximum = 10;
while (i < maximum) {
    console.log(i);
    i++;
}

i = 15;
// Do...while
do {
    console.log("Estoy en el do while")
} while (i < maximum)

/***** 3.4 Formas de controlar los bucles con continue y break *****/
// Casos muy específicos - break, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] === 3) {
    continue;
  }
  let j = 50;
  const k = 100;
  console.log(lista[i]);
  console.log(j);
  console.log(k);

  if (lista[i] > 5) {
    break;
  }
}


// Cuál es el ámbito de un bucle
console.log(k);
console.log(i);
console.log(j);

/***** 3.5 Etiquetas en los bucles *****/
let unidades = 0
let decenas = 0

bucleDecenas: while (true) {
  bucleUnidades: while (true) {
    console.log(`El número actual es: ${decenas}${unidades}`)
    unidades++
    if (unidades === 10) {
      unidades = 0
      break bucleUnidades
    }
    if (decenas === 2) {
      break bucleDecenas
    }
  }
  decenas++
}
console.log("Ya hemos terminado")

/***** Ejercicio *****/