import {question} from "readline-sync"
import {obter_numero,print} from "./funcoes.mjs"

/*
    39. Leia três números inteiros
     e positivos (A, B, C) e calcule a seguinte expressão:
*/ 
function calculaExpressao(numero_A,numero_B,numero_C){
    const expressao=((numero_A+numero_B)**2+(numero_B+numero_C)**2)/2
    return expressao;
}


function main(){
    // ENTRADA
    const numero_A=obter_numero("Digite o numero A: ");
    const numero_B=obter_numero("Digite o numero B: ");
    const numero_C=obter_numero("Digite o numero C: ");
    // PROCESSAMENTO
    const expressao=calculaExpressao(numero_A,numero_B,numero_C);
    // SAIDA
    print(`((${numero_A}+${numero_B})**2+(${numero_B}+${numero_C})**2)/2 
    \n = ${expressao}`)
}

main()