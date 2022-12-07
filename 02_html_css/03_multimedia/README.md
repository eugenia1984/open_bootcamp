# :star2:  Multimedia

---

## :book: Temas:

```
1 - Imagenes
2 - Videos y audio
3 - Práctica / Entrega
```

---

:computer: -> Pueden var la práctica en [**multimedia.html**](https://github.com/eugenia1984/open_bootcamp/blob/main/02_html_css/03_multimedia/multimedia.html)

---

## :star: 2 -  Imágenes

La etiqueta que se utiliza es ```<img >``` (que se auto cierra, no tiene otra etiqueta de cierre) y tiene dos atributos importantes:

- ``` src=" " ``` que indica la ruta de donde va a tomar la imagen

- ``` alt=" " ``` es un texto alternatico, por si la imagen no carga y también ayuda en la accesibilidad

Hay otros atributos que pueden tener como ```height=""``` o ```width=""```, ambos va solo con numeros y son en pixeles.

---

##  :star: 2 - Videos y Audio


Los **videos** se definen con la etiqueta: ```<video>  </video>```.

Hay 3 formatos muy utilizados para videos:

- webm

- mp4

- ogg

También tiene otros atributos como:

- ```widht=""```

- ```height=""```

- ```controls``` para mostrar los controles

- ```autoplay``` no es muy recomendada utilizarla porque apenas renderiza la pagina se va a reproducir, si se utiliza ponerle el atributo ```muted```.

- ```loop``` para que el video se reproduzca infinitamente

Dentro tenemos la etiqueta ```<source src="" type="video/formato">``` que nos indica de donde tomamos el video y con el type que formato tiene donde puse formato va el que corresponda

Se puede ver más información en []https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video](]https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video)


Los **audios** se declaran con la etiqueta ```<audio> </audio>```, hay 3 tipos más utilizados:

- mp3

- nav

- ogg


También tiene otros atributos como:

- ```autoplay```

- ```controls```

- ```loop```


Y dentro también tienen la etqieuta ```<source src="" type=" video">```

Además de tener path de mis archivos localizados, puedo tener paths externos.


---

## :star: 3 - Práctica / Entrega


### Ejercicio 1

Enunciado:

1. Crea un nuevo documento HTML que cumpla los siguientes parámetros:

2. Debe estar dividido en tres secciones (etiqueta)

3. Condiciones para la primera sección

- Debe tener un título (h1) indicando "Aprendiendo a utilizar imágenes"

- Debes incluir una imagen de tu videojuego favorito

4. Condiciones para la segunda sección

- Debe tener un título (h1) indicando "Aprendiendo a utilizar los vídeos"

- Descárgate cualquier vídeo de youtube

- Debes incluir una etiqueta de vídeo que reproduzca el vídeo que acabas de descargar

- El vídeo debe mostrar los controles, reproducirse automáticamente y en bucle, PERO inicialmente debe estar sin sonido

5. Condiciones para la tercera sección

- Debe tener un título (h1) indicando "Aprendiendo a utilizar los audios"

- Descárgate cualquier audio de una canción de youtube

- Debes incluir una etiqueta de audio que reproduzca el audio que acabas de descargar

- El audio debe mostrar los controles, reproducirse automáticamente y en bucle


:computer: ->> Pueden verla en [**entrega**](https://github.com/eugenia1984/open_bootcamp/tree/main/02_html_css/03_multimedia/entrega)

---
