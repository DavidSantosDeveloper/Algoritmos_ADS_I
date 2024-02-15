import * as readsync from "readline-sync";

/*
    31. Leia um número inteiro (4 dígitos binários),
    calcule e escreva o equivalente na base decimal. 

*/

// ENTRADA
const binario = readsync.question("digite um numero binario (4 digitos): ")

// PROCESSAMENTO
const indice_0 = Number(binario[3]);
const indice_1 = Number(binario[2]);
const indice_2 = Number(binario[1]);
const indice_3 = Number(binario[0]);
const decimal = (indice_0 * 1 + indice_1 * 2 + indice_2 * 4 + indice_3 * 8);

// SAIDA
console.log(`${binario} (binario) corresponde a ${decimal} (decimal)`)