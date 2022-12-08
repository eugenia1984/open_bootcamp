# :star2: Bootstrap - Grid


---

## :book: Temas:

```
1 - Sistema grid de Bootstrap
2 - Ejercicio
```

---

##: star: 1 - Sistema grid de Bootstrap


:tv: -> [Documentacion de Bootrstrap - Grid](https://getbootstrap.com/docs/5.2/layout/grid)


Lo vemos en codigo:

index.html:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap Grid</title>
    <link rel="stylesheet" href="grid.css" />
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
              <div class="col">col -> xs</div>
              <div class="col">col -> xs</div>
              <div class="col">col -> xs</div>
          </div>
          <div class="row">
              <div class="col-sm">col-sm</div>
              <div class="col-sm">col-sm</div>
              <div class="col-sm">col-sm</div>
          </div>
          <div class="row">
              <div class="col-md">col-md</div>
              <div class="col-md">col-md</div>
              <div class="col-md">col-md</div>
          </div>
          <div class="row">
              <div class="col-lg">col-lg</div>
              <div class="col-lg">col-lg</div>
              <div class="col-lg">col-lg</div>
          </div>
          <div class="row">
              <div class="col-xl">col-xl</div>
              <div class="col-xl">col-xl</div>
              <div class="col-xl">col-xl</div>
          </div>
          <div class="row">
              <div class="col-xxl">col-xxl</div>
              <div class="col-xxl">col-xxl</div>
              <div class="col-xxl">col-xxl</div>
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


grid.css:
```CSS
.row div {
    margin: 0.25rem;
}

.col {
    background-color: cyan;
}
.col-sm {
    background-color: red;
}
.col-md {
    background-color: yellow;
}
.col-lg {
    background-color: green;
}
.col-xl {
    background-color: blue;
}
.col-xxl {
    background-color: pink;
}
```

Con la vista dle dispositivo más grande

![image](https://user-images.githubusercontent.com/72580574/206529187-486e0ca5-ca14-4994-9810-f5526f11b23f.png)

Mientras vamos achicando y pasando a otor breakpoint más chico...

![image](https://user-images.githubusercontent.com/72580574/206529235-eecc4aff-231b-4cbe-bdbc-38a37669ec46.png)

... y más chico

![image](https://user-images.githubusercontent.com/72580574/206529292-5b2c593d-5765-4ce8-be0f-95ba7275fc36.png)


El sistema **grid** utiliza las filas (**row**) y las columnas(**col**) y para ser responsive utiliza los **breakpoint**:

- Extra small (xs)

- Small (sm)

- Medium (md)

- Large (lg)

- Extra large (xl)

- Extra extra large (xxl)


![breakpoint](https://user-images.githubusercontent.com/72580574/206528104-5e2ebaeb-eda9-4b9e-85d9-0331f394eed4.png)




---


##: star: 2 - Ejercicio

---
