

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

- ```<thead>``` table header, para los encabezados

- ```<tbody>``` table body, para el cuerpo de la tabla

- ```<tr>``` table row, para las filas

- ```<td>``` table data para los campos.


Puede tener atributos, como: ```border="1"``` para delimitar el borde de la tabla (va en la etiqueta **table**).

Los atributos **colspan** y **rowspan** permiten unir una celda con las celdas contiguas, tanto horizontal como verticalmente...

... el valor de **colspan** indica la cantidad de celdas unidas en horizontal , se aplica en la etiqueta ```<td>```

... el valor de **rowspan** indica la cantidad de celdas unidas en vertical, se aplica en la etiqueta ```<td>```.

Ejemplos en codigo:

```
<table>
  <caption>Esto es una tabla</caption>
  <tbody>
    <tr>
      <td colspan="2">celdas a1 y b1 unidas</td>
    </tr>
    <tr>
      <td>celda a2</td>
      <td>celda b2</td>
    </tr>
  </tbody>
</table>
```


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


-->> Lo podes ver en **ejercicio2.html**

->> Asi lo resolvieron ellos:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 02/2 - Tablas en HTML</title>
</head>
<body>
    <table>
        <thead>
            <tr>
                <td>Título</td>
                <td>Autor</td>
                <td>Año de publicación</td>
                <td>Enlace</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>El monje que vendió su Ferrari</td>
                <td>Robin Sharma</td>
                <td>1996</td>
                <td><a href="https://www.amazon.es/dp/B0062XBS32/">https://www.amazon.es/dp/B0062XBS32/</a></td>
            </tr>
            <tr>
                <td>Padre Rico, Padre Pobre</td>
                <td>Robert T Kiyosaki</td>
                <td>1997</td>
                <td><a href="https://www.amazon.es/Padre-rico-pobre-edici%C3%B3n-actualizada-ebook/dp/B007HPS120">https://www.amazon.es/Padre-rico-pobre-edici%C3%B3n-actualizada-ebook/dp/B007HPS120</a></td>
            </tr>
            <tr>
                <td>The Game: Penetrating the Secret Society of Pickup Artists</td>
                <td>Neil Strauss</td>
                <td>2005</td>
                <td><a href="https://www.amazon.es/Game-Penetrating-Secret-Society-Artists-ebook/dp/B007MAXHUG/">https://www.amazon.es/Game-Penetrating-Secret-Society-Artists-ebook/dp/B007MAXHUG/</a></td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```

---