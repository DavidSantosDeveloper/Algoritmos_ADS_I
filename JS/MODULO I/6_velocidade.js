import * as readsync from 'readline-sync'

/*
  6) Leia uma velocidade em km/h, 
 calcule e escreva esta velocidade em m/s.  
 (Vm/s = Vkm/h / 3.6) 

*/

// ENTRADA
const velocidadeKm_h = Number(readsync.question('Velocidade (Km/h): '));

// PROCESSAMETO
let velocidadeM_s = velocidadeKm_h / 3.6;

// SAIDA
console.log(`A velocidade é: ${velocidadeM_s} (m/s)`);