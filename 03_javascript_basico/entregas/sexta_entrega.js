/******** Ejercicio ********/
// Crea un archivo JS que contenga las siguientes líneas
// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaDeCompra = ["Banana", "Manzana", "Naranja", "Tomate", "Lechuga", "Cebolla"];
console.log(`- Mi lista de Compra: ${listaDeCompra}`);
//  Modifica la lista de la compra y añádele "Aceite de Girasol"
// con el metodo .push() lo agrego al final modificando mi array
listaDeCompra.push("Aceite de Girasol");
console.log(`- Mi nueva lista de compra es: ${listaDeCompra}`);
// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
// con el metodo .pop() voy a modificar el array eliminando el ultimo elemento
listaDeCompra.pop();
console.log(`- Mi nueva lista de compra sin el ultimo item: ${listaDeCompra}`)
// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [
  {
    titulo: "Coco",
    director: ["Adrián Molina", "Lee Unkrich"],
    fecha: new Date (2017, 0, 1)
  },
  {
    titulo: "Hotel Transylvania",
    director: "Genndy Tartakovsky",
    fecha: new Date (2012, 0, 1)
  },
  {
    titulo: "He's Just Not That Into You",
    director: "Ken Kwapis",
    fecha: new Date (2009, 0, 1)
  }
]

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasNuevas = peliculasFavoritas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))
console.log(`- Peliculas desde 2010: ${peliculasNuevas}`);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directoresAgregados = []
const directores = peliculasFavoritas.map((pelicula) => {
  return pelicula.director;
});
console.log(`- Los directores son: ${directores}`);
// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculasFavoritas.map(pelicula => {
  return pelicula.titulo;
});
console.log(`- Los titulos son: ${titulos}`)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directoresYTitulos = directores.concat(titulos);
console.log(`- directores y titulos: ${directoresYTitulos}`);
// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directoresTitulosSpreadOperator = [...directores, ...titulos];
console.log(`- directores y titulos con spread operator: ${directoresTitulosSpreadOperator}`);