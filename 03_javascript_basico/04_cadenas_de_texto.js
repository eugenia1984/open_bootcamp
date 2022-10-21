/***** Cadenas de texto****/

/***** Tipos de declaracion de strings y cuando utilizarlos ****/
// Declarando con comillas simples
let str_single = 'Hola soy un texto con comillas simples';
// Declarando con comillas dobles
let str_double = "Hola soy un texto con comillas dobles";
// Lo importante es que empiece y termine con la msima, y tener cohesion a lo largo de todo el proyecto, siempre usar simples o dobles, no ir variando.
console.log(str_single);
console.log(str_double);

let str_comillas = "El otro día me dijo literalmente \"ve a sacar la basura\""
let str_comillas_simples = 'El otro día me dijo literalmente "ve a sacar la basura"'
let str_comillas_dobles = "El otro día me dijo literalmente 've a sacar la basura'"
let str_comillas_simples_2 = 'El otro día me dijo literalmente \'ve a sacar la basura\''

console.log(str_comillas)
console.log(str_comillas_simples)
console.log(str_comillas_dobles)

/// Comillas invertidas (backticks)
let str_backticks = `Hola esto es un string con backticks`
console.log(str_backticks)

let nombre = "Euge"
let saludo = `Hola, ${nombre} bienvenida`
console.log(saludo)

// Plantillas HTML
let plantilla = `
<html>
  <h1>Página web de ${nombre}</h1>
  <p>Este es un párrafo</p>
</html>
`;
console.log(plantilla);

// Introducción de variables en html
let libros = ["Empieza por el por qué", "El monje que vendió su Ferrari", "El poder del ahora"]

/***** Metodos mas comunes de los strings ****/
// Cómo obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length)

// Obtener partes de cadenas de caracteres
// slice() 
let slice_str = str.slice(5, 10)
console.log(slice_str)
// substring()
let substring_str = str.substring(5, 10)
console.log(substring_str)
//  substr() esta deprecado
let substr_str = str.substr(5, 10)
console.log(substr_str)

// Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Euge"
console.log(cadena)

// Al utilizar strings sólo reemplaza la primera instancia
console.log(cadena.replace('Gorka', 'Miguel'))

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

// Al utilizar strings sólo reemplaza la primera instancia
console.log(texto_largo.replace('los', 'cinco'))
/*
Tito no es un mono cualquiera. A Tito no le gusta trepar por cinco árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.
*/
// Al utilizar la expresión regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/los/g, 'cinco'))
/*
Tito no es un mono cualquiera. A Tito no le gusta trepar por cinco árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de cinco árboles.
*/

/***** Manipulación de cadenas de texto ****/
let input = "ESCORpio"
let db = "escorpio"

// toLowerCase() - toUpperCase()
console.log(input.toLowerCase()); // escorpio
console.log(input.toLocaleLowerCase()); // escorpio para lenguajes con signos raros en ASCCI como el turco, por ejemplpo
console.log(input.toUpperCase()); // ESCORPIO
console.log(input.toLowerCase() === db.toLowerCase()); // true
console.log(input.toUpperCase() === db.toUpperCase()); // true

// Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."

console.log(str_1.concat(" ", str_2)); // Hola soy la primera cadena. Y yo soy la segunda cadena.
console.log(str_1 + " " + str_2); // Hola soy la primera cadena. Y yo soy la segunda cadena.
// hay que tener cuidado la utilizar el + porque si hay algun number puedo concatenar o sumar acorde al orden en que este
console.log(`${str_1} ${str_2}`); // Hola soy la primera cadena. Y yo soy la segunda cadena.

// Eliminar espacios al inicio y al final
let str_3 = "    Hola soy un string con espacios al final.   "
console.log(str_3.length); // 48
// trim()
console.log(str_3.trim().length); // 41 elimina los espacios al principio y al final
console.log(str_3.trimStart().length); // 44 elimina los espacios al principio
console.log(str_3.trimEnd().length); // 45 elimina los espacios al final

// Obtener el caracter que hay en cierta posición
let str_4 = "Hola soy el string número 4"; // ["H", "o", "l", "a", " ", "s"........]
console.log(str_4.charAt(5)); // s
console.log(str_4[5]); // s tratandolo como un array

// Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Eugenia y me gusta el surf. Mi nombre es Eugenia y mi apellido es Costa"
console.log(str_5.indexOf("Eugenia")); // la posicion de la primer instancia que encuentra
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Eugenia")); // la posicion de la ultima instancia que encuentra

/***** Expresiones regulares y metodos de busqueda de cadenas ****/
// https://regexr.com
let texto_largo2 = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

console.log(texto_largo2.match(/no/g)); // con la g encuentra la primera y continua buscando no se corta al encontrar la primera

// ¿Existe la palabra dentro del texto?
console.log(texto_largo2.includes("terremoto")); // false porque no lo incluye

// Saber si un texto empieza con una palabra
console.log(texto_largo2.startsWith("Tito no es un mono")); 

// Saber si un texto termina con otra palabra
console.log(texto_largo2.endsWith("árboles."));

/***** Ejercicio ****/
// Crea un archivo JS que contenga las siguientes líneas
// Una cadena de texto con tu Nombre
let firstName = "Maria Eugenia";
console.log(`firstName: ${firstName}`);
// Otra cadena de texto con tu Apellido
let lastName = "Costa";
console.log(`lastName: ${lastName}`);
// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medio
let estudiante = `${firstName} ${lastName}`;
console.log(`estudiante: ${estudiante}`);
// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(`estudianteMayus: ${estudianteMayus}`)
// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLocaleLowerCase();
console.log(`estudianteMinus: ${estudianteMinus}`)
// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let cantidadCaracteres = estudiante.length;
console.log(cantidadCaracteres);
// Una variable que contenga la primera letra del Nombre
let firstLetter = estudiante.charAt(0);
console.log(firstLetter)
// Otra variable que contenga la última letra del Apellido
let lastLetter = lastName[lastName.length-1];
console.log(lastLetter);
// Una cadena de texto que elimine los espacios de la variable "estudiante"
let estudianteTrim = estudiante.trim();
console.log(estudianteTrim);
// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let hasFirstName = estudiante.includes("Maria Eugenia");
console.log(`El nombre esta contenido en estudiante?: ${hasFirstName}`)
