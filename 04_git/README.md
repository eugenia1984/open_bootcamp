#  <img src="https://img.icons8.com/color/30/null/git.png"/> Git

---


### :book:  Temas:

```
1 - Introducción al control de versiones
2 - Instalación
3 - Repositorio local
4 - Repositorio remoto
5 - Conflictos
6 - Gitflow
7 - Introducción a CI/CD
8 - GitHub actions
9 - Gitlab CI
10 - Bitbucket Pipelines
```

---

## :star: 1 - Introducción al control de versiones

### 1.1 - Introducción, qué es el control de versiones

Guardo los cambios en distintas carpetas, para que si debo volver hacia atras, puedo.

No es un sistema de copia de seguridad.

Hay tres tipos: **locales**, **centralizados** y **distribuidos**. 


### 1.2 - Control de versiones local

Sería como ir guardando en varias carpetas, para tener las diferentes etapas del proyecto.

### 1.3 - Control de versiones RCS

Luego se creo un sistema de control de versiones local, el primero que se creo fue: **RCS**, lo que todavía me falta que me soluciones es la forma de trabaajr en equipo.

### 1.4 - Control de versiones centralizado: CVS

Ya quedo viejo, fue sustituido por **SVN**. 

Al ser centralizado, ya se envía a un servidor, se puede trabajar en equipo.

Para bajar un codigo fuente: ``` cvs -d <usuario /la ruta> checkout -P src``` obten el codigo del servidor, con ``` -P```  me indica que rama.

Se utilizaba en la plataforma Source Forge.

Tenia la contra de no ser facil de gestiionar.

### 1.5 - Control de versiones centralizado: SVN ( subversion)

Este luego fue reemplazado por **GIT**.

Trabaja con el modelo **cliente-servidor**. Es más amigable, utiliza las **branches** y las **tags**.

Para bajar un codigo fuente: 
``` svn checkout <la ruta del servidor> <la rama> ```  ó ``` svn co <la ruta del servidor> <la rama> ```

Ahora la ruta ya puede ser **http** o sea puede ser montado el servidor con **Apache**.


Al ser centralizado, ya se envía a un servidor, se puede trabajar en equipo.

El único problema que tiene es que si el servidor central está caido o no está accesible, entonces no puedo enviar los cambios.

Solo tengo mi copia del ultimo cambio.


### 1.6 - Control de versiones distribuido

Git es uno de ellos, antes estaba Mercurial y Bazar. Los distribuidos trbajan en **local** y con un **Servidor**, en mi propia computadora tengo mi copia de codigo y por medio del servidor lo puedo compartir con el grupo.

Crea referencias o ficheros, por lo que puedo volver hacia atras, para ver los cambios que se realizaron, lo hago a traves de los commits.

```git log``` -> para ver el historial de los commits (de mis confirmaciones)

En la computadora hay una carpeta ```.git```, en Linux y Mac hay que ver porque al ser . esta oculto. En los **objects** esta el codigo fuente.


### 1.7 - Compartir versión

- Puedo hacer un .zip y compartir ( poco recomendado)

- Me creo el servidor para compartir

- Utilizo un servidor (github, gitlab, bitbucket, sourceforge)

### 1.8 - Opciones de servidores de repositorios


- **github**, de Microsoft, podes deployar paginas estaticas

- **gitlab**, de Attlansin, los de Jira,  podes deployar paginas estaticas

- **bitbucket**

- **sourceforge**, el rey destronado, ya no se usa tanto, permite crear repositorios tipo mercurian y svn.

### 1.9 - GitHub

- Hay que registrarse en github

- Haciendo click en **new** creamos un **nuevo repositorio** y definimos: titulo, descripción, poblic / private(otorgamos permiso a quienes pueden verlo, antes deben estar registrados), agregar ficheros como **README.md**, **.gitignore**, elegir **licencia** (MIT License) y hacer click en **Crear repositorio**.

Dentro de un repositorio tenemos **settings**.

### 1.10 - Git push

Localmente:

1. Me creo mi repositorio y lo conecto a un repositorio de GitHug, o me traigo un repositorio de GitHub con ```git clone <url>```

2. Agrego los cambio, ***confirmo** y me quedo en **StageArea** con: ```git add .```, si en vez de agregar todo quiero agregar un determinado archivo en vez de **.** (**all**) escribo le nombre del archivo

3. Ahora debo hacer el commit con el mensaje: ```git -m "mi mensaje"```

4. Y paso de Atage Area** a **confirmado** y lo subo la repositorio con: ```git push```

### 1.11 - Segundo factor de autenticación

Es una buena práctica y se recomienda. Con el **token**, que debe tener seteado el scope, una fecha de vencimiento, etc. Cuando se genera copiar el que dan porque despues no se verá más.

Para utilizar el token al hacer:```git push <url>``` se puede utilizar otro email (si en el setting hacemos que el email esta privado) para que no se vea y no nos spaneen.

### 1.12 -Privacidad y seguridad

Es mejor utilizar el token,

### Ejemplo en GitLab

Hizo un nuevo repositorio en GitLab para ver que son muy similares

---
---


## :star: 2 - Instalación

### 2.1 - Instalación en Windows

### 2.2 - Instalación en Ubuntu

### 2.3 - Instalación en MacOS

### 2.4 - Creación de servidores mediante docker

### 2.5 - Instalación de Gitea

### 2.6 - Levantar servidor

### 2.7- Configurar servidor

### 2.8 - Instalar GitLab

### 2.9 - Comparativa


---

## :star: 3 - Repositorio local


---

## :star: 4 - Repositorio remoto


---

## :star: 5 - Conflictos


---

## :star: 6 - Gitflow


---

## :star: 7 - Introducción a CI/CD


---

## :star: 8 - GitHub actions

 
---

## :star: 9 - Gitlab CI


---

## :star: 10 - Bitbucket Pipelines

---
