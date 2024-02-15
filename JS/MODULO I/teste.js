import * as readsync from "readline-sync";
/*
    27. Leia um número inteiro de segundos, calcule e escreva quantas horas,
     quantos minutos e quantos segundos ele corresponde. 
*/

// ENTRADA
// Number(readsync.question("Digite o numero de segundos: "));
const numero_segundos = 5570;


// PROCESSAMENTO
const numero_horas_total =Math.trunc(numero_segundos/3600)
const numero_minutos_total =Math.trunc(numero_segundos%3600 /60)

const numero_segundos_total = numero_segundos%3600 % 60

// SAIDA
console.log(` ${numero_segundos}s equivale a ${numero_horas_total}h ${numero_minutos_total}min ${numero_segundos_total}s`);