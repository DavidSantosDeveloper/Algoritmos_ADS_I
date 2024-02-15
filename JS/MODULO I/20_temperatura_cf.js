import * as readsync from 'readline-sync'

/**
    20. Leia uma temperatura em °C,
 calcule e escreva a equivalente em °F.  (t°F = (9 * t°C + 160) / 5) 
 */

// entrada
const temperatura_celsius = Number(readsync.question('Digite a temperatura (Celsius): '));

// processamento 
const temperatura_fareheint = (9 * temperatura_celsius + 160) / 5;

// saída
console.log(` a temperatura:${temperatura_celsius}C correspode a ${temperatura_fareheint}F`);