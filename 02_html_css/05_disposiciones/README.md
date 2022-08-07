
## :star: 5 - Disposición de elementos y para multimedia


### Disposiciones y alineaciones

Las **disposiciones por defecto** son como elemento **nlock** para los **div**, es decir que tienen el 100 % de ancho, se ubican uno debajo de otro; es decir que tienen ```display:block;```.

Los **span**  tienen disposición en linea, es decir: ```display:inline;``` (no le puedo modificar la altura).

Las **img**  tienen disposición en linea, es decir: ```display:inline-block;```, es decir que le puedo modificar la altura.


Anteriormente se utilizaba **float**.

```float: right / left / inline-end / inline-start / none / calc() / inherit / initial / unset / var;```.

Actualmente se utiliza **flexbox** y **grid** para posicionar.

### Posicionamiento

Hay 5 tipos de posicionamiento:

- **static**, por default. No hay que modificarlo, no se le puede modificar con **left** / **right** / **top** / **bottom**

- **relative** tiene el atributo **position** que tiene los valores (absolute, fixed, relative, static, sticky). El ```position: relative;``` nos permite posicionarlo a la relacion que tendria si fuese estático, aca si puedo usar: left, right, top, bottom; también le puedo agregar margin.

- **fixed** es un lugar fijo en el que estará, se utiliza cuando queremos que por ejemplo la barra de navegación esté siempre visible, o cuando queremos dejar el logo de whatsapp para que se comuniquen, por ejejmplo. Voy a tener: ```position: fixed;```, la posicion de esta caja se calcula en funcion del modelo absolute pero además está fijado con respecto de alguna referencia. Sus margenes no van a colapsar con otro margenes, el scroll no lo va a afectar. **Se relaciona con respecto a la pantalla (viewport)**.

- **absolute** lo posicionamos igual que el fix, pero en relación a su elemento padre relativo, no al viewport. ```position: absolute;```

- **sticky** con ```position: sticky;``` y puedo tener como otro atributo a ```top: 0px;``` asi cuando comienzo a hacer scroll me queda fijo arriba; es decir que **al hacer scroll modifica su posicionamiento hasta quedar fijo**.


Tenemos el **z-index** para crear capaz, y posicionar un elemento arriba de otro.
### Flexbox

Es un contenido flexible, nos ajuda en las vistas responsivas.

```display: flex;``` para ordenar los elementos que teien adentro.

- Por defecto tiene ```flex-direction: row;```, pero lo puedo modificar a: ```flex-direction: row-reverse;```, ```flex-direction: column;```, ```flex-direction: column-reverse;```

- Para ubicarlos tenemos la propiedad ```justify-content: baseline / center / end / first baseline / flex-end / flex-start / last baseline / left / right / safe / space-around / space-between;``` con relacion al **main axis**. El start es el que viene por default.

Vamos a tener dos ejes: **main-axis** (el eje principal) y el eje secundario.

### Overflow

### Trabajo la opacidad y galeria de imagenes

### Reproductores de video


->> Se puede ver en el archivo **posiciones_posicionamiento.html**

### Ejercicio

---