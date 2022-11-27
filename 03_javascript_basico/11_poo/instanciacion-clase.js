// clase Persona
class Persona {
  // constructor para setear las propiedades
  constructor(nombre, edad, isDeveloper) {
      this.nombre = nombre
      this.edad = edad
      this.isDeveloper = isDeveloper
  }
  // Metodo
  saludo() {
      console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
  }
}

// el THIS hace referencia la objeto en el cual esta ahora

// instancio una mersona a traves del metodo constructor
const nueva_persona = new Persona("Gorka", 34, true);
// la muestro por consola
console.log("nueva_persona: ",nueva_persona);
console.log("Saludo de nueva_persona: ");
console.log(nueva_persona.saludo());

let numero = 60 // inicializar
console.log(typeof numero)

// INSTANCIO
let persona_2 = new Persona("Maria", 34, false); 
console.log("typeof persona_2: ")
console.log(typeof persona_2);
// instanceof -> similar a typeof pero para clases
console.log("persona_2 instanceof Persona:");
console.log(persona_2 instanceof Persona);

