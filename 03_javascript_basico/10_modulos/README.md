## Librerías en Node y NPM y su utilización


Las **librerías** son un conjunto de utilidades que crean otros desarrolladores, y ls podemos utilizar en nuestros proyectos.

Con **npm** podemos instalarnos las librerías, las podemos actualizar, podemos ver la documentación, etc.

---

### Ejemplo con AXIOS

-> [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)

-> La instalamos con:

```npm i axios``` ó ```npm install axios```


### Creamos un nuevo proyecto y nos instalamos axios

1. Creamos un nuevo proyecto: ```npm init -y```

2. Vamos a **package.json** y agregamos: ```"type": "module",```

3. En **package.json** agregamos en **scrips**: ``` "start": "node index.js"```

4. Creamos el **index.js**

5. Necesitamos instalar axios para hacer llamadas a servicios externos: ```npm i axios```, me va a crear una carpeta con los archivos para las librerías y el **package-lock.json**. Lo importante es ver que en **node_modules**  amos a tener esas carpetas.

6. Si se instalo bien, dentro del package.json veo:
```JavaScript
"dependencies": {
    "axios": "^1.2.0"
  }
```

7. Vamos a utilizar **axios** para hacer la llamada a [https://pokeapi.co/](https://pokeapi.co/).

8. Para poder utilizar **axios** debemos **importarlo**: ```import axios from "axios";```. La forma vieja de llamarlo:
```JavaScript
//const axios = require('axios'); // legacy way
```

9. Y ahora hago la petición a la API:
```JavaScript
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
```

Para leer solo los datos utilizo el **.data**:

```JavaScript
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) { // handle success
    console.log(response.data);
  })
  .catch(function (error) { // handle error
    console.log(error);
  })
  .finally(function () { // always executed
    console.log("Finalizado");
  });
```

---

## Librerías interesantes

- dojo toolkit

- jQuery (ya quedo viejo, era una forma más sencilla de tratar el DOM)

- Google polimer

- D3 (Data Driven Documents)

- PixiJS

- Three.js, permite convertir el DOm en una aplicación en 3D.

- React.js

- Vue

- Socket.io, para utilizar web sockets

-> Recomendación, investigar un poco sobre las librerías, en el mismo curso de Opne Bootcamp tenemos el curso de React