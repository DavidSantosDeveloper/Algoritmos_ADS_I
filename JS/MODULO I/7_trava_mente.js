 import * as readsync from 'readline-sync'

 /*
     Leia 3 números,
      calcule e escreva a soma dos 2 primeiros 
      e a diferença entre os 2 últimos.
 */

 // entrada
 const numero1 = Number(readsync.question('Número 1: '))
 const numero2 = Number(readsync.question('Número 2: '))
 const numero3 = Number(readsync.question('Número 3: '))

 // processamento 
 const soma = numero1 + numero2;
 const diferenca = numero2 - numero3;

 // saída
 console.log(`A soma ${numero1}+${numero2}= ${numero1+numero2} 
 A diferenca ${numero2}-${numero3}=${numero2-numero3}`)