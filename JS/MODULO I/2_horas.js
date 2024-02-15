import * as readsync from 'readline-sync'

/*

  2) Leia um valor em horas e um valor em minutos,
   calcule e escreva o equivalente em minutos. 


*/

// ENTRADA
const hora = Number(readsync.question("Digite a hora: "));
const minuto = Number(readsync.question("Digite os minutos: "));

// PROCESSAMENTO
const minutos_total = hora * 60 + minuto;

// SAIDA
console.log(`O tempo total em minutos é : ${minutos_total} minuto(s)`)