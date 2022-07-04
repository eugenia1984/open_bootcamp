
package proyect2;

public class Proyect2 {

    public static void main(String[] args) {
        int num1 = 1;
        int num2 = 2;
        int num3 = 3;
        // Primera parte: 2 - -Llamar a la función en el main y darle valores
        int resultado  = suma(num1, num2, num3);
        System.out.println(resultado);
        
        // Creo el objeto coche
        Coche miCoche = new Coche();
        miCoche.agregarPuerta();
        System.out.println(miCoche.numeroDePuertas);
    }
    
    // Primera parte: 1 - Crear una función con tres parámetros que sean números que se suman entre sí.
    public static int suma (int numero1, int numero2, int numero3) {
        return numero1 + numero2 + numero3;
    }    
}

// Segunda parte:
// - Crear una clase coche.
// - Dentro de la clase coche, una variable numérica que almacene el número 
// de puertas que tiene.
// - Una función que incremente el número de puertas que tiene el coche.
// - Crear un objeto miCoche en el main y añadirle una puerta.
// - Mostrar el número de puertas que tiene el objeto.
class Coche {
    int numeroDePuertas = 4;

    public void agregarPuerta() {
        this.numeroDePuertas++; 
    }
}
