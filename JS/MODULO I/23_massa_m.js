import * as readsync from 'readline-sync'

/**
   23. Leia um valor em kg (quilograma),
    calcule e escreva o equivalente em g (grama). 
 */

// entrada
const massa_kg = Number(readsync.question('Digite a massa (Kg): '));

// processamento 
const massa_g = massa_kg * 1000;

// saída
console.log(` a massa de ${massa_kg}Kg correspode a ${massa_g}g `);