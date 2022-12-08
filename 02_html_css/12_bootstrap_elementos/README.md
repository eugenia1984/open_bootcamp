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

## :star:  3 - Jumnotron

---

## :star:  4 - Alertas

---

## :star:  5 - Spinners

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


