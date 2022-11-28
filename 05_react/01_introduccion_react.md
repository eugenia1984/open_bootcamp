# <img src="https://img.icons8.com/office/40/null/react.png"/>  Introducción

---

## :book: Temas

```
- 1 ¿ Qué es una SPA?
- 2  ¿Qué es ReactJS ?
- 3  Comparativa entre Reactjs / Vue / Angular 
- 4  Principales ventajas de React
- 5  Instalación
- 6  Creación de proyecto
- 7   Instalación de chrome react devtools
- 8  Archivos .jsx
- 9  Estructura del proyecto app
- 10  Componente principal
```

---

## :star: 1 ¿ Qué es una SPA?

Una web SPA (**Single Page Application**) es una forma de desarrollo web en la que la página web está contenida en un único archivo HTML.

Mientras navegamos por la web, se irán solicitando los contenidos al servidor.

De esta forma mejoramos los tiempos de respuesta y, por tanto, la experiencia de usuario.

---

## :star: 2 ¿Qué es ReactJS ?

**ReactJS** es una **librerçia** de JavaScript para crear interfaces de usuario.

Así es como se define desde su [página oficial: https://reactjs.org/](https://reactjs.org/), a la que probablemente vamos a ir viendo a lo largo del curso.

También está [la version beta: https://beta.reactjs.org/ ](https://beta.reactjs.org/)

Esta librería, **que no es framework** fue creada por Facebook en 2013 y sigue siendo mantenida por Facebook.

Pero no solo es una libraría de Facebook: una de sus características más interesantes es que es de **código abierto**, lo que implica que existen numerosas comunidades por toda la red que aportan información y ayuda día a día, tanto para los usuarios como lara mejorar React.

### Característias:

- **velocidad**: un motor de renderizado rápido, tenemos una estructura de vista y controlador juntos en JSX, se puede reutilizar el contenido. 

Uno de los aspectos que más destacan de React es su **Velociddad de renderizado**.

esto lo consigue trabajando sobre un **Dom virtual** sobre el que aplica los cambios que sufra la aplicación y luego actualiza **únicamente** los elementos que se hayan modificado.

- **componentes**: seccionamos la aplicación en pequeños bloques reutilizables, pueden ser toda una pagina o algo pequeño como un botón.

Los componentes permiten separar la **interfaz de usuario (UI)** en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.

Al trabajar con componentes estamos forzando a nuestro desarrolo a ser más mantenible.

React nos proporciona varios tipos de componentes (puros, de contenedor, de clase, de función, etc) con los que facilitar su reutilización en todos nuestros proyectos, tanto dentro como entre ellos.

Es muy **modularizable**.

Se les puede pasar información por medio de **props**

- **Desarrollo declarativo**: React sigue el **paradigma de desarrollo declarativo*.

Las aplicaciones que creemos estarán formadas por componentes. Tanto la aplicación global como cada componente tine un estado propio, y es por este motivo que React es declarativo.

- **anidación de componentes**: hay un árbol jerárquito tenemos por encima a **App.js** y debajo los componentes hijos, a los cuales les pasan información.

Los componentes pueden ser **anidados** de forma que los componentes de **orden superior** propagan datos a los de **orden inferior**.

La comunicación entre ellos es **unidireccinal** y se usan los **eventos** para que los componentes inferiores sean **reconocidos** por los de orden superior.

-> De arriba hacia abajo se pasa **información** / **datos** a través de **props**

-> De abajo hacia arriba se manejan los **eventos**

- **isomorfismo**: React permite el isomorfismo, tambiçen conocido como JavaScript Universal, capacidad con la que podemos renderizar tanto en **Servidor** como en **cliente**.

Esto hace que solucione problemas y mejore el **posicionamiento**.

- **agilidad de desarrollo**: create-react-app

---

## :star:  3 - Comparativa entre Reactjs / Vue / Angular 


| Libreria / Framework | Año | Creador/es | Lenguajes |
| -------------------- | --- | ---------- | --------- |
| React | 2013 | Facebook | JS y TS |
| Angular | 2010 | Google | TS |
| Vue | 2013 | Comunidad | JS y TS |

---

## :star:  4 - Principales ventajas de React

El más complicado es Angular, su curva de aprendizaje es la más empinada. React y Vuejs son librerías mucho más ligeras.

Angular es un framework muy grande y crea soluciones enormes, a veces difíciles de mantener. Reactjs y Vuejs ofrecen componentes.

---

## :star: 5 - Instalación

Como en la mayoría de aplicaciones con JavaSCript, para trabajar con React haremos uso de [**Nodejs**](https://nodejs.org/en/) y su [**npm**](https://www.npmjs.com/) (Node Package Managment, el entorno de ejecución más conocido de JavaScript.

Está basado en el uso de **eventos asíncronos** y en el destaca el uso de **HTTP**, lo que lo hace perfecto para trabajar con librerías o frameworks web.

---

## :star: 6 - Creación de proyecto

Vamos a utilizar [**create-react-app)(https://www.npmjs.com/package/create-react-app).

Para instalarlo: ```npm i -g create-react-app``` ó ```npm install -g create-react-app```, ```-g``` para instalarlo de manera global, para Linux y Mac utilizar ```sudo npm install -g create-react-app```.


Como ya lo instalamos, podemos usarlo para crear el proyecto:

1. crear una carpeta donde tendre mi proyecto de react

2. Ya dentro de la carpeta creada: ```npm create-react-app my-app```, donde ```my-app``` es el nombre que yo desee ponerle a la aplicación (siempre en minuscula, sin espacios, puedo usar - para separar palabras). En el caso de que no queremos instalarla localmentte en vez de usar ```npm``` utilizamos ```npx create-react-app my-app```.

---

## :star: 7 -  Instalación de chrome react devtools


---

## :star: 8 - Archivos .jsx


---

## :star: 9 - Estructura del proyecto app


---

## :star: 10 - Componente principal
