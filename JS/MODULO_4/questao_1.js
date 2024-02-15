import { obter_numero, print } from "./funcoes.mjs";

/*
1. Leia 3 (três) números, 
verifique e escreva quantos números iguais existem entre os números.

*/

function verificaNumerosIguais(numero1, numero2, numero3) {
    let quantidade_de_iguais = 0;
    if (numero1 === numero2 && numero2 === numero3) {
        quantidade_de_iguais = 3;


    } else if (numero1 == numero2 || numero1 === numero2) {
        quantidade_de_iguais = 2;
    }

    /*
    quantidade_de_iguais=
   
    */



    return quantidade_de_iguais;

    /*
        if (numero1 === numero2 && numero1 !== numero3) {
        quantidade_de_iguais += 1;
    }
    if (numero1 !== numero2 && numero1 === numero3) {
        quantidade_de_iguais += 1;
    }
    if (numero2 === numero3 && numero2 !== numero1) {
        quantidade_de_iguais += 1;
    }
    
    
    */
}

function main() {
    // ENTRADA
    const numero1 = 1 //obter_numero("Digite o 1 numero: ");
    const numero2 = 1 //obter_numero("Digite o 2 numero: ");
    const numero3 = 1 //obter_numero("Digite o 3 numero: ");
        // PROCESSAMENTO
    let quantidade_de_iguais = verificaNumerosIguais(numero1, numero2, numero3);
    const resultado = (numero2 == numero3) + (numero1 == numero2) + (numero1 == numero2);
    // SAIDA
    print(`${quantidade_de_iguais} numeros iguais \n resultado:${resultado}`)


}

main()