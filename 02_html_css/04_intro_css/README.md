

## :star: 4 - Introduccion a CSS


### Introduccion a las hojas de estilo

**CSS** es Casccading Styling Sheet ó Hojas de Estilo en Cascada


El HTMl lo unimos al CSS por medio de la etiqueta:

```<link rel="stylesheet" href="estilos.css">``` que va en el **head**.

Los comentarios en CCS son asi: ```/* */```

---

### Selectores en CSS

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

### Las tres formas de insertar estilos

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

### Colores

Una buena pagina para generar paleta es **coolors.co**

Los formatos son:

- hexadecimal, por ejemplo: **#BCE784**, siempre empiezan con # y siguen 6 que son numeros entre 0 a 9 y letras de la A a la F 

- rgb / rgba, por ejemplo **rgb(150, 150, 150)**, van los numeros del 0 al 255, y son (red, green, blue), al **a** es para el **alpha** (transparencia / opacidad) que va del 0 al 1.

- hls / hlsa

---

### Fondos de colores e imagenes

El **fondo** tiene distintos atributos, como:

- **background-color**, por ejemeplo: ```background-color: cornflowerblue;```

- **background-image**, por ejemplo: ``` background-image: url("https://d33wubrfki0l68.cloudfront.net89a052ddc6d368ce93d9067e8444c36a3558efe7/f9e10/statictriangle_background2-6eded4a7ad80c007fb65f02c828e5dd0.jpg");```, se coloca de arriba hacia abajo y de izquierda a derecha por default se puede cambiar la posicion con background-position.

- **background-position**, por ejemplo: ```background-position: left bottom; ```

---

### Estilos de altura , anchura, padding y margin

---


### Fuentes en CSS


---

### Ejercicio

---
