import {obter_numero,print} from "./funcoes.mjs";


/*
17. Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1
escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor
são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4
divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação
escreva o quadrado dos números lidos.

*/ 
function operacaoNumero1(valor_1,valor_2){
    let resultado;
    if(valor_1%valor_2==1){
        resultado=valor_1+valor_2+(valor_1%valor_2);
        return resultado;
    }
}
function operacaoNumero3(valor_1,valor_2){
    let resultado;
    return resultado=(valor_1+valor_2)*valor_1;
}
function operacaoNumero4(valor_1,valor_2){
    let resultado;
    return resultado=(valor_1+valor_2)/valor_2;
}
function quadrado(valor){
    let resultado;
    return resultado=valor**2;
}


function verificaNumeroPar(valor){
    if(valor%2==0){
        return true;
    }
    else{
        return false;
    }
}


function main(){
    // ENTRADA
    const valor_1=obter_numero("Digite o 1 valor: ")
    const valor_2=obter_numero("Digite o 2 valor: ")
    // PROCESSAMENTO
    const resultado;
    if(valor_1%valor_2==1){
        resultado=operacaoNumero1(valor_1,valor_2);
    }
    else if(valor_1%valor_2==2){
        if(verificaNumeroPar(valor_1)){
            print(`valor ${valor_1} eh par`)
        }
        else if(verificaNumeroPar(valor_2)){
            print(`valor ${valor_2} eh par`)
        }
    }
    else if(valor_1%valor_2==3){
        print(operacaoNumero3(valor_1,valor_2));
    }
    else if(valor_1%valor_2==4){
        print(operacaoNumero4(valor_1,valor_2));
    }
    else{
        print(quadrado(valor_1))
        print(quadrado(valor_2))
    }
    // SAIDA
}
main()