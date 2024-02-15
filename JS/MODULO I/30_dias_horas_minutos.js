import * as readsync from "readline-sync";

/*
 30. Leia um número inteiro de minutos, calcule e escreva quantos dias,  
 quantas horas e quantos minutos ele corresponde.

*/ 

// ENTRADA
const minuto=Number(readsync.question("Digite o numero de minutos: "));

// PROCESSAMENTO
const dias_total=Math.floor(minuto/1440);
const horas_total=Math.floor((minuto%1440)/60);
const minutos_total=Math.floor((minuto%1440)%60);

// SAIDA
console.log(`${minuto} minuto(s) equivale a ${dias_total} dia(s) e ${horas_total}hora(s) e ${minutos_total} minuto(s)`)