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

### Introducción, qué es el control de versiones

Guardo los cambios en distintas carpetas, para que si debo volver hacia atras, puedo.

No es un sistema de copia de seguridad.

Hay tres tipos: **locales**, **centralizados** y **distribuidos**. 


###  Control de versiones local

Sería como ir guardando en varias carpetas, para tener las diferentes etapas del proyecto.

### Control de versiones RCS

Luego se creo un sistema de control de versiones local, el primero que se creo fue: **RCS**, lo que todavía me falta que me soluciones es la forma de trabaajr en equipo.

### Control de versiones centralizado: CVS

Ya quedo viejo, fue sustituido por **SVN**. 

Al ser centralizado, ya se envía a un servidor, se puede trabajar en equipo.

Para bajar un codigo fuente: ``` cvs -d <usuario /la ruta> checkout -P src``` obten el codigo del servidor, con ``` -P```  me indica que rama.

Se utilizaba en la plataforma Source Forge.

Tenia la contra de no ser facil de gestiionar.

### Control de versiones centralizado: SVN ( subversion)

Este luego fue reemplazado por **GIT**.

Trabaja con el modelo **cliente-servidor**. Es más amigable, utiliza las **branches** y las **tags**.

Para bajar un codigo fuente: 
``` svn checkout <la ruta del servidor> <la rama> ```  ó ``` svn co <la ruta del servidor> <la rama> ```

Ahora la ruta ya puede ser **http** o sea puede ser montado el servidor con **Apache**.


Al ser centralizado, ya se envía a un servidor, se puede trabajar en equipo.

El único problema que tiene es que si el servidor central está caido o no está accesible, entonces no puedo enviar los cambios.

Solo tengo mi copia del ultimo cambio.


### Control de versiones distribuido

Git es uno de ellos, antes estaba Mercurial y Bazar. Los distribuidos trbajan en **local** y con un **Servidor**, en mi propia computadora tengo mi copia de codigo y por medio del servidor lo puedo compartir con el grupo.

Crea referencias o ficheros, por lo que puedo volver hacia atras, para ver los cambios que se realizaron, lo hago a traves de los commits.

```git log``` -> para ver el historial de los commits (de mis confirmaciones)

En la computadora hay una carpeta ```.git```, en Linux y Mac hay que ver porque al ser . esta oculto. En los **objects** esta el codigo fuente.


### Compartir versión

### Opciones de servidores de repositorios

### GitHub

### Git push

### Segundo factor de autenticación

### Privacidad y seguridad

### Repaso

### Ejemplo en GitLab

---

## :star: 2 - Instalación


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
