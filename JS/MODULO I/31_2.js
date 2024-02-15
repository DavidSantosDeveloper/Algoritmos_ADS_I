import * as readsync from "readline-sync";

/*
    31. Leia um número inteiro (4 dígitos binários),
    calcule e escreva o equivalente na base decimal. 

*/
function binaryToHexadecimal(parametro) {
    const tamanho = parametro.length;
    let auxiliar_2 = 0;
    let auxiliar = 0;
    for (let i = parametro.length - 1; i < 0; i--) {
        auxiliar += Number(parametro[i]) * (2 ** auxiliar_2);
        auxiliar_2++;

    }
    return auxiliar;
}

// ENTRADA
const binario = readsync.question("digite um numero binario: ")

// PROCESSAMENTO


// SAIDA
console.log(`${binario} (binario) corresponde a ${binaryToHexadecimal(binario)} (decimal)`)