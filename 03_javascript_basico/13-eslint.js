/**** Qué es el linting y ESLint ***/
// para tener consistencia en el codigo, teniendo standares predefinidos: cuantos lugares en las tabulaciones, pongo o no pongo el ";", uso comillas dobles o simples.
// tener cuidado con los console.log, los puedo usar para ir probando, pero luego debo sacarlos
// Esta la libreria: https://eslint.org/
// Extension de VSC : ESLint
const nombre = "Eugenia"
const nombre2 = "Maria"

// Extension de VSC: Error Lens, me paro donde me marca el error asi veo el mensaje y lo corrijo

/******* Instalación y creación de ficheros de configuración personalizados *******/

// En un proyecto de Nodejs se instala, tenemos dos modos: 
// > npm install eslint --save-dev  
// > npm install -D eslint  (D : developer, solo se ejectan en desarrollo, las devDependencies) 

// > npm init @eslint/config
// viene preguntas: 
// ¿Como lo queremos utilizar? elegimos el 3ro 
// ¿Que framework usamos?
// ¿Donde se ejecuta? node
// se pueden usar unas guias de estilos populares, como la de airbnb, o sino armamos la nuestra
// si hacemos la nuestra: JSON / comillas / puntos y comas, etc.
// se me crea el .eslintc.json