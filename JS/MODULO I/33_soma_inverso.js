import * as readsync from "readline-sync";

/*
33. Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso. 
  (Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767). 

*/

// ENTRADA
const numero = Number(readsync.question("Digite um numero (3 digitos):"));

// PROCESSAMENTO
const centena = Math.floor(numero / 100);
const dezena = Math.floor((numero % 100) / 10);
const unidade = Math.floor((numero % 100) % 10);
const numero_inverso = Number(`${unidade}${dezena}${centena}`);
const soma = numero + numero_inverso;

// SAIDA
console.log(`${numero} + ${numero_inverso} = ${soma}`);