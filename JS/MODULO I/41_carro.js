import { question } from "readline-sync";

/*
   41. O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). 
   Supondo que a percentagem do distribuidor seja de 28% 
   e os impostos de 45%, 
   escreva um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor.
*/

// ENTRADA
const custo_producao = Number(question("Digite o custo de producao: "));

// PROCESSAMENTO
const imposto = custo_producao * 0.28;
const distribuidor = custo_producao * 0.45;
const valor_final = custo_producao + imposto + distribuidor;

// SAIDA
console.log(`${valor_final}`);