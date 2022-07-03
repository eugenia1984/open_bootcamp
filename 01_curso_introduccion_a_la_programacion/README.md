# :book: 1 - Curso Introduccion a la programacion

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

