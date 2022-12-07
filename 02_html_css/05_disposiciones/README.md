
# :star2:  Disposición de elementos y para multimedia


---

##:book: Temas:

```
1 -  Disposiciones y alineaciones
2 - Posicionamiento
3 - Flexbox
4 -  Overflow
5 - Trabajo la opacidad y galeria de imagenes
6 - Reproductores de video
7 -  Ejercicio
```


## :star: 1 -  Disposiciones y alineaciones

Las **disposiciones por defecto** son como elemento **inlock** para los **div**, es decir que tienen el 100 % de ancho, se ubican uno debajo de otro; es decir que tienen ```display:block;```.

Los **span**  tienen disposición en linea, es decir: ```display:inline;``` (no le puedo modificar la altura).

Las **img**  tienen disposición en linea, es decir: ```display:inline-block;```, es decir que le puedo modificar la altura.


Anteriormente se utilizaba **float**.

```float: right / left / inline-end / inline-start / none / calc() / inherit / initial / unset / var;```.

Actualmente se utiliza **flexbox** y **grid** para posicionar.

---

## :star: 2 - Posicionamiento

Hay 5 tipos de posicionamiento:

- **static**, por default. No hay que modificarlo, no se le puede modificar con **left** / **right** / **top** / **bottom**

- **relative** tiene el atributo **position** que tiene los valores (absolute, fixed, relative, static, sticky). El ```position: relative;``` nos permite posicionarlo a la relacion que tendria si fuese estático, aca si puedo usar: left, right, top, bottom; también le puedo agregar margin.

- **fixed** es un lugar fijo en el que estará, se utiliza cuando queremos que por ejemplo la barra de navegación esté siempre visible, o cuando queremos dejar el logo de whatsapp para que se comuniquen, por ejejmplo. Voy a tener: ```position: fixed;```, la posicion de esta caja se calcula en funcion del modelo absolute pero además está fijado con respecto de alguna referencia. Sus margenes no van a colapsar con otro margenes, el scroll no lo va a afectar. **Se relaciona con respecto a la pantalla (viewport)**.

- **absolute** lo posicionamos igual que el fix, pero en relación a su elemento padre relativo, no al viewport. ```position: absolute;```

- **sticky** con ```position: sticky;``` y puedo tener como otro atributo a ```top: 0px;``` asi cuando comienzo a hacer scroll me queda fijo arriba; es decir que **al hacer scroll modifica su posicionamiento hasta quedar fijo**.


Tenemos el **z-index** para crear capaz, y posicionar un elemento arriba de otro.

---

## :star: 3 - Flexbox

Es un contenido flexible, nos ajuda en las vistas responsivas.

```display: flex;``` para ordenar los elementos que teien adentro.

- Por defecto tiene ```flex-direction: row;```, pero lo puedo modificar a: ```flex-direction: row-reverse;```, ```flex-direction: column;```, ```flex-direction: column-reverse;```

- Para ubicarlos tenemos la propiedad ```justify-content: baseline / center / end / first baseline / flex-end / flex-start / last baseline / left / right / safe / space-around / space-between;``` con relacion al **main axis**. El start es el que viene por default.

Vamos a tener dos ejes: **main-axis** (el eje principal) y el eje secundario.


- ```flex-wrap: no-wrap / wrap / rwap-reverse```, por defecto esta no-wrap.

- para alinearlos en el eje secundario ```align-items: stretch / baseline / center / flex-end / flex-start;``` por defecto son stretch

---

## :star: 4 -  Overflow

Es el **desbordamiento**, donde por ejemplo tengo un contenedor de tamaño fijo y tengo mucho texto que va a desbordarse de mi contenedor.

Esto no pasa en flexbox.

```overflow: auto / hidden / scroll / visible;``` por defecto aparece visible.

También puedo especificar sobre que eje quiero hacer el scroll con ```overflow-x``` ó ```overflow-y```

---

## :star: 5 - Trabajo la opacidad y galeria de imagenes

Si le damos ```widht: 100%``` nos va a ocupar todo el ancho de la pantalla.

Una propiedad es ```opacity:0.5``` que va desde el **0** al **1**, 0 es opacidad total y 1 es sin nada de opacidad.

---

## :star: 6 - Reproductores de video

Ejemplo en codigo para poner un video de fondo con un texto y un CTA:

```
<video class="video" playinline autoplay muted loop>
  <source  src="img/video.mp4" type="video/mp4" />
</video>
<div class=header>
  <h1>Visita San Sebastian</h1>
  <button>CTA</button>
</div>
```

```CSS
html {
  font-family: Helvatica;
  color: white;
}

.video {
  width: 100vh;
  height: 10vh;
  object-fit: cover;
  position: fixed; 
}

.header {
  height: 100vh;
  position: relative;
  text-align: center;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```

- Siempre recordar si agregamos el atributo **autoplay** que tengamos **muted**.

->> Se puede ver en el archivo **posiciones_posicionamiento.html**

---

## :star: 7 -  Ejercicio

### Enunciado:

```
- Crea un nuevo documento HTML con el título "Disposición de elementos en CSS"
- Crea un nuevo fichero CSS e impórtalo en el documento HTML principal
-Utiliza la disposición flex-box para crear una galería de 6 imágenes con los siguientes parámetros
  -Las imágenes deben tener 300 píxeles de ancho
  -Deben reagruparse (wrap) cuando el ancho del viewport cambia
```

:computer: -> Se puede ver en la carpeta [**entrega**](https://github.com/eugenia1984/open_bootcamp/tree/main/02_html_css/05_disposiciones/entrega)

---
