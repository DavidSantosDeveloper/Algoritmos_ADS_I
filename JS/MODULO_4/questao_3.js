import { obter_numero, print } from "./funcoes.mjs";

/*
3. Leia 3 (três) números,
 verifique e escreva o maior entre os números lidos.

*/

function verificaMenorNumero(numero1, numero2, numero3) {
    if (numero1 < numero2 && numero1 < numero3) {
        return numero1;
    } else if (numero2 < numero1 && numero2 < numero3) {
        return numero2;
    } else if (numero1 === numero2 && numero1 == numero3) {
        return numero1;
    } else {
        //throw new UserException("parametros invalidos!!!");
    }
}

function verificaMaiorNumero(numero1, numero2, numero3) {
    if (numero1 > numero2 && numero1 > numero3) {
        return numero1;
    } else if (numero2 > numero1 && numero2 > numero3) {
        return numero2;
    } else if (numero1 === numero2 && numero2 === numero3) {
        return numero1;

    } else {
        return "indefinido numero"
    }
}

function main() {
    // ENTRADA
    const numero1 = 1 //obter_numero("Digite o 1 numero: ");
    const numero2 = 2 //obter_numero("Digite o 2 numero: ");
    const numero3 = 3 //obter_numero("Digite o 3 numero: ");

    // PROCESSAMENTO
    let menor_numero = verificaMenorNumero(numero1, numero2, numero3);
    let maior_numero = verificaMaiorNumero(numero1, numero2, numero3)


    // SAIDA
    print(`maior numero:${maior_numero} \n menor numero:${menor_numero}`);


}

main()