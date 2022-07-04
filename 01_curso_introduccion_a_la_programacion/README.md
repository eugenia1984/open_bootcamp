# :book: 1 - Curso Introduccion a la programacion

---
---

# 1. Programación. Variables y constantes

---

## :star:  1.1 - Historia de la programación

Empezó hace unos 100 años, pero empezamos con la década del 40, con el **sistema de codificación ENIAC** (sistema de instrucciones memotécnicas). 

Los lenguajes de programación comenzaban a tener tracción, en los 50's y 60's surgen otros, como **Cobol**, Fortranc, List. Y aparecieron evaluciones del lenguaje. 

BSPL, el precursor del lenguaje de programación **C** (kernel escrito en C en casi todos los lenguajes de programación, es tanto de alto como de bajo nivel).

Los lenguajes son algo vivo, y luego de **C**, en los 70's apareció **Pascal** (pero cae en declibe, **Delphi** deriva de Pascal).

Todos son **lengauajes de propósito general** : para hacer cualquier tipo de programa, se hace todos, no hay abstracción.

En los 80's surgen los **lenguajes de nicho** especializados en una o pocas tareas, no se utilizan para todo. Algunos son: **Ada** (en defensa y sistemas aeroespaciales), **Pearl** (en Unix y Linux, para trabajar con ficheros de textos, se basa en expresiones regulares), **PCL** (TK -tool kit- utiliza PCL).

En los 90's con *internet* tenemos lenguajes que combinan el **propósito general** como el **nicho**, por ejemplo: **Java** (fue para sistemas embebidos, sistema pequeño, ejecuta tareas específicos; pero luego se utilizó para muchas cosas más). Y con internet tenemos **JavaScript**, lenguaje de programación orientada al navegador (luego con **Node.js** está del lado del servidor también). Otro lenguaje que surje es **Python** (esta muy de moda para machine learning, inteligencia artificial, etc) y **PHP** (nace en 1995). También surge **Ruby** y **Lua** (para videos juegos).

Del 2000 al 2022, tenemos: **Action Script** (para animaciones 2D, era Flash, para baners webs y animaciones, dio pie a que HTML5 y JavaScript evolucionen a lo que son hoy), **C Sharp** (**.NET**), **Go** (para back end), **Swift** (para aplicaciones móviles), **Scala** (derivado de Java).

Desde el 2000 sale **Scratch** que es ideal para comenzar con logica de programación.

---

## :star:  1.2 Tipos de lenguajes de programación

Pueden ser...


... COMPILADO o INTERPRETADO:

- **Compilado**: que a partir del codigo se general un programa que el compilador lo ejecuta directamente a través del SO (Sistema Operativo). Se ejecuta nativamente.

Ventaja: va más rápido. Tiene máximo rendimiento.

Desventaja: para cada programa debo tener una versión acorde al compilador.

Por ejemplo: C y Go.


- **Interpretado**: parte de un codigo fuente, pero se compila a algo intermedio (**Bitecode**) lo que el procesador no entiende, por lo que se necesita un *interprete* (lee el codigo y lo ejecuta paso a paso).

Ventaja: Se escribe una sola vez y se corre en todos lados (la Java Virtual Machine funciona en todos lados). Tiene mayor portabilidad.

Desventaja: si bien el compilado es más ráìdo, no vale para todas las arquitecturas.

Por ejemplo: Java (Java Virtual Machine), Python, Pearl, PHP.


- **Hibrido**: lenguaje interpretado cuyo interprete es capaz de compilar al codigo nativo según le haga falta(Just in Time). Interpreta en cualquier plataforma.

... TIPADOS o NO TIPADOS

- **Tipados** : se deben especificar el tipo de dato que se guardara. Por ejemplo: Go, Java, C.

- **No tipados**: el copilador / interprete es capaz de deducir que tipo de dato es. Por ejemplo: PHP.

#### ¿ Qué tipo de aplicaciones puedo hacer ?

