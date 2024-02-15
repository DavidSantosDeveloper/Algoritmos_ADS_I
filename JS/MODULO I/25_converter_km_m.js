import * as readsync from "readline-sync";
/*
    25. Leia um número inteiro de metros, 
    calcule e escreva quantos Km e quantos metros ele corresponde. 
*/

// ENTRADA

const numero_m = Number(readsync.question("Digite um valor(m): "));

// PROCESSAMENTO

const numero_km = numero_m / 1000;

// SAIDA
console.log(`O valor ${numero_m}m equivale a ${numero_km}Km`);