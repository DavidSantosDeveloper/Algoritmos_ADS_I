import { obter_numero, print } from "./funcoes.mjs";

/*
13. Leia 5 (cinco) números inteiros
 e escreva o maior e o menor deles. Considere que todos os valores são
diferentes.

*/
function verificaMaior(n1, n2, n3, n4, n5) {
    const comparacao_1 = (n1 > n2) + (n1 > n3) + (n1 > n4) + (n1 > n5);
    const comparacao_2 = (n2 > n1) + (n2 > n2) + (n2 > n3) + (n2 > n4);
    const comparacao_3 = (n3 > n1) + (n3 > n2) + (n3 > n4) + (n3 > n5);
    const comparacao_4 = (n4 > n1) + (n4 > n2) + (n4 > n3) + (n4 > n5);
    const comparacao_5 = (n5 > n1) + (n5 > n2) + (n5 > n3) + (n5 > n4);
    if (comparacao_1 == 4) {
        return n1;
    } else if (comparacao_2 == 4) {
        return n2;
    } else if (comparacao_3 == 4) {
        return n3;
    } else if (comparacao_4 == 4) {
        return n4;
    } else if (comparacao_5 == 4) {
        return n5;
    }

}

function verificaMenor(n1, n2, n3, n4, n5) {
    const comparacao_1 = (n1 < n2) && (n1 < n3) && (n1 < n4) && (n1 < n5);
    const comparacao_2 = (n2 < n1) && (n2 < n2) && (n2 < n3) && (n2 < n4);
    const comparacao_3 = (n3 < n1) && (n3 < n2) && (n3 < n4) && (n3 < n5);
    const comparacao_4 = (n4 < n1) && (n4 < n2) && (n4 < n3) && (n4 < n5);
    const comparacao_5 = (n5 < n1) && (n5 < n2) && (n5 < n3) && (n5 < n4);
    if (comparacao_1) {
        return n1;
    } else if (comparacao_2) {
        return n2;
    } else if (comparacao_3) {
        return n3;
    } else if (comparacao_4) {
        return n4;
    } else if (comparacao_5) {
        return n5;
    }

}

function main() {
    // ENTRADA
    const numero1 = obter_numero("Digite o 1 numero: ")
    const numero2 = obter_numero("Digite o 2 numero: ")
    const numero3 = obter_numero("Digite o 3 numero: ")
    const numero4 = obter_numero("Digite o 4 numero: ")
    const numero5 = obter_numero("Digite o 5 numero: ")
        // PROCESSAMENTO
    const maior = verificaMaior(numero1, numero2, numero3, numero4, numero5);
    const menor = verificaMenor(numero1, numero2, numero3, numero4, numero5);

    // SAIDA
    print(`maior: ${maior} \n menor:${menor}`)

}
main()