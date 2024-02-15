import {question} from "readline-sync"
import {obter_numero,print} from "./funcoes.mjs"

/*
 30. Leia um número inteiro de minutos,
  calcule e escreva quantos dias, quantas horas e quantos minutos ele
corresponde.

*/ 

function calculaHora(minutos_parametro){
    const horas=Math.floor(minutos_parametro/60);
    return horas;
}
function calculaMinutos(minutos_parametro){
    const minutos=Math.floor(minutos_parametro%60);
}

function main(){
    // ENTRADA
    const minutos=obter_numero("Digite os minutos:");
    // PROCESSAMENTO
    const horas=calculaHora(minutos);
    const minutos_total=calculaMinutos(minutos);
    // SAIDA
    print(`${minutos}min corresponde a ${horas}h ${minutos_total}min`)
}

main()