import * as readsync from 'readline-sync';

/*

    29. Leia um número inteiro de meses,
     calcule e escreva quantos anos e quantos meses ele corresponde. 

*/ 

// ENTRADA
const meses=Number(readsync.question("Digite o numero de meses: "));

// PROCESSAMENTO
const ano_total=Math.floor(meses/12);
const meses_total=Math.floor(meses%12);

// SAIDA
console.log(`${meses}meses equivale a ${ano_total} ano e ${meses_total} meses`);
