import { obter_numero, print } from "./funcoes.mjs"

/*
Leia 3 (três) números e escreva-os em ordem crescente.

*/

function primeiroNumero(numero1, numero2, numero3) {
    let menor;
    if (numero1 < numero2 && numero1 < numero2) {
        menor = numero1;
    } else if (numero2 < numero1 && numero2 < numero3) {
        menor = numero2;
    } else if (numero3 < numero2 && numero3 < numero1) {
        menor = numero3;
    }
    return menor;
    /*
     if (numero1 < numero2 && numero1 < numero3) {
         return numero1;
     } else if (numero2 < numero1 && numero2 < numero3) {
         return numero2;
     } else if (numero3 < numero1 && numero3 < numero2) {
         return numero3;
     }
    */

}

function segundoNumero(numero1, numero2, numero3) {
    let menor, medio;
    if (numero1 < numero2 && numero1 < numero2) {
        menor = numero1;
        if (numero2 < numero3) {
            medio = numero2;
        } else if (numero3 < numero2) {
            medio = numero3;
        }
    } else if (numero2 < numero1 && numero2 < numero3) {
        menor = numero2;
        if (numero1 < numero3) {
            medio = numero1;
        } else if (numero3 < numero1) {
            medio = numero3;
        }
    } else if (numero3 < numero2 && numero3 < numero1) {
        menor = numero3;
        if (numero1 < numero2) {
            medio = numero1;
        } else if (numero2 < numero1) {
            medio = numero2;
        }
    }
    return medio;
}

function terceiroNumero(numero1, numero2, numero3) {
    let maior;
    if (numero1 > numero2 && numero1 > numero3) {
        maior = numero1;
    } else if (numero2 > numero1 && numero2 > numero3) {
        maior = numero2;
    } else if (numero3 > numero1 && numero3 > numero2) {
        maior = numero3;
    }
    return maior;
}


function main() {
    // ENTRADA
    const numero1 = obter_numero("numero 1: ")
    const numero2 = obter_numero("numero 2: ")
    const numero3 = obter_numero("numero 3: ")

    // PROCESSAMENTO
    const primeiro = primeiroNumero(numero1, numero2, numero3);
    const segundo = segundoNumero(numero1, numero2, numero3);
    const terceiro = terceiroNumero(numero1, numero2, numero3);
    // SAIDA
    print(`primeiro: ${primeiro}`)
    print(`segundo: ${segundo}`)
    print(`terceiro: ${terceiro}`)
}
main()