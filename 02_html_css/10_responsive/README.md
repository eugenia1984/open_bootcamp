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

El que tiene el fondo rojo tiene la medida con **%**, va a depender del tamaño del elemento padre

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

- Como **Apple** tiene su pantalla con **retina**, cada pixel fisico equivale a 2px lógicos, la escala es de 2, por esto es mejor basarnos en los **em** o los **rem**, asi es responsive en todas las pantallas.

- **em** hace referencia la tamaño de fuente del contenedor, si quiero que se modifique solo en un contenedor.

- **rem** hace referencia al tamaño de la raiz, la podemos definir en la fuente al determinarle un tamaño.


![image](https://user-images.githubusercontent.com/72580574/206293513-051969dd-722e-45e4-8cf4-fda55a9f5e02.png)

---

## :star: 3 - Media Queries

mediaqueries.html:
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Queries</title>
    <link rel="stylesheet" href="mediaqueries.css">
</head>
<body>
    <h1>Título</h1>
    <p>Este es un párrafo</p>
</body>
</html>
```

mediaqueries.css:
```CSS
h1 {
    color: red;
    font-size: 4rem;
}

p {
    color: black;
    font-size: 2rem;
}

/* @media all and (max-width: 576px) { */
/* @media (max-width: 576px) {
    h1 {
        color: blue;
    }
} */

@media (min-width: 576px) {
    h1 {
        color: green;
    }
}

@media (min-width: 995px) {
    h1 {
        color: blue;
    }
}

@media (orientation: landscape) and (min-height: 400px) {
    p {
        color: brown;
    }
}

@media (min-height: 300px), (min-width: 1100px) {
    h1 {
        color: darksalmon;
    }
}
```


![image](https://user-images.githubusercontent.com/72580574/206295175-b346404e-8183-4d04-8537-6b2d75e6edfe.png)


![image](https://user-images.githubusercontent.com/72580574/206295236-30923501-339c-4306-89a7-2dc00ccad39f.png)


```@media screen``` -> para las pantallas

```@media print``` -> para cuando se imprime

```@media speech```

Puede ir variando acorde al **ancho**, **alto** o la **orientacion** (landscape - horizontal-).

También se pueden ir anidando condiciones.

---

## :star: 4 - Uso avanzado de Flex Box


flexbox.html:
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="flexbox.css">
    <title>FlexBox</title>
</head>
<body>
    <div class="contenedor">
        <div class="item item1">Item 1</div>
        <div class="item item2">Item 2</div>
        <div class="item item3">Item 3</div>
        <div class="item item4">Item 4</div>
    </div>
</body>
</html>
```

flexbox.css:
```CSS
/* https://codepen.io/enxaneta/full/adLPwv */

.contenedor {
    background-color: yellow;
    padding: 0.5rem;
    display: flex;
    gap: 0.5rem;
    min-height: 5rem;
    /* Eje principal */
    justify-content: space-around;

    /* Eje secundario */
    align-items: center;

    /* flex-direction: column; */

    flex-wrap: wrap;
}

.item {
    background-color: salmon;
    padding: 0.25rem;
    width: 10rem;
}

.item2 {
    align-self: stretch;
}
```

Tenemos el **container** (el contenedor) y los **hijos**.

Al **container** le damos **display=flex** para poder aplicar flex box. Por default los ubica en **flex-direction:columns**, lo puedo cambiar a **row**

![image](https://user-images.githubusercontent.com/72580574/206299191-5a71bfc2-d874-440d-a43a-f082ec3e76ae.png)

Si al contenedor le damos un alto fijo los hijos van a adaptarse:
![image](https://user-images.githubusercontent.com/72580574/206299268-33ba4971-c25d-48c5-a243-f33bc49d94eb.png)

Hay dos ejes: **eje principal**(**main**) y el secundario, están va a ir variando acorde al **flex-direction** que le damos, si va como column(eje principal Y) o row(eje principal X).

Para acomodarlos según el **eje principal** tenemos: ```justify-content```

![image](https://user-images.githubusercontent.com/72580574/206301475-a23af4ab-6c1f-48f3-9bc4-aff3612e67c7.png)


![image](https://user-images.githubusercontent.com/72580574/206299658-42d2508b-0151-4a30-8547-a2ab37b9be6c.png)

[Link a documentación de w3schools](https://www.w3schools.com/cssref/css3_pr_justify-content.php)


Para acomodar según el **eje secundario** tenemos: ```align-items```

![image](https://user-images.githubusercontent.com/72580574/206299778-b160057b-93a6-419c-a960-86d0db2e079d.png)

Para hacer una disposición particular a un solo elemento: ```align-self``` ó ```justify-self```


```flex-wrap ``` si se v aa envolver acorde a lo que mida el contenedor o no.

:tv: -> [Para practicar en codepen](https://codepen.io/enxaneta/full/adLPwv/)

---

## :star: 5 - Viewport, Grid y templates


grid.html:
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid</title>
    <link rel="stylesheet" href="grid.css">
</head>
<body>
    <div class="contenedor">
        <div class="item item1">1</div>
        <div class="item item2">2</div>
        <div class="item item3">3</div>
        <div class="item item4">4</div>
        <div class="item item5">5</div>
        <div class="item item6">6</div>
        <div class="item item7">7</div>
        <div class="item item8">8</div>
        <div class="item item9">9</div>
    </div>
</body>
</html>
```

grid.css:
```CSS
.contenedor {
    display: grid;
    gap: 0.5rem;
    /* column-gap: 0.1rem; */
    /* row-gap: 1rem; */
    /* grid-template-columns: auto auto auto; */
    /* grid-template-columns: repeat(3, auto); */
    /* grid-template-columns: 20px 3rem 25vw; */
    grid-template-columns: 1fr 1fr 3fr;
    grid-template-rows: 200px 5rem 100px;
    /* grid-template-areas: 'head head head' 'main main aside' 'footer footer footer'; */
}

.item {
    background-color: aquamarine;
    padding: 0.25rem;
    font-size: 2rem;
    border: solid 1px blue;
}

.item1 {
    /* grid-column: 1 / 3; */
    grid-column: 2 / span 2;
    /* grid-area: head; */
}

.item9 {
    /* grid-area: footer; */
    grid-area: 2 / 1 / 4 / 3;
    /* grid-area: filainicio / colinicio / filafin / colfin */
}
```

- Para tener 3 columnas

![image](https://user-images.githubusercontent.com/72580574/206307388-05e69559-0e2a-44ee-aa30-0fb3dde74781.png)

- Con el **gap** le doy espacio entre las filas y las columnas. Si quiero aplicar solo a las filas **row-gap** y si quiero solo a las columnas **column-gap**
 
 ![image](https://user-images.githubusercontent.com/72580574/206307716-57e69a62-047d-443d-8ed0-f6fe31bb658b.png)

- Si quiero hacer un grid que se repita: ```grid-template-column: repeat(4, auto);```

![image](https://user-images.githubusercontent.com/72580574/206307933-8f4b0c68-32d4-4a18-b16f-516bcbeb543b.png)

Puedo hacer que tengan distintos valores:

![image](https://user-images.githubusercontent.com/72580574/206308022-3abfcb5d-9264-41a2-9013-76500ec96a52.png)

Podemos usar como unidades a las **fr** (fracciones), tienee n cuenta toda la dimensión del grid y lo divide acorde a como indico con los fr.

![image](https://user-images.githubusercontent.com/72580574/206308117-b52fddfe-ff8d-4272-b0b7-95b3a0a0ab1e.png)

Así como tenenemos: ```grid-template-column``` también tenemos: ```grid-template-row```

![image](https://user-images.githubusercontent.com/72580574/206308285-27904d10-fb9d-49f4-831d-6edfd4259db9.png)

También podemos utilizar las **areas** con el ```grid-template-area```

Determino que el 1 sea el header y el 9 sea el footer

![image](https://user-images.githubusercontent.com/72580574/206308758-4a7d5520-4d10-4d40-b63a-0c645c6aab0b.png)

```grid-colum: 2 / 4``` para ubicarlos acorde a las columnas

```grid-colum: 2 / span 2;``` con span va a juntar

Esto mismo se puede hacer con ```grid-area``` en este caso indicamos +columna / fila / columan / fila*, desde la columna / fila donde empieza a la columna / fila donde termina.


---

## :star: 6 - Variables reutilizables en CSS

---

## :star: 7 - Ejercicio

---
