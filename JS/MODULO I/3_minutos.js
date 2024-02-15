import * as readsync from 'readline-sync'

/*

  3. Leia um valor em minutos,
   calcule e escreva o equivalente em horas e minutos. 


*/

// ENTRADA
const minuto = Number(readsync.question("Digite  o Tempo em minutos: "));

// PROCESSAMENTO
const minutos_total = (minuto % 60);
const hora_total = Math.floor(minuto / 60);



// SAIDA
console.log(`O tempo total é : ${hora_total} hora(s) e  ${minutos_total} minuto(s)`)