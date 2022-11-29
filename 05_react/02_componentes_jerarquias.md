# <img src="https://img.icons8.com/office/40/null/react.png"/>  Componentes y jerarquía

---

## :book: Temas

```
- 1 Entendiendo los Componentes
- 2 Componentes puros
- 3 Extensiones para trabajar con React en Visual studio Code
- 4 Crear nuestro primer componente de tipo clase
- 5 Crear un componente de tipo función
```

---

## :star: 1 - Entendiendo los Componentes

Los **componentes** son**elementos reutilizables**, pueden ser **totalmente estáticos** (no tiene variable) o **componentes reactivos** (ser dinamicos, con renderizados condicionales, etc).

Son **autocontenidos** y pueden tener relaciones con otros componentes.

En nuestra carpeta **src** vamos a crear la carpeta **components**. 

---

## :star:  2 - Componentes puros

Un componente de React es puro si genera la misma salida para el mismo estado y accesorios. Para los componentes de clase pura de React, React proporciona la clase base PureComponent. Los componentes de clase que amplían las clases React.

Los componentes puros no tienen estado.

---

## :star:  3 - Extensiones para trabajar con React en Visual studio Code

- Debugger for Chrome / Debugger for Firefox

- Babel JavaScript

- Better comments

- Bootrstrap

- Bracket Pair Colorizer

- CodeStream

- Color Highlight

- ES7React/Redux/graphQL/React-Native snippets

- ESLint

- Firebase

- Image preview

- Jest

- Jest Test Explorer

- JS JSX Spinnets

- Material Icon Theme

- npm

- npm Intellisense

- Path Intellisense

- Version Lens

- Live Share

---

## :star:  4 - Crear nuestro primer componente de tipo clase

- Dentro de **src** > **componentes** creamos **pure** para crear los componentes puros: nuestro primer componente **Geeting.jsx**

```
> src
  > components
    > pure
      Greeting.jsx
```

Va a ser un componente de tipo **clase**

```rcc``` -> es el shortcut **react class component**

```rccp``` -> componente de clase con los prop types aparte

```rcfc``` -> tiene para el componente de clase con todas las funciones para el ciclo de vida del componente


```JSX
import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
  render() {
    return (
      <div>
        <h1>Hola</h1>
      </div>
    )
  }
}

Greeting.propTypes = {
};

export dafault Greeting;
```


-> Desde la version 17 en adelante noo es necesario importar **React**

-> **Component** es una clase que tiene el método **render** el cual debe tener un **return** con el HTML que se renderizará. Recordar que se puede devolver solo un elemento, no puedo tener elementos hermanos, si es asi debo envolver todo en un div o un **fragment**.

-> **propTypes** es el contenido que le puedo pasar a un componente desde un componente de orden superior

- Ahora vamos a renderizar nuestro componente:

1. Volvemos a **App.js**

2. Dentro del return agrego mi **componente**: ```<Greeting />```. Si necesito hacer un comentario, en JSX es asi: 
```JSX 
{/*  Aca va el comentario */} 
```
O sea, **ceamos una nueva instancia de la clase Greeting**.

3. Para poder utilizarlo debo **importarlo**:  ```import Greeting from "./components/pure/Greeting"; ``` 


- Al ser un **componente de clase** puede tener su **método constructor** el cual puede recibir por parámetro las **props** (los atributos de la clase):

```JSX
import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {

  constructor(props) {
    super(props) // para poder usar las props del componente padre
    this.state = { // informacion privada del componente 
      age: 29
    }
  }

  render() {
    return (
      <div>
        <h1>Hola {this.props.name}!</h1>
        <h2>Tu edad es de: {this.state.age}</h2>
      </div>
    )
  }
}

Greeting.propTypes = {
};

export dafault Greeting;
```

-> La **age** es un estado, interno, por eso si lo puedo ver.

-> La prop de **name** debe recibirla, debe ser pasada por el componente padre. Volvemos a App.js: ```<Greeting name={"Eugenia"} />``` y ahora si se va a ver el nombre.

-> Las **props** son los atributos de las etiquetas HTML, les puedo pasar el src de una imagen, el texto para el alt de una imagen, el texto de un poton, la clase, etc.

![image](https://user-images.githubusercontent.com/72580574/204648563-7b92622a-7c60-42d3-91a2-8a5781426e6c.png)

-> Los **propTypes** deben tener definido el tipo de dato que serán, por eso aclaramos que son **String**, podrian ser: **node**, **object**, **bool**, **func**, **array**, **element**, **Exact**, **oneOf** (lista de elemento), **any**, con esto tipamos la estructura de la prop.

```JSX
Greeting.propTypes = {
  name: PropTypes.string,
};
```

-> El **estado** de un componente es **privado** e **inmutable**, solo se puede modificar a través del **setState**. Para ver esto nos vamos a crear el cumpleaños para modificar la edad y agregar un año. Usamos las **arrow function** ara tener asociada **this** con la **clase** y no con las props que pasamos; usamos **this.setState()** para modificar el estado, va a recibir por parametro **estado** y **callback** a ejecutar. Como necesitamos sumar un año vamos a recibir el **prevState**, es decir el estado previo.

-> Un **nuevo estado** genera una **renderización del componente**.

```JSX
birthday = () => {
    this.setState((prevState) => (
      {
        age: prevState.age+1
      }
    ))
  }
 ```
 
 Ahora para poder hacer ese cambio de estado necesito un **Evento** para loq ue agregamos el boton de *Cumplir años** y la hacer click activamos el evento **onClick**:
 
 ```JSX
 <div>
     <button onClick={this.birthday}>Cumplir años</button>
 </div>
```
 ![image](https://user-images.githubusercontent.com/72580574/204651369-85580cb8-9a5e-4673-b59c-ab0bf5694248.png)



---

## :star:  5 - Crear un componente de tipo función

Ahora creamos el componente funcional, el cual va a tener **hooks** y el desarrollo es mucho más fácil.

Ahora al ser una **función** no vamos a tener al **constructor** por lo cual los **estados** los vamos a manejar con los **hooks**, en esta caso el **useState**, el cual tiene la sigueinte estructura:

``` const [ variable, metodo_para_actualizar ] = useState ( valor_inicial)```

Y voy a tener mi arrow function **birthday** para actualizar la edad.

![image](https://user-images.githubusercontent.com/72580574/204654357-25049f05-9603-4cf2-b165-349d2352bc25.png)

-> El componente funcional es mucho mas sencillo, es un callback que se puede llamar en cualquier momento. Además hay varios **hooks** que nos ayudan.

---
