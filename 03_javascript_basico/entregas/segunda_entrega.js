/****Ejercicio *****/
/*
Duración aproximada: 5min

Enunciado del ejercicio:
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/
const fecha_de_nacimiento = new Date(1984, 8, 11); // Sat Jan 15 2022
const libroFavorito = {
  titulo: "El tunel",
  autor: "Ernesto Sabato",
  fecha: new Date(2022, 9, 20),
  url: "https://www.ingenieria.unam.mx/dcsyhfi/material_didactico/Literatura_Hispanoamericana_Contemporanea/Autores_S/SABATO/El.pdf"
}
const Eugenia = ["Maria Eugenia", 38, true, fecha_de_nacimiento, libroFavorito];