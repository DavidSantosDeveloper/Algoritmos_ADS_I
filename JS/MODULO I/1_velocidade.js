import * as readsync from 'readline-sync'

/*
 1) Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h.  (Vkm/h = Vm/s * 3.6) 

*/

// ENTRADA
const velocidadeVm = Number(readsync.question('Velocidade (m/s): '));

// PROCESSAMETO
let velocidadeKm = velocidadeVm * 3.6;

// SAIDA
console.log(`A velocidade é: ${velocidadeKm} (Km/h)`);