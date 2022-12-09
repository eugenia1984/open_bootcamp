# :star2: Usando pre-procesadores CSS


---

## :book: Temas:

```
1 - Introducción a SASS
2 - Variables y mixins
3 - Importación de extensiones
4 - Instalación global SASS y use vs. important
5- Funciones en SASS
```

---

## :star: 1 - Introducción a SASS


:tv: -> [SASS](https://sass-lang.com/) es **css con superpoderes**.

SASS = Syntactically Awesome Style Sheet

-> Necesitamos un **pre-procesador** para que compile nuestro codigo y el navegador lo entienda. En las **extensiones de VSC** buscamos **Live Sass Compiler** y lo instalamos. Ahora ademas del live server vamos a ver el Live with Sass.

- **archivos .sass** es como el CSS pero sin las llaves y los puntos y comas, por ejemplo:

```
h1
  color: red
  background-color: green
```

- **archivos .csss**

---


## :star: 2 -Variables y mixins


- **mixins** para reutilizar el codigo, se definen con un ```@mixin nombre(variables) {}```.

Un ejemplo:

```SCSS
@mixin formato-texto($bg-color: #f1f1f1) {
  color: $text-color;
  width: 50rem;
  background-color: $bg-color;
}

h1 {
  margin: 0;
  @include: formato-texto(#f1f1f1);
}
```

Y ademas de pasarla la variable como un parametro le puedo dar un valor por defecto : ```($bg-color: #f1f1f1)``` asi de no pasarle el parametro, va a tomar el valor por default.

- Puedo **anidar** y acceder a las pseudoclases (con **&**), ejemplo en codigo:

```SCSS
ul {
  background-color: red;
  li {
    font-weight: bolder;
    &:hover {
      background-color: yellow;
    }
  }
}
```

- Ejemplos en código:

introsass.html
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Intro a SASS</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <h1>Este es el título</h1>
      <p>Este es un párrafo</p>
      <div class="listado">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <button class="btn">Botón de prueba</button>
      <button class="btn-2">Botón de prueba 2</button>
    </div>
  </body>
</html>
```

styles.scss
```SCSS
// Componentes
@use "sass/componentes";
// namespace 
// $color -> comp.$color

// Mixins
@use "sass/mixins";
// $color -> $color

// Estilos
@use "sass/estilos";

// Paginas
// página principal
// página de contacto
// página de aviso legal

// Otros
@use "sass/builtin";
```

styles.css
```CSS
.btn, .btn-2 {
  border: none;
  padding: 0.25rem 0.5rem;
  color: #2b2b2b;
}
.btn:hover, .btn-2:hover {
  background-color: cyan;
  color: red;
  cursor: pointer;
}

.btn-2 {
  margin: 0.5rem;
  border-radius: 0.25rem;
}

body {
  padding: 0;
  margin: 0;
}

.container {
  width: 100%;
  background-color: blanchedalmond;
  min-height: 100vh;
  padding: 0.5rem;
}

h1 {
  margin: 0;
  color: #2b2b2b;
  text-transform: uppercase;
  width: 50rem;
  background-color: #f1f1f1;
}

p {
  color: #2b2b2b;
  text-transform: uppercase;
  width: 50rem;
  background-color: #666666;
}

.listado {
  width: 10rem;
  background-color: aquamarine;
  padding: 0.5rem;
}
.listado ul {
  margin: 0 0.5rem;
}
.listado ul li {
  list-style: none;
}
.listado ul li:hover {
  color: white;
}

/*# sourceMappingURL=styles.css.map */
```

styles.css.map
```
{"version":3,"sourceRoot":"","sources":["sass/_componentes.scss","sass/_estilos.scss","sass/_mixins.scss"],"names":[],"mappings":"AAAA;EACI;EACA;EACA;;AAEA;EACI;EACA;EACA;;;AAIR;EAEI;EACA;;;ACbJ;EACI;EACA;;;AAGJ;EACI;EACA;EACA;EACA;;;AAGJ;EACI;ECZA,OAHS;EAIT;EACA;EACA,kBAJ4B;;;ADiBhC;EChBI,OAHS;EAIT;EACA;EACA,kBDc8B;;;AAGlC;EACI;EACA;EACA;;AAEA;EACI;;AAEA;EACI;;AAEA;EACI","file":"styles.css"}
```

---


## :star: 3 - Importación de extensiones

Todos los archivos con el nombre que comiencen con **_** van a ser componentes, un ejemplo en codigo:


_componentes.scss:
```SCSS
.btn {
    border: none;
    padding: 0.25rem 0.5rem;
    color: #2b2b2b;

    &:hover {
        background-color: cyan;
        color: red;
        cursor: pointer;
    }
}

.btn-2 {
    @extend .btn;
    margin: 0.5rem;
    border-radius: 0.25rem;
}
```

Y para poder utilizarlo lo **importo** en el archivo principal de SCSS:

styles.scss:
```SCSS
@import "componentes";
```

Al importarlo no se pone el _


_estilos.scss:
```SCSS
@use "mixins";

body {
    padding: 0;
    margin: 0;
}

.container {
    width: 100%;
    background-color:blanchedalmond;
    min-height: 100vh;
    padding: 0.5rem;
}

h1 {
    margin: 0;
    @include mixins.formato-texto();
}

p {
    @include mixins.formato-texto(#666666);
}

.listado {
    width: 10rem;
    background-color: aquamarine;
    padding: 0.5rem;

    ul {
        margin: 0 0.5rem;

        li {
            list-style: none;

            &:hover {
                color: white;
            }
        }
    }
}
```

_mixins.scss:
```SCSS
$text-color: #2b2b2b;

@mixin formato-texto($bg-color: #f1f1f1) {
    color: $text-color;
    text-transform: uppercase;
    width: 50rem;
    background-color: $bg-color;
}
```

-> Con el **@extend** es como en Java o JavaScript con la herencia, va a extender, por lo cual heredara las propiedades.

---


## :star: 4 - Instalación global SASS y use vs. important

- Desde 2019, hay una nueva versión de SASS y se usa el**use** 

- Para instalar SASS de forma global, primero debemos tener **Node.js** para poder utilizar **npm** e instalar SASS con: 

```npm install -g sass ``` (de forma global)

o sino ```npm install sass ```


- ```sass --watch styles.scss styles.css``` para por consola hacer correr el archivo de SASS

- Ahora en vez de utilizar **import** vamos a utilizar **use**, y nos va a crear un **namespace** (*espacio en memoria*), entonces lo usamos asi:

```
@use "sass/componentes" as comp;
// namespaces
// $color -> comp.$color
```

Con el **as** le puedo dar un alias.


---


## :star: 5- Funciones en SASS


En la documentación ya tenemos cierto **modulos pre-definidos** con funciones ya creadas, lo que nos facilita la utilización de SCSS.

_builtin.scss:
```SCSS
//// Funciones con cadenas de texto
@use "sass:string";
@use "sass:math";
@use "sass:list";
@use "sass:selector";
@use "sass:color";

@debug "hola";
@debug string.index("Helvetica Neue", "Neue");

$string: "Helvetica";
$newString: string.insert($string, " Bold", 10);

@debug $newString;
@debug string.length($newString);
@debug string.slice($newString, 5, 9);

@debug string.to-upper-case("Roboto Mono");
@debug string.to-lower-case("Roboto Mono");

@debug string.unique-id();

//// Funciones con números

@debug math.$e;
@debug math.$pi;

@debug math.floor(4.6);
@debug math.ceil(4.6);
@debug math.round(4.4);

@debug math.clamp(0, 256.36, 10);

@debug math.max(3, 4, 6, 399, 10, 2);
@debug math.min(3, 4, 6, 399, 10, 2);

@debug math.abs(8);
@debug math.abs(-8);

@debug math.pow(2, 12);
@debug math.pow(2, math.abs(-23));

@debug math.cos(math.$pi);
@debug math.sin(math.$pi);
@debug math.tan(math.$pi);

//// Funciones con listas
$lista1: 10px, 10px, 0px, 15px;

@debug $lista1;
@debug list.append($lista1, 25px, space);

$border-custom: solid 1px #ccc;
@debug list.index($border-custom, 1px); // 2
@debug list.index($border-custom, 2px); // null

// $border-2: [solid, 1px, #ccc];
// @debug list.is-bracketed($border-2);

@debug list.join($lista1, $border-custom, auto);
@debug list.length(list.join($lista1, $border-custom, auto));
@debug list.separator($border-custom);
@debug list.separator(list.join($lista1, $border-custom, auto));


@debug list.set-nth($border-custom, 2, 2px);

//// Funciones de selector
$selector-1: "a";
$selector-2: ".disabled";
@debug selector.append($selector-1, $selector-2);

//// Funciones de color

$color: rgb(226, 81, 255);
@debug color.adjust($color, $red: -50, $alpha: -0.5);
$color-2: rgb(176, 81, 255, 0.5);

@debug color.complement($color);
$color-comp: #6eff51;
@debug darken($color, 20%);
$color-dark: #c300ea;
@debug lighten($color, 20%);
$color-light: #f3b7ff;

@debug color.red($color);
@debug color.green($color);
@debug color.blue($color);

@debug color.hue($color);

@debug color.invert($color);
$color-inv: #1dae00;
```



---
