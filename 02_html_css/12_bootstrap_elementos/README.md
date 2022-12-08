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


- **Modals**
- 
:tv: ->  [Documentacion de modales](https://getbootstrap.com/docs/5.2/components/modal/#how-it-works)


Son los pop-ups.

![image](https://user-images.githubusercontent.com/72580574/206556433-b8a56f46-a6b6-4653-bec2-bff44ebf011b.png)



modales.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Modales</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container py-4">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modal-ejemplo"
      >
        Lanzar modal de demostración
      </button>
      <div class="modal fade" data-bs-backdrop="static" id="modal-ejemplo">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <h4 class="modal-header">Este es el header</h4>
            <div class="modal-body">
              <p>Este es el body</p>
              <hr />
              <p>
                This
                <a
                  href="#"
                  role="button"
                  class="btn btn-secondary popover-test"
                  data-bs-toggle="popover"
                  title="Título del popover"
                  data-bs-content="Este es el contenido del popover."
                  >button</a
                >
                triggers a popover on click.
              </p>
              <hr />
              <p>
                Este es un
                <a
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Este es un tooltip"
                  >tooltip</a
                >
              </p>
            </div>
            <div class="modal-footer">
              <button class="btn btn-outline-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
              <button class="btn btn-primary">Aceptar</button>
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
  <script>
    var popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  </script>
</html>
```

- **popovers**

:tv: -> [Documentacion](https://getbootstrap.com/docs/5.2/components/popovers/#overview)

al hacer click sale un cartel con mensaje, tenemos que utilizar ** data-bs-toggle="popover" **

![image](https://user-images.githubusercontent.com/72580574/206556699-926b0ba3-8f17-43de-a655-a439e7b0597d.png)



-  **tooltips**

:tv: -> [Documentacion](https://getbootstrap.com/docs/5.2/components/tooltips/#overview)

![image](https://user-images.githubusercontent.com/72580574/206556892-c7828a9b-3c6a-44b3-bd0f-9890ea448e07.png)



---

## :star: 10 - Iconos

:tv: -> [ Link a la pagina de bootstrap con sus iconos]([)](https://icons.getbootstrap.com/)

![image](https://user-images.githubusercontent.com/72580574/206558373-603907c7-45cf-44c8-baa5-a7d6d04c8256.png)


iconos.html:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Iconos</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
    />
  </head>
  <body>
    <div class="container py-4">
      <h4>Iconos en Bootstrap (Bootstrap Icons)</h4>
      <i class="bi bi-terminal-fill" style="font-size: 2rem; color: blue"></i>
      <i class="bi bi-wrench text-info fs-1"></i>
      <button class="btn btn-secondary">
        <i class="bi bi-wrench mx-1"></i>Ajustes
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

Podemos descargar todos los iconos y utlizarlos con: ```npm i bootstrap-icons```

Para que el proyecto nos pese menos por medio del CDN en ...


... el HTML: ```<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">```

... el CSS: ```@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css");```

![image](https://user-images.githubusercontent.com/72580574/206559119-88730a3f-4451-47a4-983a-c21d2c57d0f4.png)

Con style inline lo puedo modificar: ```<i class="bi-alarm" style="font-size: 2rem; color: cornflowerblue;"></i>```


---

## :star: 11 - Toasts

Son nostificaciones


:tv: -> [Documentaicon]([)](https://getbootstrap.com/docs/5.2/components/toasts/#overview)

toast.html:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Toasts</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container py-4">
      <button class="btn btn-primary" id="boton-trigger">
        Muestra el toast
      </button>
      <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
        <div
          id="liveToast"
          class="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <img src="..." class="rounded me-2" alt="bs" />
            <strong class="me-auto">Título</strong>
            <small>Hace 4 minutos</small>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body">Esto es el mensaje</div>
        </div>
      </div>
      <div
        class="toast-container d-flex align-items-center justify-content-center"
      >
        <div class="toast show">
          <div class="toast-header">Título del primer toast</div>
          <div class="toast-body">Mensaje</div>
        </div>
        <div class="toast show">
          <div class="toast-header">Título del segundo</div>
          <div class="toast-body">Mensaje</div>
        </div>
      </div>
    </div>
  </body>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
  <script>
    var toastTrigger = document.getElementById("boton-trigger");
    var toastLiveExample = document.getElementById("liveToast");
    if (toastTrigger) {
      toastTrigger.addEventListener("click", function () {
        var toast = new bootstrap.Toast(toastLiveExample);

        toast.show();
      });
    }
  </script>
</html>
```

Ejemplo:

![image](https://user-images.githubusercontent.com/72580574/206559528-f162d3f8-ae31-4dd6-bb98-ed1078555ae3.png)


En código:

```HTML
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded me-2" alt="...">
    <strong class="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
```

Por default no están activados, hay que copiar el JavaScriot que nos proveen para que funcione.


---

## :star: 12 - Badges

:tv: -> [Documentacion](https://getbootstrap.com/docs/5.2/components/badge/#examples)


badges.html:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Badges</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <h2>Este es el título <span class="badge bg-secondary">Nuevo!</span></h2>
      <div class="row d-block px-4">
        <button class="btn btn-primary w-auto">
          Notificaciones <span class="badge bg-secondary">5</span>
        </button>
      </div>
      <button class="mt-4 btn btn-primary position-relative">Emails <span class="badge position-absolute bg-danger top-0 start-100 translate-middle rounded-pill">99+</span></button>
      <button class="mt-4 btn btn-primary position-relative">Notificaciones <span class="badge position-absolute bg-danger top-0 start-100 translate-middle rounded-pill p-2"><span class="visually-hidden">99+</span></span></button>

      <span class="badge bg-success">Éxito</span>
      <span class="badge bg-danger">Error</span>

      <span class="badge bg-success rounded-pill">Éxito</span>
      <span class="badge bg-danger rounded-pill">Error</span>
    </div>
  </body>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
</html>
```

Pueden ser como titulos:

![image](https://user-images.githubusercontent.com/72580574/206560065-db32a432-d538-4136-8ca0-a0aa17e94cf2.png)

Como botones:

![image](https://user-images.githubusercontent.com/72580574/206560115-fd7e0ad0-d9aa-478e-9042-c9eabc9fef3d.png)


Le puedo dar colores

![image](https://user-images.githubusercontent.com/72580574/206560182-a18a6687-470e-45f3-a4dd-32a5b23ad14f.png)


Y con forma de pildoras

![image](https://user-images.githubusercontent.com/72580574/206560243-bc1621cb-c948-4076-9efb-069b99773c08.png)




---

## :star: 13 - Progress

:tv: -> [Documentacion](https://getbootstrap.com/docs/5.2/components/progress/#how-it-works)


progress.html:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Progress Bars</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container py-4">
      <div class="progress">
        <div class="progress-bar" style="width: 39%">39%</div>
      </div>
      <div class="progress mt-4" style="height: 2px">
        <div class="progress-bar" style="width: 87%"></div>
      </div>
      <div class="progress mt-4">
        <div class="progress-bar bg-success" style="width: 18%"></div>
        <div class="progress-bar bg-danger" style="width: 9%"></div>
      </div>
      <div class="progress mt-4">
        <div
          class="progress-bar bg-warning progress-bar-striped progress-bar-animated"
          style="width: 56%"
        ></div>
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

Son las barras de progreso

![image](https://user-images.githubusercontent.com/72580574/206560610-4eff1ba7-8842-44a4-b3f4-436393164cf9.png)


```HTML
<div class="progress">
  <div class="progress-bar" 
       role="progressbar" 
       aria-label="Basic example" 
       aria-valuenow="0" 
       aria-valuemin="0" 
       aria-valuemax="100">
  </div>
</div>
```

Le puedo agregar un label

![image](https://user-images.githubusercontent.com/72580574/206560800-15ae8c39-0bae-4321-955d-e93b7ed9319f.png)


```HTML
<div class="progress">
  <div class="progress-bar" 
       role="progressbar" 
       aria-label="Example with label" 
       style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    25%
  </div>
</div>
```

Se le puede modificar la altura, el color de fondo, etc.

![image](https://user-images.githubusercontent.com/72580574/206561005-78249432-0d5a-4172-b3c3-4ff74b18d741.png)


Puedo utilizar varias juntas:

![image](https://user-images.githubusercontent.com/72580574/206561062-c5a78493-3b6f-4af7-b5a0-400299d48fb0.png)


```HTML
<div class="progress">
  <div class="progress-bar" 
       role="progressbar" 
       aria-label="Segment one" 
       style="width: 15%" aria-valuenow="15" aria-valuemin="0" 
       aria-valuemax="100"></div>
  <div class="progress-bar bg-success" 
       role="progressbar" 
       aria-label="Segment two" 
       style="width: 30%" aria-valuenow="30" 
       aria-valuemin="0" 
       aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" aria-label="Segment three" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

Pueden tener rayas

![image](https://user-images.githubusercontent.com/72580574/206561237-62be1f79-0c92-4b09-b309-beeb93ee5f5d.png)


Y ser animadas

---

## :star: 14 - Tipografia en Bootrstrap

Todo lo que le podemos aplicar a los textos

tipografia.html
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tipografía</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container py-4">
      <h1>Este es un h1</h1>
      <h2>Este es un h2</h2>
      <h3>Este es un h3</h3>
      <h4>Este es un h4</h4>
      <h5>Este es un h5</h5>
      <h6>Este es un h6</h6>

      <p class="h1">Esta es una <small class="text-muted">clase h1</small></p>
      <p class="h2">Esta es una clase h2</p>
      <p class="h3">Esta es una clase h3</p>
      <p class="h4">Esta es una clase h4</p>
      <p class="h5">Esta es una clase h5</p>
      <p class="h6">Esta es una clase h6</p>

      <h1 class="display-1">Display 1</h1>
      <h2 class="display-2">Display 2</h2>
      <h3 class="display-3">Display 3</h3>
      <h4 class="display-4">Display 4</h4>
      <h5 class="display-5">Display 5</h5>
      <h6 class="display-6">Display 6</h6>

      <p class="lead">Vivamus <mark>eleifend</mark> odio magna, at convallis justo consectetur eu.</p>
      <p class="lh-base">
        <del>Morbi posuere, risus a porttitor tempor, sapien sem viverra tellus, non
        volutpat enim tellus non nunc.</del> Ut imperdiet diam leo, non luctus quam
        efficitur id. <small>Etiam id est massa.</small> Donec libero risus, varius a massa
        vitae, fringilla aliquam justo. <strong>Donec cursus id elit in fermentum.</strong>
        <em>Suspendisse sodales velit venenatis viverra pulvinar.</em> Donec leo enim,
        posuere et magna sit amet, venenatis mollis ante. Proin malesuada
        accumsan ultrices. <abbr title="Mauris congue maximus quam">Maur</abbr>, <abbr title="Mauris congue maximus quam" class="initialism">Maur</abbr> tristique molestie lorem
        imperdiet in. Maecenas molestie dui aliquet, ornare erat ac, fermentum
        nisi. <blockquote class="blockquote">Donec nulla enim, pulvinar sed posuere a, dapibus sit amet turpis.</blockquote>
        <figcaption class="blockquote-footer">
            Cervantes <cite title="Don Quijote de la Mancha">de Saavedra</cite>
          </figcaption>
        Nunc lacinia, eros pellentesque interdum tincidunt, lectus felis
        vulputate mi, pellentesque hendrerit metus metus sed massa. Suspendisse
        potenti. <span class="font-monospace">In consectetur aliquet nisi eu laoreet.</span> Praesent sagittis,
        dolor in mollis ornare, turpis turpis elementum nunc, sit amet gravida
        mi nibh ut neque.
      </p>

      <p class="text-end text-sm-center text-md-start">Este es un texto responsive</p>

      <p>
          Este es un párrafo donde vamos a tener una lista.
          <ul class="list-inline">
              <li class="list-inline-item">Elemento 1</li>
              <li class="list-inline-item">Elemento 2</li>
              <li class="list-inline-item">Elemento 3</li>
          </ul>
      </p>

      <p class="w-25 text-nowrap bg-light">Este es un texto muy largo etc etc</p>

      <p class="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>

      <p class="text-lowercase">Texto en MiNÚSCULAS</p>
      <p class="text-uppercase">texto en mayúsculas</p>
      <p class="text-capitalize">texto capitalizado</p>


      <p class="fs-1 fw-light">fs-1</p>
      <p class="fs-2">fs-2</p>
      <p class="fs-3">fs-3</p>
      <p class="fs-4">fs-4</p>
      <p class="fs-5">fs-5</p>
      <p class="fs-6">fs-6</p>

      <a href="#">Este es un enlace normal</a>
      <a href="#" class="text-reset">Este es un enlace sin color</a>
      <a href="#" class="text-reset text-decoration-none">Este es un enlace sin subrayado</a>

    </div>
  </body>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
</html>
```

---

## :star: 15 - Ejercicios


Crea un nuevo documento HTML con el título "Elementos de Interés en Bootstrap"

- Utilizando la página oficial getboostrap.com, añade la última versión de Bootstrap a este documento HTML

- Crea tres secciones

- En la primera sección crea un Jumbotron replicando el que realizamos en el vídeo

-El botón de llamada a la acción debe abrir una ventana modal

- En la segunda sección crea un formulario de contacto con los campos "nombre" (text), "teléfono" (number) y mensaje (textarea)

- En la tercera sección crea una tarjeta con tu perfil de desarrollador/a que contenga lo siguiente

-Tu nombre en el título

-Una breve descripción

-Tu email en el footer

:tv: -> En la carpeta [**entrega**](https://github.com/eugenia1984/open_bootcamp/edit/main/02_html_css/12_bootstrap_elementos/entrega) se puede ver el codigo

