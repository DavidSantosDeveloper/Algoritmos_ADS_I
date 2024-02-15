import {question} from "readline-sync"
import {obter_numero,print} from "./funcoes.mjs"

/*
 33. Leia um número inteiro (3 dígitos),
  calcule e escreva a soma do número com seu inverso.
(Ex.: número = 532 ;
     inverso = 235 ; soma = 532 + 235 = 767).

*/ 
function numeroInverso(numero){
    const centena=Math.floor(numero/100);
    const dezena=Math.floor((numero%100)/10);
    const unidade=Math.floor((numero%100)%10);
    const numero_inverso=Number(`${unidade}${dezena}${centena}`);
    return numero_inverso;
}


function main(){
    // ENTRADA
    const numero=obter_numero("Digite um numero(3 digitos):");
    // PROCESSAMENTO
    const numero_inverso=numeroInverso(numero);
    const soma=numero+numero_inverso;
    // SAIDA
    print(`${numero}+${numero_inverso} =${soma}`)
}

main()