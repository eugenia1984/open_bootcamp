# :star: 1. Introduccion a JavaSCript

---

## :star: 1.1 ¿ Que es JavaScript ?

- es un lenguaje **interpretado** (no necesita ser compilado). Es un "guion" que el interprete (el navegador) lo interpreta linea por linea. A diferencia de los lenguajes compilados que necesitan ser traducidos a lenguaje binario para que la maquina lo utilice, como es Java por ejemplo.

- inicialmente se creo para funcionar en cliente / navegador. Luego con Node.js se puede utilizar en el servidor.

- utilizado tipicamente para...

... hacer las webs interactivas

... crear apps webs.

... crear servidores web, apps mobiles, apps de escritorio, videojuegos, AI.

### ¿ Que es ECMAScript y que aporta?

Es una entidad estandizadora y reguladora, asi los navegadores pueden seguir dichos estandares. Antes en la gerra de los navegadores teniamos el inconveniente que algunas caracteristicas no funcionaban bien en algunos navegadores, cada uno hacia loq ue queria, ahora se estandarizo todo con FireFox, Chrome, Opera, Safari.

### Versiones actuales de ECMAScript mas empleadas al dia de hoy y su compatibilidad

ES6 fue la que marco una gran diferencia, es la version mas extendida entre los navegadores

### Plugins recomendados para el desarrollo de JavaScript en Visual Studio Code

- Prettiers, para formatear el codigo. -> SHIFT + ALT + F para ordenarlo

- Brackets  Pair Colorizer, para que me marque todos los pares de (), {} o [] que tengo, me ayuda mucho para ver donde se abre y se cierra ya que me las muestra de distintos colores.

- ES6 code snippets, ayuda a la hora de escribir codigo, son atajos.

- Ident Rainbow, pone colores por cada tab que use al identar, es util para funciones u objetos largo.

- Quokka, me hace como un sandbox y voy a ver por consola directo en el VSC. Nos ayuda a previsualizar lo que se ve en el navegador.

- Live Server, para
 
---

### :star: 1.2 Nodejs y NPM

#### ¿ Que es Nodejs ?

En 2009 Ryan Dahl crea Nodejs y permite que JavaScript se pueda ejecutar del lado del servidor.

#### ¿ Que es NPM ?

Node Package Manager, para gestionar los modulos (paquetes) que tengan que ver con el entorno de Nodejs

#### Intalacion de Nodejs y npm

[https://nodejs.org/en/](https://nodejs.org/en/) tenemos la version estable (LTS) y la ultima

Al instalar Nodejs tambien se nos instala npm

- ```node -v``` para ver la version que esta instalada y confirmo que quedo instalado

- ```npm -v``` para ver la version que esta instalada y confirmo que quedo instalado

---

## :star: 1.3 Promer proyecto Node 

- ```mkdir curso_javascript``` me creo una carpeta

- ```cd curso_javascript``` entro en la carpeta

- ``` mkdir primer_proyecto_js``` creo dentro otra carpeta

- ```cd mi_primer_proyecto``` entro a la carpeta

- ``` code .``` abre el proyecto en VSC

- Abro una terminal (CTRL + SHIFT + N) y creo mi proyecto de node con : ```npm init``` y voy respondiendo todas las preguntas para completar el package.json

- Una vez que tenemos el proyecto creamos nuestro archivo index.js y creamos nuestro primer hola mundo:

```Javascript
console.log("Hola mundo")
```

---
