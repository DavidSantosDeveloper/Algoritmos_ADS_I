import * as readsync from "readline-sync";
/*
    24. Leia um valor em m,
    calcule e escreva o equivalente em cm. 

*/

// ENTRADA

const numero_m = Number(readsync.question("Digite um valor(m): "));

// PROCESSAMENTO

const numero_cm = numero_m * 100;

// SAIDA
console.log(`O valor ${numero_m}m equivale a ${numero_cm}cm`);