import { question } from "readline-sync";

/*
    34. Leia 3 números,
     calcule e escreva a média dos números. 
*/

// ENTRADA
const numero1 = Number(question("Numero 1: "));
const numero2 = Number(question("Digite o numero 2: "));
const numero3 = Number(question("Digite o numero 3: "))
    // PROCESSAMENTO
const media = (numero1 + numero2 + numero3) / (3);

// SAIDA
console.log(`A media eh: ${media}`)