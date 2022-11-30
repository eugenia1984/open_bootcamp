# :star: Los Hooks de React y e ciclo de vida

---

## :book: Temas

```
- 1 - Archivo .editorconfig
- 2 - ¿Qué son los hooks?
- 3 - Trabajando con el Hooks useState
- 4 - Ejemplo combinando hooks
- 5 - Ejemplo useContext()
- 6 - Ejemplo uso de props.children
- 7 - Esquema del ciclo de vida de los componentes
- 8 - Componente con métodos de ciclo de vida
- 9 - Diferencias entre métodos de lifecycle y hooks de lifecycle
- 10 - Ejemplo de DidMount
- 11 - Ejemplo de DidUpdate
- 12 - Ejemplo de WillUnMount
- 13 - Ejemplo con todo
- 14 - Puesta en práctica con los componentes del proyecto
- 15- Login form
```

---

## :star: 1 - Archivo .editorconfig

En la raiz dle proyecto creamos el archivo **.identorconfig**

.identorconfig:
```
indent_style = tab
end_of_line = lf
insert_final_newline = true
tab_width = 2
charset = utf-8
trim_trailing_whitespace = true
```

Para poder configurar el proyecto en cuanto a como escribimos el codigo.

- Desde las extensiones de VSC buscamos **EditorConfig**

indent_style = tab -> para identar

end_of_line = lf -> Para que al final de cada linea, con el salto final tengamos **lf** (ya que varia en Mac, Linux y Windows)

insert_final_newline = true

tab_width = 2 -> La cantidad de espacios por tab

charset = utf-8 -> Para que no tengamos errores al escribir en español y acepte los caracteres especiales

trim_trailing_whitespace = true -> Para sacarnos los espacios finales al final de cada linea

---

## :star: 2 - ¿Qué son los hooks?

- Hasta el 2018 - 2019 se utilizaban los componentes de clases. Y ahora ya tenemos los **componentes funcionales**

- Son funciones que simplifican los mecanismos para trabajar con **componentes funcionales**, son una función que devuelven JSX, y necesitamos un mecanismo que nos ayude a trabajar con los estados, referencias y contextos.


---

## :star: 3 - Trabajando con el Hooks useState

Creamos el primer hook en **Ejemplo1.jsx**:

