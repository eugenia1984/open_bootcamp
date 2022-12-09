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


- 

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

---


## :star: 4 - Instalación global SASS y use vs. important

---


## :star: 5- Funciones en SASS

---
