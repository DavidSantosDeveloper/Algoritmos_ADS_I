import * as readsync from "readline-sync";
/*
    28. Leia um número inteiro de horas, calcule e escreva quantas semanas, 
    quantos dias e quantas horas ele corresponde.  
*/

// ENTRADA
const valor_hora=Number(readsync.question("Digite o Numero de horas:"));

// PROCESSAMENTO
const semanas=Math.floor(valor_hora/168);
const dias=Math.floor((valor_hora%168)/24);
const horas=(valor_hora%168)%24;


// SAIDA
console.log(`${valor_hora}h equivale a ${semanas} semana(s) ${dias} dia(s) ${horas} hora(s)`)
