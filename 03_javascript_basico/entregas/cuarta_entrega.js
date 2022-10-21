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

