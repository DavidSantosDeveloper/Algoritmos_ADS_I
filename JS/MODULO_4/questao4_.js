import { obter_numero, print } from "./funcoes.mjs";

/*
4. Leia 1 (um) número de 2 (dois) dígitos, 
verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade.
*/

function comparaDezenaUnidade(numero) {
    const dezena = Math.floor(numero / 10);
    const unidade = Math.floor(numero % 10);
    if (dezena === unidade) {
        return 1
    } else if (dezena != unidade) {
        return 0
    } else {
        return "invalido"
    }

}


function main() {
    //ENTRADA
    const numero = obter_numero("Digite o numero: ")
        //PROCESSAMENTO
    const comparacao = comparaDezenaUnidade(numero);

    //SAIDA
    if (comparacao == true) {
        print(`a dezena e a unidade sao iguais`)
    } else {
        print(`sao diferentes!!!`)
    }




}

main()