- **Aplicaciones Webs**: arquitectura con capas: chapa y pintura (lo que ve el usuario, el **Front End**) con **HTML** -define la estructura-, **CSS** -le da el estilo- y **JavaScript** -le da funcionalidad- y el **Back End** (peticiones del cliente al **servidor**, el sistema remoto que contiene la información, puede estar escrito en uno o en varios lenguajes de programación).

- **Aplicaciones de escritorio**: como por ejemplo **drawio**, la parte con la que el usuario interactua, lo que ve. Tiene mucha inforamción, un menú.

- **Aplicaciones móbiles**: las apps de los celulares. Hay una sola ventana a la vez, se centra en una sola vista, que vamos seleccionando , tocando y hacemos acciones.

----


## :star:  1.3 Aplicaciones cliente-servidor

Hay un cliente (la apliación, el Front End) y un Back End (que obtiene los datos de forma remota). 

Salieron desde los 90: un CRM para los clientes, un sistema para Facturar.

Se utiliza el **protocolo HTTP** para utilizar las **APIs**. La arquitectura es REST. Nos ayudan mucho las **librerías** que nos abstrae de la APi subyacente (la que obtiene la información de la aplicación cliente - servidor).

---


## :star:  1.4 Memoria y variable

- **Memoria** donde el **ordenador** contiene **información**, la cuál va a ser leida por el **procesador**. Se la puede ver como una hilera de cajas, una al lado de la otra, y cada una tiene su **dirección de memoria**, en cada una se guardará un **dato**. Recordar que las posiciones de memoria empiezan desde **0** y son varios millones.

- **Variable** es un nombre humano para una posición de memoria. Es dinámico, su valor puede ir modificandose en el transcurso de mi programa.

```numero = 1234``` -> designo a la variable *numero* el valor *1234*

```decimal = 2.2 ``` -> designo a la variable *decimal* el valor *2.2*

Las variables que pueden cambiar su valor en cualquier momento son **variables** y las que no pueden modificar su valor una vez asignado son **constantes**.

---

## :star: 1.5 Instalación Java e Intellij

- Descarga de Java Development Kit (JDK), desde **open JDK**, descomprimirlo en una carpeta y copiar la ruta, para agregarla en **variable de entorno** para que apunte con **java home**, asi en la terminal si hacemos ```java --version``` debemos ver la version instalada.


- Descargar entorno de desarrollo IntelliJ, tneemos la version **Community** (free) y la versión **Ultimate** (paga, se puede tener con correo de estudiante).

- Creación de Proyecto: **Welcome to InteliJ IDEA** > **New Proyect** > **Java** > **Proyect SDK** (elegimos la version que descargamos de JDK y sino desde ahi descargamos) > **Next**.

Se puede hacer click en **crear proyecto a partir de una plantilla** > **Proyect Name**:  (el nombre del proyecto), **Proyecto location** : (donde estara ubicado) > **Finish**.

Se crea el proyecto con la clase **main**

```
- proyect
  -src
      -com.company
           -main
```

- Verificar funcionamiento: “Hola mundo”


```Java
package com.company;

public class Main {
  public static void main(String[] args) {
    System.out.println("Hola mundo!");
  }
}
```

Le hacemos click en el boton **play** y por consola vemos **Hola mundo**

