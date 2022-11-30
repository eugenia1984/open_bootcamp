# :star: Los Hooks de React

---

## :book: Temas

```
- 1 - Archivo .editorconfig
- 2 - ¿Qué son los hooks?
- 3 - Trabajando con el Hooks useState
- 4 - Ejemplo combinando hooks
- 5 - Ejemplo useContext()
- 6 - Ejemplo uso de props.children
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

Son funciones que simplifican los mecanismos para trabajar con **componentes funcionales**, son una función que devuelven JSX, y necesitamos un mecanismo que nos ayude a trabajar con los estados, referencias y contextos.

- Creamos el primer hook en **Ejemplo1.jsx**:

```JSX
**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook y, además, poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre : 'Martín',
        email: 'martin@imaginagroup.com'
    }

    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL sean 
     * parte del estado del componente para así poder gestionar su cambio
     * y que éste se vea reflejado en la vista del componente.
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     * Función para actualizar el estado de persona en el componente
     */
    function actualizarPersona(){
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@imaginagroup.com'
            }
        )
    }


    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
```


### Ciclo de vida

![image](https://user-images.githubusercontent.com/72580574/204886515-6adb9dee-b5e7-4230-adab-ad35058c1b5b.png)


### Tabla para entender Lyfecycle

|Métodos de Lifecycle|Hooks de LifeCycle|
| ------------------ | ---------------- |
| Introducido en versiones iniciales | Introducido en 2018 |
| Funciona con ES5 | Funciona con >ES6 |
| Incorporado en componentes de clase | Incorporado para componentes funcionales |
| Necesita de un constructor para inicialziar | No necesita constructor |
| Uso de THIS bindeado de la clase | No necesita THIS para ser usado |



---

## :star: 3 - Trabajando con el Hooks useState

---

## :star: 4 - Ejemplo combinando hooks

---

## :star: 5 - Ejemplo useContext()


---

## :star: 6 - Ejemplo uso de props.children

---
