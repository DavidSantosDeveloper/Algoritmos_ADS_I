import * as readsync from "readline-sync";
/*
    26. Leia um número inteiro de dias, 
    calcule e escreva quantas semanas e quantos dias ele corresponde. 
*/

// ENTRADA
const numero_dias = Number(readsync.question("Digite o numero de dias:"));

// PROCESSAMENTO
const numero_semanas_total = Math.floor(numero_dias / 7)
const numero_dias_total = numero_dias % 7;

// SAIDA
console.log(` ${numero_dias} dias equivale a ${numero_semanas_total} semana(s) ${numero_dias_total} dia(s)`);