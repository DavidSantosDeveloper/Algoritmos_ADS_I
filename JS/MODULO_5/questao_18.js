import {obter_numero,print} from "./funcoes.mjs";

/*
18. Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
sobre os dois valores lidos.

*/ 
function calculadora(numero_1,numero_2,opcao){
    if(opcao==1){
        return numero_1+numero_2;
    }
    else if(opcao==2){
        return numero_1-numero_2;
    }
    else if(opcao==3){
        return numero_1*numero_2;
    }
    else if(opcao==4){
        return numero_1/numero_2;
    }
}

function main(){
    // ENTRADA
    const numero_1=obter_numero("Digite o 1 numero: ")
    const numero_2=obter_numero("Digite o 2 numero: ")
    const opcao=obter_numero("Digite a opcao (1-adicao,2-subtracao,3-multiplicacao,4-divisao)")

    // PROCESSAMENTO
    const resultado=calculadora(numero_1,numero_2,opcao);

    // SAIDA
    print(resultado);
}
main()