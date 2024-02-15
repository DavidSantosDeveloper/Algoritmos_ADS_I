import * as readsync from 'readline-sync'

/*

 4. Leia o valor do dólar e um valor em dólar,
  calcule e escreva o equivalente em real (R$).  


*/

// ENTRADA
const dolar_atual = Number(readsync.question("Digite o valor  atual do dólar: "))
const valor_em_dolar = Number(readsync.question("Digite um valor em Dolar: "));

// PROCESSAMENTO
const resultado_em_reais = dolar_atual * valor_em_dolar;

// SAIDA
console.log(`O valor em dólar de  $ ${valor_em_dolar}, na cotação de  R$${dolar_atual}/$1 , equivale a R$ ${resultado_em_reais}`)