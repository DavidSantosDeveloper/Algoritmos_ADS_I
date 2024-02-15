import * as readsync from 'readline-sync'

/**
    15. Leia o valor da base e altura de um triângulo,
     calcule e escreva sua área. (área=(base * altura)/2) 
 */

// entrada
const base = Number(readsync.question('Digite a base: '));
const altura = Number(readsync.question('Digite a altura: '));


// processamento 
const area = (base * altura) / 2;


// saída
console.log(` (${base}*${altura}) / 2   = ${area}`);