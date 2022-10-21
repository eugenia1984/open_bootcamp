/***** NUMEROS *****/
/***** Numbers y presicion en JavaScript *****/
// Declaración de variables numéricas (enteros y con decimales)
// No hay distincion entre numeros enteros o decimales (a diferencia de Java, por ejemplo)
let numberInteger = 5;
console.log(numberInteger); // 5

let numberDecimal = 0.1;
console.log(numberDecimal); // 0.1

// Precisión
let numberDecimal2 = 0.2;
console.log(numberDecimal + numberDecimal2); // 0.30000000000000004
// es un tema de como esta guardado el dato, las variables de JavaScript se guardan en bites y pierde presicion

// Pequeño truco para obtener valores "reales"
console.log(Math.round((0.1 + 0.2) * 100)/100); // 0.3

/*****  Operaciones y redondeo *****/
let numberDecimal3 = 3.5;
let numberDecimal4 = 4.8;
// Suma (+)
console.log(numberDecimal3 + numberDecimal4); // 8.3
// Resta (-)
console.log(numberDecimal3 - numberDecimal4); // -1.2999999999999998
// Multiplicación (*)
console.log(numberDecimal3 * numberDecimal4); // 16.8
// División (/)
console.log(numberDecimal3 / numberDecimal4); // 0.7291666666666667

// Parseo de Number a String
console.log(typeof numberInteger); // number
let numberIntegerToString = numberInteger.toString(); 
console.log(numberIntegerToString); // 5
console.log(typeof numberIntegerToString); // string

// Redondeo de números decimales
let c = 3.3;
let d = c * 3;

console.log(d); // 9.899999999999999
console.log(typeof d); // number

// .toFixed(x) - Limitar el número de decimales al valor x
console.log(d.toFixed(4)); // 9.9000
console.log(typeof d.toFixed(4)); // string

let e = 1839.1232456789;
let f = 2213556153215;
console.log(e.toFixed(2)); // 1839.12
console.log(f.toFixed(2)); // 2213556153215.00

// .toPrecision(x) - Limita el número de cifras significativas
console.log(e.toPrecision(7)); // 1839.123
console.log(f.toPrecision(7)); // 2.213556e+12
console.log(typeof f.toPrecision(3)); // string

/***** Metodos de numbers y limites en JavaScript *****/
// Operador .valueOf() - Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a); // 2
console.log(b); // [Number: 3]
console.log(a + b); // 5
console.log(a.valueOf() + b.valueOf()); // 5

console.log(b.valueOf()); // 3

let str = new String("Hola soy un string");
console.log(str); // [String: 'Hola soy un string']
console.log(str.valueOf()); // Hola soy un string

// NaN (Not a Number) - Infinity
let n = Number('adios');
console.log(n); // NaN
console.log(isNaN(n)); // true

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor); // Infinity

let divisor_2 = null;
console.log(numerador / divisor_2); // Infinity

// Cómo convertir los string a valores numéricos con Number, parseInt y parseFloat
let numero = '5.89';
let num2 = 17.2;

console.log(typeof numero); // string
console.log(numero + num2); // Error de concepto

console.log(Number(numero) + num2); // 23.09

console.log(parseInt(numero)) // 5
console.log(parseFloat(numero)) // 5.89

let num3 = 4;
console.log(parseInt(num3)) // 4
console.log(parseFloat(num3)) // 4

// Números hexadecimales (base 16)
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16)); // 239031

// Obtener los valores máximo y mínimo en Javascript
let min_precision = Number.EPSILON; 
let min_valor_JS = Number.MIN_VALUE; 
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision); // 2.220446049250313e-16
console.log(min_valor_JS); // 5e-324
console.log(max_valor_JS); // 1.7976931348623157e+308

/***** Ejercicio *****/
// Crea un archivo JS que contenga las siguientes líneas
// Una variable que contenga tu altura en centímetros (entero)

// Una variable que contenga tu altura en metros (número de coma flotante)

// Una variable que contenga tu peso en kilogramos (número de coma flotante)

// Una variable que contenga tu altura en metros redondeada hacia arriba

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
