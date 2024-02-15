import * as readsync from "readline-sync";
/*
    27. Leia um número inteiro de segundos, calcule e escreva quantas horas,
     quantos minutos e quantos segundos ele corresponde. 
*/

// ENTRADA
const numero_segundos = Number(readsync.question("Digite o numero de segundos: "));


// PROCESSAMENTO
const numero_horas_total = Math.floor(numero_segundos / 3600);
const numero_minutos_total = Math.floor(((numero_segundos / 3600) - Math.floor(numero_segundos / 3600)) * 60);

const numero_segundos_total = (((numero_segundos / 3600) - Math.floor(numero_segundos / 3600)) * 60) - Math.floor(((numero_segundos / 3600) - Math.floor(numero_segundos / 3600)) * 60)
const segundos_final = Math.floor(numero_segundos_total * 60);

// SAIDA
console.log(` ${numero_segundos}s equivale a ${numero_horas_total}h ${numero_minutos_total}min ${segundos_final}s`);