[Aca se puede ver el proyecto dentro de Proyect / src / proyect / Proyect.java](https://github.com/eugenia1984/open_bootcamp/blob/main/01_curso_introduccion_a_la_programacion/Proyect)

---
---

# 2. Tipos de datos: primitivos y complejos

---

## :star: 2.1 Introducción a los tipos de datos primitivos

La **memoria** guarda **datos**, que se alamcenan en **variables**/**constantes**.

En la **memoria** al guardar los valores, debemos explicar el **tipo de dato** que guardará, los **DATOS PRIMITIVOS** (dato básico), pueden ser...

... **caracter**: representa un único caracter, puede ser tanto una letra, como un número o un símbolo, por ejemplo: ```a```, utiliza los valores de la tabla ASCII, y ahi veo que **a** eslmacena el número **97** y el **9** es el **57**, por ejemplo.

Declaración -> ``` caracter = 'a'```, va entre comillas.

1 caracter ocupa **8 bits** -> 1 byte

... **texto** (**String**): es una secuencia de caracteres. En memoria cada caracter se guarda en una caja.

Declaración -> ``` texto = "hola"```, va entre comillas.

Si el texto tiene 4 caracteres ocupa **32 bits** (8 bits x 4 -> 4 bytes).

---

## :star: 2.2 Tipos de datos primitivos - Datos Numéricos

... **numeros**, no va entre comillas.

Declaración -> ```numeros = 1234```

Pueden ser **enteros** ó **flotantes** / **double**(decimales).

Tienen 32 o 64 bits -> 4 u 8 bytes.

Son 0 y 1, en memoria se guardan en binario, con 0 y 1, se comienza a contar de derecha a izquierda, o sea de atrás hacia adelante, son en base 2

---

## :star: 2.3 Tipos de datos primitivos - Boolean

Solo tiene dos valores...

... **0** / **true** / **True**

... **1** / **false** / **False**

Declaración -> ``` esVerdadero = true``` ó ```esVerdadero = false```

En memoria se alamcenan como 0 y 1

---

## :star: 2.4 Tipos de datos complejos - Arrays

Es una **colección** o un **conjunto** de un mismo tipo de dato, se suelen poner entre **[]**

Declaración -> 

```arrayChar = ['a', 'b', 'c']```  de caracteres

```arrayString = ['hola', 'chaub', 'c']``` de Strings

```arrayChar = [1, 2, 3]``` de numeros enteros

```arrayChar = [1.1, 2.32, 5.2]``` de floats o doubles

```arrayArrays = [ [1, 2, 3], [4, 5, 6]]```  arrays de arrays, este es bidimensional.

-> Se re presenta como las cajas una al lado de la otra, comienza en el indice **0**. 

---

## :star: 2.5 Tipos de datos complejos - Tuplas

Son similares a los arrays, pero están entre **()** y sus elementos son **inmutables**, vvarían acorde al lenguaje.

Declaración -> ```tupla = (a, b, c)```

**mapa asociativo** / **array asociativo** / **map** -> son compuestos porque dentro tienen **key** (clave) y **value **valor**

Declaración -> 
```
arrayCapitalesPais = [
  "Kyev" : "Ucrania",
  "Madrid": "España"
]
```

Son muy similares a los **diccionarios**.

---

## :star: 2.6 Tipos de datos complejos - Objetos


Se utiliza mucho en Java y C++.

Objetos que representan el munod real, pueden tener **propiedades** (**properties**, sus características) y **metodos** (funciones, su comportamiento, pueden alterar las propiedades  del objetos -con los setters-).

En pseudocodigo:

```
Juguete:
  Propiedades:
    -Color: marron
    -Forma: patata
  Metodos:
    -Poner sombrero
    -Quitar brazo
```

En java:

```Java
class Juguete {
  // Propiedades 
  String color ="marron";
  String forma = "patata";

  // Metodos
  ponerSombrero{}
  quitarBrazo{}
}
```

---

## :star: 2.7 Consejos y curiosidades sobre los tipos de datos

Al tener una cadena de texto, por detrás van concatenando caracteres, y siempre al ir guardando el interprete siempre agrega al final el **0**, que indica fin de cadena. Entonces con :
```
nombre = "Victor"
nombre[0] = 'V'
nombre[1] = 'i'
nombre[2] = 'c'
nombre[3] = 't'
nombre[4] = 'o'
nombre[5] = 'r'
```

Tenemos: ```nombre[6] = 0```

Si lo veo como un array de caracteres, sería:

```arrayCaracteres = ['V', 'i', 'c', 't', 'o', 'r', 0]```

Termina con el caracter **NULL** (**0**)

---
---

# 3. Funciones

## :star: 3.1 Definición y conceptos

Una función nos evita tener que repetir código. 

Dentro de la función puede ir cualquier sintaxis del lenguaje.

La función debe tener:

- nombre (en el ejemplo con Java es **suma**)

- puede aceptar, o no valore -> **parametros**  (en el ejemplo con Java es **num1**, **num2**)

- que devuelve  (en el ejemplo con Java es **num1 + num2**) o puede no devolver

Ejemplo de función en Java:

```Java
public static int suma(int num1, int num2) {
  return num1 + num2;
}
```

#### ¿ Cómo se invoca la función ?

Con el mismo ejemplo de Java :

```Java
suma(10, 30);
```

Y como la función solo me devuelve el valor, si lo quiero ver, sería así:

```Java
package com.open_bootcamp;

public class Main {
  public static void main (String[] args) {
    int resultado = suma(10, 20);
    System.out.println(resultado);
  }
  
  public static int suma(int num1, int num2) {
  return num1 + num2;
  }
}
```

#### Las funciones pueden devolver o no

Si no devuelven serán **void** en Java y **no tendrá return**, por ejemplo:

```Java
public static void suma(int num1, int num2) {
  int resultado = num1 + num2;
  System.out.println(resultado);
}
```

Solo va a mostrar el resultado, pero no va a etornar un número que no puedo utilizar para asignar a una variable, esta función no devuelve nada.

- La función devuelve algo cuando en otra parte del programa espero invocar a esa función para que genere un resultado que utilizaré luego.

- Un ejemplo de función que no me devuelve nada es la clase **Main** en Java.

---

## :star: 3.2 Usos

Los **parametros** son variables que solo existen dentro de esta función. Una vez que se termina de ejecutar la función, cuando la invocamos, esas variables se destruyen, no existen fuera de la función; por eso necesitamos el **return** para poder acceder al valor de retorno de la función.

Otro ejemplo en Go:

```Go
package main

import"fmt"

func main() {
  resultado:= suma(10, 30)
  
  fat.Println(resultado)
}

func suma(a int, b int) int {
  return a + b
}
```


- Además de **evitar repetir código** las funcones nos ayudan a **simplificar el cñodigo**.

- Los lenguajes son modulares, puedo crear varias funciones, guardarlas en un módulo y otros programadores pueden importarlo y utilizarlo

- El cuerpo de la función es donde implementa su lógica, en Java es lo que están entre las {}

- La función debe ser pequeña y útil. Es mejor que cada función realice una sola cosa, no es bueno tener una función que realice muchas cosas a la vez.

#### Ámbito de una variable

Las variables declaradas dentro de la función, existen dentro de ellas, al invocarlas.

En este ejemplo la variabla **int a = 60;**  ocupa un lugar de memoria y no es lo mismo que la variable **a** que recibe como parametro la función **suma**.

```Java
package com.open_bootcamp;

public class Main {
  public static void main (String[] args) {
    int a = 60;
    int resultado = suma(10, 20);
    System.out.println(resultado);
  }
  
  public static int suma(int num1, int num2) {
  return num1 + num2;
  }
}
``` 

---

## :star: 3.3 Funciones avanzadas

Java no tiene el concepto de puntero, y tiene dos formas de paso de los valores...

... **paso por valor** se hace una copia tanto del valor como del tipo de dato. Se copian los valores y luego se los pasamos a la función.

```Java 
public static int suma(int num1, int num2) {
  return num1 + num2;
}
```

... **paso por referencia** hay una dirección de memoria como parametro y la función modifica ese contenido, no se hace una copia. En java se ve utilizando una instancia.

```Java 
package com.open_bootcamp;

public class Main {
  
  public static void main (String[] args) {
    //instancia de Potato
    Potato miPotato = new Potato();
    miPotato.quitarBrazo();
    miPotato.quitarBrazo();
    miPotato.quitarBrazo();
    System.out.println(miPotato.brazos);
  }
  
  public static int suma(int a, int b) {
    return a + b;
  }
  
  //La clase Potato
  class Potato {
    // property
    public int brazos = 4;
    // Method
    public void quitarBrazo() {
      tris.brazos--;
    }
  }
}
```

Para ver otro ejemplo, con **Go** la funcion **suma** no va a devolver nada, y va a tener el parametro **c** que va a guardar el resultado de la suma

```Go
package main

import "fat"

func main() {
  param1 := 10
  param2 := 30
  var resultado int
  
  suma(param1, param2, &resultado)
 
  fat.Println(resultado)
}

func suma(a int, b int, c*int) {
*c = a + b}
}
```

Por consola se va **40**, esta funcion no devuelve, pero lo guarda en la raviable C y lo garda en el espacio en memoria **&resultado**, se le pasa el puntero. Java lo tiene escondido, por eso cada vez que se invoca a quitarBrazos() se le descuenta un brazo.

---

## :star: 3.4 Video sesion 3 parte 2

- PHP es más para desarrollo web

- Python es más para machine learning o para automatizar

- VARIABLE es una zona d ela memoria del ordenador donde se guardan datos. Saber definirla, cambiarle su valor, mostrarla en pantalla. Puedo luego crear una función e invocarla para modificar el valor de la variable.



---

## :star:  3.5 Ejercicios tema 3

- Duración aproximada: 5min

- Tiempo disponible: 30 días

- Enunciado del ejercicio:

```
Primera parte:

-Crear una función con tres parámetros que sean números que se suman entre sí.
-Llamar a la función en el main y darle valores.

Segunda parte:

-Crear una clase coche.
-Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.
-Una función que incremente el número de puertas que tiene el coche.
-Crear un objeto miCoche en el main y añadirle una puerta.
-Mostrar el número de puertas que tiene el objeto.
```

- Cuando comiences el ejercicio se te mostrarán las especificaciones para la realización y entrega del mismo. La entrega del ejercicio deberá realizarse a través de una carpeta .zip empaquetada o un enlace al repositorio del ejercicio en GitHub.

- **Una vez le des al botón de comenzar ejercicio el tiempo del que dispones para realizarlo empezará a contar.**

- Asegúrate de tener todo lo que necesites preparado ya que una vez se acabe el tiempo si no has realizado la entrega esta contará como no superada.

---
---

# 4. Sentencias de control

## :star: 4.1 Condicionales

---

## :star:  4.2 Bucles While y Do While

---

## :star: 4.3 Bucles For

---

## :star: 4.4 Switch Case

---

## :star:  4.5 Ejercicios Tema 4

---
---

# 5.Errores


## :star: 5.1 GEstión de errores

---

## :star:  5.2 Errores del programador

---

## :star: 5.3 Repercusión de los erroes


---
---

# 6. Depuración de código

## :star: 6.1 Video del tema 6: depiración del código

---
---

# 7. Introducción a la Programación Orientada a Objetos

## :star: 7.1 Video del tema 7:  Introducción a la Programación Orientada a Objetos

---
---

# 8. Privacidad, abstracción y encapsulamiento


## :star: 8.1 Video del tema 8: Privacidad, abstracción y encapsulamiento

---

## :star: 8.2 Ejercicios del tema 8

---
---

# 9. Herencia, Polimorfismo e Interfaces

## :star: 9.1 Video del tema 9: Herencia, Polimorfismo e Interfaces

---

## :star: 9.2 Ejercicios del tema 9

---
---

# 10. Métodos de clases


## :star: 10.1 Video del tema 10: Métodos de clases

---
---

# 11. Lenguajes: compilados e interpretados 


## :star: 11.1 Video del tema 11. Lenguajes: compilados e interpretados 

---


## :star: 11.2 Ronda de preguntas

---
---
