import { question } from "readline-sync";

/*
    37. Leia a idade de uma pessoa expressa em dias 
    e escreva-a expressa em anos, meses e dias. 

*/

// ENTRADA
const dias = Number(question("Digite a idade (em dias): "))

// PROCESSAMENTO
const ano = Math.floor(dias / 365);
const meses = Math.floor((dias % 365) / 30);
const dias_total = Math.floor((dias % 365) % 30);

// SAIDA
console.log(`${dias} dia(s) equivale a ${ano} ano(s) ${meses} mes(es) ${dias_total} dia(s) `)