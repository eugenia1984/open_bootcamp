# :star2:  Introduccion a CSS

---

## :book: Temas:

```
1 - Introduccion a las hojas de estilo
2 - Selectores en CSS
3 - Las tres formas de insertar estilos
4 -  Colores
5 - Fondos de colores e imagenes
6 - Estilos de altura , anchura, padding y margin
7 - Fuentes en CSS
8 - Ejercicio
```

## :star: 1 - Introduccion a las hojas de estilo

**CSS** es Cascading Styling Sheet ó Hojas de Estilo en Cascada


El HTMl lo unimos al CSS por medio de la etiqueta:

```<link rel="stylesheet" href="estilos.css">``` que va en el **head**.

Los comentarios en CCS son asi: ```/* */```

---

## :star: 2 - Selectores en CSS

Sintaxi:

```CSS
h1 {
  color: red;
}
```

Tenemos el tipo de selector, en este caso es de etiqueta **h1**

Siempre entre {}

Y tenemos **propiedad:valor;**, siempre terminamos con ; y entre la propiedad y el valor va **:**

Los selectores pueden ser:

- de **clase**, comienzan con **.**

- **id**, empiezan con **#**

- **de etiquetas**, las etiquetas de hml, como por ejemplo, p, h1, img, etc.

- **universal**, va con *.

---

## :star: 3 - Las tres formas de insertar estilos

- con la etiqueta **link** en el head, por ejemplo:

``` <link rel="stylesheet" href="estilos.css" />```

- con la etqieta **link** en el head, pero importandolo:
```
<link
      rel="stylesheet"
      href="https://unpkg.com/purecss@2.1.0/build/pure-min.css"
    />
```

Entonces en mi css voy a poder utilizar esos estilos: ```  <button class="pure-button">Esto es un botón</button>```

- con la etiqueta **style** dentro del head, por ejemplo:

```
<style>
      html {
          padding: 15px;
      }
      p {
        color: red;
      }
 </style>
 ```
 
 - internamente **dentro de las etiquetas** (estilos inline, en linea), como si fuera un atributo, por ejemplo:

 ```<button style="padding: 10px; border: none; border-radius: 10px;">Botón personalizado</button>```

 ->> La mejor practica es definirlos en una hoja de estilos aparte.

 Tiene más peso los estilos en linea, si luego aplicaria a la misma etiqueta que teine estilos en linea una hoja de estilos, pero el en linea.
---

## :star: 4 -  Colores

Una buena pagina para generar paleta es **coolors.co**

Los formatos son:

- hexadecimal, por ejemplo: **#BCE784**, siempre empiezan con # y siguen 6 que son numeros entre 0 a 9 y letras de la A a la F 

- rgb / rgba, por ejemplo **rgb(150, 150, 150)**, van los numeros del 0 al 255, y son (red, green, blue), al **a** es para el **alpha** (transparencia / opacidad) que va del 0 al 1.

- hls / hlsa

---

## :star: 5 - Fondos de colores e imagenes

El **fondo** tiene distintos atributos, como:

- **background-color**, por ejemeplo: ```background-color: cornflowerblue;```

- **background-image**, por ejemplo: ``` background-image: url("https://d33wubrfki0l68.cloudfront.net89a052ddc6d368ce93d9067e8444c36a3558efe7/f9e10/statictriangle_background2-6eded4a7ad80c007fb65f02c828e5dd0.jpg");```, se coloca de arriba hacia abajo y de izquierda a derecha por default se puede cambiar la posicion con background-position.

- **background-position**, por ejemplo: ```background-position: left bottom; ```

---

## :star: 6 - Estilos de altura , anchura, padding y margin

- Para el **ancho**: ``` width```

- Para el **alto**/ la **altura**: ```height```

- **padding** es el espacio entre el elemento y el borde (**espacio interno**). Se puede cambiar un solo padding con: padding-right, padding-left, padding-top, padding-bottom, o usar el shorcut padding el cual puede tener las cuatro posiciones, van en el sentido de las agujas del reloj ```padding: 10px 20px 30px 40px;``` 10px top, 20px right, 30px bottom, 40px left. Si en vez de poner 4 valores utilizo solo dos valores, el 1ro es para top/bottom y el 2do es para left/right. Si utilizo un solo valos es el mismo a los 4 lados (top / right / bottom / left).

- **border** puede escribir de dos formas:

```CSS
border-style: solid;
border-color: rgb(150, 150, 150);
border-width: 1px;
````

O el shortcut:

```CSS
border-style: 1px solid rgb(150, 150, 150);
```

- **margin** es el expacio desde el borde hacia afuera. Es el **espacio externo**.

---


## :star: 7 - Fuentes en CSS

Nativamente en CSS tenemos la propiedad **font-family** para poder utilizar algunas fuentes. Otro modo es mediante Google Fonts el cual se puede importar en el mismo archivo css o sino linkearlo en html mediante un link en el head.


```CSS
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;1,400&display=swap');

html {
    /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
    font-family: 'Source Sans Pro', sans-serif;
    font-size: larger;
    font-weight: 400;
    font-style: italic;
}
```

Se puede modificar el tamaño de la fuente con ```font-size: 10px / 1rem / 1em / larger;```

Se puede modificar el ancho con ```font-weight: 100 / 200/ .. / 900 / bolder / lighter;```

Y también se puede modificar el estilo con ```font-style: italic / underline;```

---

->> Se puede ver en [**web_con_css.html**](https://github.com/eugenia1984/open_bootcamp/blob/main/02_html_css/04_intro_css/web_con_css.html) y [**textos_con_html.html**](https://github.com/eugenia1984/open_bootcamp/blob/main/02_html_css/04_intro_css/web_con_css.html)


---

## :star: 8 - Ejercicio

### Consigna:

1. Crea un nuevo fichero CSS e impórtalo en el documento HTML principal

2. Dentro del body crea una sección con los siguientes elementos:

- Encabezado que contenga el texto "Lista de la compra"

-Añade en el encabezado un atributo id con el valor "titulo"

-Añade también un atributo class con el valor "encabezado"

- Una lista desordenada con cinco elementos que representen artículos de la compra

-Cada uno de los elementos debe tener un id como sigue: primer elemento "elemento-1", segundo elemento "elemento-2", etc.

- Una lista ordenada con cinco elementos que representan los supermercados más cercanos a tu casa

-Al igual que en la lista anterior, cada uno de los elementos debe tener un id como sigue: primer elemento "elemento-1", segundo elemento "elemento-2", etc.

- Modifica el CSS para que el primer elemento de cada lista se muestre de color rojo

- A través del encadenamiento de selectores, haz que el primer elemento de la primera lista tenga un tamaño de letra de 2rem


:computer: -> Se puede ver dentro de la carpeta [**entrega**](https://github.com/eugenia1984/open_bootcamp/tree/main/02_html_css/04_intro_css/entrega)


---
