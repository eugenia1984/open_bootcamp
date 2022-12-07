# :star2:  Bootstrap

---

## :book: Temas:

```
1 - Incluyendo Bootstrap en nuestro proyecto
2 - Estilos y animaciones de Bootstrap
3 - Ejercicio
```

## :star: 1 - Incluyendo Bootstrap en nuestro proyecto

:tv: Link a la documentación oficial: [**https://getbootstrap.com/**](https://getbootstrap.com/)


Ya nos trae un template base para utilizar con los links al CDN:

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  </body>
</html>
```

- Otro modo es en tu plantilla importar:

CSS:
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
```

JavaScript:
```
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
 ```

Otro modo es  bajarse todos los archivos y agregarlo al proyecto localmente, sin CDN

- Un ex empleado de Twitter con otros desarrolladores la crearon, muchas páginas webs la utilizan, inclusive la de la NASA.

- Hay distintas versiones de Bootrstrap


---

## :star: 2 - Estilos y animaciones de Bootstrap

Hace muy rápido el diseño por su sistema de **layout** que combina **flex** y **grid**.

Tiene [**breakpoints**](https://getbootstrap.com/docs/5.2/layout/breakpoints/#available-breakpoints) para el responsive y diseñar todo **mobile first** sin necesidad de utilizar las **media queries*:

![Bootstrap Breakpoints](https://user-images.githubusercontent.com/72580574/206275066-f8c00644-6341-4981-9211-af725a9bde2f.png)

Por medio de SASS se puede customizar, lo cual no es tan recomendable porque puede ocasionar inconveneintes en otros diseños que lo usan.

Otra ayuda son los [**container**](https://getbootstrap.com/docs/5.2/layout/containers/#default-container)

![clase container de bootstrap](https://user-images.githubusercontent.com/72580574/206275719-ac6b0ccd-e076-4008-a596-184bbc709acc.png)

Pueden ser **responsive** (el que viene por default) ó **fluid**.


El [**grid system**](https://getbootstrap.com/docs/5.2/layout/grid/#example) divide el layout en 12 columnas. con las clases: **container**, **row** y **col** puedo ir haciendo el layout.

![image](https://user-images.githubusercontent.com/72580574/206276643-e5205bbd-6aca-4ad9-94e8-447f48d9ad91.png)


En la misma web hay ejemplo con codigo, como por ejemplo:

![Bootstrap grid system](https://user-images.githubusercontent.com/72580574/206276484-33f5980d-f2d2-457b-92a7-14ea0e0e2780.png)


---

##  :star: 3 - Ejercicio

---
