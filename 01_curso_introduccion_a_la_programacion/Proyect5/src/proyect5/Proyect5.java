/*
 * Ejercicio del tema 9 de Open Bootcamp
 * Del curso: Introduccion a la programacion
 */
package proyect5;

/**
 *
 * @author Maria Eugenia Costa
 */
public class Proyect5 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // Crea ahora un objeto de la clase Cliente que debe tener como 
        // propiedades la edad, el telefono, el nombre y el credito, tienes 
        //que darles valor y mostrarlas por pantalla.
        Cliente cliente = new Cliente(true, 28, "Maria", 123456);
        System.out.println("El cliente "+cliente.getNombre()+" tiene "+
                cliente.getEdad()+" años. Su telefono es "+cliente.getTelefono()+
                "y, ¿tiene crecito? "+cliente.isTieneCredito());
        Trabajador trabajador = new Trabajador(30000, 27, "Juan", 111111);
        System.out.println("El trabajador de nombre "+trabajador.getNombre()+
                " tiene un salario de: "+trabajador.getSalario()+" al mes. Tiene"+
                trabajador.getEdad()+" años y su telefono es "+trabajador.getTelefono());

    }
    
}

// Crea una clase Persona con las siguientes variables:
// La edad
// El nombre
// El teléfono
class Persona {
    // propiedades
    private int edad;
    private String nombre;
    private int telefono;
    // constructor
    public Persona(int edad, String nombre, int telefono) {
        this.edad = edad;
        this.nombre = nombre;
        this.telefono = telefono;
    }
    
    // getters y setters
    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }
    
}

// Una vez creada la clase, crea una nueva clase Cliente que herede de Persona, 
// esta nueva clase tendrá la variable credito solo para esa clase.
class Cliente extends Persona {
    //propiedad
    private boolean tieneCredito;
    // constructor
    public Cliente(boolean tieneCredito, int edad, String nombre, int telefono) {
        super(edad, nombre, telefono);
        this.tieneCredito = tieneCredito;
    }
    // getter y setter
    public boolean isTieneCredito() {
        return tieneCredito;
    }

    public void setTieneCredito(boolean tieneCredito) {
        this.tieneCredito = tieneCredito;
    }
}
// Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de 
// Persona, y con una variable salario que solo tenga la clase Trabajador.
class Trabajador extends Persona {
    // propiedad
    private int salario;
    // constructor
    public Trabajador(int salario, int edad, String nombre, int telefono) {
        super(edad, nombre, telefono);
        this.salario = salario;
    }
    // getter y setter de salario
    public int getSalario() {
        return salario;
    }

    public void setSalario(int salario) {
        this.salario = salario;
    }
    
    
}