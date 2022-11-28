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

### Extensiones de VSC

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

## :star: 1 - Entendiendo los Componentes

Los **componentes** son**elementos reutilizables**, pueden ser **totalmente estáticos** (no tiene variable) o **componentes reactivos** (ser dinamicos, con renderizados condicionales, etc).

Son **autocontenidos** y pueden tener relaciones con otros componentes.

En nuestra carpeta **src** vamos a crear la carpeta **components**. 
---

## :star:  2 - Componentes puros

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
      </div>
    )
  }
}

Greeting.propTypes = {
};

export dafault Greeting;
```


-> Desde la version 17 en adelante noo es necesario importar **React**

-> **Component** es una clase que tiene el mçetodo **render** el cual debe tener un **return** con el HTML que se renderizará. Recordar que se puede devolver solo un elemento, no puedo tener elementos hermanos, si es asi debo envolver todo en un div o un **fragment**.

-> **propTypes** es el contenido que le puedo pasar a un componente desde un componente de orden superior.
---

## :star:  3 - Extensiones para trabajar con React en Visual studio Code

---

## :star:  4 - Crear nuestro primer componente de tipo clase

---

## :star:  5 - Crear un componente de tipo función
