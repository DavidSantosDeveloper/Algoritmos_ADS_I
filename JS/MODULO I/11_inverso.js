import * as readsync from 'readline-sync'

/*
  11. Leia um número inteiro (3 dígitos)
    e escreva o inverso do número. 
    (Ex.: número = 532 ; inverso = 235) 

*/

// entrada
const numero = Number(readsync.question('Digite um Número : '));


// processamento 
const centena = Math.floor(numero / 100) // -> 4
const resto = numero % 100 // -> 37

const dezena = Math.floor(resto / 10) // -> 3
const unidade = resto % 10

const soma = centena + dezena + unidade

// saída
console.log(`o numero é : ${unidade}${dezena}${centena}`);