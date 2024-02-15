import { question } from "readline-sync";

/*
    39. Leia três números inteiros 
    e positivos (A, B, C) 
    e calcule a seguinte expressão: 
*/

// ENTRADA
const numeroA = Number(question("Numero A: "));
const numeroB = Number(question("Digite o numero B: "));
const numeroC = Number(question("Digite o numero C: "))
    // PROCESSAMENTO
const resultado = ((numeroA + numeroB) ** 2 + (numeroB + numeroC) ** 2) / (2);

// SAIDA
console.log(`${resultado}`);