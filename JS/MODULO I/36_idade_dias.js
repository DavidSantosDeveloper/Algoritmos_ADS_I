import { question, questionEMail } from "readline-sync";

/*
    36. Leia a idade de uma pessoa expressa em anos,
     meses e dias e escreva-a expressa apenas em dias. 

*/

// ENTRADA
const ano = Number(question("Digite os Anos: "));
const meses = Number(question("Digite os meses: "));
const dias = Number(question("Digite os dias: "));

// PROCESSAMENTO
const dias_total = ano * 365 + meses * 30 + dias

// SAIDA
console.log(`${ano} ano(s) ${meses} mes(es) ${dias} dia(s) equivale a ${dias_total} dia(s)`)