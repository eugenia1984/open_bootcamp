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

-->> [En Proyect2 / src / proyect2 / Proyect2.java pueden ver mi resolucion](https://github.com/eugenia1984/open_bootcamp/blob/main/01_curso_introduccion_a_la_programacion/Proyect2/src/proyect2/Proyect2.java)

Como sujieren:

```Java
package com.company;

public class Main {

    public static void main(String[] args) {
        suma(20, 40, 60);

        Coche miCoche = new Coche();

        miCoche.sumarPuertas();
        miCoche.sumarPuertas();
        System.out.println("El numero de puertas es: " + miCoche.numeroDePuertas);

    }

    public static void suma(int a, int b, int c){
        int resultado;
        resultado = a + b + c;
        System.out.println(resultado);
    }
}

class Coche {
    public int numeroDePuertas = 4;

    public void sumarPuertas(){

        this.numeroDePuertas++;
    }
}
```

---
---

# 4. Sentencias de control


Instrucciones que se le dan a un programa para que se comporte de un modo u otro.

Todas utilizan **condiciones** : si se cumple una condición hace una cosa, si no se cumple una condición hace otra, mientras se cumpla dicha condición hace una cosa.

#### Condiciones lógicas

- **Y** ( **AND** , **&&** ): para que sea verdadero todo debe ser verdadero

- **O** ( **OR**, **||** ): con que al menos una sea verdadera ya es verdadero.

#### Condiciones lógicas comparativas

- ```>``` mayor que

- ```<``` menor quue

- ```>=``` mayor o igual que

- ```<=``` menor o igual que

- ```==``` igual que (recordar que con el ```=``` se le asigna el valor a la variable)
 
- ```!=``` distinto que 


Ejemplo 1: ``` 40 > 30 = true ``` es Verdadero

Ejemplo 2: ``` (40 > 30) && (30 < 50) = true ``` es Verdadero, en este caso primero se ve lo de adentro de los () :

```
(40 > 30)   Y   (30 < 50) 
 verdadero  Y  verdadero 
======================= 
         verdadero
```

-->> A esto lo llamamos **logica booleana**

## :star: 4.1 Condicionales

Se basan en la lógica booleana.

- **IF** (**SI**):

En pseudocodigo
```
VAR ESTACION = "VERANO"
VAR TEMPERATURA = 30

SI (ESTACION = "VERANO") Y (TEMPERATURA > 20) ENTONCES
  BEBER_AGUA
  BAÑARSE_EN_LA_PISCINA
  TOMARSE_UN_MOJITO
```

-> Si se cumple la condición, entonces ejecuta el bloque de código, si no se cumple no entra.

-> si la TEMPERATURA fuera de 19, no se cumpliría la segunda condición y nunca se ejecutarían las acciones de adentro.


En Java:

```Java
package com.open_bootcamp;

public class Main {

  public static void main(String[] args) {
    String estacion = "primavera";
    
    if (estacion == "primavera") {
      System.out.print("Es primavera");
    }
  }
}
```

- **IF** / **ELSE** ( **SI / SINO** ó **SI * EN CASO CONTRARIO ENTONCES**)

En pseudocodigo
```
VAR ESTACION = "VERANO"
VAR TEMPERATURA = 10

SI (ESTACION = "VERANO") Y (TEMPERATURA > 20) ENTONCES
  BEBER_AGUA
  BAÑARSE_EN_LA_PISCINA
  TOMARSE_UN_MOJITO
EN CASO CONTRARIO ENTONCES
  PONERSE_EL_ABRIGO
  BEBER_CHOCOLATE_CALIENTE
```

-> aca si se cumple la condición se va a ejecutar el primer bloque de cósigo, pero al tneer el EN CASO OCNTRARIO entonces al no cumplirse se va a ejecutar el segundo bloque de código.


En Java:

```Java
package com.open_bootcamp;

public class Main {

  public static void main(String[] args) {
    String estacion = "primavera";
    
    if (estacion == "primavera") {
      System.out.print("Es primavera");
    } else {
      System.out.println("No es primavera");
    }
  }
}
```

- **IF** / **ELSE IF** Ò **ELIF** / **ELSE** ( **SI / SINO / ENTONCES** ó **SI * EN CASO CONTRARIO SI / EN CASO CONTRARIO ENTONCES**)

En pseudocodigo
```
VAR ESTACION = "INVIERNO"
VAR TEMPERATURA = 10

SI (ESTACION = "VERANO") Y (TEMPERATURA > 20) ENTONCES
  BEBER_AGUA
  BAÑARSE_EN_LA_PISCINA
  TOMARSE_UN_MOJITO
EN CASO CONTRARIO SI (ESTACION = "PRIMAVERA") ENTONCES
  SALIR_DE_PASEO  
EN CASO CONTRARIO ENTONCES
  PONERSE_EL_ABRIGO
  BEBER_CHOCOLATE_CALIENTE
```

-> aca si se cumple la condición se va a ejecutar el primer bloque de cósigo, pero al tneer el EN CASO OCNTRARIO entonces al no cumplirse se va a ejecutar el segundo bloque de código.



En Java:

```Java
package com.open_bootcamp;

public class Main {

  public static void main(String[] args) {
    String estacion = "primavera";
    
    if (estacion == "primavera") {
      System.out.print("Es primavera");
    } else if (estacion == "verano"){
      System.out.println("Es verano");
    } else {
      System.out.println("Es otra estacion");
    }
  }
}
```

---

## :star:  4.2 Bucles While y Do While

Es hacere algo un número determinado / indeterminado de veces, mientras se cumpla una determinada condición.

Siempre el contador debe ir modificandose para que la condición en algún momento deje de cumplirse y e rompa, sino estoy en un bucle infinito.


- **WHILE** (**MIENTRAS**)

En pseudocodigo:
```
CONTADOR = 10

MIENTRAS (CONTEDOR > 0)
  RESTA UNO AL CONTADOR
```

En Java
```Java
package com.open_bootcamp;

public class Main {
  public static void main(String[] args) {
    int contador = 10;
    
    while (contador > 0 ) {
      System.out.println("Contador vale: "  + contador);
      // le voy a ir restando por cada iteración
      contador --; // contador = contador - 1;
    }
    // Mi codigo sigue por aca
  }
}
```

-->> **Go** no tiene WHILE, el resto de los lenguajes lo tiene todo

-->> En este caso siempre primero va a **evaluar la condición** y si se cumple ejecuta el bloque de código, si no se cumple no se ejecuta. Por eso si la condición es Falsa desde el principio, el bloque de código nunca se ejecuta.


- **DO WHILE** (**HACER MIENTRAS**)

En este caso la difernecia es que **primero se ejecuta el bloque de códgo** y luego se **evalúa la condición**, por lo cual si la condición nunca se cumple el codigo se ejecutará al menos una vez.

En pseudocodigo:
```
VAR CONTADOR = 10

HAZ
  RESTA UNO AL CONTADOR
MIENTRAS (CONTADOR SEA MAYOR QUE DIEZ)
```


En Java
```Java
package com.open_bootcamp;

public class Main {
  public static void main(String[] args) {
    int contador = 10;
    
    do {
      System.out.println("Contador vale: "  + contador);
      contador --; 
    } while (contador > 0 ); // al final evalua la condicion
    // Mi codigo sigue por aca
  }
}
```


-> ALGUNOS LENGUAJES NO TIENEN EL DO wHILE, PORQUE ES SIMILAR A PONER LA CONDICIÓN AFUERA Y LUEGO EL WHILE.

-> El DO WHILE se suele utilizar poco.

---

## :star: 4.3 Bucles For

Tiene 3 partes...

... **declaración e inicialización**.

... **comparación**

... **acción**, es cuanto va a ir modificandose en cada iteración

```
PARA (INICIALIZACION; COMPARACION; ACCION)
```

En pseudocodigo:


```
PARA ( VAR CONTADOR = 10; CONTADOR > 0; CONTADOR--)
  IMPRIME EL VALOR DE LA VARIABLE CONTADOR
```

Mientras la variable CONTADOR sea mayor a 0, entonces imprimis el valor de la variable contador, y en cada ciclo del bucle voy a ir decrementando en 1 la variable contador.

-->> Es el que más se utiliza.

-->> La parte de acción es lo último en ejecutarse: 1ro declaro la variable, 2do veo que se cumpla al condición, 3ro ejecuto el bloque de codigo, 4to realizo la modificacion, el incremento o decremento. 

Otro ejemplo en Java, para imprimir los números del 1 al 10:

```Java
package com.opne_bootcammp;

public class Main {

  public static void main(String[] args) {
    for(int contador = 1; contador <=10; contador++) {
      System.out.println(contador)
    }
  }
}
```

-->> El WHILE lo solemos utilizar para verificar condiciones booleanas, en cambio en el FOR evaluo otras cosas. Además en el for se cuantas iteraciones voy a tener, en cambio en el while no.

-->> Con el for recorremos arrays, ejemplo en Java

```Java
int valores[] = new int[5];
valores= [10, 20, 30, 40, 50];

for(int i = 0; i < valores.lenght; i++) {
  System.out.println(valores[i]);
}
// 10
// 20
// 30
// 40
// 50
```

---

## :star: 4.4 Switch Case


Son los INTERRUPTORES, es una forma de control, se DICIERNE sobre una VARIABLE (CONDICION) y dentro tiene los CASOS.

Es similar al IF / ELSE IF / ELSE IF / ELSE

Ejemplo en pseudocodigo:

```
VAR ESTACION = "VERANO"

DISIERNE (ESTACION)
  CASO "VERANO"
    IMPRIME = "ES VERANO"
  CASO "INVIERNO"
    IMPRIMIE = "ES INVIERNO"
  OTRO CASO:
    IMPRIMIE LA ESTACION DE LA VARIABLE
```

-->> Si hay más de dos ELSE IF se suele utilizar el SWITH, lo unico malo es que en el caso no podemos tener muchas comparaciones


Ejemplo en Java

```Java
String estacion = "verano";

swith(estacion) {
  case "verano":
    System.out.println("Es verano");
    break;
  case "invierno":
    System.out.println("Es invierno");
    break;
  default:
    System.out.println("Es otra estacion");
    break;
}
```

En Java con el break me voy del siclo, es decir una vez que encuentra el case que se cumple corta y sale del switch; de no tener el break se va a seguir ejecutando los demás cases que falten.


Otro ejemplo:

```Java
String hoyEs = "MARTES";

swith(hoyEs) {
  case "LUNES":
  case "MARTES":
  case "MIERCOLES":
  case "JUEVES":
  case "VIERNES":
    System.out.println("Es laborable");
    break;
  case "CABADO":
  case "DOMINGO":
    System.out.println("Es fin de semana");
    break;
  default:
    System.out.println("No ingreso una opción incorrecta");
    break;
}
```
---

## :star:  4.5 Ejercicios Tema 4

- Duración aproximada: 5min

- Tiempo disponible: 30 días

- Enunciado del ejercicio:

```
- Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
Pista: Los números inferiores a 0 son negativos y los superiores, positivos.

- Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:
  - Incrementar el valor de la variable en uno cada vez que se ejecute.
  - Mostrarlo por pantalla cada vez que se ejecute.

- Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.

- Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.

- Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.
```
- Cuando comiences el ejercicio se te mostrarán las especificaciones para la realización y entrega del mismo. La entrega del ejercicio deberá realizarse a través de una carpeta .zip empaquetada o un enlace al repositorio del ejercicio en GitHub.


- **Una vez le des al botón de comenzar ejercicio el tiempo del que dispones para realizarlo empezará a contar**.


- Asegúrate de tener todo lo que necesites preparado ya que una vez se acabe el tiempo si no has realizado la entrega esta contará como no superada.


-->> [Acá pueden ver como lo resolví yo](https://github.com/eugenia1984/open_bootcamp/blob/main/01_curso_introduccion_a_la_programacion/Proyect3/src/proyect3/Proyect3.java)


#### ¿ Cómo lo resolvieron desde Open Bootcamp ?

```Java
package com.company;

public class Main {

    public static void main(String[] args) {
        // if, else if y else
        int numeroIf = 0;

        if (numeroIf<0){
            System.out.println("La variable numeroIf " + numeroIf + " es negativo");
        }
        else if(numeroIf>0){
            System.out.println("La variable numeroIf " + numeroIf + " es positivo");
        } else {
            System.out.println("La variable numeroIf es 0");
        }

        //while
        int numeroWhile = 1;

        while(numeroWhile < 3){
            numeroWhile++;
            System.out.println("La variable numeroWhile ahora vale: " + numeroWhile);
        }

        //do while
        //Al no cumplirse la condición, solo entra en el bucle una vez
        int numeroDoWhile = 3;
        do{
            numeroDoWhile++;
            System.out.println("La variable numeroDoWhile ahora vale: " + numeroDoWhile);
        }while(numeroDoWhile < 3);

        //for
        for(int numeroFor = 0; numeroFor <= 5; numeroFor++){
            System.out.println("La variable numeroFor ahora vale: " + numeroFor);
        }

        //switch
        String estacion = "otoño";
        switch(estacion) {
            case "verano":
                System.out.println("Estamos en verano");
                break;
            case "invierno":
                System.out.println("Estamos en invierno");
                break;
            case "primavera":
                System.out.println("Estamos en primavera");
                break;
            case "otoño":
                System.out.println("Estamos en otoño");
                break;
            default:
                System.out.println("No es una estación");
        }
    }
```

---
---

# 5.Errores


## :star: 5.1 Gestión de errores


Los que se cometen como desarrollador que recién empieza:

- ¿Cómo llamamos a una variable? Sus nombres deben ser significativos/descriptivos si necesito una variable que cuente la nombro **contador**. Vamos a tener otros desarrolladores que miraran nuestro código y debe comprenderlo. EL código debe ser legible. La única excepción es utilizar variables nombradas **i**, **j** y **k** dentro del FOr ya que es un standard de la industria, porque i es equvalente a **indice** y j es equivalente a **fila** y j equivale a **columnas**, se utilizan para recorrer matrices bidimensionales.


Ejemplo en Java:

```Java
public class Main {

  public static void main(String[] args) {
    int numeros[] = {
      {10, 20, 30, 40, 50},
      {10, 20, 30, 40, 50}
    };
    
    // Recorremos el array bidimensional numeros, y por cada
    // subarray del mismo, mostramos el valor que tiene en 
    // ese momento
    for(int j = 0; j < numeros.length; j++) {
      for(int k = 0; k < numeros.length; k++) {
        System.out.println(numeros[j][k]);
      }
    }
  }
}
```

- Es buena práctica comentar el codigo

- Es de mala práctica comentar cosas que ya son obvias

---

## :star:  5.2 Errores del programador

- No mantener la coherencia en el formato del codigo, por eso hay reglas de identacion, cuando dejar un espacio y cuando no, debe ser CONSISTENTE. Hay que seguir la GUIA DE ESTILOS. Cada lenguaje teine su propio estilo y Go y Rust tienen una herramienta que lo pretifica, lo mismo pasa a veces con  los IDEs.

- no tener ni copia de seguridad ni tener versiones. -> Lo mejor...

...Utilizar el control de versiones en local. Lo mejor es mantener el control de versiones (usar GIT, GitHub y GitLab). 

... hacer copia de seguridad que este en otro lado, porque si esta en el mismo disco duro y se rompe se pierde. 

- Utilizar la forma simple que me otorga el lengiaje.

- Depurar utilizando el print por todos lados. Lo que hay que hacer es debuguear.

- Crear funciones grandes. Lo que debe hacer la funcion es hacer una sola cosa, si hace más de una la tengo que dividir en varias. Y debe ser concreta a su nombre, si se llama getValores debe darme valores.


-->> TIP, las variables no inicializadas se inicializan en 0.

---

## :star: 5.3 Repercusión de los errores

Esta el ejemplo del cohete de la NASA que se estrello, porque estaban trabajando los equipos de Estados Unidos y los de Inglaterras y al tener distintas medidas hicieron mal la conversión, por lo que los cálculos estaban mal.

Por eso por ejemplo si parseo de un **double** a un **int** voy a tenr problemas de presición, pierdo la parte decimal. Es muy importante también al manejar dinero, no se puede redondear ni un centavo. Lo que se puede hacer, en vez de castear es tener otra función similar, solo que reciba el parametro correcto, asi no redondeo ni pierdo nada.

- Error de out of bounce, cuando me paso del limite dle array, ya que los indices empiezan desde 0 y entonces mis elementos siempre serán uno más que el índice. Si tengo un array de 5 elementos la última posición es la 4 (indice de 4).

- El stack overflow, cuando asigo un valor mayor al máximo o menor al mínimo en el tipo de dato, cuando le paso uno por encima del máximo me muestra el mínimo.

---
---

# 6. Depuración de código

## :star: 6.1 Introducción

Buscar anomalías durante la ejecución del programa. La mayoría de los lenguajes soportan depuración remota, asi se puede depurar el código en ejecución.


## :star: 6.2 Que es la depuración de código

Funcionan mediante **Punto de ruptura** (**Breakpoint**) que ya está incorporao en el entorno (IDE).

-> Me ubico en la linea que deseo, hago un click y se me pone un puntito rojo (break point), y el programa se va a ejecutar, ahsta llegar al punto de quiebre, se detiene, se queda en la sentencia, siempre y cuando en vez de hacer click en **run** le doy click en **debug mode**.

Vamos a tener el panel de depuración, me va a mostrar como esta el programa en el momento del punto de quiebre, me muestra el valor de la variable, por ejemplo.

Si le doy click en **step over** va a avanzar al proximo paso, va a ir renglon por renglon.

-> Con un depuarador puedo...

... bloquear el programa en un punto para ver el estado de las variables

... puedo modificar el valor, para evaluar el comportamiento posterior al programa, ante casos inesperados. 

- **watcher** (watch point) es un breakpoint que solo se dipara cuando se cumple una condición, en IntelliJ lo que hago es hacer click derecho en el puntito rojo. Puedo poner la condción para que me salte si en un for recorro un array en una posición mayor al indice de elementos que tiene.

- **Pila de llamadas** para saber por donde paso el programa, muestra en orden inverso por donde paso el programa , lo dos puntos y en numero dice en que linea se invoco, y en que clase y paquete. 

En Java podemos lanzar excepciones, como en python, por consola, que nos va a decir que tipo de excepcion tenemos y en que linea, por ejemplo si quiero dividir por 0, me va a avisar que no se puede.

-->> Con todo esto no es necesario tener todos los pint mostrando valores de variables, es mejor depurar.


---
---

# 7. Introducción a la Programación Orientada a Objetos

Se usa mucho en aplicaciones grandes, para que quede todo segmentado.

## :star: 7.1  ¿ Que es un objeto ?

Un objeto es una entidad que representa un objeto del mundo real.

Por ejemplo en la realidad tenemos un cuadro, que tiene como **propiedades**: el tamaño, el material, los colores, un peso. 

Hay otros objetos, por ejemplo un coche, que además de tener propiedades tienen **metodos**: abrirPuerta, cerrarPuerta.

Volviendo al ejemplo del señorPatata, como propiedades tiene: ojos:2, oreja:1, nariz:1, boca:1  y como metodos tiene: quitarOjos, ponerOjos, quitarNariz, ponerNariz.

## :star: 7.2 Crear una clase en Java

Los objetos se declaran en **clases**

Ejemplo en Java:

### ¿ Cómo voy a tener un objeto de la clase coche?

Instanciandolo, voy a crear un objeto de la clase coche, lo guardo en variable, o sea queda guardado en un espacio de memoria.


```Java
package com.open_bootcamp;

public class Main {
  
   public static void main(String[] args) {
    // instancio y creo un objeto coche
    Coche coche = new Coche();
    System.out.println(coche.velocidadActual); // hereda las mismas propiedades que la clase Coche
    coche.acelerar(); // ya puedo usar los metodos de la clase
    System.out.println(coche.velocidadActual);
   }
}

class Coche {
  // propiedades (atributos)
  int numeroDePuertas;
  int velocidadMaxima;
  float velocidadActual;
  
  // metodos (funciones)
  public void acelerar() {
    velocidadActual += 15;
  }
  
  public void desacelerar() {}
}
```

Por consola voy a ver:
```
0.0
15.0
```



## :star: 7.3 Constructor de clase

Cuando no creo un constructor, Java lo crea por mi.

Al crear yo le constructor Java no lo crea por mi.

#### ¿Qué es un constructor? 

Es una forma de inciializar las propiedades de una clase cuando la instanciamos.


Y debe seguir ciertas reglas:

- no devuelve ningún tipo de dato.

- siempre es publico

- el nombre dle constructor debe ser identico al nombre de la clase

- puede tener opcionalmente parametros

-->> al instanciar el objeto con new Class() ahi llamamos al constructor. En este momento podemos aprovechar e inicializar ciertas variables, en el ejemplo voeo que al numero de puertas le doy el valor 5.

Ejemplo en codigo:

```Java
class Coche {
  //propiedades
  int numeroPuertas;
  int velocidadMaxima;
  float velocidadActual
  
  // constructor
  public Coche() {
    numeroDePuertas = 5;
    System.out.println("Estoy en el constructor");
  }
  
  // metodos
  public void acelerar() {
    velocidadActual +=15;
  }
}
```

Entonces si instancio un coche y veo las puertas voy a tener 5:

```Java
Coche coche2 = new Coche();
System.out.println("El coche tiene" + coche2.numeroDePuertas +  " puertas");
```

Otro modo de escribirlo con format:

```Java
Coche coche2 = new Coche();
System.out.println("El coche tiene %d puertas", coche2.numeroDePuertas);
```

Si quiero que la velocidad maxima sea de 120 por ejemplo tambien la inicializo en el constructor:



```Java
class Coche {
  //propiedades
  int numeroPuertas;
  int velocidadMaxima;
  float velocidadActual
  
  // constructor
  public Coche() {
    numeroDePuertas = 5;
    velocidadMaxima = 120;
  }
  
  // metodos
  public void acelerar() {
    velocidadActual +=15;
  }
}
```

-->> Otro modo es pasando por parametro los valores para la cantidad de puertas y a velocidad maxima


```Java
class Coche {
  //propiedades
  int numeroPuertas;
  int velocidadMaxima;
  float velocidadActual
  
  // constructor
  public Coche(int puerta, int velocidadMaxima) {
    this.puerta = puerta;
    this.velocidadMaxima = velocidadMaxima;
  }
  
  // metodos
  public void acelerar() {
    velocidadActual +=15;
  }
}
```

Entonces al instanciarlo debo indicar las puertas y la velocidad:
```Java
Coche coche2 = new Coche(3, 180);
System.out.println("El coche tiene" + coche2.numeroDePuertas +  " puertas");
System.out.println("La velocidad maxima es de " + coche2.velocidadMaxima);
```

Va a mostrarme que tiene 3 puertas y la velocidad maxima es 180


-->> En el constructor podemos inicializar las propiedades.


## :star: 7.4 Sobrecarga de constructores

Es cuando tengo más de un constructor, puedo tener el constructor que no tenga parametros, y el que tenga 2 parametros, puedo tneer otro que tenga 3 parámetros (va a tener todas las propiedades del objeto).

En mi ejemplo si instancio el objeto sin parametros voy a tener un cacho de 5 puertas con velocidad maxima de 120 y si lo hago con los parametros va a tener la cantidad de puertas y la velocidad que yo le indique.

-->> Tengo dos funciones con el mismo prototipo pero con distintos parámetros.

-->> Luego con herencia se verá como un constructor uede inicializar a su padre. 



## :star: 7.5 Buenas practicas

- Cuando tenemos un constructor con parametros y queremos incializar variaables internas, se da como nombre de los parametros los mismos nombres que tiene la clase como atributo, es decir que si quiero inciializar numeroDePuertas le doy el nombre al parametro de numeroDepuertas. Para referirme a la **variable de la clase** debo anteponer **this**

---
---

# 8. Privacidad, abstracción y encapsulamiento


## :star: 8.1  Propiedad privada y publica

Al definir una clase, esta tiene ciertas **propiedades** las cuales pueden ser ...

... **private** (PRIVADAS) solamente se utilizan en la implementación de la clase, es decir SOLO DENTRO DE LA CLASE.

... **public** (PUBLICAS), cuando se puede acceder desde fuera de una clase a sus propiedades directamente, estas son PUBLICAS. La puedo utilizar tanto dentro de la calse como fuera de la misma. 

... **protected** (PROTEGIDA)

## :star: 8.2 Cuando se define publico o privado

Ejemplo en código:

```Java
package com.open_bootcamp;

public class Main {

  public static void main(String[+ args) {
    Vehiculo vechiculo = new Vehiculo();
    vehiculo.tipo = "coche";
    System.out.println(vehiculo.tipo); // coche
  }
}

class Vehiculo {
  String tipo;
}
```

Puedo acceder a la propiedad del objeto porque es publica, cuando no aclaro el tipo de propuiedad, por default es PUBLIC.

Pero en el caso de que sea privada, no voy a poder acceder directamente a la propiedad desde el objeto que instancio:


```Java
package com.open_bootcamp;

public class Main {

  public static void main(String[+ args) {
    Vehiculo vechiculo = new Vehiculo();
    //no puedo hacer: vehiculo.tipo = "coche";
  }
}

class Vehiculo {
  private String tipo;
}
```

->> Al tener el acceso **private** tipo no puedo acceder directamente a la propiedad desde el objeto que instancie (que cree).


## :star: 8.3 Encapsulación

Utilizamos los tipos **public** y **private** de forma que desde la clase los manipule y desde fuera de la clase los puedo utilizar. 

Para **encapsular** declaramos las propiedades (variables) como **private**.

Y por cada propiedades vamos a tener **dos funciones** a las que llamaremos **setters** y **getters** para poder acceder a dicho valor y pra poder modificarlo.

**encapsulamos** las propiedades para acceder a ellas únicamente **por medio de funciones**.

Ejemplo en codigo:

```Java
public class main {
  
   public static void main(String[] args) {
     Vehiculo vehiculo = new Vehiculo();
     vehiculo.setTipo("coche");
     vehiculo.setVelocidadMaxima(250);
     vehiculo.setRapido(true);
     System.out.println("Mi vehiculo es: " + vehiculo.getTipo);
     System.out.println("La velocidad maxima es: " + vehiculo.getVelocidadMaxima);
     System.out.println("El coche es rapido? + vehiculo.isRapido);
   }
   
   class Vehiculo {
   //atributos / propiedades
    private String tipo;
    private int velocidadMaxima;
    private int estado; // como solo la uso dentro de mi clase, no necesito crearle un getter ni un setter
    private boolean rapido;
   }
   
   // setters
   public void setTipo(String tipo) {
     if(this.estado == 0) {
        this.tipo = tipo;
     } 
   }
   
   public void setVelocidadMaxima(int velocidadMaxima) {
    this.velocidadMaxima = velocidadMaxima;
   }
   
   public void setRapido(boolean rapido) {
    this.rapido = rapido;
   }
   //getters
   public String getTipo() {
    return tipo;
   }
   public int getVelocidadMaxima() {
    retun velocidadMaxima;
   }
   public boolean isRapido() { //isRapido en vez de setRapido porque es boolean
    return rapido;
   }
}
```

->> Los **setters** nunca devuelven nada y siempre toman como parametro el tipo de dato de la **propiedad**. Y como el nombre de la variable que recibe como parametro es igual a la propiedad de la clase, usamos **this** para aclarar que hacemos referencia a la propiedad de la clase y el otro sin this es el parametro.

->> Los setters siempre comienzan con la palabra **set** y luego el nombre del atributo con la primer letrra capitalizada.

->> Los **getters** no fija el valor, sino que lo devuelve, por eso no tienen parametros, devuelven la propiedad de la clase.

->> Los IDEs nos ayudan y nos crean ellos mismos los getters y setters, haciendo solo click en unas opciones. 

->> Dentro de una **clase** las **variables** son las **propiedades** que son propias de la clase o sino las particulares de la funcion (coo en el ejemplo el caso de *estado*).

->> Cuando el tipo de dato es **boolean** el setter es exactamente igual, pero el **getter** en vez de llamarse **getProperty** se llamara **isProperty** (es como decir esPropiedad).


## :star: 8.4 Usos de encapsulación

- Para programación multihilo **multi treads** (se va a ejecutar de forma paralela en más de un core del procesador), va a ser capaz de hacer dos o más cosas a la vez. 

- Necesitamos que la clase tenga información de su estado y que esas variables solo se puedan modificar a través de los getters y setters., y al invocarlos pueden tener un código adicional que hagan otras cosas.



## :star: 8.5 Abstracción

Se va a implementar parte de una clase y se deja otra parte a su libre alberdío.

Va a tener **abstract** tanto en la clase como en un método y su clase hija va a implementarla (vera que hace ese metodo en particular).

## :star: 8.6 Ejemplo de clase abstracta

Con pesudocodigo:

```
CLASE ABSTRACTA VEHICULO
  PRIVADA SONIDO;
  PRIVADA SONIDO;
  
  FUNCION SETTERTIPO(TEXTO valor)
     esta_clase.tipo = VALOR

  FUNCION ABSTRACTA SETTERSONIDO(TEXTO sonido)
  FUNCION ABSTRACTA GETTERSONIDO() TEXTO  


CLASE COCHE HIJA_DE_VEHICULO
  FUNCION SETTERSONIDO(TEXTO sonido)
  FUNCION GETTERSONIDO() TEXTO  
  
```

En las clases abstractas nos dan una serie de metodos ya hechas, pero tambien nos van a dar metodos que al derivarlos, se implementan en las clases hijas.

El getter sonido se va a implementar en las clases hijas asi por ejemplo si instancio una moto voy a tener un sonido y si instancio un auto o camión voy a tener otros sonidos, son propios de cada clase hija.

Ejemplo en Java:

```Java
abstract class Vehiculo {
  private String sonido;
  
  abstract  public void setSonido(String sonido) {}
  abstract public String getSonido() {}
}
```

-> tanto setSonido como getSonido son abstractas por lo que no tienen un cuerpo en su metodo, ese lo tendra la clase hija al implementarlo.

-> Las clases ABSTRACTAS no las puedo implementar por si solas, las debo HEREDAR.

---

## :star: 8.2 Ejercicios del tema 8


Duración aproximada: 5min

- Enunciado del ejercicio:

```
Para practicar la encapsulación:
-Crear clase Persona.
-Crear variables las privadas edad, nombre y telefono de la clase Persona.
-Crear gets y sets de cada propiedad.
-Crear un objeto persona en el main.
-Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono, por último muéstralas por consola
```

-> Cuando comiences el ejercicio se te mostrarán las especificaciones para la realización y entrega del mismo. La entrega del ejercicio deberá realizarse a través de una carpeta .zip empaquetada o un enlace al repositorio del ejercicio en GitHub.


-> Una vez le des al botón de comenzar ejercicio el tiempo del que dispones para realizarlo empezará a contar.


-> Asegúrate de tener todo lo que necesites preparado ya que una vez se acabe el tiempo si no has realizado la entrega esta contará



[Haciendo click aca pueden ver el codigo](https://github.com/eugenia1984/open_bootcamp/tree/main/01_curso_introduccion_a_la_programacion/Proyect4) que es este:

```Java
/*
 * Para practicar la encapsulación:
 * -Crear clase Persona.
 * -Crear variables las privadas edad, nombre y telefono de la clase Persona.
 * -Crear gets y sets de cada propiedad.
 * -Crear un objeto persona en el main.
 * -Utiliza los gets y sets para darle valores a las propiedades edad, nombre 
 * y telefono, por último muéstralas por consola
 */
package proyect4;

/**
 * @author Maria Eugenia Costa
 */
public class Proyect4 {

    public static void main(String[] args) {
        // Crear un objeto persona en el main
        Persona personita = new Persona();
        // Utiliza los gets y sets para darle valores a las propiedades edad, 
        // nombre y telefono
        personita.setEdad(37);
        personita.setNombre("Eugenia");
        personita.setTelefono(123456789);
        //por último muéstralas por consola
        System.out.println("Personita tiene "+personita.getEdad()+" años, se llama "+
                personita.getNombre()+" y su telefono es: "+personita.getTelefono());
    }
}
    // Crear clase Persona
class Persona {
    // Crear variables las privadas edad, nombre y telefono de la clase Persona
    private int edad;
    private String nombre;
    private int telefono;

    // Crear gets y sets de cada propiedad
    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

}
```

->> La forma en que lo resolvieron ellos:

```Java
package com.company;

public class Main {

    public static void main(String[] args) {

        Persona persona = new Persona();
        persona.setNombre("Raul");
        System.out.println("Mi nombre es " + persona.getNombre());
        persona.setEdad(23);
        System.out.println("Tengo " + persona.getEdad() + " años");
        persona.setTelefono(829240212);
        System.out.println("Mi teléfono es " + persona.getTelefono());
    }
}

class Persona {
    private String nombre;
    private int edad;
    private int telefono;

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setEdad(int edad){
        this.edad = edad;
    }

    public int getEdad() {
        return edad;
    }

    public void setTelefono(int telefono){
        this.telefono = telefono;
    }

    public int getTelefono() {
        return telefono;
    }
}
```

---
---

# 9. Herencia, Polimorfismo e Interfaces

## :star: 9.1  Herencia

Seguimos con nuestra clase **Vehiculo** que tiene un setter y getter y ta mbién tenemos nuestra clase **Coche**.

En pseudocodigo:

Clase padre / super clase:
```
CLASE VEHICULO
  PRIVADA VELOCIDADMAXIMA
  PRIVADA TIPOGASOLINA
  
  FUNCION SETTERVALOCIDADMAXIMA(INTEGER valor)
    ESTA_CLASE.VELOCIDADMAXIMAO = valor
    
  FUNCION GETTERVELOCIDADMAXIMA(INTEGER valor)
    DEVUELVE ESTA_CLASE.VELOCIDADMAXIMA
    
  FUNCION diHola()
    IMPRIME "Hola"
```

Clase hija:
```
CLASE COCHE HEREDA DE VEHICULO
  (heredada)VELOCIDADMAXIMA
  (heredada)TIPOGASOLINA
  NUMERO_DE_PUERTAS
  
  (heredada)FUNCION diHola()
    IMPRIME "Hola"
    
  FUNCTION SETTERNUMERODEPUERTAS(INTEGER puerta)
    ESTA_CLASE.NUMERO_DE_PUERTAS = puertas
    
  FUNCTION GETTERNUMERODEPUERTAS() INTEGER
    DEVUELVE ESTA_CLASE.NUMERO_DE_PUERTAS
```

Y a la vez voy a tener la clase **Coupe** que va a heredar de coche, seria como el *nieto* de la clase *Vehiculo*

```
CLASE COUPE HEREDA DE COCHE
  (heredada)VELOCIDADMAXIMA
  (heredada)TIPOGASOLINA
  (heredada)NUMERO_DE_PUERTAS
  
  (heredada)FUNCION diHola()
    IMPRIME "Hola"
    
  (heredada)FUNCTION SETTERNUMERODEPUERTAS(INTEGER puerta)
      ESTA_CLASE.NUMERO_DE_PUERTAS = puertas
    
  (heredada)FUNCTION GETTERNUMERODEPUERTAS() INTEGER
      DEVUELVE ESTA_CLASE.NUMERO_DE_PUERTAS
```


Una clase (clase hija) **hereda métodos y propiedades** de otra clase (clase padre / super clase) y además puede tener sus propios métodos (numero de puertas) y propiedades.

No es tan buena practica tneer tantas clases que deriven de otra derivada

**clase hija** -> la clase que **hereda**

**clase padre / super clase** -> la clase que cede sus propiedades y metodos a heredar.


---

El ejemplo en Java:

```Java
public class Main {

  public static void main(String[] argas) {
    Coche coche = new Coche();
    coche.velocidadMaxima = 14;
    coche.matricula = "ABC 1234 ES";
    CocheElectrico cocheElectrico = new CocheElectrico();
    cocheElectrico.velocidadMaxima = 24;
    cocheElectrico.matricula = "DEF 1234 ES";
    
    System.out.println(cocheElectrico.compruebaMatricula("DEF 1234 ES"));
  }
}

class Vehiculo {
  int velocidadMaxima;
  String matricula;
  
  // si necesitaria verificar alguna matricula
  pulic boolean compruebaMatricula(String matricula) {
    if( matricula == "XXX") {
      return true;
    }
    return false;
  }
}

final class Coche extends Vehiculo {}

// class CocheElectrico extends Coche {} -> no lo podria hacer ya que Coche es final
```

- En Java con la palabra reservada **extends** indicamos que es una clase que hereda de otra **clase padre/madre/super**.

- Como la clase **Coche** **extiende** de **Vehiculo** va a tener sus atributos y métodos.

- la palabra reservada **final** en al clase indica que dicha clase no va a ser padre de ninguna, no se va a poder heredar de ella.



## :star: 9.2 Abstract

Si la clase es **abstracta** entonces **no la puedo instanciar**, debo instanciar las clases hijas.

Como la clase es **abstract** debo tener alguno de sus propiedades y metodos como abstract también, en este caso lo vamos a ver en *sonido*.

-> Los métodos abstractos no tienene cuerpo, ya que los hijos van a decir que hace dicho método o sino también van a ser clases abstractas para que sus clses hijas implementen dicho método..


```Java
public class Main {

  public static void main(String[] args) {
   // no puedo instanciar un objeto Vehiculo por ser ABSTRACT
   
   // instancio un objeto Coche
    Coche coche = new Coche();
    coche.setSonido("RRR");
    System.out.println(coche.getSonido());
    
    // instancio un objeto Moto
    Moto moto = new Moto();
    moto.setSonido("RRR!");
    System.out.println(moto.getSonido());
  }
}

// clase ABSTRACTA
abstract class Vehiculo {
  // propiedades
  int velocidadMaxima;
  String matricula;
  String sonido;
  
  // constructor
  public Vehiculo() {
    System.out.println("Estoy en el contructor de Vehiculo");
  }
  
  // getter y setter para sonido que es abstracto
  alstract public String getSonido();
  abstract public void setSonido(String sonido);

}

// como deriva de una clase abstract debe implementar el metodo abstracto o sino tambien ser clase abstracta
class Coche extends Vehiculo { 
  public String getSonido() {
    this.sonido;
  }
  public void setSonido(String sonido) {
    return "Soy un coche y mi sonido es: " + this.sonido = sonido;
  }
}

class Moto extends Vehiculo {
  public String getSonido() {
    this.sonido;
  }
  public void setSonido(String sonido) {
    return "Soy una moto y mi sonido es: " + this.sonido;
  }
}
```

->> En la abstraccion una clase dice que hay que hacer algo, pero no dice cómo hacerlo, el como lo van a determinar los hijos.


---

El tipo de herencia es la relación que tenemos entre las clases heredadas.

---


## :star: 9.3 Herencia multiple

La **herencia múltiple** consiste en que una clase hereda de **dos o más clases padres**.

Ejemplo en pseudocodigo:

```
CLASE VEHICULO
  PRIVADA VELOCIDAD_MAXIMA
  
CLASE MOTOR
  PRIVADA TIPO_GASOLINA
  
CLASE COCHE HEREDA DE VEHICULO Y MOTOR
  (heredada) VELOCIDAD_MAXIMA
  (heredada) TIPO_GASOLINA
```

En Java no hay herencia múltiple, Java tiene **herencia simple**, es decir que una clase hereda de otra.



Ejemplo en Java

```Java
class Vehiculo {
  int velocidadMaxima;
  
  public Vehiculo() {
    System.out.println("Estoy en el constructor de Vehiculo");
  }
}

class Motor {
  String tipoMotor;
  
  public Motor() {
    System.print.ln("Estoy en el constructor de Motor");
  }
}

class Coche extends Vehiculo {} // Java tiene solo herencia simple, o hereda de Vehiculo o hereda de Motor
```


## :star: 9.4 Herencia jerarquica

De una clase derivan otras, de las cuales a su vez van a derivar otras.

Se puede pensar como un árbol genealígo, en pseudocodigo:

```
CLASE_A

  CLASE_B HEREDA DE CLASE_A

    CLASE_UNO HEREDA DE CLASE_B
    CLASE_DOS HEREDA DE CLASE_A
   
  CLASE_C HEREDA DE CLASE_A
    CLASE_PERRO HEREDA DE CLASE_C
```

La **herencia multinvel** también es **herencia simple** solo que hay varias, tenemos a la clase "abuela" , "padre" (que hereda de abuela), "hija" (que hereda de padre), como para dar un ejemplo.


## :star: 9.5 Herencia hibrida

Combina modelos de herencia (tiene herencia simple y herencia múltiple).

Ejemplo en pseudocodigo:

```
CLASE_A

  CLASE_B HEREDA DE CLASE_A // es herencia simple
  CLASE_C HEREDA DE CLASE_A // es herencia simple
    CLASE_D HEREDE DE CLASE_B Y CLASE_C // es herencia multiple
```

---

## :star: 9.6 Polimorfismo

Las clases hijas implementan el mismo método, pero cada una lo ejecuta de distinto modo.

Hay un **override**, es decir se sobreescribe la función.

Ejemplo en pseudocodigo:

```
CLASE VEHICULO
  FUNCION diHola
    IMPRIMIE "Hola"
    
CLASE COCHE HEREDA DE VEHICULO
  FUNCION diHola
    IMPRIME "Soy un coche"
       
CLASE MOTO HEREDA DE VEHICULO
  FUNCION diHola
    IMPRIME "Soy una moto"
```


Ejemplo en Java

```Java
public class Main {

  public static void main(String[] args) {
    Coche coche = new Coche();  
    coche.diHola();
  }
}

  class Vehiculo {
  public void diHola() {
    System.out.println("Hola!!");
  }
}

class Coche extends Vehiculo {
  @Overrides
  public void diHola() {
    System.out.println("Soy un coche");
  }
}
```

->> También se lo conoce como sobreescritura de métodos.

---

## :star: 9.7 Interfaces

Nos van a permit poder tener una especie de 'herencia multiple' en Java, ya que una misma clase va a poder implementar más de una Interfaz.

Las interfeces son parecidas a las clases abstractas, pero a diferencia de estas **no implementan ninguna funcion**.

Nos va a decir que al crear una clase hija ella va a implementar los métodos.

Se utiliza la palabra reservada **interface** en Java.

La interfaz no tiene propiedades, solo tiene métodos.

Ejemplo en Java:

```Java
package com.open_bootcamp;

public class Main {
  
   public static void main(String[] args) {
    
   }
}

insterface Vehiculo {
  void Acelerar(int cuantaVelocidad);
  void frenar(int cuantaVelocidad);
}

class Coche implements Vehiculo {
  public void Acelerar(int cuantaVelocidad) {
  }
  public void frenar(int cuantaVelocidad) {
  }
}

class Moto implements Vehiculo {
  public void Acelerar(int cuantaVelocidad) {
  }
  public void frenar(int cuantaVelocidad) {
  }
}
```

---

## :star: 9.2 Ejercicios del tema 9

Duración aproximada: 5min

Enunciado del ejercicio:
```
Crea una clase Persona con las siguientes variables:
-La edad
-El nombre
-El teléfono

Una vez creada la clase, crea una nueva clase Cliente que herede de Persona, esta nueva clase tendrá la variable credito solo para esa clase.

Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad, el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.

Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona, y con una variable salario que solo tenga la clase Trabajador.
```

- Cuando comiences el ejercicio se te mostrarán las especificaciones para la realización y entrega del mismo. La entrega del ejercicio deberá realizarse a través de una carpeta .zip empaquetada o un enlace al repositorio del ejercicio en GitHub.


- Una vez le des al botón de comenzar ejercicio el tiempo del que dispones para realizarlo empezará a contar.


- Asegúrate de tener todo lo que necesites preparado ya que una vez se acabe el tiempo si no has realizado la entrega esta contará como no superada.


-> [Aca pueden ver mi forma de resolverlo en codigo](https://github.com/eugenia1984/open_bootcamp/tree/main/01_curso_introduccion_a_la_programacion/Proyect5)

Es esta:

```Java
/*
 * Ejercicio del tema 9 de Open Bootcamp
 * Del curso: Introduccion a la programacion
 */
package proyect5;

/**
 *
 * @author Maria Eugenia Costa
 */
public class Proyect5 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // Crea ahora un objeto de la clase Cliente que debe tener como 
        // propiedades la edad, el telefono, el nombre y el credito, tienes 
        //que darles valor y mostrarlas por pantalla.
        Cliente cliente = new Cliente(true, 28, "Maria", 123456);
        System.out.println("El cliente "+cliente.getNombre()+" tiene "+
                cliente.getEdad()+" años. Su telefono es "+cliente.getTelefono()+
                "y, ¿tiene crecito? "+cliente.isTieneCredito());
    }
    
}

// Crea una clase Persona con las siguientes variables:
// La edad
// El nombre
// El teléfono
class Persona {
    // propiedades
    private int edad;
    private String nombre;
    private int telefono;
    // constructor
    public Persona(int edad, String nombre, int telefono) {
        this.edad = edad;
        this.nombre = nombre;
        this.telefono = telefono;
    }
    
    // getters y setters
    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }
    
}

// Una vez creada la clase, crea una nueva clase Cliente que herede de Persona, 
// esta nueva clase tendrá la variable credito solo para esa clase.
class Cliente extends Persona {
    //propiedad
    private boolean tieneCredito;
    // constructor
    public Cliente(boolean tieneCredito, int edad, String nombre, int telefono) {
        super(edad, nombre, telefono);
        this.tieneCredito = tieneCredito;
    }
    // getter y setter
    public boolean isTieneCredito() {
        return tieneCredito;
    }

    public void setTieneCredito(boolean tieneCredito) {
        this.tieneCredito = tieneCredito;
    }
}
```


Y esta es como la resolvieron ellos:

```Java
package com.company;

public class Main {

    public static void main(String[] args) {
        Cliente cliente = new Cliente();
        Trabajador trabajador = new Trabajador();
        cliente.nombre = "Raúl";
        cliente.edad = 23;
        cliente.telefono = 293214122;
        cliente.credito = 150.55;
        System.out.println("Soy " + cliente.nombre + ", tengo " + cliente.edad + " años y mi telefono es " + cliente.telefono
                + " y mi credito disponible es " + cliente.credito + "€");

        trabajador.nombre = "Jose";
        trabajador.edad = 42;
        trabajador.telefono = 582910244;
        trabajador.salario = 2000.32;
        System.out.println("Soy " + trabajador.nombre + ", tengo " + trabajador.edad + " años y mi telefono es " + trabajador.telefono
                + " y mi salario es de " + trabajador.salario + "€");

    }
}

class Persona{
    int edad;
    int telefono;
    String nombre;
}

class Cliente extends Persona{
    double credito;
}

class Trabajador extends Persona {
    double salario;
}
```

---
---

# 10. Métodos de clases


Los **métodos** son **funciones** que tienen una **signature** / **protptipo** que va a declarar...

... el ámbito: **public** (va a poder ser utilizada por fuera de la clase) / **private** (solo se puede utilizar en la propia clase)

... el **nombre** dl método

... entre **()** pueden tener **parametros** con su tipo de dato

... puede **devolver valor**

Ejemplo en Go:

```Go
type miclase struct ()
func (m cmclase) leerLibro(libr string) string {
  codigo
}
```

Otro ejemplo en PHP
```PHP
class MiClase {
  public function leerLibros($libro) {
    return "aaa";
  }
}
```

Ejemplo en Java

```Java
class Coche implements Vehiculo {
  public void Acelerar(int cuentaVelodidad) {
  }
  
  public void Frenar(int cuentaVelocidad) {
  }
}
```


---

## :star: Como invocamos a nuestros métodos

- 1ro: creamos una instancia de nuestra clase (un objeto), creamos una nueva referencia en memoria a un objeto.

- 2do nombramos a la variable que hace referencia al objeto + **.** + nombre del metodo, en el caso de que el método lleve parmámetros, entonces entre los **()** lo ponemos.

Ejemplo en codigo:

```Java
Coche coche = new Coche();
coche.Acelerar(50); //invocando al metodo
```

Si en cambio es un metodo de mi propia clase, por ejemplo estando en el main, no voy a necesitar crear una instancia de mi clase.

```Java
public static void main (String[] args) {
  int resultado = suma(2, 5);
  System.out.println(resultado);
  
  public static int suma(int operandoA, int operandoB) {
    return operandoA + operandoB;
  }
}
```

---

## :star: Como usar una interface

```Java
public class Main {
  public static void main (String[] args) {
    Coche coche = new Codche(); // instancia de mi clase Coche
    Moto moto = new Moto();
    ejecutarAcelerar(coche);  // le paso como parametro el objeto coche que tiene la implementacion de la interfaz
    
   //moto.Acelerar();
    //moto.Frenar();
    ejecutarAcelerar(moto);
    
    // el parametro es de tipo Vehiculo (como mi interfaz)
    public static void ejecutaAcelerar(Vehiculo vehiculo) { 
      vehiculo.Acelarar(15);
    }
  }
}  

// mi interfaz
interface Vehiculo { 
  void Acelerar(int cuantaVelocidad);
  void Frenar(int cuantaVelocidad);
}

 // mi clase Coche va a implementar la interfaz Vehiculo
class Coche implements Vehiculo {
  void Acelerar(int cuantaVelocidad) {
    System.out.println("acelerar");
  }
  void Frenar(int cuantaVelocidad) {
    System.out.println("Frenar");
  }
}

// mi clase Moto va a implementar la interfaz Vehiculo
class Moto implements Vehiculo {
  void Acelerar(int cuantaVelocidad) {
    System.out.println("acelerar la Moto");
  }
  void Frenar(int cuantaVelocidad) {
    System.out.println("Frenar la Moto");
  }
}
```

Una clase satisface una interfaz cuando una clase implementa **todos** los metodos de esa interfaz. Se lo suele llamar **wrapper**.


Ejemplo en pseudoclase:

```
INTERFAZ USUARIOS
  METODO GETUSUARIO()
  
CLASE USUARIOSTXT IMPLEMENTA LA INTERFAZ USUARIOS
  METODO GETUSUARIOS()
    LEER UN FICHERO .TXT
    DEVOLVER TODAS LAS LINEAS
    
CLASE USUARIOSBBDD IMPLEMENTA LA INTERFAZ USUARIOS
  METODO GETUSUARIOS()
    CONECTAME A MYSQL
    EJECUTAR "SELECT * FROM ..."
    DEVOLVER TODOS LOS RESULTADOS
  
CLASE USUARIOSREDIS IMPLEMENTA LA INTERFAZ USUARIOS
  METODO GETUSUARIOS()
    CONECTATE A REDIS
    DEVOLVER TODOS LOS USUARIOS

FUNCION LISTARUSUARIOS( NECESITO INTERFAZ USUARIOS )
  DE LA INTERFAZ USUARIOS EJECUTA EL METODO GETURUARIOS


// INVOCO A LISTARUSUARIOS( TE DOY CLASE USUARIOSTXT)
NVOCO A LISTARUSUARIOS( TE DOY CLASE USUARIOSREDIS)
```

En este caso voy a tener que solo cambiar la implemntacion del metodo en la clase


Las interfaces se utilizan mucho, por ejemplo en testing, para simular una base de datos, asi podemos probar nuestros metodos.

---

## :star: Parámetros por valor o por referencia


- **Paso por valor**, al llamar a una funcion copio los valores en memoria y se los doy.

Ejemplo en pseudocodigo:

```
FUNCION SUMA(INT A, INTB) {
  DEVUELVE A+B
}

VAR VALA = 5;
VAR VALB = 10;
SUMA(VALA, VALB);
```

En Java

```Java
int valA = 5;
int calB = 10;
suma(valA, valB);
System.out.println(valA); //5
System.out.println(valB); // 10

public satic int suma(int a. int b) {
  retun a+b ;
}
```

- **Paso por referencia** se tabaja con la variable, se modifica su valor, no se hace copia.

Ejemplo en Java

```Java
package com.open_bootcamp;

public class Main {

  public static vid main(String[] args) {
    Coche coche = new Coche();
    cocheChanger(coche);
  }
  
  public static void cocheChanger(Coche coche) {
    coche.velocidad += coche.velocidad +50;
  }
}
```

A diferencia del metodo suma, en este caso hacemos referencia a un objeto dle tippo Coche

En este caso vamos a manipular al zona de momeria y modificar la variable, vamos a maniular la propiedad velocidad del coche.


->> En java se suele hacer paso por valor, salvo que se reciba un objeto y ahi es paso por referencia.

---

## :star: Recursívidad

Un método se llama a si mismo una y otra vez.

Ejemplo en pseudoodigo:

```
FUNCION SUMA(INT A, INT B) {
  VAR TEMP = A+B
  
  SI TEMP ES MAYOR A 15
    PARA
    
  SUMA(A, TEMP)
}
```

Hay que controlar bien lo que se hace, porque sino se nos va a quedar todo tildado (creamos un bucle infinito). Debe tener una condición en la cual pasa a ser false y se sale de la misma. 

El típico ejemplo de una función recursiva es el factorial de un número.

```Java
public static int factorial(int nuemro) {
  int resultado;
  if(numero == 1 ) {
    return 1;
  }
  
  resultado = factorial(numero - 1 ) * numero;
  return resultado;
}
```

Para calcularlo sin recursividad:

```Java
public static int factorialNR(int numero) {
  int temp;
  let resultado = 1;
  
  for(temp = 1; temp <= numero; temp++) {
    resultado += temp;
  }
  
  return resultado;
}
```
 
---
---

# 11. Lenguajes: compilados e interpretados 

## :star: Compilador


Toma una secuencia de caracteres y lo convierte en otra cosa. Se lo puede pensar como un traductor. El INPUT lo compila a CODIGO MAQUINA o a OTRO LENGUAJE.


## :star: Tipos de compiladores

Hay dos tipos:

- los que generan codigo maquina

- los que generan codigo intermedio -> Un lenguaje interpretado no se va a compilar a codigo maquina.

Se diferencian por el onjetivo final.



## :star: Fases de compilación


```
CODIGO  -> AQUI TRABAJA EL  -> CODIGO
FUENTE      COMPILADOR          FINAL
```

- FASE DE **analizador lexico**, va leyendo todo el input y genera **tokens** (el tokenizador), es decir va leyendo la secuencia de los caracteres

```
VARIABLE VARIABLE =10;

V -> ETRA V
A -> LETRA A
= -> SIMBOLO IGUAL
1 -> NUMERO
0 -> NUMERO
; -> PUNTO Y COMA

VAR -> PALABRA RESERVADA "VAR"
VARIABLE -> "IDENTIFICADOR"
= -> SIMBOLO DE ASIGNACION
10 -> NUMERO ENTERO
```

- fase de **análisis sintáctico** va a ver si tiene coherencia, va a ir mostrando si hay errores.
- Ejeplo en pseudocodigo:

```
VAR VARIABLE = ;
```
-> aca no esta inciializada, no le asigno un valor

Otro ejemplo:
```
if(numero > 10) {...}

1 - IF
2 - ABRE PARENTESIS
3 - CONDICION
4 - CIERRA PARENTESIS
5 - ABRE LLAVE
6 - EXPRESIONES
7 - CIERRA LLAVES
```

- genera un **codigo intermedio**, utiliza un lenguaje de más bajo nivel, simplifica le lenguaje humano y lo puede manipular mejor el compilador. **abstract sintax tree** (árbol sintáctico abstracto).

Ejemplo con operacion de suma 5 + 2 + 4

```
   +
   5
  +
2 4
```

Se lee de arriba a abajo y de izquierda a derecha.

- fase de **optimización del códiogo intermedio**, algunos lenguajes no tienen esta fase. Generan un codigo más optimo que el escrito o elimina cosas redundantes.

- fase **generacion de codigo**, ahora vamos a tener el *codigo maquina* ó un *cosigo para ser interpretado*


## :star: Tipos de lenguaje hay

- **lenguaje compilado** se ejecuta directamente en el procesador a traves del sistema operativo.

Ejemplos: C, C++, Rust, Go, Ensamblador

- **lenguaje interpretado** no son ejecutador directamente en el CPU o en el sistema operativo, se ejecuta a través de una máquina virtual o intérprete.

Ejemplo: Java (JVM Java Virtual Machine, va leyendo linea por linea el bytecode), Python, PHP.

- **lenguajes compilados e interpretados**, como por ejemplo C#(.net) que genera un codigo intermedio llamado MSIL(Microsoft Intermediate Lenguage) y si algo se ejecuta muchas veces lo compila (JIT Jist-In-Time Compiler).

Los lenguajes compilados son más rapidos que los interpretados, porque se ejecutan en otro lado y el lenguaje interpretado necesita un programa adicional.

---


## :star: 11.2 Ronda de preguntas


Despejan algunas dudas de la unidad

---
---

## :star: Certificado

![image](https://user-images.githubusercontent.com/72580574/204338645-44adab99-3232-47a2-b167-f773d1bf88ba.png)


---
