import {question} from "readline-sync"
import {obter_numero,print} from "./funcoes.mjs"

/*
45. Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
critério da distribuição ótima.
*/ 


function calculaQuantidade50(valor){
    const qtd_50=Math.floor(valor/50);
    return qtd_50;
}
function calculaQuantidade10(valor){
    const qtd_10=Math.floor((valor%50)/10);
    return qtd_10;
}
function calculaQuantidade5(valor){
    const qtd_5=Math.floor(((valor%50)%10)/5);
    return qtd_5;
}
function calculaQuantidade1(valor){
    const qtd_1=Math.floor(((valor%50)%10)%5);
    return qtd_1;
}



function main(){
    // ENTRADA
    const valor=obter_numero("Digite o valor:");
    // PROCESSAMENTO
    const qtd_50=calculaQuantidade50(valor);
    const qtd_10=calculaQuantidade10(valor);
    const qtd_5=calculaQuantidade5(valor);
    const qtd_1=calculaQuantidade1(valor);
    // SAIDA
    print(`R$ ${valor} distribuicao:
    \n ${qtd_50} x 50=${qtd_50 *50}
    \n ${qtd_10} x 10=${qtd_10 *10}
    \n ${qtd_5} x 5=${qtd_5 *5}
    \n ${qtd_1} x 1=${qtd_1 *1}
    \n ----------------------
    \n =${qtd_50*50+qtd_10*10+qtd_5*5+qtd_1*1}`)
}

main()