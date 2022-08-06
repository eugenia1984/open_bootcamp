

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
 
 - internamente **dentro de las etiquetas**
 
---

### Colores

---

### Fondos de colores e imagenes

---

### Estilos de altura , anchura, padding y margin

---


### Fuentes en CSS


---

### Ejercicio

---
