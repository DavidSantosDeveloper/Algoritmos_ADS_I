import { obter_numero, print } from "./funcoes.mjs";

/*
14. Leia 5 (cinco) números inteiros,
 calcule a sua média e escreva os que são maiores que a média.

*/

function verificaMedia(numero1, numero2, numero3, numero4, numero5) {
    const media = ((numero1 + numero2 + numero3 + numero4 + numero5) / 5).toFixed(2);
    return media;
}

function maioresMedia(numero1, numero2, numero3, numero4, numero5, media) {
    let lista = [];
    if (numero1 > media) {
        lista.push(numero1);
    }
    if (numero2 > media) {
        lista.push(numero2);
    }
    if (numero3 > media) {
        lista.push(numero3);
    }
    if (numero4 > media) {
        lista.push(numero4);
    }
    if (numero5 > media) {
        lista.push(numero5);
    }
    return lista;
}

function main() {
    // ENTRADA
    const numero1 = obter_numero("Digite o 1 numero: ")
    const numero2 = obter_numero("Digite o 2 numero: ")
    const numero3 = obter_numero("Digite o 3 numero: ")
    const numero4 = obter_numero("Digite o 4 numero: ")
    const numero5 = obter_numero("Digite o 5 numero: ")
        // PROCESSAMENTO
    const media = verificaMedia(numero1, numero2, numero3, numero4, numero5);
    const lista_maiores = maioresMedia(numero1, numero2, numero3, numero4, numero5, media)
        // SAIDA
    if (lista_maiores.length > 0) {
        print(`lista:  ${lista_maiores}`)
    } else {
        print(`nao ha numeros maiores que a media`)
    }


}
main()