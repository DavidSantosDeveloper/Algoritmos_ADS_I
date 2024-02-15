import { question } from "readline-sync";

/*
    38. Leia 2 (duas) frações (numerador e denominador), 
calcule e escreva a soma destas frações, 
escrevendo o resultado em forma de fração. 
 

*/

// ENTRADA
const numerador1 = Number(question("Digite o numerador 1: "));
const denominador1 = Number(question("Digite o denominador 1: "));
const numerador2 = Number(question("Digite o numerador 2: "));
const denominador2 = Number(question("Digite o denominador 2: "));

// PROCESSAMENTO
const denominador = denominador1 * denominador2;
const numerador = ((denominador / denominador1) * numerador1) + ((denominador / denominador2) * numerador2);
const resultado = numerador / denominador;
// SAIDA
console.log(` ${numerador1}/${denominador1} + ${numerador2}/${denominador2} 
= (${((denominador / denominador1) * numerador1)} + ${((denominador / denominador2) * numerador2)}) / (${denominador1 * denominador2}) 
= ${resultado}`)