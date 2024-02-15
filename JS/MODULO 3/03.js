import {question} from "readline-sync";
import {obter_numero} from "./funcoes.mjs"
/*
Leia um valor em minutos, 
calcule e escreva o equivalente em horas e minutos.

*/ 
function horas(minutos){
    return Math.floor(minutos/60)

}
function minutos(m){
   const minuto=m%60;
   return minuto; 
}
function main(){
    // ENTRADA
    const tempo=obter_numero("digite o tempo (minutos):")
    // PROCESSAMENTO
    const horas_total=horas(tempo);
    const minuto=minutos(tempo);
    // SAIDA
    console.log(`${tempo} corresponde a ${horas_total}h e ${minuto}min`)
}

main()