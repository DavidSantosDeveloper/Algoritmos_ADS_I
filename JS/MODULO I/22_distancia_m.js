import * as readsync from 'readline-sync'

/**
    22. Leia um valor em km,
     calcule e escreva o equivalente em m.
 */

// entrada
const distancia_km = Number(readsync.question('Digite a distancia (Km): '));

// processamento 
const distancia_m = distancia_km * 1000;

// saída
console.log(` a distancia de ${distancia_km}Km correspode a ${distancia_m}m `);