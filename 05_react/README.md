
# <img src="https://img.icons8.com/office/40/null/react.png"/> React 

---

### Deploy:

:computer: -> [En este enlace pueden ver el proyecto de practica](https://github.com/eugenia1984/react_basico_open_bootcamp)

---

#### Temas:


- 1 - Introducción a React JS: [teoria](https://github.com/eugenia1984/open_bootcamp/tree/main/05_react/01_introduccion_react.md)

- 2 - Componentes y jerarquías: [teoria](https://github.com/eugenia1984/open_bootcamp/blob/main/05_react/02_componentes_jerarquias.md)

- 3 - Los hooks de React y el ciclo de vida:  [teoria](https://github.com/eugenia1984/open_bootcamp/blob/main/05_react/03_hooks.md)

- 4 - Estilos a un proyecto con React

- 5 - Manejo de eventos

- 6 - Depuración de código

- 7 - Buenas prácticas de estructuración de proyectos

- 8 - Aplicando renderizado condicional

- 9 - formularios

- 10 - Sistema de enrutado de React

- 11 - gestión avanzada de rutas

- 12 - Procesos asíncronos

- 13 - Peticiones HTTP con Axios

- 14 - Problema de gestión del estado de la aplicación

- 15 - Estados globales asíncronos

- 16 - Gestionando el estado con Hooks

- 17 - Introducción a webpack y configuración

- 18 - Build del proyecto

- 19 - Despliegue del proyecto

---

### <img src="https://img.icons8.com/color/48/null/project-management.png"/> Proyecto que haremos durante el curso

### ¿ Cómo estructuramos el proyecto ?

```
> src
  > components
      > container
      > pure
         > forms
  > hooks
  > models
  > pages
     > 404
     > auth
     > home
  > routes

```

- Los **components** **container** son de orden superior, renderizan a otros componentes de bajo nivel, tienen la logica y los datos.

- Los **components** **pure** y dentro tendremos **forms** para los formularios de login y registro.

- En **hooks** estarán todos los hooks.

- En **models** estructuramos los datos con los que trabajamos

- En **pages** las paginas a renderizar: **auth**(paginas de login), **home**, **404** (para setear y personalizar)

- En **routes** va a estar el enrutado.

Va a ser una app con un menú lateral y en la app tendremos un gestor de tareas:

![image](https://user-images.githubusercontent.com/72580574/204662528-734c0e2d-bac5-46ee-817e-0b5f8873f0aa.png)

---

### Ejercicios de práctica

:computer: Se ùeden ver todos en la carpeta [**entregas**](https://github.com/eugenia1984/open_bootcamp/tree/main/05_react/entregas)

1. **Ejercicios sesiones 1, 2 y 3**

Para este primer reto de programación en React vamos a poner en practica lo aprendido hasta ahora para crear dos componentes.

Cada uno de estos componentes tendrá sus propias características.

**Componente A**: Este componente va a tener disponer un **Contacto**(crea una clase para ello), que va a contar con las siguientes características:

-**Nombre**: que será un String.

-**Apellido**: también un String.

-**Email**: de nuevo un String.

-**Conectado**: será un booleano que nos indicará si la persona está conectada o no.

**Componente B**: Por otro lado, tenemos el componente B que va a recibir por **props** un **contacto** y va a poder **cambiar su estado de conectado a desconectado y viceversa**.

-Si el contacto está conectado, se debe mostrar: **Contacto En Línea**

-Si el contacto no está conectado, se debe mostrar: **Contacto No Disponible**


**Renderizado de componentes en la solución**:

- El Componente A debe ser renderizado dentro del componenet App.js del proyecto.

- El Componente B debe ser renderizado desde el componte A y recibir los props adecuadamente

*Recordatorio*: Haz uso de Proptypes adecuadamente

-> [Aca se puede ver el sandbox.io](https://codesandbox.io/s/determined-newton-dq2ebd)

