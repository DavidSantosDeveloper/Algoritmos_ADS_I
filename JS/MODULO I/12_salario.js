import * as readsync from 'readline-sync'

/*
   12. Leia o salário de um trabalhador 
   e escreva seu novo salário com um aumento de 25%. 

*/

// entrada
const salario = Number(readsync.question('Digite o salário : '));

// processamento 
const novo_salario = salario * (1.25);

// saída
console.log(`o salario atual é de ${salario},com o aumento de 25%  é de ${novo_salario}`);