![image](https://user-images.githubusercontent.com/72580574/204888490-6b288a7d-c4c5-441d-a309-f34d85c52f1c.png)


![image](https://user-images.githubusercontent.com/72580574/204888572-ee8f0366-1c65-46b0-ada0-40701ac0f79d.png)

- Vamos a utilizar el **useState** para **actualizar el estado**, su forma de utilizarlo es:

```const [nombreVariable, funcionParaCambiar] = useState(valorInicial)```

Con las **react Dev Tools** puedo ver como se va modificando el estado:

![image](https://user-images.githubusercontent.com/72580574/204889944-48dc0efe-beba-4b39-80d4-e2722e8c80ea.png)



---

## :star: 4 - Ejemplo combinando hooks

- **useState** para manejar los estados.

- **useEffect** para los cambios en las vistas y el ciclo de vida de un componente. REcibe como params: **callback**, **que va a estar veindo para cambiar** (este si no se pone se ejecuta siemre, si se aclara que estara viendo y se ejecuta solo cuando cambia lo indicado).

-  **useRef** para referenciar elementos dentro de la vista.
 
 Se ve así:
 
 ![image](https://user-images.githubusercontent.com/72580574/204892121-cb127dd8-f331-4dc8-bc43-9fa028a4488e.png)

- Caso 1 : solo cuando hay cambio en el contador1

```JSX
import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintos, cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1);
    }

    function incrementar2(){
        setContador2(contador2 + 1);
    }

    /**
    * UseEffect - Caso 1: Ejecutar SIEMPRE un snippet de código
    * Cada vez que haya un cambio en el estado del componente
    * se ejecuta aquello que esté dentro del useEffect()
    */

     useEffect(() => {
         console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
         console.log('Mostrando Referencia a elemento del DOM:');
         console.log(miRef);
     });

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
```

- Caso 2: solo cuando hay un cambio en Contador2:
```JSX
import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintos, cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1);
    }

    function incrementar2(){
        setContador2(contador2 + 1);
    }

    /**
    * UseEffect - Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1
    * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
    * En caso de que cambie contador2, no habrá ejecución
    */

     useEffect(() => {
         console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
         console.log('Mostrando Referencia a elemento del DOM:');
         console.log(miRef);
     }, [contador1]);

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
```

- Caso 3: cuando hay cambio en cualquiera de los dos contadores:
```JSX
import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintos, cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1);
    }

    function incrementar2(){
        setContador2(contador2 + 1);
    }

    /**
    * UseEffect - Caso 3: Ejecutar SOLO CUANDO CAMBIE CONTADOR1 o CONTADOR2
    * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
    * Cada vez que haya un cambio en contador 2, se ejecuta lo que diga el useEffect()
    */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
        console.log('Mostrando Referencia a elemento del DOM:');
        console.log(miRef);
    }, [contador1, contador2]);


    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
```

---

## :star: 5 - Ejemplo useContext()

- Hacemos el tercer componente que maneja hooks con **Ejemplo3.jsx**:

```JSX
/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

 import React, { useState, useContext } from 'react';

 /**
  * 
  * @returns Componente 1
  * Dispone de un conexto que va a tener un valor
  * que recibe desde el padre
  */
 
 const miContexto = React.createContext(null)
 
 const Componente1 = () => {
 
     // Inicializamos un estado vacio que va a rellenarse con los
     // datos del contexto del padre
     const state = useContext(miContexto);
 
     return (
         <div>
             <h1>
                 El Token es: {state.token}
             </h1>
             {/* Pintamos el componente 2 */}
             <Componente2></Componente2>
         </div>
     );
 }
 
 
 const Componente2 = () => {
 
     const state = useContext(miContexto);
 
     return (
         <div>
             <h2>
                 La sesión es: {state.sesion}
             </h2>
         </div>
     );
 }
 
 
 export default function MiComponenteConContexto() {
 
     const estadoInicial = {
         token: '1234557',
         sesion: 1
     }
 
     // Creamos el estado de este componente
     const [sessionData, setSessionData] = useState(estadoInicial);
 
     function actualizarSesion(){
         setSessionData(
             {
                 token: 'JWT123456789',
                 sesion: sessionData.sesion + 1
             }
         );
     }
 
 
     return (
         <miContexto.Provider value={sessionData}>
             {/* Todo lo que esté aquí dentro puede leer los datos de sessionData */}
             {/* Además, si se ectualiza, los componentes de aquí, también lo actualizan */}
             <h1>**** Ejemplo de useState() y useContext()****</h1>
             <Componente1></Componente1>
             <button onClick={actualizarSesion}>Actualizar Sesión</button>
         </miContexto.Provider>
     )
 }
```

- En vez de paar información a través de **props** lo hacemos a través de un **contexto**. Tenemos la **padre** que es el **Provider**

Empieza asi:

![image](https://user-images.githubusercontent.com/72580574/204899085-d7177ff7-02a5-4fbb-85bd-5c6ba9d6458e.png)

Y al hacer click se actualiza:

![image](https://user-images.githubusercontent.com/72580574/204899166-37b125b5-8ed0-44cd-99ca-b650cf505301.png)

---

## :star: 6 - Ejemplo uso de props.children

- Va a pintar los elementos que se le pasen desde el padre:

```JSX
<Ejemplo4 nombre="Euge">
  <h3>Contenido del props.children</h3>
</Ejemplo4>
```
Ejemplo4.jsx:
```JSX
import React from 'react';

const Ejemplo4 = (props) => {
  return (
      <div>
          <h1>*** Ejemplo de CHILDREN PROPS ***</h1>
          <h2>Nombre: { props.nombre }</h2>
          {/* props.children pintará por defecto
          aquello que se encuentre entre las etiquetas de apertura y cierre
          de este componente desde el componente de orden superio
          */}
          {props.children}
      </div>
  );
}

export default Ejemplo4;
 ```
 
![image](https://user-images.githubusercontent.com/72580574/204900896-dfd15f41-9316-419f-b857-75a84bd4dcab.png)


---

## :star: 7 - Esquema del ciclo de vida de los componentes

![image](https://user-images.githubusercontent.com/72580574/204886515-6adb9dee-b5e7-4230-adab-ad35058c1b5b.png)


### Tabla para entender Lyfecycle

|Métodos de Lifecycle|Hooks de LifeCycle|
| ------------------ | ---------------- |
| Introducido en versiones iniciales | Introducido en 2018 |
| Funciona con ES5 | Funciona con >ES6 |
| Incorporado en componentes de clase | Incorporado para componentes funcionales |
| Necesita de un constructor para inicialziar | No necesita constructor |
| Uso de THIS bindeado de la clase | No necesita THIS para ser usado |


**ciclo de vida** son funciones que se ejecutan de manera automática cuando el componente aparece, tiene un cambio, etc.

- **1er fase: montaje / mounting**

Al hacer una instancia de un componete, se llama al constructor, se inicia el **montaje** del componete, se **inicializa**.

Se actualiza el DOM virtual, con render o el return devuelve los elementos que se pasan a HTML

- **2da face: actualización / updating**

Hay un cambio de estado, o recibe nuevas props. Con **forceUpdate()** (fuerza la actualización) se actualiza la vista. Con el **setState()** tambien cambiamos el estado y el DOM.

- **3er fase: desmontaje / unmounting**

Cuando un componente desaparece, por ejemplo en un renderizado condicional. O en una SPA que va poniendo y sacando los componentes.


---

## :star:  8 - Componente con métodos de ciclo de vida

---

## :star: 9 - Diferencias entre métodos de lifecycle y hooks de lifecycle

---

## :star:  10 - Ejemplo de DidMount

---

## :star:  11 - Ejemplo de DidUpdate


---

## :star:  12 - Ejemplo de WillUnMount


---

## :star:  13 - Ejemplo con todo


---

## :star:  14 - Puesta en práctica con los componentes del proyecto


---

## :star:  15- Login form
