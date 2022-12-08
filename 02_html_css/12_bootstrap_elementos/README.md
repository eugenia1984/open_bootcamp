# :star2: Bootstrap - Otros aspectos de interés


---

## :book: Temas:

```
1 - Tablas
2 - Imagenes
3 - Jumnotron
4 - Alertas
5 - Spinners
6 - Tarjetas
7 - Listas
8 - Formularios
9 - Modales, popovers y tooltips
10 - Iconos
11 - Toasts
12 - Badges
13 - Progress
14 - Tipografçia en Bootrstrap
15 - Ejercicios
```

---

## :star: 1 - Tablas

:tv: -> [Tablas -documentación de Bootrstrap-](https://getbootstrap.com/docs/5.2/content/tables)

tablas.html:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tablas</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <div class="row">
        <table class="table caption-top table-sm table-bordered table-striped table-hover">
          <caption> List of users </caption>
          <thead class="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Usuario</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-primary">
              <td>Gorka</td>
              <td>Villar</td>
              <td>gorkavi</td>
            </tr>
            <tr class="table-success">
              <td>Jorge</td>
              <td>Etxeberria</td>
              <td>jetxe77</td>
            </tr>
            <tr>
              <td>María</td>
              <td class="table-danger">Suescun</td>
              <td>masus88</td>
            </tr>
            <tr>
              <td>Julen</td>
              <td>García</td>
              <td>julgarcia90</td>
            </tr>
            <tr>
              <td>Julen</td>
              <td>García</td>
              <td>julgarcia90</td>
            </tr>
            <tr>
              <td>Julen</td>
              <td>García</td>
              <td>julgarcia90</td>
            </tr>
            <tr>
              <td>Julen</td>
              <td>García</td>
              <td>julgarcia90</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Footer</td>
              <td>Footer</td>
              <td>Footer</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </body>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
</html>
```

Con **Table-dark** me da el fondo negro y si uso las clases **table-primary** / **table-danger**, etc le cambio el color de fondo

Con **table-hover** cuando paso con el mouse por arriba la fila se oscurece.

Con **Table-active** marco la fila que esté activa, queda más gris.

Dentro de los **td** también puedo poner la clase **table-active**.

Con **table-border** le doy un border a la tabla y al usar **border-primary** / **border-secondary** / **border-siccess** le doy el color.

Pordefecto al tabla viene con un padding, si aplico **table-sm** achico ese espacio.

![image](https://user-images.githubusercontent.com/72580574/206537010-5b750252-7587-47df-a5c8-284ed579c1d2.png)

Se puede hacer nesting y guardar una tabla dentro de otra tabla.

Podemos trabajar con el ```<thead>``` Y darle colores y demás, lo mismo con el ```<tfoot>```.

![image](https://user-images.githubusercontent.com/72580574/206538131-57d00ae9-2485-44fc-898a-284717927116.png)


También podemos hacerlas responsive o aplicarles breakpoints.


---

## :star: 2 - Imagenes

:tv:  [Documentación d Bootstrap](https://getbootstrap.com/docs/5.2/content/images)

images.html:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Imágenes</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <img
        src="https://rinconesgipuzkoa.diariovasco.com/fotos/2017/09/donostia-sunset-201709260812-800x.jpg"
        alt="imagen"
        class="img-fluid"
      />

      <hr />
      <img
        src="https://www.designevo.com/res/templates/thumb_small/cool-pink-and-blue-guitar.webp"
        alt="logo"
        class=""
      />

      <hr />
      
      <img
        src="https://www.designevo.com/res/templates/thumb_small/cool-pink-and-blue-guitar.webp"
        alt="logo"
        class="d-block mx-auto"
      />
    </div>
  </body>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
</html>
```

- Responsive images : Images in Bootstrap are made responsive with **.img-fluid**. This applies **max-width: 100%**; and **height: auto**; to the image so that it scales with the parent width.

- Image thumbnails: **img-thumbnail** para darle bordes redondeados y un espacio en blanco y borde gris.

![image](https://user-images.githubusercontent.com/72580574/206539995-e310e3b5-f001-4cfa-8a30-e72013b572f4.png)

- Ubicandolas:
```
<img src="..." class="rounded float-start" alt="Al inicio, para la izquierda">
<img src="..." class="rounded float-end" alt="Al final, para la derecha">
```

---

## :star:  3 - Jumbotron

jumbotron.html:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Jumbotron</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <div class="bg-light p-5 rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Custom jumbotron</h1>
          <p class="col-md-8 fs-4">
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap. Check out the
            examples below for how you can remix and restyle it to your liking.
          </p>
          <button class="btn btn-primary btn-lg">Example button</button>
        </div>
      </div>
    </div>
  </body>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
</html>
```

Fue eliminado de los componentes, porque se puede replicar con un titulo, texto y un botón 

![image](https://user-images.githubusercontent.com/72580574/206540699-a4ea98ae-0f12-46e9-b129-5880eb3c247b.png)

[Ejemplos como el de la imagn](https://getbootstrap.com/docs/5.2/examples/jumbotron/)

---

## :star:  4 - Alertas

alerts.html:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Alertas</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container py-4">
      <div class="alert alert-danger" role="alert">
        Esto es una alerta <a href="#" class="alert-link">y aquí el link</a>
      </div>
      <div class="alert alert-primary" role="alert">
        <h4 class="alert-heading">Well done!</h4>
        <hr />
        <p class="mb-0">Esto es un texto largo</p>
      </div>
      <div class="alert alert-primary d-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16"
          role="img"
          aria-label="Warning:"
        >
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          />
        </svg>
        <div>Esto es una alerta con icono</div>
      </div>
      <div
        class="alert alert-info alert-dismissible fade show"
        id="alerta-eliminar"
      >
        Este es un alert que se puede eliminar
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <button
        class="btn btn-danger mb-3"
        data-bs-dismiss="alert"
        data-bs-target="#alerta-eliminar"
      >
        Eliminar alerta
      </button>

      <div id="liveAlertPlaceholder"></div>
      <button class="btn btn-info text-white" id="liveAlertBtn">
        Mostrar alerta
      </button>
    </div>
  </body>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
  <script>
    var alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    var alertTrigger = document.getElementById("liveAlertBtn");

    function alert(message, type) {
      var wrapper = document.createElement("div");
      wrapper.innerHTML =
        '<div class="alert alert-' +
        type +
        ' alert-dismissible" role="alert">' +
        message +
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

      alertPlaceholder.append(wrapper);
    }

    if (alertTrigger) {
      alertTrigger.addEventListener("click", function () {
        alert("Hola, esto es una alerta", "success");
      });
    }
  </script>
</html>
```

:tv: -> [Documentacion de Bootstrap](https://getbootstrap.com/docs/5.2/components/alerts)

- Colores de fondo: **alert-primary** - **alert-secondary** - **alert-success** - **alert-danger**, etc.

![image](https://user-images.githubusercontent.com/72580574/206541397-e7435783-85d2-41d2-8a3f-6f6b4d1a52d3.png)

- Ejemplos en vivo (utilizando el JS de Bootrstrap) hacemos click en el boton y sale el alerta.

![image](https://user-images.githubusercontent.com/72580574/206541719-2d0883f9-649a-44df-88c3-45c9c792e209.png)


```JavaScript
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Nice, you triggered this alert message!', 'success')
  })
}
```

- **.alert-link** para darle color al link.

![image](https://user-images.githubusercontent.com/72580574/206542065-ff2af270-34d7-4e91-b0ca-4711399082a9.png)


- Un alert puede ser como una **ard** con varios itemas dentro

![image](https://user-images.githubusercontent.com/72580574/206542206-8203f331-cfc9-4c6d-91ed-4ad94547f921.png)


```HTML
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
```

- Podemos utilizar los **icons** que nos trae Bootstrap o sino con un svg:

![image](https://user-images.githubusercontent.com/72580574/206542381-ddf15334-b60c-4d6a-abe9-a0755a9ff779.png)

```HTML
<div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
  <div>
    An example alert with an icon
  </div>
</div>
```

```HTML
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="check-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  <symbol id="info-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
  </symbol>
  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>
```

- Al hacer click en un boton se elimina, gracias a **data-bs-dismiss="alert"**

```HTML
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

---

## :star:  5 - Spinners

:tv: -> [Documentación de bootstrap](https://getbootstrap.com/docs/5.2/components/spinners)


spinners.html:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Spinners</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container py-4">
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-border text-primary"></div>
      <div class="spinner-grow text-warning mx-2 my-5" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-border text-danger spinner-border-sm"></div>
      <div class="spinner-grow text-danger spinner-grow-sm"></div>
      <div
        class="spinner-border text-secondary"
        style="width: 3rem; height: 3rem"
      ></div>

      <button class="btn btn-primary disabled">
          <div class="spinner-grow spinner-grow-sm"></div>
          Cargando...
      </button>
    </div>
  </body>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
</html>
```

Hay de dos modos...

... **border**, le puedo dar comlor con: **text-primary**, ** text-secondary**, etc,  las mismas clases que le dan el color al texto se aplican.

![border spinner](https://user-images.githubusercontent.com/72580574/206545023-77c70fd4-8dcd-447e-8cf2-07d651f61717.png)

... **growing**, le puedo dar comlor con: **text-primary**, ** text-secondary**, etc,  las mismas clases que le dan el color al texto se aplican.

![spinner growing](https://user-images.githubusercontent.com/72580574/206545096-3d83ac17-7dd6-4ee4-adff-7729aef17fda.png)

Por defecto tienen **inline-flex**, le podemos agregar tanto **margin**, como **padding**.

Con las clases de **flex-box** los podemos ubicar:
![image](https://user-images.githubusercontent.com/72580574/206545640-90e19358-eaee-4558-8191-320af40c1151.png)

Les puedo modificar el tamaño

![image](https://user-images.githubusercontent.com/72580574/206545784-14031d68-7d92-435b-b61d-97fb879f971b.png)

![image](https://user-images.githubusercontent.com/72580574/206545827-2af36b69-c077-40da-89a8-c508f7e79d5b.png)


Y aplicarlo a los botones

![image](https://user-images.githubusercontent.com/72580574/206545913-9a8288a3-70a3-46f2-ad72-d4d0cd43eab5.png)




---

## :star: 6 - Tarjetas

:tv: -> [Documentacion de bootrstrap](https://getbootstrap.com/docs/5.2/components/card/)

card.html:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tarjetas</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container py-4">
      <div class="card" style="width: 15rem">
        <div class="card-header">Este es el encabezado</div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Este es el body de la tarjeta</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Item 1</li>
            <li class="list-group-item">Item 2</li>
            <li class="list-group-item">Item 3</li>
          </ul>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary btn-sm">Llamada a la acción</button>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Blue_Zurich_%2831895270053%29.jpg/1200px-Blue_Zurich_%2831895270053%29.jpg"
          class="card-img-bottom"
          alt="imagen"
        />
      </div>
      <div class="card mt-4">
        <div class="card-header">Promoción</div>
        <div class="card-body">
          <h5 class="card-title display-6 col-md-9">
            Promoción especial nuevos alumnos
          </h5>
          <p class="card-text col-md-9">
            Haciendo clic en el botón de abajo conseguirás hasta un 50% de
            descuento en tus siguientes compras
          </p>
          <button class="btn btn-primary btn-sm">Obtén tu descuento</button>
        </div>
      </div>
      <div class="card mt-4">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a href="#" class="nav-link active">Principal</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Secundario</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Terciario</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </body>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
</html>
```

Es un solo elemento que se compone de varios elementos internos como: image, titulo (**card-title**), texto (**Card-text**), boton, link, etc, todas están en el **card-body**.

Se le puede agregar un **header** y un **footer**

Usando el **Grid-system** con container, row y col puedo bicar a varias tarjetas.

Para el texto puedo utilizar las alineaciones de texto.

Puedo tener un componente para navegar (como un nav)

![image](https://user-images.githubusercontent.com/72580574/206546778-c3ed40d7-d59a-46f7-ac65-069d66c15499.png)

Se le puede dar colores de fondo, colores en el borde, etc.


![image](https://user-images.githubusercontent.com/72580574/206546862-428d7d2d-f1fe-4c06-8560-ab73bdbde3f8.png)

---

## :star: 7 - Listas

:tv: -> [Documentacion de **list group**](https://getbootstrap.com/docs/5.2/components/list-group/#basic-example)

![image](https://user-images.githubusercontent.com/72580574/206547337-d2a88baf-d330-4d62-9743-1194ae8b3e6a.png)

Puedo usarlas para **check list** y para **radio buttons**
![image](https://user-images.githubusercontent.com/72580574/206547482-7ab442bf-7ebd-4f9f-9138-84b442fe9314.png)


listas.html:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Listas</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container py-4">
      <ul class="list-group">
        <li class="list-group-item disabled">Item 1</li>
        <li class="list-group-item">Item 2</li>
        <li class="list-group-item active">Item 3</li>
        <li class="list-group-item">Item 4</li>
        <li class="list-group-item">Item 5</li>
      </ul>
      <ul class="list-group list-group-flush mt-4 rounded">
        <a href="#" class="list-group-item list-group-item-action active"
          >Item 1</a
        >
        <a href="#" class="list-group-item list-group-item-action">Item 2</a>
        <a href="#" class="list-group-item list-group-item-action">Item 3</a>
        <a href="#" class="list-group-item list-group-item-action">Item 4</a>
        <a href="#" class="list-group-item list-group-item-action disabled"
          >Item 5</a
        >
      </ul>
      <ol class="mt-4 list-group list-group-numbered">
        <li class="list-group-item list-group-item-action">Item 1</li>
        <li class="list-group-item list-group-item-action">Item 2</li>
        <li class="list-group-item list-group-item-action">Item 3</li>
        <li class="list-group-item list-group-item-action">Item 4</li>
        <li class="list-group-item list-group-item-action">Item 5</li>
      </ol>
      <ul class="mt-4 list-group">
        <li class="list-group-item d-flex align-items-center justify-content-between">
          <div>
            <p class="mb-0 fs-4"><strong>Primer item</strong></p>
            <p class="mb-0">Este es el texto del primer item</p>
          </div>
          <div>
              Badge
          </div>
        </li>
        <li class="list-group-item">Item 2</li>
        <li class="list-group-item">Item 3</li>
        <li class="list-group-item">Item 4</li>
        <li class="list-group-item">Item 5</li>
      </ul>
      <ul class="mt-4 list-group list-group-horizontal-sm">
          <li class="list-group-item list-group-item-warning">Item 1</li>
          <li class="list-group-item list-group-item-action list-group-item-info">Item 2</li>
          <li class="list-group-item">Item 3</li>
          <li class="list-group-item">Item 4</li>
      </ul>
      <div class="row">
          
      </div>
    </div>
  </body>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
</html>
```

Con las clases **active** le doy el fondo celeste de activo  y con **disable** lo deeshabilito

![image](https://user-images.githubusercontent.com/72580574/206548453-c7231483-c1f3-4031-ab01-f640815260c7.png)


Con el **list-group-item-action** al pasar el mouse se pone más gris.

![image](https://user-images.githubusercontent.com/72580574/206548652-dd974b8e-a6a8-4bc9-9727-f0b248486f0b.png)



listas2.html:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Listas 2</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container py-4">
      <div class="row">
        <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
            <a
              class="list-group-item list-group-item-action active"
              id="list-home-list"
              data-bs-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="list-home"
            >
              Inicio
            </a>
            <a
              class="list-group-item list-group-item-action"
              id="list-profile-list"
              data-bs-toggle="list"
              href="#list-profile"
              role="tab"
              aria-controls="list-profile"
              >Perfil</a
            >
            <a
              class="list-group-item list-group-item-action"
              id="list-messages-list"
              data-bs-toggle="list"
              href="#list-messages"
              role="tab"
              aria-controls="list-messages"
              >Messages</a
            >
            <a
              class="list-group-item list-group-item-action"
              id="list-settings-list"
              data-bs-toggle="list"
              href="#list-settings"
              role="tab"
              aria-controls="list-settings"
              >Settings</a
            >
          </div>
        </div>
        <div class="col-8">
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="list-home"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              Esta es la home
            </div>
            <div
              class="tab-pane fade"
              id="list-profile"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            >
              Este es tu perfil - personalizado
            </div>
            <div
              class="tab-pane fade"
              id="list-messages"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
              Estos son tus mensajes
            </div>
            <div
              class="tab-pane fade"
              id="list-settings"
              role="tabpanel"
              aria-labelledby="list-settings-list"
            >
              Aquí tienes los ajustes
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
</html>
```


Le aplicamos JavaScript con los **data-base**: ``` data-bs-toggle="list"```

---

## :star: 8 - Formularios

:tv: -> [Documentacion](https://getbootstrap.com/docs/5.2/forms/overview/#overview)

forms.html:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Forms</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container pt-4">
      <form action="">
        <div class="mb-3">
          <label class="form-label" for="nombre">Introduce tu nombre</label>
          <input
            id="nombre"
            type="text"
            class="form-control"
            placeholder="Tu nombre"
            disabled
          />
          <div class="form-text">Introduce tu nombre de pila</div>
        </div>
        <div class="mb-3">
          <input
            type="checkbox"
            id="check-mayor-edad"
            class="form-check-input"
            checked
          />
          <label class="form-check-label" for="check-mayor-edad"
            >¿Eres mayor de edad?</label
          >
        </div>
        <div class="mb-3">
          <label class="form-label" for="apellido">Introduce tu apellido</label>
          <input
            id="apellido"
            type="text"
            class="form-control-plaintext"
            placeholder="Tu apellido"
            value="Villar"
          />
          <div class="form-text">Introduce tu apellido</div>
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">Por defecto</label>
          <input class="form-control" type="file" id="formFile" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control form-control-sm"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value="gorka@gorka.com"
            readonly
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <div class="mb-3">
          <input type="color" class="form-control form-control-color" />
        </div>
        <div class="mb-3">
          <label for="exampleDataList" class="form-label"
            >Selecciona tu ciudad</label
          >
          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions">
            <option value="San Sebastián" />
            <option value="Madrid" />
            <option value="Bilbao" />
            <option value="Barcelona" />
            <option value="Valencia" />
          </datalist>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </body>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
</html>
```

![image](https://user-images.githubusercontent.com/72580574/206550785-9986f5e4-c2c7-405e-9d6f-aa17e0fb9791.png)


Con el estilo **form-control** le doy formato de formulario.

Utilizamos los **label** (que debe tener un **for**) y los **input**(que debe tener un **id** -igual al for del label para relacionarlos-, su **type**), **checkbox**, el **button**.

Si tiene l a clase **Read-only** va a ser un input de solo lectura, los puedo deshabilitar con el**disabled**, les puedo modificar el tamaño.

Puedo hacer el input con file para subir archivos.

También tengo el color picker, con el input type color y **form-control-color**

Con ```<datalist>``` tengo como los **select**. También tenemos el ```<select>``` si le agregamos **multiple** para elegir más de uno.

Tenemos [check y radios](https://getbootstrap.com/docs/5.2/forms/checks-radios/)

![image](https://user-images.githubusercontent.com/72580574/206552776-be9d2bd2-ca55-4504-b57c-e2ef29c683dc.png)

![image](https://user-images.githubusercontent.com/72580574/206552817-11092d52-87a8-4452-bd11-21d06fc1960d.png)


```HTML
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>
```

form3.html:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Forms</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container pt-4">
      <form action="">
        <label for="rango">Selecciona el rango</label>
        <input
          id="rango"
          type="range"
          class="form-range"
          value="5"
          min="0"
          max="10"
          step="0.1"
        />
        <div class="input-group mb-4">
          <span class="input-group-text">@</span>
          <input type="text" class="form-control" />
        </div>
        <label for="email">Introduce tu Email</label>
        <div class="input-group w-50">
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="username"
          />
          <span class="input-group-text">@gmail.com</span>
        </div>
        <label for="email-2">Introduce tu Email</label>
        <div class="input-group input-group-lg w-100 flex-nowrap">
          <input
            type="text"
            class="form-control"
            id="email-2"
            placeholder="username"
          />
          <span class="input-group-text">@gmail.com</span>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-text">
            <input
              class="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with checkbox"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-text">
            <input
              class="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
          </div>
          <input
            type="text"
            class="form-control"
            name="Nombre"
            placeholder="Tu nombre"
          />
          <input
            type="text"
            class="form-control"
            name="Apellido"
            placeholder="Tu apellido"
          />
        </div>
        <div class="input-group">
          <input
            type="text"
            placeholder="Haz tu búsqueda"
            class="form-control"
          />
          <button class="btn btn-outline-primary">Buscar</button>
        </div>
        <div class="input-group">
          <input
            type="text"
            placeholder="Haz tu búsqueda"
            class="form-control"
          />
          <button
            class="btn btn-outline-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Elige tu buscador
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Google</a></li>
            <li><a class="dropdown-item" href="#">Bing</a></li>
            <li><a class="dropdown-item" href="#">Yahoo</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Presearch</a></li>
          </ul>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="text-nombre" placeholder="Tu Nombre" />
            <label for="text-nombre">Nombre label</label>
        </div>
      </form>
    </div>
  </body>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
</html>
```

Con los **input-goup** armamos grupos de input y podemos tener con iconos y con más información.

![image](https://user-images.githubusercontent.com/72580574/206556139-aea3f287-4221-463b-b95d-0f5cf177fd76.png)



---

## :star: 9 - Modales, popovers y tooltips

---

## :star: 10 - Iconos

---

## :star: 11 - Toasts

---

## :star: 12 - Badges

---

## :star: 13 - Progress

---

## :star: 14 - Tipografçia en Bootrstrap

---

## :star: 15 - Ejercicios


