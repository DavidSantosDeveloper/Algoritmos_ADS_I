import {obter_numero,print}from "./funcoes.mjs";

/*
1. Leia 3 (três) números, 
verifique e escreva quantos números iguais existem entre os números.

*/ 

function verificaMenorNumero(numero1,numero2){
    if(numero1<numero2){
        return numero1;
    }
    else if(numero2<numero1){
        return numero2;
    }
    else if(numero1===numero2){
        return numero1;
    }
    else{
        throw new UserException("parametros invalidos!!!");
    }
}
function verificaMaiorNumero(numero1,numero2){
    if(numero1>numero2){
        return numero1;
    }
    else if(numero2>numero1){
        return numero2;
    }
    else if(numero1===numero2){
        return numero1;
    }
    else{
        throw new UserException("parametros invalidos!!!");
    }
}

function main(){
    // ENTRADA
    const numero1=obter_numero("Digite o 1 numero: ");
    const numero2=obter_numero("Digite o 2 numero: ");
    // PROCESSAMENTO
    let menor_numero=verificaMenorNumero(numero1,numero2);
    let maior_numero=verificaMaiorNumero(numero1,numero2);
    
    // SAIDA
    print(`maior numero:${maior_numero} \n menor numero:${menor_numero}`);



}

main()