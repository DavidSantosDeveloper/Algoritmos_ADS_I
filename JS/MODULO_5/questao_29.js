import {obter_numero,print} from "./funcoes.mjs";

/*
29. Um número é um quadrado perfeito 
quando a raiz quadrada do número é igual à soma das dezenas
formadas pelos seus dois primeiros e dois últimos dígitos.
Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito.

*/ 

function verificaQuadradoPerfeito(numero){
    let dezena_inicial=`${numero}`
    dezena_inicial=Number(dezena_inicial[0]+dezena_inicial[1])
    let dezena_final=(numero%1000)%100;

    let resultado=dezena_inicial+dezena_final;
    return resultado;
}

function main(){
    // ENTRADA
    const numero=obter_numero("Digite um numero: ")
    // PROCESSAMENTO
    const quadrado_perfeito=verificaQuadradoPerfeito(numero);
    // SAIDA
    if(quadrado_perfeito){
        print("eh quadrado perfeito")
    }
    else{
        print("nao eh quadrado perfeito")
    }
}
main()