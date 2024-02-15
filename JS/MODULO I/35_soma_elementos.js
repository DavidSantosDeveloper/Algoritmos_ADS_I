import { question } from "readline-sync";

/*
    35. Leia um número inteiro (4 dígitos), 
    calcule e escreva a soma dos elementos que o compõem.
     Ex.: número = 9534 ;
     soma = 9+5+3+4 = 21. 
*/

// ENTRADA
const numero = Number(question("Digite um numero inteiro  (4 digitos): "));

// PROCESSAMENTO
const milhar = Math.floor(numero / 1000);
const centena = Math.floor((numero % 1000) / 100);
const dezena = Math.floor(((numero % 1000) % 100) / 10);
const unidade = Math.floor(((numero % 1000) % 100) % 10);
const soma = milhar + centena + dezena + unidade;
// SAIDA

console.log(`${milhar}+${centena}+${dezena}+${unidade} = ${soma}`);