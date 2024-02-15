import * as readsync from 'readline-sync'

/*
   10. Leia 2 números inteiros,
    calcule e escreva o quociente e o resto da divisão do 1º pelo 2º.

*/

// entrada
const numero1 = Number(readsync.question('Número 1: '))
const numero2 = Number(readsync.question('Número 2: '))


// processamento 
const quociente = numero1 / numero2;
const resto = numero1 % numero2;

// saída
console.log(`quociente: ${quociente} e resto: ${resto}`);