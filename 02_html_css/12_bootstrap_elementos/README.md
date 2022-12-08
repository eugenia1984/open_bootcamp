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

---

## :star: 6 - Tarjetas

---

## :star: 7 - Listas

---

## :star: 8 - Formularios

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


