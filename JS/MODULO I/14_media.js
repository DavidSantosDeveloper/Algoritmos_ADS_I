import * as readsync from 'readline-sync'

/**
    14. Leia 3 notas de um aluno e o peso de cada nota,
     calcule e escreva a média ponderada.
 */

// entrada
const nota1 = Number(readsync.question('Digite a nota 1: '));
const peso1 = Number(readsync.question('Peso 1: '));
const nota2 = Number(readsync.question('Digite a nota 2: '));
const peso2 = Number(readsync.question('Peso 2: '));
const nota3 = Number(readsync.question('Digite a nota 3: '));
const peso3 = Number(readsync.question('Peso 3: '));


// processamento 
const soma_ponderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);


// saída
console.log(`  (${nota1}*${ peso1}+ ${nota2 }*${peso2 }+${ nota3 } *${peso3}) / (${peso1} +${peso2} +${ peso3}) = ${soma_ponderada} `);