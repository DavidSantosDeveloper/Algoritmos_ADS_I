import * as readsync from 'readline-sync'

/**
    21. Leia uma temperatura em °F, 
    calcule e escreva a equivalente em °C.  (t°C = (5 * t°F - 160) / 9) 
 */

// entrada
const temperatura_fareheint = Number(readsync.question('Digite a temperatura (Fareheint): '));

// processamento 
const temperatura_celsius = (5 * temperatura_fareheint - 160) / 9;

// saída
console.log(` a temperatura:${temperatura_fareheint}F correspode a ${temperatura_celsius}C `);