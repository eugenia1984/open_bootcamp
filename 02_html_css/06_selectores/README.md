## :star: 6 - Anidación de selectores

### Anidacion de selectores


Para ganar presicion.

- .clase-padre .clase-hija: Esto me va a afectar solo a los **p** que esten dentro de la seccion con la clase **.contenedor**, todos los **p** que están por fuera no serán afectados.

```CSS
.contenedor p {
  color: green;
}
```

---

### Pseudoclases

Se utilizan dentro del codigo CSS para hacer referencia a distintos estados.

- **:hover** cambia cuando paso el ratón por encima, se le sule cambiar el color de fondo o de la letra.

- **:first-child** va a aplicar al primer hijo, si por ejemplo tengo un div con muchos parrafos, solo va a afectar al primer párrafo.

- **.link** se utiliza con los anchors, son los links no visitados, por default suelen estar en celeste.

- **:visited** se utiliza mucho con los anchors (enlaces), para los que ya visitamos, suelen cambiar de color a violeta, por defecto.

- **.active** se cambia el color del link al pasar el raton por encima.

Es importante hacerlo en el orden que se puso aca lo de los links, sino se pisan los estilos.

->> hay muchos más, se pueden buscar para lo que se precise en w3schools o en MDN.


---

### Pseudoelementos

Se defininen con **::**, todos los elementos tienen un **::after** y un **::before**.

Otros son **::first-letter** y **.first-line**.

Otro es el **::selection** para cuando paso por encima el mouse y selecciono me lo va a hacer como el resaltador.


Otro ejemplo es el **::marker**, se utiliza tanto para ```ul``` como para ```ol```: 
```CSS
.listado li::marker {
  color: red;
}
```

```
<div class="contenedor">
  <p><span class="frase">En medio de la dificultad reside la oportunidad - Albert Einstein</span></p>
</div>
```

```CSS
.contenedor {
  width: 300px;
  height: 100px;
  background-color: aquamarine;
}

span.frase {
  font-style: italic;
}

span.frase::before {
  content: '<<';
}

span.frase::after {
  content: '>>';
}
```

---

### Especificidad

El CSS es CAscading Style Sheet, es decir se carga en cascada de arriba hacia abajo y de izquierda a derecha.

Es decir que si detallo dos veces la misma clase en mi hoja de estilo, se va a terminar aplicando la última, se pisa.

Hay también distintos niveles de especificidad:

- El **estilo en linea** dentro de la etiqueta de html es el que tiene mayor especificidad.

- El **id** tiene mayor especificidad que la **clase**

(1, 1, 0) el 1er 1 es por el **id**, el 2do 1 es por tener una **clase**

(2, 1, 0) el 1er 2 es por tener 2 **id**

- En el CSS al utilizar **!important** se va a imponer, pero es muy mala practica utilizar important. Ya que despues no se va a poder pisar, solamente se podria modificar utiliando más !important.

---

### Ejercicio

Enunciado:

```
Crea un nuevo documento HTML con el título "Selectores, pseudo-clases y pseudo-elementos en CSS"

- Crea un nuevo fichero CSS e impórtalo en el documento HTML principal
- Crea un botón con el texto "Pasa por encima" (TIP: Este texto debes agregarlo a través de un pseudo-elemento)
- Utiliza las pseudo-clases para que cuando se pase el ratón por encima de este botón, el texto se vuelva blanco y el fondo de color verde
- Utiliza los pseudo-elementos para cambiar el texto del botón a "¡Hecho!"
```

---