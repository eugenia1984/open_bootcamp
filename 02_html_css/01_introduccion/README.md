# :star2: 1 - Introduccion a HTML

---

##:book: Temas

```
1 - Introducción a HTML
2 - IDE y Extensiones
3 - Mi primera página web
4- Etiquetas más utilizadas
5 - Ejercicio de práctica
```

## :star: 1 - Introducción a HTML

### ¿Qué es HTML ?


HTML es HyperText Markup Language (Lenguaje de Marcado de HiperTexto), el hipertexto es una forma de navegar a través de diferentes enlaces -> navegar en la web.

No es un lenguaje de programación, es un lenguaje de etiquetado. No lleva lógica, es la estructura semántica de una página web.



### Breve introducción a la historia y versión actual

Es un standar que surgió en 1991  al día de hoy está mantenido por la W3C (World Wide Web Consortium), la organización que mantiene los estándares de HTML, lo que deben complir los navegadores.

Actualmente tenemos la version HTML5.

Compatibilidad con navegadores en [can I use](https://caniuse.com/) y [html5 test](https://html5test.com) que testea el navegador y me da una puntuación, igualmente siempre habrá alguna cosa que tal vez el navegador no lo soporte.



### :star: Etiquetas y atributos

Las etiquetas van entre ```<>```, todas las etiquetas tienen etiquetas de cierre, algunas tienen etiqueta de apertura y de cierre y otras tienen etiquetas que se autocierran (como las **meta** o **img**).

Ejemplo de codigo:

```
<!DOCTYPE html> <!-- me indica que es HTML version 5-->
<html>
  <head>
    <title>My first document</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <p>Hey!</p>
  </body>
</html>
```


### :star: 2  -  IDE y extensiones


El IDE (Integrated Development Enviroment / Entorno de Desarrollo Integrado) más recomendado en el **VSC** (¿Qué es HTML ?isual Studio Code).

Para instalarlo desde [code.visualstudio.com](https://code.visualstudio.com), detecta en que plataforma estás (Windows, Mac, Linux), se istala para poder utilizar.

Atajos en Windows:

```Ctrl+N``` para abrir un nuevo documento

**Plugins** (*extnsiones*) recomendados:

- *Open in Browser*, es similar al *Live Server*

- HTML End Tag Labels

- Auto Rename Tag, si voy a renombrar la etiqueta de apertura se me va a cambiar la tiqueta de cierre.

- Ident Rainbow, voy a ver las tabulaciones con distintos colores

- Live Server, lanza un servidor local de desarrollo con una carga en vivo, escucha continuamente los cambios y va actulizando lo que se renderiza en el navegador.

- Prettier, para dejar todo bien organizado, identa bien las cosas


### :star: 3 -  Mi primera pagina web

```
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi primera pagina html</title>
</head>
<body>
  <p>Hola mundo!</p>
  <p>Bienvenidos a mi primer práctica</p>
</body>
</html>
```

En el **head** van las meta etiquetas y los links a css y otras cosas que utilizo, todo eso no es visualizado en el navegador, lo unico que se ve es el **title**. Toda esta información ayuda a posicionarnos para el SEO, para el posicionamiento orgánico

En el **Body** va todo lo que si se renderiza y ve en el mavegador.


--->>> Podés ver la práctica en el archivo **mi-primera-pagina-web.html**


### :staR: 4 -  Etiquetas más utilizadas

Una de las más utilizada es ```<div></div>``` que nos ofrece dividir el cósigo. Pero no hay que abuzar de los div ya que contamos con etiquetas semánticas como : ```<header>```, ```<nav>```, ```<section>```, ```<aside>```, ```<footer>```.

Los encabezados van del nivel 1 al 6, solo podemos tener un solo encabezado de nivel 1, dle resto podemos tener la cantidad que queramos. ```<h1>```, ```<h2>```, ```<h3>```, ```<h4>```, ```<h5>```, ```<h6>```.

Para textos tenemos los parrafos con la etiqueta ```<p>``` y tenemos los ```<span>``` que son bloques de texto que no son parrafos en si mismos.

Tenemos la posibilidad de tener enlaces ```<a>``` (anchor / ancla) que tiene el atributo **href** hacia donde me va a llevar el enlace. Hay dos tipos de enlaces: 

**interno** hacia la misma web, ejemplo:

```<a href="#">click aca</a>```
**externo** hacia otra web, ejemplo:

```<a href="https://google.com" target="_blank" rel="noopener noreferrer">google.com</a>```

También tenemos las **listas** que pueden ser:

```<ul>``` **unorderer list** (desordenadas)

```<ol>``` **orderer list** (ordenadas)

Y para nombrar a los items que pertenecen a la lista utilizamos ```<li>``` (**list items**)


Los etiquetas pueden tneer distintos atributos, van a depender de la etiqueta que utilicemos, pero para nombrar algunos: **href**, **src**, **id**, **alt**, **class**.

--->>> Podés ver la práctica en el archivo **etiquetas-habituales.html**


---
---

###  :star: 5 - Ejercicio


Duración aproximada: 5min

Enunciado del ejercicio:

```
- Crea un nuevo documento HTML e implementa lo siguiente:

-Utiliza la etiqueta de título para poner en el título "Ejercicio de Introducción a HTML en OpenBootcamp"
-Dentro de la etiqueta body pon un comentario de dos líneas
 -Este es mi primer comentario de dos líneas
 -Aprendiendo a documentar mi código con OpenBootcamp
-Crea una lista desordenada de tus tres vídeos de Youtube favoritos, siguiendo las siguientes pautas:
 -Cada elemento de la lista tiene que ser un enlace
 -El texto del enlace debe ser el título del vídeo
```

- Cuando comiences el ejercicio se te mostrarán las especificaciones para la realización y entrega del mismo. La entrega del ejercicio deberá realizarse a través de una carpeta .zip empaquetada o un enlace al repositorio del ejercicio en GitHub.


- Una vez le des al botón de comenzar ejercicio el tiempo del que dispones para realizarlo empezará a contar.


- Asegúrate de tener todo lo que necesites preparado ya que una vez se acabe el tiempo si no has realizado la entrega esta contará como no superada.


-->>> Lo podes ver en el archivo **practica.html**

---