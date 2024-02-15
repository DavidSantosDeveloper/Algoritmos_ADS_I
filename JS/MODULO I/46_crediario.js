import { question } from "readline-sync";

/*
46. Uma loja vende seus produtos no sistema entrada mais duas prestações,
sendo a entrada maior ou igual a cada uma das duas prestações;
 estas devem ser iguais, inteiras e as maiores possíveis.
  Por exemplo, se o valor da mercadoria for R$ 270,00,
   a entrada e as duas prestações são iguais a R$ 90,00;
    se o valor da mercadoria for R$ 302,00,
     a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00.
      Escreva um algoritmo que receba o valor da mercadoria 
       e forneça o valor da entrada e das duas prestações
    , de acordo com as regras acima. 
*/

// ENTRADA
const valor = Number(question("Digite o valor do produto: "));

// PROCESSAMENTO
const resto = valor % 3;
const parcela = (valor - resto) / 3;
const entrada = parcela + resto;

// SAIDA
console.log(`Preco do produto: R$ ${valor} \n
             Entrada: ${entrada} +\n
             Parcela: 2 X R$ ${parcela} +\n
             =${entrada+2*parcela}

`);