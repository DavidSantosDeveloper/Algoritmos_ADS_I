import * as readsync from 'readline-sync'

/*
    8. Leia 2 números,
     calcule e escreva a divisão da soma pela subtração dos números lidos. 
*/

// entrada
const numero1 = Number(readsync.question('Número 1: '))
const numero2 = Number(readsync.question('Número 2: '))


// processamento 
const soma = numero1 + numero2;
const diferenca = numero1 - numero2;
const resultado = soma / diferenca;


// saída
console.log(`(${numero1}+${numero2}) / (${numero1}-${numero2})  =  ${resultado}`)