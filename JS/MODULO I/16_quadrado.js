import * as readsync from 'readline-sync'

/**
   16. Leia o valor do lado de um quadrado, 
   calcule e escreva sua área.  (área = lado2
 */

// entrada
const base = Number(readsync.question('Digite o valor do lado (cm): '));

// processamento 
const area = (base * base);

// saída
console.log(` (${base}*${base}) = ${area}`);