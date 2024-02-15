import { question } from "readline-sync";

/*
45. Um algoritmo para gerenciar os saques de um caixa eletrônico 
deve possuir algum mecanismo para decidir o numero de notas de cada valor 
que deve ser disponibilizado para o cliente que realizou o saque.
Um possível critério seria o da "distribuição ótima" 
no sentido de que as notas de menor valor disponíveis 
fossem distribuídas em número mínimo possível. 
Por exemplo, se a maquina só dispõe de notas de R$ 50,
de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87,
o algoritmo deveria indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o critério da distribuição ótima. 46
*/

// ENTRADA
const quantia = Number(question("Para sacar, Digite a o valor : "));

// PROCESSAMENTO
const quantidade_50 = Math.floor(quantia / 50);
const quantidade_10 = Math.floor((quantia % 50) / 10);
const quantidade_5 = Math.floor(((quantia % 50) % 10) / 5)
const quantidade_1 = Math.floor(((quantia % 50) % 10) % 5);

// SAIDA
console.log(`Para a quantia de ${quantia}:\n
            => ${quantidade_50} de 50 +\n
            => ${quantidade_10} de 10 + \n
            => ${quantidade_5}  de 5 + \n
            => ${quantidade_1}  de 1 + \n
            _____________________________\n
            = ${quantidade_50*50+quantidade_10*10+quantidade_5*5+quantidade_1*1}
            `);