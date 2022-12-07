# :star2: Responsive

---

## :book: Temas:

```
1 - Unidades fijas y relativas
2 - Responsive y unidades em y rem
3 - Media Queries
4 - Uso avanzado de Flex Box
5 - Viewport, Grid y templates
6 - Variables reutilizables en CSS
7 - Ejercicio
```

---

## :star: 1 - Unidades fijas y relativas



unidades.html:
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unidades</title>
    <link rel="stylesheet" href="unidades.css">
</head>
<body>
    <h1>Unidades fijas y relativas</h1>
    <div class="escenario-1 escenario">
        <div class="px">200px</div>
        <div class="porcentaje">50%</div>
        <div class="view">50vw</div>
    </div>
    <div class="escenario-2 escenario">
        <div class="px">200px</div>
        <div class="porcentaje">50%</div>
        <div class="view">50vw</div>
    </div>
</body>
</html>
```

unidades.css:
```CSS
body {
    padding: 20px;
    margin: 0;
}
.escenario {
    margin: 10px 0px;
    border: 1px solid #ccc;
    padding: 10px;
}

.escenario-1 {
    width: 100%;
}
.escenario-2 {
    width: 50%;
}

.px {
    background-color: green;
    width: 200px;
}

.porcentaje {
    background-color: red;
    width: 50%;
}

.view {
    background-color: yellow;
    width: 50vw;
}
```
El que tiene fondo rojo tiene la medida fija con **px**.

El que toene el fondo rojo tiene la medida con **%**, va a depender del tamaño del elemento padre

El que tiene el fondo amarillo tiene la medida con **vw**, va a depender del tamaño del viewport (la pantalla).

- Si se ensancha la pantalla:

![image](https://user-images.githubusercontent.com/72580574/206291430-a4ef9ff1-a719-4b6f-a432-b6dfad62e03d.png)

- Si se achica la pantalla:

![image](https://user-images.githubusercontent.com/72580574/206291890-38e93880-fabc-4980-a5ac-d58e6fdf78e3.png)


---

## :star: 2 - Responsive y unidades em y rem

unidades-em.html:
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unidades EM y REM</title>
    <link rel="stylesheet" href="unidades-em.css">
</head>
<body>
    <div class="escenario-1 escenario">
        <div class="em">2em</div>
        <div class="rem">2rem</div>
    </div>
    <div class="escenario-2 escenario">
        <div class="em">2em</div>
        <div class="rem">2rem</div>
    </div>
</body>
</html>
```

unidades-em.css:
```CSS
.escenario {
    border: 1px solid #333;
    padding: 10px;
}

.escenario-1 {
    font-size: 32px;
}

.escenario-2 {
    font-size: 16px;
}

.em {
    font-size: 2em;
}

.rem {
    font-size: 2rem;
}
```

---

## :star: 3 - Media Queries

---

## :star: 4 - Uso avanzado de Flex Box

---

## :star: 5 - Viewport, Grid y templates

---

## :star: 6 - Variables reutilizables en CSS

---

## :star: 7 - Ejercicio

---
