/**
    13. Leia um valor em real (R$),
     calcule e escreva 70% deste valor. 
 */

import * as readsync from 'readline-sync'

// entrada
const numero = Number(readsync.question('Digite um valor em real: ')) // 437

// processamento 
const valor_70 = numero * 0.7;

// saída
console.log(`o numero é ${numero} , 70% desse valor corresponde a ${valor_70}`);