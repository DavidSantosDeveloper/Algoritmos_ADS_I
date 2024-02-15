import { obter_numero } from "./funcoes.mjs";

/*
12. Leia 1 (um) número inteiro e escreva se este número é par ou impar.

*/

function verifacaNumeroPar(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function main() {
    // ENTRADA
    const numero = obter_numero("Digite um numero inteiro: ");
    // PROCESSAMENTO
    const par = verifacaNumeroPar(numero);
    // SAIDA
    if (par) {
        print(`o numero ${numero} eh PAR !!!`)
    } else {
        print(`o numero ${numero} eh IMPAR !!!`)
    }


}
main()