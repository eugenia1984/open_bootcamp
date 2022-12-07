# :star2: Animaciones

---

## :book: Temas:

```
1 - Animaciones y Transiciones
2 - Tooltips
3 - Ejercicios
```

---

## :star: 1 - Animaciones y Transiciones

Para practicar creamos [animaciones.html](https://github.com/eugenia1984/open_bootcamp/blob/main/02_html_css/09_animaciones/animaciones.html):

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animaciones</title>
    <link rel="stylesheet" href="animaciones.css">
</head>
<body>
    <div class="padre">
        <div class="hijo"></div>
    </div>
</body>
</html>
```

Con su CSS [animaciones.css](https://github.com/eugenia1984/open_bootcamp/blob/main/02_html_css/09_animaciones/animaciones.css):

```CSS
.padre {
    width: 400px;
    height: 400px;
    background-color: blue;
}

.hijo {
    width: 50%;
    height: 50%;
    background-color: beige;
    /* transition: transform 1s ease-in 2s; */
    animation: traslacion 4s ease-in-out infinite forwards alternate;
}

.padre:hover .hijo {
    /* transform: translateX(100%);
    background-color: blueviolet; */
    animation-play-state: paused;
}

@keyframes traslacion {
    0% {
        background-color: beige;
        transform: translateX(0%) translateY(0%);
    }
    25% {
        transform: translateX(100%) translateY(0%);
    }
    50% {
        transform: translateX(100%) translateY(100%);
    }
    75% {
        transform: translateX(0%) translateY(100%);
    }
    100% {
        background-color: darkorange;
        transform: translateX(0%) translateY(0%);
    }
}
```
---

## :star: 2 - Tooltips


Para practicar cree [tooltip.html](https://github.com/eugenia1984/open_bootcamp/blob/main/02_html_css/09_animaciones/tooltip.html):

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tooltip</title>
    <link rel="stylesheet" href="tooltip.css">
</head>
<body>
    <button class="btn-tooltip">Buscar
        <span class="tooltip">Hace una búsqueda de tu crush</span>
    </button>
    <div class="triangulo"></div>
</body>
</html>
```

Y el CCSS en [tooltip.css](https://github.com/eugenia1984/open_bootcamp/blob/main/02_html_css/09_animaciones/tooltip.css):

```CSS
body {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.btn-tooltip {
    position: relative;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: green;
    color: white;
    border-bottom: 2px solid darkgreen;
    cursor: pointer;
    transition: background-color 150ms;
}

/* .btn-tooltip:hover::before {
    content: "Esto es un tooltip";
} */

.tooltip {
    position: absolute;
    /* visibility: hidden; */
    opacity: 0;
    top: -50px;
    left: -100%;
    transform: translateX(25%);
    color: #ddd;
    background-color: #333;
    padding: 5px 10px;
    border-radius: 5px;
    transition: opacity 150ms;
}

.btn-tooltip:hover {
    background-color: rgb(0, 100, 0);
}

.btn-tooltip:hover .tooltip {
    /* visibility: visible; */
    opacity: 1;
}

.tooltip::before {
    content: '';
    border: solid 10px transparent;
    border-top-color: #333;
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
}

/* .triangulo {
    border: solid 10px transparent;
    border-top-color: #333;
} */
```

![image](https://user-images.githubusercontent.com/72580574/206285115-2bb53e55-7c3b-4ea3-be6e-0327778e2fd8.png)


---

## :star: 3 - Ejercicios


Crea un nuevo documento HTML con el título "Animaciones y transiciones en CSS"

- Crea un nuevo fichero CSS e impórtalo en el documento HTML principal

- En el body crea un botón con el atributo class "btn-modern"

- Implementa las líneas necesarias en el CSS para que cuando el ratón pase por encima del botón ocurra lo siguiente (hover):
```
El botón se traslade -5px en el eje de las Y
Se añada una sombra
El color de fondo del botón cambie
El color del texto cambie
Todo esto con una transición de 0.4s
```

---
