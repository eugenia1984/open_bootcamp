/****** Programacion Orientada a Objetos *******/

//Objeto persona
const persona = {
  // atributos (properties)
  nombre: "Maria Eugenia Costa",
  edad: 38,
  isDeveloper: true,
  // metodos
  saludo: function() {
      console.log('Hola!')
  }
}

// muestro a mi objeto persona
console.log(`Persona: ${persona}`); 
// invoco la metodo del objeto persona
persona.saludo(); 

// instancio una nueva persona: otra_persona
const otra_persona = {
  nombre: "Miguel",
  edad: 15,
  isDeveloper: false,
  saludo: function() {
      console.log('Hello')
  }
}
// invoco la metodo saludo del objeto otra_persona
otra_persona.saludo()

// Ya creando dos personas me doy cuenta que estoy repitiendo mucho código, es mejor tener una función constructora de personas
// Función factory
const creaPersona = (nombre, edad, isDeveloper) => {
  return {
      nombre, // nombre: nombre
      edad,
      isDeveloper,
      saludo: function() {
          console.log('Hello')
      }
  }
}

// seria casi como instanciar un nuevo objeto de la clase persona
const nueva_persona = creaPersona("Juan", 23, true)
console.log(nueva_persona)

// seria casi como instanciar un nuevo objeto de la clase persona
const nueva_persona_2 = creaPersona("Maria", 44, false)

// En realidad aca estamos simulando la clase y su metodo constructor