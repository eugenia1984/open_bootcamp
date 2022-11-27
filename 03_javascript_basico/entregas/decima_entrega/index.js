import { suma, multiplica } from "./controller.js"
import chalk from "chalk";

const resultado = multiplica(suma(1, 2),suma(4, 5))
console.log(`Resultado de multiplicar: (1+2) x (4+5) = ${resultado}`);
console.log(chalk.green(resultado));