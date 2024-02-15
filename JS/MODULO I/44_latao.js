import { question } from "readline-sync";

/*
   
*/

// ENTRADA
const latao = Number(question("Numero de latao (kg): "));
// PROCESSAMENTO
const cobre = latao * 0.7;
const zinco = latao * 0.3;

// SAIDA
console.log(`${latao} kg equivale a: \n
              ${cobre}kg de cobre \n
              ${zinco}kg de zinco`);