## :star: 7 - Creación de estilos para formularios

---

## Estilando formularios


Para solo darle estilo a los input de clase **input** que sean de tipo **password**:
```CSS
.input[type="password"] { }
```

Para modificar un input:
```CSS
.input {
  width: 90%; /* por defecto es inline, al agrandar su ancho y sumando el margin hago que ocupe el 100% de anchura*/
  margin: 1rem 5%;
  padding: 5px 10px; /* traen un pequeño padding por defecto, lo modifico*/
  border: 2px solid green; /* modifico su borde*/
   border-radius: 10px; /* para hacerle los bordes redondeados */
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
}
```

Para hacer los input modernos que son solo una linea recta:

```CSS
.input-moderno {
  width: 90%;
  margin: 1rem 5%;
  border: none;
  border-bottom: 1px solid #c2c2c2;
  outline: none;
  color: #5f5f5f;
}
```

Lo que tambien tengo que modificarle, es que cuando pasamos con el mouse dentro dle input, se hace **focus** y nos aparece todo un recuadro, para ello utilizo el ```outline: none;```.

Y cuando hago click en el input para escribir le voy a cambiar el color de la linea, utilizo la **pseudoclase :focus**:
```CSS
.input-moderno:focus {
  border-bottom: 1px solid #5f5f5f; 
}
```

Para modificar el placeholder voy a utilizar el **pseudoelemento ::placeholder**:

```CSS
.input-moderno::placeholder {
  color: #c2c2c2;
}
```

Le puedo dar un color de fondo y una sombra con:
```CSS
.input-background {
  background-color: aliceblue;
  box-shadow: 0 0 10px #ccc;
}
```

Y también agregar alguna imagen o iconono dentro del input:

```CSS
.input-search {
  background-image: url(https://img.icons8.com/external-others-zufarizal-robiyanto/24/000000/external-lup-mutuline-science-education-others-zufarizal-robiyanto.png);
  background-repeat: no-repeat; /* asi no se me repite la imagen*/
  background-position: 10px;
  padding-left: 40px; /* asi la imagen no tapa el placeholder*/;
}
```

También se puede trabajar con **textareas**. Una de sus propiedades es **resize**, por defecto su valor es **both** para poder modificarlo tanto de forma vertical como horizontal, **horizontal** para solo redimensionar de forma horizontal, **vertical** para solo redimensionar de forma vertical y **none** para no redimensionar.

```CSS
textarea {
  resize: none;
  margin-left: 5%;
}
```

Otro elemento de un formulario es el **select** que viene con **opciones**

---

Para tomar ideas podemos ver la web **Dribble.com**

---

## Creando un formulario moderno (login)

Se puede ver en el archivo [**formularios.html**](https://github.com/eugenia1984/open_bootcamp/blob/main/02_html_css/07_formularios/formularios.html)

---

## Ejercicio

Duración aproximada: 5min

Enunciado:

```
-Replica el ejercicio del vídeo 3 de esta sesión y realiza el siguiente cambio:
-Replícalo exactamente igual, pero realiza una nueva versión en modo oscuro
  -Los colores serán los siguientes
  -El rosa se queda igual
  -El fondo blanco será sustituido por el color #161717
  -El fondo de los inputs tendrá un color #212121
  -El fondo de los inputs cuando se hace hover será del color #454045
  -Los textos tendrán un color blanco
```

---
