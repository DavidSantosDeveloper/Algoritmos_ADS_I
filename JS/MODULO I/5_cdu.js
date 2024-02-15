import * as readsync from 'readline-sync'

/*
   5) Leia um número inteiro (3 dígitos),
  calcule e escreva a soma de seus elementos (C + D +  U). 
*/

// ENTRADA
const numero = Number(readsync.question("digite um numero: "));
// 153

// PROCESSAMETO
let centena = Math.floor(numero / 100);
let dezena = Math.floor((numero % 100) / 10);
let unidade = (numero % 100) % 10;
let soma_cdu = centena + dezena + unidade;

// SAIDA
console.log(`A soma C+D+U é: ${soma_cdu}`);