import { question } from "readline-sync";

/*
   42. Escreva um algoritmo que, 
   tendo como dados de entrada 2 pontos quaisquer no plano,
    ponto1 (x1,y1) e ponto2 (x2,y2),
     escreva a distância entre eles, conforme fórmula abaixo. 
  
*/

// ENTRADA
const x1 = Number(question("Numero x1: "));
const y1 = Number(question("Numero y1: "));
const x2 = Number(question("Numero x2: "));
const y2 = Number(question("Numero y2: "));

// PROCESSAMENTO
const resultado = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);


// SAIDA
console.log(`D = ${resultado}`);