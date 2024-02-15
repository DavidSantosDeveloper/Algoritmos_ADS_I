import * as readsync from 'readline-sync'

/**
      19) Leia o valor do raio de uma esfera,
      calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)
 */

// entrada
const raio = Number(readsync.question('Digite o valor do raio (cm): '));

// processamento 
const comprimento = (4 * 3, 14 * raio ** 3) / 3;

// saída
console.log(` (4 * 3, 14 * ${raio}**3) /3   =${comprimento} `);