import {question} from "readline-sync";
import {obter_numero} from "./funcoes.mjs"
/*
27. Leia um número inteiro de segundos, 
calcule e escreva quantas horas, quantos minutos e quantos
segundos ele corresponde.
*/ 
function horas(horas){
    const horas=Math.floor(horas/60);
    return horas;
}
function minutos(minutos){
    const minutos=Math.floor(horas%60)
    return minutos;
}
function segudos(segudos){
    const segudos=Math.floor((horas%60)/60)
}


function main(){
    // ENTRADA
    const segudos=obter_numero("Digite o tempo (s): ")
    // PROCESSAMENTO
    const horas=horas();
    const minutos=minutos();
    const segudos_total=segudos();

    // SAIDA
    console.log(`${segudos}s equivale a ${horas}h ${minutos}m ${segudos}s`)
}

main()