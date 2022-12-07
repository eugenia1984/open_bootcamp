# :star2: Animaciones

---

##:book: Temas:

```
1 - Animaciones y Transiciones
2 - Tooltips
3 - Ejercicios
```

---

## :star: 1 - Animaciones y Transiciones

Para practicar creamos [animaciones.html](https://github.com/eugenia1984/open_bootcamp/blob/main/02_html_css/09_animaciones/animaciones.html):

```
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

---

## :star: 3 - Ejercicios

---
