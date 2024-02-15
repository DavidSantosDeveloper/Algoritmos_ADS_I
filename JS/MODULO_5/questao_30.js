import {obter_numero,print} from "./funcoes.mjs";

/*
Existem números de 4 dígitos (entre 1000 e 9999) 
que obedecem à seguinte característica: se dividirmos
o número em dois números de dois dígitos,
 um composto pela dezena e pela unidade, e outro pelo
milhar e pela centena,
 se somarmos estes dois novos números gerando um terceiro, o quadrado deste
terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
2025 -> dividindo: 20 e 25 -> somando temos 45 -> 452 = 2025.

*/ 

function obterNumeroQuadradoPerfeito(numero){
    let milhar=Math.floor(numero/1000)
    let centena=Math.floor((numero%1000)/100)
    let dezena=Math.floor(((numero%1000)%100)/10)
    let unidade=Math.floor(((numero%1000)%100)%10);
    let dezena_inicial=`${milhar}${centena}`
    let dezena_final=`${dezena}${unidade}`
    let resultado=dezena_inicial+dezena_final;
    return resultado;
}

function main(){
    // ENTRADA
    const numero=obter_numero("Digite um numero: ")
    // PROCESSAMENTO
    const resultado=obterNumeroQuadradoPerfeito(numero)
    // SAIDA
    print(`quadrado: ${resultado}`)
}
main()