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


---

## :star: 3 - Trabajando con el Hooks useState

Creamos el primer hook en **Ejemplo1.jsx**:

![image](https://user-images.githubusercontent.com/72580574/204888490-6b288a7d-c4c5-441d-a309-f34d85c52f1c.png)


![image](https://user-images.githubusercontent.com/72580574/204888572-ee8f0366-1c65-46b0-ada0-40701ac0f79d.png)

- Vamos a utilizar el **useState** para **actualizar el estado**, su forma de utilizarlo es:

```const [nombreVariable, funcionParaCambiar] = useState(valorInicial)```

Con las **react Dev Tools** puedo ver como se va modificando el estado:

![image](https://user-images.githubusercontent.com/72580574/204889944-48dc0efe-beba-4b39-80d4-e2722e8c80ea.png)


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

## :star: 4 - Ejemplo combinando hooks

---

## :star: 5 - Ejemplo useContext()


---

## :star: 6 - Ejemplo uso de props.children

---
