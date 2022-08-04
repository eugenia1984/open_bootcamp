# Unidad 2 : HTML y CSS

---


## :star: 1 - Introduccion a HTML

### ¿Qué es HTML ?


HTML es HyperText Markup Language (Lenguaje de Marcado de HiperTexto), el hipertexto es una forma de navegar a través de diferentes enlaces -> navegar en la web.

No es un lenguaje de programación, es un lenguaje de etiquetado. No lleva lógica, es la estructura semántica de una página web.



### Breve introducción a la historia y versión actual

Es un standar que surgió en 1991  al día de hoy está mantenido por la W3C (World Wide Web Consortium), la organización que mantiene los estándares de HTML, lo que deben complir los navegadores.

Actualmente tenemos la version HTML5.

Compatibilidad con navegadores en [can I use](https://caniuse.com/) y [html5 test](https://html5test.com) que testea el navegador y me da una puntuación, igualmente siempre habrá alguna cosa que tal vez el navegador no lo soporte.



## :star: Etiquetas y atributos

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


### IDE y extensiones


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


### Mi primera pagina web

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
### Etiquetas más utilizadas

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


### Repositorio del curso

[https://github.com/Open-Bootcamp/HTML-CSS](https://github.com/Open-Bootcamp/HTML-CSS)

### Ejercicio


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

## :star: 2 - Formularios y tablas

La practica se puede ver dentro de la carpeta **02_forms_tables**

### Etiquetas para formularios

```<form></form>``` para tener el formulario, tiene dos atributos **action** (hacia donde voy a enviar la informacion) y **method** (que puede ser GET, PUT, etc). EL método POST lo tenemos que utilizar siempre que hagamos una accion desde un servidor.

```<label></label>``` esta relacionado con el input, mediante el atributo **fro** en el label y el atributo **id** en el input.

```<input>``` para poder ingresar datos, tengo distintos tipos **type="text"** por ejemplo, tambien pueden ser **number**, **password**, **date**, **email**. Otro atributo que si o si deben tener es el **name** que va a ser como la key con la que ira el value introducido.

Otros atributos pueden ser: **required** (para que sea un campo requerido, obligatorio), para los tipo **number** le puedo agregar **min** o **max** para limitar el rango de nuúeros que puedo ingresar.

```<button></button>``` para enviar el formulario, hay de tipo **reset** y **submit**

```<textarea></textarea>``` area de texto, como cuando se puede ingresar el comentario.

Ejemplo del archivo **formularios.html**:

```
<form action="resultados.html" method="POST">
  <div>
    <label for="name">Nombre:</label>
    <input type="text" name="name" id="name">
  </div>
  <div>
    <label for="password">Contraseña:</label>
    <input type="password" name="password" id="password">
  </div>
  <button type="submit">Enviar</button>
</form>
```  


Y para que se vea lo que ingreso tengo el archivo **resultados.html**:

```
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resultados</title>
</head>
<body>
  <h3>Estos son los resultados</h3>
  <div id="resultados"></div>
  <br>
  <a href="./resultados.html">Volver al formulario</a>
  <script>
    const resDiv = document.getElementById("resultados")
    new URLSearchParams(window.location.search).forEach((val, name) => {
      resDiv.append(`${name}: ${val}`)
      resDiv.append(document.createElement('br'))
    })
</script>
</body>
</html>
```

### Botones

Hay de dos tipos:

- Enviar, para enviar la información, por ejemplo: ```<button type="submit">Enviar</button>```

- Resetear, para resetear todo el formulario, por ejemplo: ```<button type="reset">Reset</button>```
   
### Tablas en HTML


etiquetas:

- ```<table></table>``` me indica que es una tabla

- ```<tr>``` table row, para las filas

- ```<th>``` table header, para los encabezados


- ```<td>``` table data para los campos.
### Ejercicio 1

Duración aproximada: 5min

Enunciado del ejercicio:

```
Crea un nuevo documento HTML que cumpla los siguientes parámetros:

-El título debe ser "Ejercicio 02 - Formularios en HTML"
-El body debe contener un formulario que cumpla las siguientes características
  -El atributo action será "/"
  -Debe contener los siguientes campos:
    -Un campo de texto llamado "nombre"
    -Un campo numérico llamado "edad"
    -Un campo de área de texto llamado "frase-favorita"
    -Un botón de envío
    -Un botón de reset
```

->> Se puede ver en el documento **ejercicio1.html**


- La forma en que ellos lo resolvieron:

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 02 - Formularios en HTML</title>
</head>
<body>
    <form action="/">
        <input type="text" name="nombre" placeholder="Tu Nombre">
        <input type="number" name="edad" placeholder="Tu Edad">
        <textarea name="frase-favorita"></textarea>
        <button type="submit">Enviar</button>
        <button type="reset">Reset</button>
    </form>
</body>
</html>
```

### Ejercicio 2


Enunciado del ejercicio:

```
Crea un nuevo documento HTML que cumpla los siguientes parámetros:

-El título debe ser "Ejercicio 02/2 - Tablas en HTML"
-El body debe contener una tabla que cumpla las siguientes características
  -Las columnas serán las siguientes: "Título", "Autor", "Año de publicación", "Enlace a Amazon"
  -Debe tener tres entradas, que corresponderán a tus tres libros favoritos
```

---

## :star: 3 - Multimedia

---

## :star: 4 - Introduccion a CSS

---

## :star: 5 - Disposición de elementos y para multimedia

---

## :star: 6 - Anidación de selectores

---

## :star: 7 - Creación de estilos para formularios


---

## :star: 8 - Bootstrap

---

## :star: 9 - Animaciones y transiciones

---

## :star: 10 - Introducción al diseño responsive

---

## :star: 11 - El sistema grid de Bootstrap

---

## :star: 12 - Otros aspectos de interés de Bootstrap

---

## :star: 13 - Usando pre-procesadores CSS

---

## :star: 14 - Presentación proyecto final

---

## :star: 15 - Finalización proyecto final

---
