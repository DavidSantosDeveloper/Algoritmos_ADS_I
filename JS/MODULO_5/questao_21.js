import {obter_numero,print} from "./funcoes.mjs";

/*
21. Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
contrario, é arredondado para o inteiro imediatamente inferior.

*/ 

function arrendondarNumero(numero){
    let resultado;
    let decimal=(Math.floor(numero)-(numero.toFixed(2)))*(-1);
    if(decimal>=0.5){
        resultado=Math.ceil(numero);
    }
    else{
        resultado=Math.floor(numero);
    }
    return resultado;

}

function main(){
    // ENTRADA
    const numero=obter_numero("Digite um numero real: ")
    // PROCESSAMENTO
    const resultado=arrendondarNumero(numero);

    // SAIDA
    print(resultado);
}
main()