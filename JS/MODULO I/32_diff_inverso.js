import * as readsync from "readline-sync";

/*
32. Leia um número inteiro (3 dígitos),
 calcule e escreva a diferença entre o número e seu inverso. 

*/

// ENTRADA
const numero = Number(readsync.question("Digite um numero")); //351

// PROCESSAMENTO
const centena = Math.floor(numero / 100); //3
const dezena = Math.floor((numero % 100) / 10);
const unidade = Math.floor((numero % 100) % 10);
const numero_inverso = Number(`${unidade}${dezena}${centena}`);
const diferenca = Math.abs(numero - numero_inverso);
// SAIDA
console.log(`${numero}-${numero_inverso} =${diferenca}`);