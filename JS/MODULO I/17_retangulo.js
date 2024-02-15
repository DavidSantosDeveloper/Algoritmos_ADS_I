import * as readsync from 'readline-sync'

/**
     17) Leia o valor da base e altura de um retângulo, 
    calcule e escreva sua área. (área = base * altura) 
 */

// entrada
const base = Number(readsync.question('Digite o valor da base (cm): '));
const altura = Number(readsync.question('Digite o valor da altura (cm): '));

// processamento 
const area = (base * altura);

// saída
console.log(` (${base}*${altura}) = ${area}`);