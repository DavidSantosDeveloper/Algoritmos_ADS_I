import { obter_numero, print } from "./funcoes.mjs"

/*
9. Leia 1 (um) número entre 0 e 100,
 verifique e escreva se o número é ou não primo.

*/
function verificaPrimo(numero) {
    if (numero != 2 || numero != 3 || numero != 5 || numero != 7) {
        if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0) {
            return false
        } else {
            return true;
        }
    } else if (numero == 2 || numero == 3 || numero == 5 || numero == 7) {
        return true;
    } else {
        return false;
    }
}

function numeroValido(numero) {
    if (numero >= 0 && numero <= 100) {
        return true;
    } else {
        return false;
    }
}


function main() {
    // ENTRADA
    const numero = obter_numero("Digite um numero: ");
    // PROCESSAMENTO
    let primo;
    const validade = numeroValido(numero)
    if (validade) {
        primo = verificaPrimo(numero);
    } else {
        primo = false;
    }

    // SAIDA
    if (primo) {
        print(`o numero ${numero} eh primo!!!`);
    } else {
        print("nao eh primo!!!!")
    }

}
main()