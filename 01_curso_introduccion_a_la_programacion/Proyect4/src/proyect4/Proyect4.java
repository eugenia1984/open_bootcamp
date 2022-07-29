/*
 * Para practicar la encapsulación:
 * -Crear clase Persona.
 * -Crear variables las privadas edad, nombre y telefono de la clase Persona.
 * -Crear gets y sets de cada propiedad.
 * -Crear un objeto persona en el main.
 * -Utiliza los gets y sets para darle valores a las propiedades edad, nombre 
 * y telefono, por último muéstralas por consola
 */
package proyect4;

/**
 * @author Maria Eugenia Costa
 */
public class Proyect4 {

    public static void main(String[] args) {
        // Crear un objeto persona en el main
        Persona personita = new Persona();
        // Utiliza los gets y sets para darle valores a las propiedades edad, 
        // nombre y telefono
        personita.setEdad(37);
        personita.setNombre("Eugenia");
        personita.setTelefono(123456789);
        //por último muéstralas por consola
        System.out.println("Personita tiene "+personita.getEdad()+" años, se llama "+
                personita.getNombre()+" y su telefono es: "+personita.getTelefono());
    }
}
    // Crear clase Persona
class Persona {
    // Crear variables las privadas edad, nombre y telefono de la clase Persona
    private int edad;
    private String nombre;
    private int telefono;

    // Crear gets y sets de cada propiedad
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

