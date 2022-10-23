/******** Ejercicio ********/
// Crea un archivo JS que contenga las siguientes líneas
// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaDeCompra = ["Banana", "Manzana", "Naranja", "Tomate", "Lechuga", "Cebolla"];
console.log(`Mi lista de Compra: ${listaDeCompra}`);
//  Modifica la lista de la compra y añádele "Aceite de Girasol"
// con el metodo .push() lo agrego al final modificando mi array
listaDeCompra.push("Aceite de Girasol");
console.log(`Mi nueva lista de compra es: ${listaDeCompra}`);
// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
// con el metodo .pop() voy a modificar el array eliminando el ultimo elemento
listaDeCompra.pop();
console.log(`Mi nueva lista de compra sin el ultimo item: ${listaDeCompra}`)
// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [
  {
    titulo: "Coco",
    director: ["Adrián Molina", "Lee Unkrich"],
    fecha: 2017
  },
  {
    titulo: "Hotel Transylvania",
    director: "Genndy Tartakovsky",
    fecha: 2012
  },
  {
    titulo: "He's Just Not That Into You",
    director: "Ken Kwapis",
    fecha: 2009
  }
]

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasDesde2010 = peliculasFavoritas.filter(obj => obj.fecha > 2010);
console.log(`Pelicula del 2010 en adelante: ${peliculasDesde2010}`);
// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directoresAgregados = []
const directores = peliculasFavoritas.map((elemento) => {
  directoresAgregados.push(elemento.director);
});
console.log(directores);
// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
